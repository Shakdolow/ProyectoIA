const readline = require('readline-sync');


let baseDeDatos = [
  //15-17 - 18-20 - 21-23 - 24-26 - 27-30 
  //Nulo/Leve/Moderado/Alto
  { id: 1, edad: 27-30, sexo: 'femenino', nivelEducativo: 'superior', ocupacion: 'trabajador', personalidad: 'extrovertida', pazInterior: 'calmado', enfoquePersonal: 'amigos', actividadDeportiva: 'moderada', gustoPorViajar: 'alto', gustoPorLeerMangas: 'leve', gustoPorVideojuegos: 'moderado', gustoPorMusicaRelajante: 'nulo', gustoPorMusicaAnimada: 'nulo', apegoReligion: 'nulo', apegoFamilia: 'moderado', gustoPorCine: 'alto', gustoPorLeer: 'moderado', habitosSueno: 'regulares', importanciaAmistad: 'alta', gustoPorMascotas: 'perros', importanciaSalud: 'alta', importanciaApariencia: 'media'},
  { id: 2, edad: 15-17, sexo: 'masculino', nivelEducativo: 'basica', ocupacion: 'estudiante', personalidad: 'introvertida', pazInterior: 'nervioso', enfoquePersonal: 'familia', actividadDeportiva: 'leve', gustoPorViajar: 'leve', gustoPorLeerMangas: 'alto', gustoPorVideojuegos: 'leve', gustoPorMusicaRelajante: 'leve', gustoPorMusicaAnimada: 'leve', apegoReligion: 'nulo', apegoFamilia: 'moderado', gustoPorCine: 'leve', gustoPorLeer: 'leve', habitosSueno: 'regulares', importanciaAmistad: 'leve', gustoPorMascotas: 'perros', importanciaSalud: 'media', importanciaApariencia: 'media'},
  { id: 3, edad: 27-30, sexo: 'masculino', nivelEducativo: 'superior', ocupacion: 'trabajador', personalidad: 'introvertida', pazInterior: 'reactivo', enfoquePersonal: 'trabajo', actividadDeportiva: 'alta', gustoPorViajar: 'moderado', gustoPorLeerMangas: 'nulo', gustoPorVideojuegos: 'alto', gustoPorMusicaRelajante: 'leve', gustoPorMusicaAnimada: 'moderado', apegoReligion: 'nulo', apegoFamilia: 'alto', gustoPorCine: 'moderado', gustoPorLeer: 'nulo', habitosSueno: 'irregulares', importanciaAmistad: 'alta', gustoPorMascotas: 'perros', importanciaSalud: 'alta', importanciaApariencia: 'alta' },
  { id: 4, edad: 21-23, sexo: 'femenino', nivelEducativo: 'media superior', ocupacion: 'estudiante', personalidad: 'extrovertida', pazInterior: 'calmado', enfoquePersonal: 'amigos', actividadDeportiva: 'nula', gustoPorViajar: 'leve', gustoPorLeerMangas: 'alto', gustoPorVideojuegos: 'alto', gustoPorMusicaRelajante: 'moderado', gustoPorMusicaAnimada: 'alto', apegoReligion: 'moderado', apegoFamilia: 'leve', gustoPorCine: 'moderado', gustoPorLeer: 'alto', habitosSueno: 'irregulares', importanciaAmistad: 'moderada', gustoPorMascotas: 'gatos', importanciaSalud: 'baja', importanciaApariencia: 'media' },
  { id: 5, edad: 27-30, sexo: 'masculino', nivelEducativo: 'superior', ocupacion: 'trabajador', personalidad: 'extrovertida', pazInterior: 'calmado', enfoquePersonal: 'familia', actividadDeportiva: 'moderada', gustoPorViajar: 'alto', gustoPorLeerMangas: 'moderado', gustoPorVideojuegos: 'moderado', gustoPorMusicaRelajante: 'moderado', gustoPorMusicaAnimada: 'alto', apegoReligion: 'nulo', apegoFamilia: 'alto', gustoPorCine: 'alto', gustoPorLeer: 'leve', habitosSueno: 'regulares', importanciaAmistad: 'alta', gustoPorMascotas: 'perros', importanciaSalud: 'media', importanciaApariencia: 'alta' },
  { id: 6, edad: 24-26, sexo: 'femenino', nivelEducativo: 'superior', ocupacion: 'trabajador', personalidad: 'introvertida', pazInterior: 'calmado', enfoquePersonal: 'trabajo', actividadDeportiva: 'alta', gustoPorViajar: 'alto', gustoPorLeerMangas: 'nulo', gustoPorVideojuegos: 'moderado', gustoPorMusicaRelajante: 'alto', gustoPorMusicaAnimada: 'leve', apegoReligion: 'nulo', apegoFamilia: 'moderado', gustoPorCine: 'moderado', gustoPorLeer: 'nulo', habitosSueno: 'regulares', importanciaAmistad: 'alta', gustoPorMascotas: 'perros', importanciaSalud: 'alta', importanciaApariencia: 'alta' },
  { id: 7, edad: 27-30, sexo: 'masculino', nivelEducativo: 'superior', ocupacion: 'trabajador', personalidad: 'extrovertida', pazInterior: 'calmado', enfoquePersonal: 'amigos', actividadDeportiva: 'moderada', gustoPorViajar: 'alto', gustoPorLeerMangas: 'leve', gustoPorVideojuegos: 'alto', gustoPorMusicaRelajante: 'nulo', gustoPorMusicaAnimada: 'moderado', apegoReligion: 'nulo', apegoFamilia: 'moderado', gustoPorCine: 'alto', gustoPorLeer: 'moderado', habitosSueno: 'regulares', importanciaAmistad: 'alta', gustoPorMascotas: 'perros', importanciaSalud: 'alta', importanciaApariencia: 'media' },
  { id: 8, edad: 27-30, sexo: 'femenino', nivelEducativo: 'media superior', ocupacion: 'estudiante', personalidad: 'introvertida', pazInterior: 'reactivo', enfoquePersonal: 'soledad', actividadDeportiva: 'nula', gustoPorViajar: 'leve', gustoPorLeerMangas: 'leve', gustoPorVideojuegos: 'alto', gustoPorMusicaRelajante: 'alto', gustoPorMusicaAnimada: 'leve', apegoReligion: 'moderado', apegoFamilia: 'leve', gustoPorCine: 'moderado', gustoPorLeer: 'leve', habitosSueno: 'irregulares', importanciaAmistad: 'moderada', gustoPorMascotas: 'gatos', importanciaSalud: 'baja', importanciaApariencia: 'media' },
  { id: 9, edad: 27-30, sexo: 'masculino', nivelEducativo: 'superior', ocupacion: 'trabajador', personalidad: 'extrovertida', pazInterior: 'calmado', enfoquePersonal: 'familia', actividadDeportiva: 'alta', gustoPorViajar: 'moderado', gustoPorLeerMangas: 'moderado', gustoPorVideojuegos: 'leve', gustoPorMusicaRelajante: 'alto', gustoPorMusicaAnimada: 'alto', apegoReligion: 'nulo', apegoFamilia: 'alto', gustoPorCine: 'alto', gustoPorLeer: 'moderado', habitosSueno: 'regulares', importanciaAmistad: 'alta', gustoPorMascotas: 'perros', importanciaSalud: 'alta', importanciaApariencia: 'alta' },
  { id: 10, edad: 15-17, sexo: 'femenino', nivelEducativo: 'media superior', ocupacion: 'estudiante', personalidad: 'extrovertida', pazInterior: 'calmado', enfoquePersonal: 'amigos', actividadDeportiva: 'moderada', gustoPorViajar: 'alto', gustoPorLeerMangas: 'alto', gustoPorVideojuegos: 'moderado', gustoPorMusicaRelajante: 'alto', gustoPorMusicaAnimada: 'alto', apegoReligion: 'nulo', apegoFamilia: 'moderado', gustoPorCine: 'moderado', gustoPorLeer: 'alto', habitosSueno: 'irregulares', importanciaAmistad: 'alta', gustoPorMascotas: 'gatos', importanciaSalud: 'media', importanciaApariencia: 'baja' },
  { id: 11, edad: 27-30, sexo: 'masculino', nivelEducativo: 'superior', ocupacion: 'trabajador', personalidad: 'introvertida', pazInterior: 'calmado', enfoquePersonal: 'soledad', actividadDeportiva: 'nula', gustoPorViajar: 'moderado', gustoPorLeerMangas: 'alto', gustoPorVideojuegos: 'alto', gustoPorMusicaRelajante: 'leve', gustoPorMusicaAnimada: 'alto', apegoReligion: 'moderado', apegoFamilia: 'moderado', gustoPorCine: 'alto', gustoPorLeer: 'leve', habitosSueno: 'regulares', importanciaAmistad: 'alta', gustoPorMascotas: 'perros', importanciaSalud: 'alta', importanciaApariencia: 'alta' },
  { id: 12, edad: 18-20, sexo: 'femenino', nivelEducativo: 'superior', ocupacion: 'trabajador', personalidad: 'extrovertida', pazInterior: 'calmado', enfoquePersonal: 'amigos', actividadDeportiva: 'moderada', gustoPorViajar: 'alto', gustoPorLeerMangas: 'leve', gustoPorVideojuegos: 'alto', gustoPorMusicaRelajante: 'moderado', gustoPorMusicaAnimada: 'nulo', apegoReligion: 'nulo', apegoFamilia: 'moderado', gustoPorCine: 'alto', gustoPorLeer: 'moderado', habitosSueno: 'regulares', importanciaAmistad: 'alta', gustoPorMascotas: 'perros', importanciaSalud: 'alta', importanciaApariencia: 'media' },
  { id: 15, edad: 21-23, sexo: 'femenino', nivelEducativo: 'media superior', ocupacion: 'estudiante', personalidad: 'extrovertida', pazInterior: 'calmado', enfoquePersonal: 'familia', actividadDeportiva: 'moderada', gustoPorViajar: 'moderado', gustoPorLeerMangas: 'alto', gustoPorVideojuegos: 'moderado', gustoPorMusicaRelajante: 'moderado', gustoPorMusicaAnimada: 'alto', apegoReligion: 'nulo', apegoFamilia: 'leve', gustoPorCine: 'moderado', gustoPorLeer: 'alto', habitosSueno: 'regulares', importanciaAmistad: 'moderada', gustoPorMascotas: 'gatos', importanciaSalud: 'media', importanciaApariencia: 'baja' },
  { id: 16, edad: 27-30, sexo: 'masculino', nivelEducativo: 'superior', ocupacion: 'trabajador', personalidad: 'introvertida', pazInterior: 'reactivo', enfoquePersonal: 'soledad', actividadDeportiva: 'alta', gustoPorViajar: 'leve', gustoPorLeerMangas: 'leve', gustoPorVideojuegos: 'alto', gustoPorMusicaRelajante: 'alto', gustoPorMusicaAnimada: 'nulo', apegoReligion: 'moderado', apegoFamilia: 'moderado', gustoPorCine: 'alto', gustoPorLeer: 'leve', habitosSueno: 'regulares', importanciaAmistad: 'alta', gustoPorMascotas: 'perros', importanciaSalud: 'alta', importanciaApariencia: 'alta' },
  { id: 17, edad: 24-26, sexo: 'femenino', nivelEducativo: 'superior', ocupacion: 'trabajador', personalidad: 'extrovertida', pazInterior: 'calmado', enfoquePersonal: 'trabajo', actividadDeportiva: 'alta', gustoPorViajar: 'alto', gustoPorLeerMangas: 'nulo', gustoPorVideojuegos: 'moderado', gustoPorMusicaRelajante: 'leve', gustoPorMusicaAnimada: 'leve', apegoReligion: 'nulo', apegoFamilia: 'moderado', gustoPorCine: 'moderado', gustoPorLeer: 'nulo', habitosSueno: 'regulares', importanciaAmistad: 'alta', gustoPorMascotas: 'perros', importanciaSalud: 'alta', importanciaApariencia: 'alta' },
  { id: 18, edad: 27-30, sexo: 'masculino', nivelEducativo: 'superior', ocupacion: 'trabajador', personalidad: 'extrovertida', pazInterior: 'calmado', enfoquePersonal: 'familia', actividadDeportiva: 'moderada', gustoPorViajar: 'alto', gustoPorLeerMangas: 'alto', gustoPorVideojuegos: 'moderado', gustoPorMusicaRelajante: 'nulo', gustoPorMusicaAnimada: 'moderado', apegoReligion: 'nulo', apegoFamilia: 'alto', gustoPorCine: 'alto', gustoPorLeer: 'moderado', habitosSueno: 'regulares', importanciaAmistad: 'alta', gustoPorMascotas: 'perros', importanciaSalud: 'media', importanciaApariencia: 'baja' },
  { id: 19, edad: 24-26, sexo: 'femenino', nivelEducativo: 'media superior', ocupacion: 'estudiante', personalidad: 'introvertida', pazInterior: 'reactivo', enfoquePersonal: 'soledad', actividadDeportiva: 'nula', gustoPorViajar: 'leve', gustoPorLeerMangas: 'alto', gustoPorVideojuegos: 'alto', gustoPorMusicaRelajante: 'leve', gustoPorMusicaAnimada: 'moderado', apegoReligion: 'moderado', apegoFamilia: 'leve', gustoPorCine: 'moderado', gustoPorLeer: 'alto', habitosSueno: 'irregulares', importanciaAmistad: 'moderada', gustoPorMascotas: 'gatos', importanciaSalud: 'baja', importanciaApariencia: 'media' },
  { id: 20, edad: 24-26, sexo: 'masculino', nivelEducativo: 'superior', ocupacion: 'trabajador', personalidad: 'extrovertida', pazInterior: 'calmado', enfoquePersonal: 'amigos', actividadDeportiva: 'moderada', gustoPorViajar: 'alto', gustoPorLeerMangas: 'leve', gustoPorVideojuegos: 'alto', gustoPorMusicaRelajante: 'leve', gustoPorMusicaAnimada: 'leve', apegoReligion: 'nulo', apegoFamilia: 'moderado', gustoPorCine: 'alto', gustoPorLeer: 'moderado', habitosSueno: 'regulares', importanciaAmistad: 'alta', gustoPorMascotas: 'perros', importanciaSalud: 'alta', importanciaApariencia: 'media' },
  { id: 21, edad: 27-30, sexo: 'femenino', nivelEducativo: 'superior', ocupacion: 'trabajador', personalidad: 'introvertida', pazInterior: 'calmado', enfoquePersonal: 'trabajo', actividadDeportiva: 'alta', gustoPorViajar: 'alto', gustoPorLeerMangas: 'nulo', gustoPorVideojuegos: 'moderado', gustoPorMusicaRelajante: 'moderado', gustoPorMusicaAnimada: 'nulo', apegoReligion: 'nulo', apegoFamilia: 'moderado', gustoPorCine: 'moderado', gustoPorLeer: 'nulo', habitosSueno: 'regulares', importanciaAmistad: 'alta', gustoPorMascotas: 'perros', importanciaSalud: 'alta', importanciaApariencia: 'alta' },
  { id: 22, edad: 15-17, sexo: 'masculino', nivelEducativo: 'media superior', ocupacion: 'estudiante', personalidad: 'extrovertida', pazInterior: 'calmado', enfoquePersonal: 'amigos', actividadDeportiva: 'nula', gustoPorViajar: 'leve', gustoPorLeerMangas: 'alto', gustoPorVideojuegos: 'alto', gustoPorMusicaRelajante: 'alto', gustoPorMusicaAnimada: 'nulo', apegoReligion: 'moderado', apegoFamilia: 'leve', gustoPorCine: 'moderado', gustoPorLeer: 'alto', habitosSueno: 'irregulares', importanciaAmistad: 'moderada', gustoPorMascotas: 'gatos', importanciaSalud: 'baja', importanciaApariencia: 'media' },
  { id: 23, edad: 27-30, sexo: 'femenino', nivelEducativo: 'superior', ocupacion: 'trabajador', personalidad: 'extrovertida', pazInterior: 'calmado', enfoquePersonal: 'familia', actividadDeportiva: 'moderada', gustoPorViajar: 'alto', gustoPorLeerMangas: 'moderado', gustoPorVideojuegos: 'moderado', gustoPorMusicaRelajante: 'moderado', gustoPorMusicaAnimada: 'moderado', apegoReligion: 'nulo', apegoFamilia: 'alto', gustoPorCine: 'alto', gustoPorLeer: 'leve', habitosSueno: 'regulares', importanciaAmistad: 'alta', gustoPorMascotas: 'perros', importanciaSalud: 'media', importanciaApariencia: 'baja' },
  { id: 24, edad: 18-20, sexo: 'masculino', nivelEducativo: 'superior', ocupacion: 'trabajador', personalidad: 'extrovertida', pazInterior: 'calmado', enfoquePersonal: 'trabajo', actividadDeportiva: 'alta', gustoPorViajar: 'alto', gustoPorLeerMangas: 'nulo', gustoPorVideojuegos: 'moderado', gustoPorMusicaRelajante: 'leve', gustoPorMusicaAnimada: 'moderado', apegoReligion: 'nulo', apegoFamilia: 'moderado', gustoPorCine: 'moderado', gustoPorLeer: 'nulo', habitosSueno: 'regulares', importanciaAmistad: 'alta', gustoPorMascotas: 'perros', importanciaSalud: 'alta', importanciaApariencia: 'alta' },

];

  const UMBRAL_CONFIANZA = 0.6;

