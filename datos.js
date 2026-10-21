/*
  DATOS DEL ÁRBOL GENEALÓGICO PEZUK
  ---------------------------------
  Este es el único archivo que hay que tocar para corregir o agregar personas.
  Cada persona se escribe así (solo "nombre" es obligatorio):

    { "codigo": "3.1.5.3", "nombre": "Mauricio", "pareja": "Nombre Apellido",
      "nacio": "12/04/1990", "fallecio": "", "pareja_nacio": "", "pareja_fallecio": "",
      "notas": "Cualquier aclaración",
      "hijos": [ ...personas... ] }

  Reglas para no romper la página:
    - Los textos van entre comillas dobles "así".
    - Entre una persona y la siguiente va una coma. Después de la última, no.
    - El código de un hijo empieza con el código del padre: hijo de 3.1.5 → 3.1.5.1, 3.1.5.2...
    - Al terminar, actualice "version" con la fecha del día.
    - Para revisar que no haya errores:  node scripts/validar.mjs
*/
window.DATOS = {
  "version": "20/10/2026",
  "contacto": { "email": "MAURICIOPEZUK@GMAIL.COM", "telefono": "3758401881" },
  "fundadores": {
    "el": { "name": "Miguel Pezuk", "birth": "1874", "death": "1946", "padres": "Esteban Pezuk y Rosalia Zarkievicz", "edad": "27 años al emigrar" },
    "ella": { "name": "Maria Zsavaga", "birth": "1878", "death": "1952", "padres": "Juan Zsavaga (☆ 1844) y Anastacia Harazymczuk (☆ 1854)", "abuelos": "Demetrio Zsavaga y Elena Peryuga", "edad": "23 años al emigrar", "hermanos": ["Terem (13 años)", "Tymko (11 años)", "Oleska (9 años)", "Dokya (5 años)", "Andrej (3 años)"] },
    "viaje": "Todos emigraron en el vapor \"Mark\", que partió de Bremen, Alemania, el 25/05/1901 y llegó al puerto de Buenos Aires el 23/06/1901. Miguel vino con otros Pezuk (al parecer primos), y Maria con sus padres y hermanos.",
    "juan": "En el registro del viaje, Juan Pezuk (34 años) y Ana ? de Pezuk (31 años), con sus hijos Andres (4 años) y Maria (1 año), aparecen anotados junto con Miguel como una única familia Pezuk. Por eso se cree que Juan tiene algún grado de parentesco con Miguel."
  },
  "ramas": [
    {
      "codigo": "1",
      "nombre": "Juan Feyeca",
      "nacio": "14/07/1901",
      "notas": "Tuvo 2 esposas",
      "hijos": [
        {
          "codigo": "1.1",
          "nombre": "Miguel Feyeca",
          "pareja": "? (nombre desconocido)",
          "hijos": [
            { "nombre": "Marta?" }
          ]
        },
        { "codigo": "1.2", "nombre": "Pedro Feyeca", "pareja": "? (nombre desconocido)" },
        { "codigo": "1.3", "nombre": "Miguela Feyeca (Monja)" },
        { "codigo": "1.4", "nombre": "Marta Feyeca", "pareja": "? (nombre desconocido)" },
        { "codigo": "1.5", "nombre": "Juan/Alejandro Feyeca", "pareja": "? (nombre desconocido)" },
        { "codigo": "1.6", "nombre": "Carlos Feyeca", "pareja": "? (nombre desconocido)" },
        { "codigo": "1.7", "nombre": "Carmen Feyeca", "pareja": "? (nombre desconocido)" }
      ]
    },
    {
      "codigo": "2",
      "nombre": "Ana Pezuk",
      "pareja": "Antonio Statkievich",
      "nacio": "4/9/1902",
      "fallecio": "?",
      "pareja_fallecio": "?",
      "hijos": [
        { "nombre": "? (sin nombre)" },
        { "nombre": "? (sin nombre)" },
        { "nombre": "? (sin nombre)" }
      ]
    },
    {
      "codigo": "3",
      "nombre": "Matias Pezuk",
      "pareja": "Ana Nazadek",
      "nacio": "30/11/1903",
      "fallecio": "27/07/1980",
      "pareja_nacio": "1904",
      "pareja_fallecio": "1978?",
      "hijos": [
        {
          "codigo": "3.1",
          "nombre": "Juan Pezuk",
          "pareja": "Julia Mijaloski",
          "nacio": "1/04/1927",
          "fallecio": "23/07/2013",
          "pareja_nacio": "20/07/1929",
          "pareja_fallecio": "23/04/2002",
          "hijos": [
            {
              "codigo": "3.1.1",
              "nombre": "Roberto Pezuk",
              "pareja": "Pocha Grabovieski",
              "hijos": [
                {
                  "codigo": "3.1.1.1",
                  "nombre": "Ariel Pezuk",
                  "hijos": [
                    { "nombre": "Sofia Pezuk" }
                  ]
                },
                {
                  "codigo": "3.1.1.2",
                  "nombre": "Adriana Pezuk",
                  "hijos": [
                    { "nombre": "Favio Angel Leiva Pezuk" },
                    { "nombre": "Ramiro Curipan Pezuk" },
                    { "nombre": "Roberto Curipan Pezuk" }
                  ]
                },
                {
                  "codigo": "3.1.1.3",
                  "nombre": "Ana Maria",
                  "hijos": [
                    { "nombre": "Camila Victoria Escalante" },
                    { "nombre": "Mateo Escalante" }
                  ]
                }
              ]
            },
            {
              "codigo": "3.1.2",
              "nombre": "Ernesto Pezuk",
              "pareja": "Nelly Saporitti",
              "hijos": [
                { "codigo": "3.1.2.1", "nombre": "Matias Pezuk" },
                {
                  "codigo": "3.1.2.2",
                  "nombre": "Julia Pezuk",
                  "hijos": [
                    { "nombre": "Manuela Negrao Pezuk" },
                    { "nombre": "Victoria Negrao Pezuk" }
                  ]
                },
                {
                  "codigo": "3.1.2.3",
                  "nombre": "Andres Pezuk",
                  "hijos": [
                    { "nombre": "Marcel Pezuk" },
                    { "nombre": "Albin Pezuk" }
                  ]
                },
                {
                  "codigo": "3.1.2.4",
                  "nombre": "Belen Pezuk",
                  "hijos": [
                    { "nombre": "Pedro Morando" },
                    { "nombre": "Emilio Morando" }
                  ]
                }
              ]
            },
            {
              "codigo": "3.1.3",
              "nombre": "Norma Pezuk",
              "pareja": "Carlos Terlecki",
              "hijos": [
                { "codigo": "3.1.3.1", "nombre": "Lisandro" },
                {
                  "codigo": "3.1.3.2",
                  "nombre": "Yohana",
                  "hijos": [
                    { "nombre": "Bebé" },
                    { "nombre": "Delfina" }
                  ]
                }
              ]
            },
            {
              "codigo": "3.1.4",
              "nombre": "Dora Pezuk",
              "pareja": "Antonio Sanchez",
              "hijos": [
                {
                  "codigo": "3.1.4.1",
                  "nombre": "Mariana",
                  "hijos": [
                    { "nombre": "Guadalupe" }
                  ]
                },
                { "codigo": "3.1.4.2", "nombre": "Antonella" },
                {
                  "codigo": "3.1.4.3",
                  "nombre": "Yamila",
                  "hijos": [
                    { "nombre": "Lautaro" }
                  ]
                },
                { "codigo": "3.1.4.4", "nombre": "Agustina" },
                { "codigo": "3.1.4.5", "nombre": "Melanie" }
              ]
            },
            {
              "codigo": "3.1.5",
              "nombre": "Ruben Pezuk",
              "pareja": "Juliana Dlutowski",
              "hijos": [
                {
                  "codigo": "3.1.5.1",
                  "nombre": "Pamela",
                  "hijos": [
                    { "nombre": "Florenciana Lopez Pezuk" },
                    { "nombre": "Josefina Lopez Pezuk" }
                  ]
                },
                {
                  "codigo": "3.1.5.2",
                  "nombre": "Andrea",
                  "hijos": [
                    { "nombre": "Tiago Kuroski" },
                    { "nombre": "Carla Kuroski" }
                  ]
                },
                { "codigo": "3.1.5.3", "nombre": "Mauricio" }
              ]
            }
          ]
        },
        {
          "codigo": "3.2",
          "nombre": "Basilio Pezuk",
          "pareja": "? (nombre desconocido)",
          "hijos": [
            { "codigo": "3.2.1", "nombre": "Ignacio Pezuk", "pareja": "? (nombre desconocido)" },
            { "codigo": "3.2.2", "nombre": "Rafael Pezuk", "pareja": "? (nombre desconocido)" },
            { "codigo": "3.2.3", "nombre": "Miguel Pezuk", "pareja": "? (nombre desconocido)" },
            { "codigo": "3.2.4", "nombre": "Oscar Pezuk", "pareja": "? (nombre desconocido)" },
            { "codigo": "3.2.5", "nombre": "Isabel Pezuk", "pareja": "? (nombre desconocido)" },
            { "codigo": "3.2.6", "nombre": "Marta Pezuk", "pareja": "? (nombre desconocido)" },
            { "codigo": "3.2.7", "nombre": "Juliana Pezuk", "pareja": "? (nombre desconocido)" },
            { "codigo": "3.2.8", "nombre": "Felipe Pezuk", "pareja": "? (nombre desconocido)" }
          ]
        },
        {
          "codigo": "3.3",
          "nombre": "Emilio Pezuk",
          "pareja": "Rosa Staciuk",
          "hijos": [
            {
              "codigo": "3.3.1",
              "nombre": "Raul Pezuk",
              "pareja": "Estela Povarchuk",
              "hijos": [
                { "codigo": "3.3.1.2", "nombre": "Milko" },
                { "codigo": "3.3.1.3", "nombre": "Zeus" },
                { "codigo": "3.3.1.4", "nombre": "Leandro" },
                { "codigo": "3.3.1.5", "nombre": "Martin" }
              ]
            },
            {
              "codigo": "3.3.2",
              "nombre": "Angel Pezuk",
              "pareja": "Isabel Boyko",
              "hijos": [
                { "codigo": "3.3.2.1", "nombre": "Alejandro" },
                {
                  "codigo": "3.3.2.2",
                  "nombre": "Natalia",
                  "hijos": [
                    { "nombre": "Delfina" },
                    { "nombre": "Guillermina" },
                    { "nombre": "Justina" }
                  ]
                }
              ]
            },
            {
              "codigo": "3.3.3",
              "nombre": "Belcha Pezuk",
              "pareja": "Daniluk",
              "hijos": [
                { "codigo": "3.3.3.1", "nombre": "Varón 1" },
                { "codigo": "3.3.3.2", "nombre": "Varón 2" },
                {
                  "codigo": "3.3.3.3",
                  "nombre": "Laura",
                  "hijos": [
                    { "nombre": "Varón 1" },
                    { "nombre": "Varón 2" }
                  ]
                }
              ]
            },
            { "codigo": "3.3.4", "nombre": "Mary Pezuk", "pareja": "? (nombre desconocido)" }
          ]
        },
        {
          "codigo": "3.4",
          "nombre": "Elias Pezuk",
          "pareja": "Julia Fassa",
          "hijos": [
            {
              "codigo": "3.4.1",
              "nombre": "Abel Pezuk",
              "pareja": "? (nombre desconocido)",
              "hijos": [
                { "nombre": "Antonella" },
                { "nombre": "Micaela" },
                { "nombre": "Daiana" },
                { "nombre": "Gabriel" },
                { "nombre": "Christian" }
              ]
            },
            {
              "codigo": "3.4.2",
              "nombre": "Jorge Pezuk",
              "pareja": "? (nombre desconocido)",
              "hijos": [
                { "nombre": "Yesica" },
                { "nombre": "Pamela" },
                { "nombre": "Nancy" }
              ]
            },
            {
              "codigo": "3.4.3",
              "nombre": "Margarita Pezuk",
              "pareja": "? (nombre desconocido)",
              "hijos": [
                { "nombre": "Omar" },
                { "nombre": "Sergio" },
                { "nombre": "Noelia" },
                { "nombre": "Gabriela" }
              ]
            },
            {
              "codigo": "3.4.4",
              "nombre": "Teresa Pezuk",
              "pareja": "Huk?",
              "hijos": [
                { "nombre": "Cristian" }
              ]
            },
            {
              "codigo": "3.4.5",
              "nombre": "Angela Pezuk",
              "pareja": "Maruñak",
              "hijos": [
                { "nombre": "Mariana" },
                { "nombre": "Daniela" },
                { "nombre": "German" },
                { "nombre": "Mirella" },
                { "nombre": "Nicolas" }
              ]
            },
            { "codigo": "3.4.6", "nombre": "Miguel Angel Pezuk", "pareja": "? (nombre desconocido)" }
          ]
        },
        {
          "codigo": "3.5",
          "nombre": "Veronica Pezuk",
          "pareja": "Juan Chijanoski",
          "hijos": [
            { "codigo": "3.5.1", "nombre": "Luisa", "pareja": "? (nombre desconocido)" },
            { "codigo": "3.5.2", "nombre": "Jorge", "pareja": "? (nombre desconocido)" },
            { "codigo": "3.5.3", "nombre": "Delia", "pareja": "? (nombre desconocido)" },
            { "codigo": "3.5.4", "nombre": "Hector", "pareja": "? (nombre desconocido)" },
            {
              "codigo": "3.5.5",
              "nombre": "Federico",
              "pareja": "? (nombre desconocido)",
              "hijos": [
                { "codigo": "3.5.5.1", "nombre": "Veronica" },
                {
                  "codigo": "3.5.5.2",
                  "nombre": "Natalia",
                  "hijos": [
                    { "nombre": "Nena (niña)" }
                  ]
                },
                {
                  "codigo": "3.5.5.3",
                  "nombre": "Guillermo",
                  "hijos": [
                    { "nombre": "Nena (niña)" }
                  ]
                },
                { "codigo": "3.5.5.4", "nombre": "Daniel" }
              ]
            },
            {
              "codigo": "3.5.6",
              "nombre": "Milton",
              "pareja": "Katty Doretto",
              "hijos": [
                { "nombre": "Varón 1" },
                { "nombre": "Varón 2" }
              ]
            }
          ]
        }
      ]
    },
    {
      "codigo": "4",
      "nombre": "Basilio Piyuka",
      "pareja": "Ana Zanek",
      "hijos": [
        {
          "codigo": "4.1",
          "nombre": "Miguel Piyuka",
          "pareja": "Maria Ramirez Pisani",
          "hijos": [
            { "codigo": "4.1.1", "nombre": "Ana Maria Piyuka" },
            { "codigo": "4.1.2", "nombre": "Stella Maris Piyuka" },
            { "codigo": "4.1.3", "nombre": "Miguel Dario Piyuka" },
            { "codigo": "4.1.4", "nombre": "Tamara Elizabeth Piyuka" },
            { "codigo": "4.1.5", "nombre": "Sonia Karen Piyuka" },
            { "codigo": "4.1.6", "nombre": "Gisela Natacha Piyuka" },
            { "codigo": "4.1.7", "nombre": "Tatiana Eugenia Piyuka" },
            { "codigo": "4.1.8", "nombre": "Juan Demetrio" }
          ]
        },
        { "codigo": "4.2", "nombre": "Mariano Piyuka", "pareja": "? (nombre desconocido)" },
        {
          "codigo": "4.3",
          "nombre": "Isabel Piyuka",
          "pareja": "Cito Farinola",
          "hijos": [
            { "codigo": "4.3.1", "nombre": "Graciela Cecilia Farinola" },
            { "codigo": "4.3.2", "nombre": "Cristian Farinola" }
          ]
        },
        {
          "codigo": "4.4",
          "nombre": "Pedro Angel Piyuka",
          "pareja": "Lucia Infuleki",
          "hijos": [
            { "codigo": "4.4.1", "nombre": "Barbara Piyuka", "pareja": "? (nombre desconocido)" },
            { "codigo": "4.4.2", "nombre": "Adriana Piyuka" },
            { "codigo": "4.4.3", "nombre": "Samanta Piyuka" }
          ]
        }
      ]
    },
    {
      "codigo": "5",
      "nombre": "Catarina Pezuk",
      "pareja": "Sitio Farinola",
      "nacio": "24/07/1908",
      "notas": "o Piyuka?",
      "hijos": [
        {
          "codigo": "5.1",
          "nombre": "Karina",
          "pareja": "Cristian Luvacheski",
          "hijos": [
            { "codigo": "5.1.1", "nombre": "Melliza 1 (sin nombre)" },
            { "codigo": "5.1.2", "nombre": "Melliza 2 (sin nombre)" },
            { "codigo": "5.1.3", "nombre": "? (sin nombre)" }
          ]
        },
        {
          "codigo": "5.2",
          "nombre": "Cecilia",
          "pareja": "Holowaty",
          "hijos": [
            { "codigo": "5.2.1", "nombre": "(sin nombre)" },
            { "codigo": "5.2.2", "nombre": "(sin nombre)" }
          ]
        },
        {
          "codigo": "5.3",
          "nombre": "Graciela",
          "pareja": "Dalmiron Adaro",
          "hijos": [
            { "codigo": "5.3.1", "nombre": "Roberto" },
            { "codigo": "5.3.2", "nombre": "Yamila" },
            { "codigo": "5.3.3", "nombre": "Luciano" },
            { "codigo": "5.3.4", "nombre": "? (sin nombre)" }
          ]
        }
      ]
    },
    {
      "codigo": "6",
      "nombre": "Sofia Pezuk",
      "pareja": "Miguel Kruk",
      "nacio": "17/07/1911",
      "hijos": [
        { "nombre": "(sin Datos)" },
        { "nombre": "(sin Datos)" },
        { "nombre": "(sin Datos)" }
      ]
    },
    {
      "codigo": "7",
      "nombre": "Nicolas Pezuk",
      "pareja": "Miguelina Dowin",
      "nacio": "14/04/1913",
      "hijos": [
        {
          "codigo": "7.1",
          "nombre": "Juan",
          "pareja": "Lidia Snihur",
          "hijos": [
            { "codigo": "7.1.1", "nombre": "David Pezuk" }
          ]
        },
        { "codigo": "7.2", "nombre": "Nencho Pezuk", "pareja": "? (nombre desconocido)" },
        { "codigo": "7.3", "nombre": "Jose Pezuk", "pareja": "? (nombre desconocido)" },
        { "codigo": "7.4", "nombre": "Maria Pezuk", "pareja": "? (nombre desconocido)" },
        { "codigo": "7.5", "nombre": "Paulina Pezuk", "pareja": "? (nombre desconocido)" },
        {
          "codigo": "7.6",
          "nombre": "Pedro Pezuk",
          "pareja": "? (nombre desconocido)",
          "hijos": [
            {
              "codigo": "7.6.1",
              "nombre": "Irma Pezuk",
              "pareja": "? (nombre desconocido)",
              "hijos": [
                { "nombre": "(sin Nombre)" },
                { "nombre": "(sin Nombre)" },
                { "nombre": "(sin Nombre)" }
              ]
            },
            {
              "codigo": "7.6.2",
              "nombre": "Patricia Pezuk",
              "pareja": "Poterala",
              "hijos": [
                {
                  "codigo": "7.6.2.1",
                  "nombre": "Lucas Poterala",
                  "hijos": [
                    { "nombre": "Nena 1" },
                    { "nombre": "Nena 2" }
                  ]
                },
                { "codigo": "7.6.2.2", "nombre": "Ludmila Poterala" }
              ]
            },
            {
              "codigo": "7.6.3",
              "nombre": "Dario Pezuk",
              "pareja": "? (nombre desconocido)",
              "hijos": [
                { "nombre": "(sin Nombre)" }
              ]
            },
            {
              "codigo": "7.6.4",
              "nombre": "Oscar Pezuk",
              "pareja": "? (nombre desconocido)",
              "hijos": [
                { "codigo": "7.6.4.1", "nombre": "Pamela Pezuk" },
                { "codigo": "7.6.4.2", "nombre": "Cristian Pezuk" },
                { "codigo": "7.6.4.3", "nombre": "Nicolas Pezuk" }
              ]
            }
          ]
        }
      ]
    },
    {
      "codigo": "8",
      "nombre": "Demetrio Peyuk",
      "pareja": "Barbara Semaiko",
      "hijos": [
        {
          "codigo": "8.1",
          "nombre": "Maria",
          "pareja": "Juan Makusen",
          "hijos": [
            {
              "codigo": "8.1.1",
              "nombre": "Roberto",
              "pareja": "Margarita Didolich?",
              "hijos": [
                { "codigo": "8.1.1.1", "nombre": "Mariano" },
                {
                  "codigo": "8.1.1.2",
                  "nombre": "Adriana",
                  "hijos": [
                    { "nombre": "Emiliano" }
                  ]
                },
                {
                  "codigo": "8.1.1.3",
                  "nombre": "Adrian",
                  "hijos": [
                    { "nombre": "Abril" },
                    { "nombre": "Ana Maria" }
                  ]
                }
              ]
            },
            {
              "codigo": "8.1.2",
              "nombre": "Mariano",
              "pareja": "Chita Ozaryn",
              "hijos": [
                { "codigo": "8.1.2.1", "nombre": "Monchi (juan Ramon)" }
              ]
            },
            {
              "codigo": "8.1.3",
              "nombre": "Eduardo",
              "hijos": [
                { "codigo": "8.1.3.1", "nombre": "Patricia" },
                { "codigo": "8.1.3.2", "nombre": "Nicolas" }
              ]
            }
          ]
        },
        {
          "codigo": "8.2",
          "nombre": "Rosa",
          "pareja": "Melnechuk",
          "hijos": [
            {
              "codigo": "8.2.1",
              "nombre": "Beatriz",
              "pareja": "Duran",
              "hijos": [
                { "codigo": "8.2.1.1", "nombre": "Soledad" },
                { "codigo": "8.2.1.2", "nombre": "Marcelo" }
              ]
            },
            {
              "codigo": "8.2.2",
              "nombre": "Norma",
              "pareja": "Rogelio Belonoz",
              "hijos": [
                { "codigo": "8.2.2.1", "nombre": "Alejandro" },
                {
                  "codigo": "8.2.2.2",
                  "nombre": "Lorena",
                  "hijos": [
                    { "nombre": "Anibal" }
                  ]
                }
              ]
            },
            {
              "codigo": "8.2.3",
              "nombre": "Patricia",
              "pareja": "Atamañuk?",
              "hijos": [
                { "codigo": "8.2.3.1", "nombre": "Cristian" }
              ]
            }
          ]
        },
        {
          "codigo": "8.3",
          "nombre": "Ana",
          "pareja": "Hawresz",
          "hijos": [
            {
              "codigo": "8.3.1",
              "nombre": "Alejandra",
              "pareja": "? (nombre desconocido)",
              "hijos": [
                { "codigo": "8.3.1.1", "nombre": "Valentina" }
              ]
            }
          ]
        },
        {
          "codigo": "8.4",
          "nombre": "Anastacia",
          "pareja": "Roberto Subriski",
          "hijos": [
            { "codigo": "8.4.1", "nombre": "Carmen", "pareja": "Grivetto" },
            {
              "codigo": "8.4.2",
              "nombre": "Daniel",
              "pareja": "? (nombre desconocido)",
              "hijos": [
                { "codigo": "8.4.2.1", "nombre": "Piro" },
                { "codigo": "8.4.2.2", "nombre": "Agustin" },
                { "codigo": "8.4.2.3", "nombre": "Micaela" }
              ]
            }
          ]
        },
        {
          "codigo": "8.5",
          "nombre": "Paulina",
          "pareja": "Mariano Kobach",
          "hijos": [
            {
              "codigo": "8.5.1",
              "nombre": "Mario",
              "pareja": "Susana Kuzuk",
              "hijos": [
                { "codigo": "8.5.1.1", "nombre": "Marisa" },
                { "codigo": "8.5.1.2", "nombre": "Maria" }
              ]
            },
            {
              "codigo": "8.5.2",
              "nombre": "Hugo",
              "pareja": "Erica",
              "hijos": [
                { "codigo": "8.5.2.1", "nombre": "Macarena" },
                { "codigo": "8.5.2.2", "nombre": "Magali" }
              ]
            }
          ]
        },
        {
          "codigo": "8.6",
          "nombre": "Nicanor Pezuk",
          "pareja": "Veronica Zacarhemeny",
          "hijos": [
            { "codigo": "8.6.1", "nombre": "Ernesto" },
            {
              "codigo": "8.6.2",
              "nombre": "Alicia",
              "pareja": "Atamañuk",
              "hijos": [
                { "codigo": "8.6.2.1", "nombre": "Talia" },
                { "codigo": "8.6.2.2", "nombre": "Lisandro" }
              ]
            },
            { "codigo": "8.6.3", "nombre": "Jorge" },
            { "codigo": "8.6.4", "nombre": "Rosana" },
            {
              "codigo": "8.6.5",
              "nombre": "Mariela",
              "hijos": [
                { "codigo": "8.6.5.1", "nombre": "Pedro" },
                { "codigo": "8.6.5.2", "nombre": "Gael" }
              ]
            }
          ]
        },
        {
          "codigo": "8.7",
          "nombre": "Dora",
          "pareja": "Quique Melo",
          "hijos": [
            { "codigo": "8.7.1", "nombre": "Silvia" }
          ]
        }
      ]
    },
    {
      "codigo": "9",
      "nombre": "Jose Pezuk",
      "pareja": "Catalina Ozarcyn",
      "nacio": "15/11/1918",
      "hijos": [
        {
          "codigo": "9.1",
          "nombre": "Basilio",
          "pareja": "Aurora Estela Kuok",
          "nacio": "1948",
          "fallecio": "2021",
          "pareja_nacio": "1950",
          "hijos": [
            {
              "codigo": "9.1.1",
              "nombre": "Maria Noel",
              "pareja": "Igoa / Orrego",
              "nacio": "1985",
              "hijos": [
                { "codigo": "9.1.1.1", "nombre": "Gaston Igoa" },
                {
                  "codigo": "9.1.1.2",
                  "nombre": "Nazario Igoa",
                  "hijos": [
                    { "nombre": "Nerea" }
                  ]
                },
                { "codigo": "9.1.1.3", "nombre": "Catarina Orrego" },
                { "codigo": "9.1.1.4", "nombre": "Ariana Orrego" },
                { "codigo": "9.1.1.5", "nombre": "Ivan Orrego" }
              ]
            },
            { "codigo": "9.1.2", "nombre": "Ana Mariel", "nacio": "1986" },
            { "codigo": "9.1.3", "nombre": "Leonardo Miguel", "nacio": "1987" }
          ]
        },
        { "codigo": "9.2", "nombre": "Juan", "pareja": "? (nombre desconocido)", "notas": "Fallecido" },
        {
          "codigo": "9.3",
          "nombre": "Julia",
          "pareja": "Rodolfo Manulak",
          "fallecio": "2/03/2024",
          "hijos": [
            {
              "codigo": "9.3.1",
              "nombre": "Juan Alberto",
              "pareja": "Mariana Limas",
              "nacio": "1980",
              "pareja_nacio": "1980",
              "hijos": [
                { "codigo": "9.3.1.1", "nombre": "Milagros Agustina", "nacio": "2008" },
                { "codigo": "9.3.1.2", "nombre": "Micaela Lucila", "nacio": "2013" }
              ]
            }
          ]
        }
      ]
    },
    {
      "codigo": "10",
      "nombre": "Teresa Pezuk",
      "pareja": "Luis Bonino",
      "hijos": [
        { "codigo": "10.1", "nombre": "Luis Santiago Bonino" },
        {
          "codigo": "10.2",
          "nombre": "Dora Esther Bonino",
          "hijos": [
            { "codigo": "10.2.1", "nombre": "Jorge", "pareja": "? (nombre desconocido)" },
            { "codigo": "10.2.2", "nombre": "Mirtha", "pareja": "? (nombre desconocido)" }
          ]
        },
        { "codigo": "10.3", "nombre": "Teresa Bonino" },
        { "codigo": "10.4", "nombre": "Pedro Jose Bonino" }
      ]
    },
    {
      "codigo": "11",
      "nombre": "Esteban Pezuk",
      "pareja": "Maria Glinka",
      "nacio": "12/04/1921",
      "hijos": [
        { "codigo": "11.1", "nombre": "Teresa", "pareja": "? (nombre desconocido)" },
        {
          "codigo": "11.2",
          "nombre": "Juana",
          "pareja": "Alcario",
          "hijos": [
            { "codigo": "11.2.1", "nombre": "Gabriela" },
            { "codigo": "11.2.2", "nombre": "Gisel" },
            { "codigo": "11.2.3", "nombre": "Mujer (sin nombre)" }
          ]
        },
        { "codigo": "11.3", "nombre": "Eduardo", "pareja": "? (nombre desconocido)" },
        { "codigo": "11.4", "nombre": "Rogelio", "pareja": "? (nombre desconocido)" },
        { "codigo": "11.5", "nombre": "Pedro", "pareja": "? (nombre desconocido)" },
        { "codigo": "11.6", "nombre": "Victor", "pareja": "? (nombre desconocido)" },
        { "codigo": "11.7", "nombre": "Miguel", "pareja": "? (nombre desconocido)" },
        { "codigo": "11.8", "nombre": "Clara", "pareja": "? (nombre desconocido)" },
        {
          "codigo": "11.9",
          "nombre": "Mariano",
          "pareja": "? (nombre desconocido)",
          "hijos": [
            { "codigo": "11.9.1", "nombre": "Ivana", "pareja": "? (nombre desconocido)" },
            { "codigo": "11.9.2", "nombre": "Manuel", "pareja": "? (nombre desconocido)" }
          ]
        }
      ]
    },
    {
      "codigo": "12",
      "nombre": "Paulina Pezuk",
      "pareja": "Juan Babi",
      "nacio": "01/07/1923",
      "hijos": [
        {
          "codigo": "12.1",
          "nombre": "Jorge Babi",
          "pareja": "Cata",
          "hijos": [
            { "codigo": "12.1.1", "nombre": "Nerea" },
            { "codigo": "12.1.2", "nombre": "David" }
          ]
        },
        {
          "codigo": "12.2",
          "nombre": "Veronica Babi",
          "pareja": "Matijak",
          "hijos": [
            {
              "codigo": "12.2.1",
              "nombre": "Mariano",
              "pareja": "Elsa",
              "hijos": [
                { "nombre": "Mariana" },
                { "nombre": "Nena (niña)" },
                { "nombre": "Varón" }
              ]
            },
            { "codigo": "12.2.2", "nombre": "Mujer (sin nombre)" }
          ]
        },
        { "codigo": "12.3", "nombre": "Cacho Babi", "pareja": "? (nombre desconocido)" },
        { "codigo": "12.4", "nombre": "Carlos Babi", "pareja": "? (nombre desconocido)" },
        {
          "codigo": "12.5",
          "nombre": "Norma Babi",
          "pareja": "? (nombre desconocido)",
          "hijos": [
            { "codigo": "12.5.1", "nombre": "Contador" },
            { "codigo": "12.5.2", "nombre": "Bioquimico" }
          ]
        },
        {
          "codigo": "12.6",
          "nombre": "Estela Babi",
          "pareja": "Noguera",
          "hijos": [
            { "codigo": "12.6.1", "nombre": "Melisa Noguera" },
            { "codigo": "12.6.2", "nombre": "Antonela Noguera" }
          ]
        },
        {
          "codigo": "12.7",
          "nombre": "Bety Babi",
          "pareja": "Regalado?",
          "hijos": [
            { "codigo": "12.7.1", "nombre": "Lujan (bar Español)" },
            { "codigo": "12.7.2", "nombre": "Seguridad Shopping" },
            { "codigo": "12.7.3", "nombre": "Gimnasio" }
          ]
        },
        { "codigo": "12.8", "nombre": "Carmen Babi", "pareja": "? (nombre desconocido)" },
        {
          "codigo": "12.9",
          "nombre": "Pedro",
          "pareja": "Rosa Kubizin",
          "hijos": [
            { "codigo": "12.9.1", "nombre": "Viviana" },
            { "codigo": "12.9.2", "nombre": "Mujer (sin nombre)" },
            { "codigo": "12.9.3", "nombre": "Gustavo" }
          ]
        },
        {
          "codigo": "12.10",
          "nombre": "Mariano",
          "pareja": "Dora Gonzalez",
          "hijos": [
            { "codigo": "12.10.1", "nombre": "Horacio" },
            { "codigo": "12.10.2", "nombre": "Carlos" },
            { "codigo": "12.10.3", "nombre": "Alberto" }
          ]
        },
        {
          "codigo": "12.11",
          "nombre": "Pablo Babi",
          "pareja": "? (nombre desconocido)",
          "hijos": [
            { "codigo": "12.11.1", "nombre": "Cirujana Plastica" }
          ]
        },
        { "codigo": "12.12", "nombre": "Eduardo Babi", "pareja": "? (nombre desconocido)" },
        {
          "codigo": "12.13",
          "nombre": "Margarita Babi",
          "pareja": "? (nombre desconocido)",
          "hijos": [
            { "codigo": "12.13.1", "nombre": "Romina", "pareja": "? (nombre desconocido)" },
            { "codigo": "12.13.2", "nombre": "Juan Jose", "pareja": "? (nombre desconocido)" }
          ]
        }
      ]
    }
  ]
};
