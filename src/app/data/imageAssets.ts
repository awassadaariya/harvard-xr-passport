// Real Unsplash images for events and rooms
import room109 from '../../../assets/109.jpeg';
import roomPiper from '../../../assets/piper.jpeg';
import roomRm01 from '../../../assets/rm01.jpeg';
import roomRm02 from '../../../assets/rm02.jpeg';
import roomSc01 from '../../../assets/sc01.jpeg';
import roomSc02 from '../../../assets/sc02.jpeg';
import roomSc03 from '../../../assets/sc03.jpeg';

export const eventImages: Record<string, string> = {
  'evt1': 'https://images.unsplash.com/photo-1757143137392-0b1e1a27a7de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuaW5nJTIwY2VyZW1vbnklMjBjb25mZXJlbmNlfGVufDF8fHx8MTc3MjgxODUxOXww&ixlib=rb-4.1.0&q=80&w=1080', // Opening
  'evt2': 'https://images.unsplash.com/photo-1762968269894-1d7e1ce8894e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwa2V5bm90ZSUyMHNwZWFrZXJ8ZW58MXx8fHwxNzcyNzg2NzEwfDA&ixlib=rb-4.1.0&q=80&w=1080', // Keynote
  'evt3': 'https://images.unsplash.com/photo-1684770114368-6e01b4f8741a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjB2ciUyMGNyZWF0aXZlfGVufDF8fHx8MTc3MjgxODUxOXww&ixlib=rb-4.1.0&q=80&w=1080', // XR for Art
  'evt4': 'https://images.unsplash.com/photo-1764314359427-6e685ce5b719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdnIlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc3MjgxODUxOXww&ixlib=rb-4.1.0&q=80&w=1080', // Healthcare
  'evt5': 'https://images.unsplash.com/photo-1771765764892-91f2ed4ddbf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB2ciUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MjgxODUxOXww&ixlib=rb-4.1.0&q=80&w=1080', // Education
  'evt6': 'https://images.unsplash.com/photo-1769839271241-34793c4deadd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGVtbyUyMGlubm92YXRpb258ZW58MXx8fHwxNzcyODE4NTIxfDA&ixlib=rb-4.1.0&q=80&w=1080', // Interactive Demos
  'evt7': 'https://images.unsplash.com/photo-1660190153415-ae40b3561aaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ciUyMGhlYWRzZXQlMjBnYW1pbmd8ZW58MXx8fHwxNzcyODE4NTIwfDA&ixlib=rb-4.1.0&q=80&w=1080', // VR Experience
  'evt8': 'https://images.unsplash.com/photo-1545579833-0e15a2cdb26b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWdtZW50ZWQlMjByZWFsaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI4MTUyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080', // AR Development
  'evt9': 'https://images.unsplash.com/photo-1769798643237-8642a3fbe5bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JraW5nJTIwY29uZmVyZW5jZSUyMHBlb3BsZXxlbnwxfHx8fDE3NzI4MTg1MjF8MA&ixlib=rb-4.1.0&q=80&w=1080', // Networking
  'evt10': 'https://images.unsplash.com/photo-1706783559851-8c34aff457ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGF0aWFsJTIwY29tcHV0aW5nJTIwaG9sb2dyYXBoaWN8ZW58MXx8fHwxNzcyODE4NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080', // Spatial Computing
  'evt11': 'https://images.unsplash.com/photo-1762028892701-692dc360db08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGhpYml0aW9uJTIwYm9vdGglMjBzaG93Y2FzZXxlbnwxfHx8fDE3NzI4MTg1MjR8MA&ixlib=rb-4.1.0&q=80&w=1080', // Partner Showcase
  'evt12': 'https://images.unsplash.com/photo-1703085542961-1880ed1ad35c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG93Y2FzZSUyMGRpc3BsYXklMjBleGhpYml0aW9ufGVufDF8fHx8MTc3MjgxODUyNHww&ixlib=rb-4.1.0&q=80&w=1080', // Innovation Corner
  'evt13': 'https://images.unsplash.com/photo-1760087616415-62270db23966?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc2hvd2Nhc2UlMjBzdGF0aW9ufGVufDF8fHx8MTc3MjgxODUyOHww&ixlib=rb-4.1.0&q=80&w=1080', // Tech Showcase
};

export const roomImages: Record<string, string> = {
  'piper': roomPiper,   // Piper Auditorium
  '109': room109,       // Room 109
  'rm01': roomRm01,     // RM 01
  'rm02': roomRm02,     // RM 02
  'chauhaus': 'https://images.unsplash.com/photo-1764173039259-3cdf3d9a56e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3VuZ2UlMjBjYWZlJTIwbmV0d29ya2luZ3xlbnwxfHx8fDE3NzI4MTg1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080', // Chauhaus
  '124': 'https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZWV0aW5nJTIwcm9vbXxlbnwxfHx8fDE3NzI3MjAxODF8MA&ixlib=rb-4.1.0&q=80&w=1080', // Room 124
  'sc01': roomSc01,     // SC 01
  'sc02': roomSc02,     // SC 02
  'sc03': roomSc03,     // SC 03
};

export const projectImages: Record<string, string> = {
  'proj1': 'https://images.unsplash.com/photo-1653998894571-ae645e479e86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xvZ3JhcGhpYyUyMGRpc3BsYXklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3Mjc2Nzc2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'proj2': 'https://images.unsplash.com/photo-1758524943172-43687827b5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW1lcnNpdmUlMjByZWFsaXR5JTIwZXhwZXJpZW5jZXxlbnwxfHx8fDE3NzI4MTg1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'proj3': 'https://images.unsplash.com/photo-1695462131543-48e32d4bbc92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx4ciUyMHNwYXRpYWwlMjBjb21wdXRpbmd8ZW58MXx8fHwxNzcyODE4NTI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'proj4': 'https://images.unsplash.com/photo-1660190153415-ae40b3561aaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ciUyMGhlYWRzZXQlMjBnYW1pbmd8ZW58MXx8fHwxNzcyODE4NTIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'proj5': 'https://images.unsplash.com/photo-1684770114368-6e01b4f8741a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjB2ciUyMGNyZWF0aXZlfGVufDF8fHx8MTc3MjgxODUxOXww&ixlib=rb-4.1.0&q=80&w=1080',
  'proj6': 'https://images.unsplash.com/photo-1764314359427-6e685ce5b719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdnIlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc3MjgxODUxOXww&ixlib=rb-4.1.0&q=80&w=1080',
};

// Helper function to get event image
export function getEventImage(eventId: string): string {
  return eventImages[eventId] || eventImages['evt6']; // Default to demo image
}

// Helper function to get room image
export function getRoomImage(roomId: string): string {
  return roomImages[roomId] || roomImages['109']; // Default to conference room
}

// Helper function to get project image
export function getProjectImage(projectId: string): string {
  return projectImages[projectId] || projectImages['proj1']; // Default to holographic display
}