// Definir los pesos
const pesos = {
  edad: { '15-17': 1, '18-20': 0.8, '21-23': 0.6, '24-26': 0.4, '27-30': 0.2 },
  sexo: { femenino: 1, masculino: 0.5, 'no proporcionado': 0.1 },
  nivelEducativo: { basica: 0.3, 'media superior': 0.6, superior: 1 },
  ocupacion: { estudiante: 0.5, trabajador: 1, desempleado: 0.3 },
  personalidad: { introvertida: 0.5, extrovertida: 1 },
  pazInterior: { calmado: 1, reactivo: 0.7, nervioso: 0.3 },
  enfoquePersonal: { familia: 0.7, amigos: 1, trabajo: 0.5, soledad: 0.2 },
  actividadDeportiva: { nula: 0, leve: 0.2, moderada: 0.5, alta: 0.8, profesional: 1 },
  gustoPorViajar: { nulo: 0, leve: 0.2, moderado: 0.5, alto: 0.8 },
  gustoPorLeerMangas: { nulo: 0, leve: 0.2, moderado: 0.5, alto: 1 },
  gustoPorVideojuegos: { nulo: 0, leve: 0.2, moderado: 0.5, alto: 1 },
  gustoPorMusicaRelajante: { nulo: 0, leve: 0.2, moderado: 0.5, alto: 1 },
  gustoPorMusicaAnimada: { nulo: 0, leve: 0.2, moderado: 0.5, alto: 1 },
  apegoReligion: { nulo: 0, leve: 0.2, moderado: 0.5, alto: 1 },
  apegoFamilia: { nulo: 0, leve: 0.2, moderado: 0.5, alto: 1 },
  gustoPorCine: { nulo: 0, leve: 0.2, moderado: 0.5, alto: 1 },
  gustoPorLeer: { nulo: 0, leve: 0.2, moderado: 0.5, alto: 1 },
  habitosSueno: { regulares: 1, invertidos: 0.5, irregulares: 0.2 },
  importanciaAmistad: { nula: 0, leve: 0.2, moderada: 0.5, alta: 1 },
  gustoPorMascotas: { perros: 1, gatos: 0.8, aves: 0.6, peces: 0.4, roedores: 0.2, serpientes: 0.1 },
  importanciaSalud: { baja: 0.3, media: 0.7, alta: 1 },
  importanciaApariencia: { baja: 0.3, media: 0.7, alta: 1 }
};


