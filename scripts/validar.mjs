// Revisa datos.js antes de publicar:  node scripts/validar.mjs
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const file = fileURLToPath(new URL('../datos.js', import.meta.url));
const src = readFileSync(file, 'utf8');
const ctx = { window: {} };
try {
  vm.runInNewContext(src, ctx, { filename: 'datos.js' });
} catch (e) {
  const where = (e.stack || '').split('\n').find(l => l.includes('datos.js')) || '';
  console.error('❌ datos.js tiene un error de escritura (falta una coma, una comilla o una llave).');
  console.error('   ' + e.message + (where ? '\n   ' + where.trim() : ''));
  process.exit(1);
}
const D = ctx.window.DATOS;
const errors = [], warnings = [];
if (!D) { console.error('❌ datos.js tiene que empezar con: window.DATOS = { ... }'); process.exit(1); }
if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(D.version || '')) errors.push(`"version" debe ser una fecha como 20/10/2026 (ahora es "${D.version}")`);
if (!Array.isArray(D.ramas) || !D.ramas.length) errors.push('"ramas" debe ser una lista con las ramas de la familia');

const KEYS = new Set(['codigo', 'nombre', 'pareja', 'nacio', 'fallecio', 'pareja_nacio', 'pareja_fallecio', 'notas', 'hijos']);
const seen = new Map();
let total = 0;
function check(p, parentCode, where) {
  total++;
  const label = `${where} → ${p.nombre || '(sin nombre)'}${p.codigo ? ` [${p.codigo}]` : ''}`;
  if (typeof p !== 'object' || Array.isArray(p)) { errors.push(`${where}: cada persona tiene que ir entre { }`); return; }
  if (!p.nombre || typeof p.nombre !== 'string') errors.push(`${label}: falta "nombre"`);
  for (const k of Object.keys(p)) if (!KEYS.has(k)) warnings.push(`${label}: el campo "${k}" no se usa (¿está bien escrito?)`);
  if (p.codigo != null) {
    if (!/^\d+(\.\d+)*$/.test(p.codigo)) errors.push(`${label}: el código "${p.codigo}" debe ser números separados por puntos, como 3.1.5`);
    else if (parentCode && !p.codigo.startsWith(parentCode + '.')) warnings.push(`${label}: el código debería empezar con ${parentCode}.`);
    if (seen.has(p.codigo)) errors.push(`${label}: el código ${p.codigo} está repetido (también lo tiene ${seen.get(p.codigo)})`);
    else seen.set(p.codigo, p.nombre);
  }
  if (p.hijos != null && !Array.isArray(p.hijos)) errors.push(`${label}: "hijos" tiene que ser una lista [ ... ]`);
  (p.hijos || []).forEach((c, i) => check(c, p.codigo || parentCode, p.nombre || where));
}
(D.ramas || []).forEach((r, i) => check(r, null, `Rama ${i + 1}`));

for (const w of warnings) console.warn('⚠️  ' + w);
for (const e of errors) console.error('❌ ' + e);
if (errors.length) { console.error(`\nHay ${errors.length} error(es). Corríjalos antes de publicar.`); process.exit(1); }
console.log(`✅ datos.js está bien: ${D.ramas.length} ramas, ${total} personas, versión ${D.version}.`);
