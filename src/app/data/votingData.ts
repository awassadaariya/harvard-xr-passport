export interface Project {
  id: string;
  title: string;
  team: string;
  description: string;
  imageUrl: string;
  votes: number;
}

export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'NeuroVR: Brain Training in Virtual Reality',
    team: 'Stanford Neuroscience Lab',
    description: 'An immersive VR platform for cognitive enhancement and neuroplasticity training using gamified exercises.',
    imageUrl: 'https://images.unsplash.com/photo-1653998894571-ae645e479e86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xvZ3JhcGhpYyUyMGRpc3BsYXklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3Mjc2Nzc2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    votes: 142
  },
  {
    id: 'proj2',
    title: 'HoloClass: 3D Education Platform',
    team: 'EduTech Innovations',
    description: 'Transform any classroom into an interactive 3D learning environment with holographic content and real-time collaboration.',
    imageUrl: 'https://images.unsplash.com/photo-1758524943172-43687827b5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW1lcnNpdmUlMjByZWFsaXR5JTIwZXhwZXJpZW5jZXxlbnwxfHx8fDE3NzI4MTg1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    votes: 128
  },
  {
    id: 'proj3',
    title: 'ArtSpace: Collaborative VR Gallery',
    team: 'Digital Arts Collective',
    description: 'A virtual gallery space where artists worldwide can showcase and sell their digital art in an immersive environment.',
    imageUrl: 'https://images.unsplash.com/photo-1695462131543-48e32d4bbc92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx4ciUyMHNwYXRpYWwlMjBjb21wdXRpbmd8ZW58MXx8fHwxNzcyODE4NTI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    votes: 156
  },
  {
    id: 'proj4',
    title: 'MediSim: Surgical Training Simulator',
    team: 'HealthTech Solutions',
    description: 'Realistic surgical simulation platform for medical students and residents to practice procedures in a safe VR environment.',
    imageUrl: 'https://images.unsplash.com/photo-1660190153415-ae40b3561aaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ciUyMGhlYWRzZXQlMjBnYW1pbmd8ZW58MXx8fHwxNzcyODE4NTIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    votes: 134
  },
  {
    id: 'proj5',
    title: 'CityBuilder XR: Urban Planning Tool',
    team: 'UrbanVision Inc.',
    description: 'An AR/VR tool for architects and urban planners to visualize and modify city designs at scale.',
    imageUrl: 'https://images.unsplash.com/photo-1684770114368-6e01b4f8741a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjB2ciUyMGNyZWF0aXZlfGVufDF8fHx8MTc3MjgxODUxOXww&ixlib=rb-4.1.0&q=80&w=1080',
    votes: 98
  },
  {
    id: 'proj6',
    title: 'TherapySpace: Mental Health VR',
    team: 'Wellness Technologies',
    description: 'Virtual reality environments designed for anxiety reduction, PTSD treatment, and mindfulness meditation.',
    imageUrl: 'https://images.unsplash.com/photo-1764314359427-6e685ce5b719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdnIlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc3MjgxODUxOXww&ixlib=rb-4.1.0&q=80&w=1080',
    votes: 167
  }
];