function obtenerDatosUsuario() {
  const perfilUsuario = {};
//toLower para evitar errores
  console.log('Por favor, ingrese sus respuestas para cada característica:');
  perfilUsuario.edad = parseFloat(document.getElementById('Edad').value);
  perfilUsuario.sexo = parseFloat(document.getElementById('Sexo').value);
  perfilUsuario.nivelEducativo = parseFloat(document.getElementById('Educacion').value);
  perfilUsuario.ocupacion = parseFloat(document.getElementById('Ocupacion').value);
  perfilUsuario.personalidad = parseFloat(document.getElementById('Personalidad').value);
  perfilUsuario.pazInterior = parseFloat(document.getElementById('Paz interior').value);
  perfilUsuario.enfoquePersonal = parseFloat(document.getElementById('Enfoque').value);
  perfilUsuario.actividadDeportiva = parseFloat(document.getElementById('Deporte').value);
  perfilUsuario.gustoPorViajar = parseFloat(document.getElementById('Viajar').value);
  perfilUsuario.gustoPorLeerMangas = parseFloat(document.getElementById('Mangas').value);
  perfilUsuario.gustoPorVideojuegos = parseFloat(document.getElementById('Videojuegos').value);
  perfilUsuario.gustoPorMusicaRelajante = parseFloat(document.getElementById('Relajarse').value);
  perfilUsuario.gustoPorMusicaAnimada = parseFloat(document.getElementById('Animarse').value);
  perfilUsuario.apegoReligion = parseFloat(document.getElementById('Religion').value);
  perfilUsuario.apegoFamilia = parseFloat(document.getElementById('familia').value);
  perfilUsuario.gustoPorCine = parseFloat(document.getElementById('cine').value);
  perfilUsuario.gustoPorLeer = parseFloat(document.getElementById('leer').value);
  perfilUsuario.habitosSueno = parseFloat(document.getElementById('sueño').value);
  perfilUsuario.importanciaAmistad = parseFloat(document.getElementById('amistad').value);
  perfilUsuario.gustoPorMascotas = parseFloat(document.getElementById('mascotas').value);
  perfilUsuario.importanciaSalud = parseFloat(document.getElementById('Salud').value);
  perfilUsuario.importanciaApariencia = parseFloat(document.getElementById('Apariencia').value);

  return perfilUsuario;
}


