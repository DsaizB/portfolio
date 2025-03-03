// Información del encabezado del sitio
const header = {
  homepage: 'https://DsaizB.github.io/portfolio',
  title: 'DS.',
}

// Sección "Acerca de mí"
const about = {
  name: 'Daniel Saiz',
  role: 'Business Partner & Product Manager',
  description:
    'Experto en crear estrategias de negocio efectivas, gestionar productos innovadores y liderar equipos hacia el éxito. Mi enfoque se centra en obtener resultados tangibles con un equilibrio perfecto entre análisis de datos y creatividad.',
  resume: 'https://linkedin.com/in/danielsaiz', // Puedes agregar un enlace a tu CV en línea
  social: {
    linkedin: 'https://linkedin.com/in/danielsaiz',
    github: 'https://github.com/DsaizB',
  },
}

// Proyectos destacados
const projects = [
  {
    name: 'AI Photo & Video Generator',
    description:
      'Herramienta avanzada de IA que permite generar imágenes y videos personalizados a partir de las fotos de los usuarios.',
    stack: ['Python', 'Machine Learning', 'React'],
    sourceCode: 'https://github.com/DsaizB/ai-photo-video',
    livePreview: 'https://DsaizB.github.io/ai-photo-video',
  },
  {
    name: 'Apple Time Capsule Upgrade',
    description:
      'Guía detallada para actualizar una Apple Time Capsule con un SSD, mejorando significativamente su rendimiento.',
    stack: ['Hardware', 'Electronics', 'Technical Writing'],
    sourceCode: 'https://github.com/DsaizB/time-capsule-upgrade',
    livePreview: 'https://DsaizB.github.io/time-capsule-upgrade',
  },
  {
    name: 'Business Strategy Tool',
    description:
      'Aplicación web para analizar y desarrollar estrategias de negocio basadas en datos reales y métricas clave.',
    stack: ['React', 'TypeScript', 'Node.js'],
    sourceCode: 'https://github.com/DsaizB/business-strategy-tool',
    livePreview: 'https://DsaizB.github.io/business-strategy-tool',
  },
]

// Habilidades técnicas y de gestión
const skills = [
  'Product Management',
  'Business Strategy',
  'JavaScript',
  'React',
  'Python',
  'Machine Learning',
  'Data Analysis',
  'Agile & Scrum',
  'CI/CD',
  'Git',
  'Jira',
  'Figma',
]

// Información de contacto
const contact = {
  email: 'danielsaiz@correo.com',
}

export { header, about, projects, skills, contact }