function calcularCoincidencia(perfilUsuario, perfilBaseDatos) {
  const puntaje = {};

  puntaje.edad = pesos.edad[perfilUsuario.edad];
  puntaje.sexo = (perfilUsuario.sexo === perfilBaseDatos.sexo) ? 1 : pesos.sexo[perfilUsuario.sexo];
  puntaje.nivelEducativo = (perfilUsuario.nivelEducativo === perfilBaseDatos.nivelEducativo) ? 1 : pesos.nivelEducativo[perfilUsuario.nivelEducativo];
  puntaje.ocupacion = (perfilUsuario.ocupacion === perfilBaseDatos.ocupacion) ? 1 : pesos.ocupacion[perfilUsuario.ocupacion];
  puntaje.personalidad = (perfilUsuario.personalidad === perfilBaseDatos.personalidad) ? 1 : pesos.personalidad[perfilUsuario.personalidad];
  puntaje.pazInterior = (perfilUsuario.pazInterior === perfilBaseDatos.pazInterior) ? 1 : pesos.pazInterior[perfilUsuario.pazInterior];
  puntaje.enfoquePersonal = (perfilUsuario.enfoquePersonal === perfilBaseDatos.enfoquePersonal) ? 1 : pesos.enfoquePersonal[perfilUsuario.enfoquePersonal];
  puntaje.actividadDeportiva = (perfilUsuario.actividadDeportiva === perfilBaseDatos.actividadDeportiva) ? 1 : pesos.actividadDeportiva[perfilUsuario.actividadDeportiva];
  puntaje.gustoPorViajar = (perfilUsuario.gustoPorViajar === perfilBaseDatos.gustoPorViajar) ? 1 : pesos.gustoPorViajar[perfilUsuario.gustoPorViajar];
  puntaje.gustoPorLeerMangas = (perfilUsuario.gustoPorLeerMangas === perfilBaseDatos.gustoPorLeerMangas) ? 1 : pesos.gustoPorLeerMangas[perfilUsuario.gustoPorLeerMangas];
  puntaje.gustoPorVideojuegos = (perfilUsuario.gustoPorVideojuegos === perfilBaseDatos.gustoPorVideojuegos) ? 1 : pesos.gustoPorVideojuegos[perfilUsuario.gustoPorVideojuegos];
  puntaje.gustoPorMusicaRelajante = (perfilUsuario.gustoPorMusicaRelajante === perfilBaseDatos.gustoPorMusicaRelajante) ? 1 : pesos.gustoPorMusicaRelajante[perfilUsuario.gustoPorMusicaRelajante];
  puntaje.gustoPorMusicaAnimada = (perfilUsuario.gustoPorMusicaAnimada === perfilBaseDatos.gustoPorMusicaAnimada) ? 1 : pesos.gustoPorMusicaAnimada[perfilUsuario.gustoPorMusicaAnimada];
  puntaje.apegoReligion = (perfilUsuario.apegoReligion === perfilBaseDatos.apegoReligion) ? 1 : pesos.apegoReligion[perfilUsuario.apegoReligion];
  puntaje.apegoFamilia = (perfilUsuario.apegoFamilia === perfilBaseDatos.apegoFamilia) ? 1 : pesos.apegoFamilia[perfilUsuario.apegoFamilia];
  puntaje.gustoPorCine = (perfilUsuario.gustoPorCine === perfilBaseDatos.gustoPorCine) ? 1 : pesos.gustoPorCine[perfilUsuario.gustoPorCine];
  puntaje.gustoPorLeer = (perfilUsuario.gustoPorLeer === perfilBaseDatos.gustoPorLeer) ? 1 : pesos.gustoPorLeer[perfilUsuario.gustoPorLeer];
  puntaje.habitosSueno = (perfilUsuario.habitosSueno === perfilBaseDatos.habitosSueno) ? 1 : pesos.habitosSueno[perfilUsuario.habitosSueno];
  puntaje.importanciaAmistad = (perfilUsuario.importanciaAmistad === perfilBaseDatos.importanciaAmistad) ? 1 : pesos.importanciaAmistad[perfilUsuario.importanciaAmistad];
  puntaje.gustoPorMascotas = (perfilUsuario.gustoPorMascotas === perfilBaseDatos.gustoPorMascotas) ? 1 : pesos.gustoPorMascotas[perfilUsuario.gustoPorMascotas];
  puntaje.importanciaSalud = (perfilUsuario.importanciaSalud === perfilBaseDatos.importanciaSalud) ? 1 : pesos.importanciaSalud[perfilUsuario.importanciaSalud];
  puntaje.importanciaApariencia = (perfilUsuario.importanciaApariencia === perfilBaseDatos.importanciaApariencia) ? 1 : pesos.importanciaApariencia[perfilUsuario.importanciaApariencia];

  // Calcula el puntaje total
  const puntajeTotal = Object.values(puntaje).reduce((total, value) => total + value, 0) / Object.keys(puntaje).length;

  return puntajeTotal;
}


function buscarAmigos() {
  const perfilUsuario = obtenerDatosUsuario();

  console.log('\nPuntajes de coincidencia con perfiles:');

  let mejorCoincidencia = { perfil: null, puntaje: -1 };

  for (const perfil of baseDeDatos) {
    const puntaje = calcularCoincidencia(perfilUsuario, perfil);

    if (puntaje > mejorCoincidencia.puntaje) {
      mejorCoincidencia = { perfil, puntaje };
    }

    // Agregar los puntajes al div
    resultadoPuntajes.innerHTML += `<p>Perfil ${perfil.id}: ${puntaje}</p>`;
  }

  // Mostrar el div con los puntajes en algún lugar del HTML
  document.getElementById('resultadoPuntajes').appendChild(resultadoPuntajes);

  if (mejorCoincidencia.puntaje >= UMBRAL_CONFIANZA) {
    // Mostrar el mensaje de coincidencia confiable
    document.getElementById('resultadoMensaje').innerText = `¡Se encontró una coincidencia confiable con el perfil ${mejorCoincidencia.perfil.id}!`;
  } else {
    // Mostrar el mensaje de ninguna coincidencia
    document.getElementById('resultadoMensaje').innerText = 'Ninguna persona del banco de perfiles coincide con lo capturado.';
  }
}

buscarAmigos();













//

  