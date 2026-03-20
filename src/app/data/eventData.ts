export interface Event {
  id: string;
  title: string;
  time: string;
  room: string;
  description: string;
  company?: string;
  speakers?: Speaker[];
}

export interface Speaker {
  name: string;
  title: string;
  company?: string;
}

export interface Room {
  id: string;
  name: string;
  type: 'auditorium' | 'room' | 'booth';
  events: Event[];
}

export const rooms: Room[] = [
  {
    id: 'piper',
    name: 'Piper Auditorium',
    type: 'auditorium',
    events: [
      {
        id: 'evt1',
        title: 'HarvardXR Opening',
        time: '9:30 am - 10:00 am',
        room: 'Piper Auditorium',
        description: 'Welcome to HXR Conference 2026! Join us for the opening ceremony where we\'ll kick off two days of innovation, inspiration, and exploration in extended reality.',
        speakers: [
          { name: 'Dr. Sarah Chen', title: 'Conference Chair', company: 'Harvard University' }
        ]
      },
      {
        id: 'evt2',
        title: 'Keynote',
        time: '11:00 am - 12:00 pm',
        room: 'Piper Auditorium',
        description: 'Explore the transformative journey from pixel-based 2D displays to immersive voxel-based 3D environments and what this means for the future of XR.',
        company: 'Meta Reality Labs',
        speakers: [
          { name: 'Michael Torres', title: 'Chief XR Architect', company: 'Meta Reality Labs' }
        ]
      },
      {
        id: 'evt3',
        title: 'XR for Art, Imagination, Creation & Cultural Conception',
        time: '1:30 pm - 2:30 pm',
        room: 'Piper Auditorium',
        description: 'Discover how XR technologies are revolutionizing artistic expression and cultural preservation, from virtual museums to collaborative creative spaces.',
        company: 'Google Arts & Culture',
        speakers: [
          { name: 'Elena Rodriguez', title: 'Creative Director', company: 'Google Arts & Culture' }
        ]
      },
      {
        id: 'evt4',
        title: 'XR in Healthcare & Wellbeing',
        time: '4:10 pm - 5:10 pm',
        room: 'Piper Auditorium',
        description: 'Learn about cutting-edge applications of XR in medical training, therapy, rehabilitation, and patient care that are transforming healthcare delivery.',
        company: 'Johns Hopkins Medical',
        speakers: [
          { name: 'Dr. James Wilson', title: 'Director of Medical XR', company: 'Johns Hopkins Medical' }
        ]
      },
      {
        id: 'evt5',
        title: 'XR in Education',
        time: '5:20 pm - 5:50 pm',
        room: 'Piper Auditorium',
        description: 'Explore how immersive technologies are reshaping learning experiences, from elementary education to professional training programs.',
        company: 'Stanford VR Lab',
        speakers: [
          { name: 'Prof. Lisa Anderson', title: 'Education Innovation Lead', company: 'Stanford VR Lab' }
        ]
      }
    ]
  },
  {
    id: '109',
    name: 'Room 109',
    type: 'room',
    events: [
      {
        id: 'evt6',
        title: 'Interactive XR Demos',
        time: '10:00 am - 5:00 pm',
        room: 'Room 109',
        description: 'Experience hands-on demonstrations of the latest XR technologies and applications from leading innovators in the field.',
        company: 'Unity Technologies',
        speakers: [
          { name: 'Austin Lee', title: 'Head of XR', company: 'Samsung Electronics' }
        ]
      }
    ]
  },
  {
    id: 'rm01',
    name: 'RM 01',
    type: 'booth',
    events: [
      {
        id: 'evt7',
        title: 'VR Experience Zone',
        time: '9:00 am - 6:00 pm',
        room: 'RM 01',
        description: 'Step into fully immersive virtual reality experiences showcasing the future of VR gaming, entertainment, and social interaction.',
        company: 'Valve Corporation',
        speakers: [
          { name: 'Marcus Chen', title: 'VR Product Manager', company: 'Valve Corporation' }
        ]
      }
    ]
  },
  {
    id: 'rm02',
    name: 'RM 02',
    type: 'booth',
    events: [
      {
        id: 'evt8',
        title: 'AR Development Showcase',
        time: '9:00 am - 6:00 pm',
        room: 'RM 02',
        description: 'Discover the latest tools and frameworks for building augmented reality applications for mobile and wearable devices.',
        company: 'Apple',
        speakers: [
          { name: 'Jennifer Park', title: 'AR Developer Relations', company: 'Apple' }
        ]
      }
    ]
  },
  {
    id: 'chauhaus',
    name: 'Chauhaus',
    type: 'booth',
    events: [
      {
        id: 'evt9',
        title: 'Networking & Refreshments',
        time: '9:00 am - 6:00 pm',
        room: 'Chauhaus',
        description: 'Connect with fellow attendees, speakers, and industry leaders in a relaxed atmosphere with complimentary refreshments.',
        speakers: []
      }
    ]
  },
  {
    id: '124',
    name: 'Room 124',
    type: 'booth',
    events: [
      {
        id: 'evt10',
        title: 'Spatial Computing Demos',
        time: '10:00 am - 5:00 pm',
        room: 'Room 124',
        description: 'Experience the next generation of spatial computing with live demonstrations of holographic interfaces and 3D workspace solutions.',
        company: 'Microsoft',
        speakers: [
          { name: 'David Kumar', title: 'Spatial Computing Lead', company: 'Microsoft' }
        ]
      }
    ]
  },
  {
    id: 'sc01',
    name: 'SC 01',
    type: 'booth',
    events: [
      {
        id: 'evt11',
        title: 'Partner Showcase',
        time: '9:00 am - 6:00 pm',
        room: 'SC 01',
        description: 'Explore innovative XR solutions from our conference partners and discover opportunities for collaboration.',
        company: 'Qualcomm',
        speakers: [
          { name: 'Rachel Zhang', title: 'XR Partnerships', company: 'Qualcomm' }
        ]
      }
    ]
  },
  {
    id: 'sc02',
    name: 'SC 02',
    type: 'booth',
    events: [
      {
        id: 'evt12',
        title: 'Innovation Corner',
        time: '9:00 am - 6:00 pm',
        room: 'SC 02',
        description: 'See cutting-edge prototypes and research projects from universities and startups pushing the boundaries of XR.',
        company: 'MIT Media Lab',
        speakers: [
          { name: 'Dr. Alex Thompson', title: 'Research Scientist', company: 'MIT Media Lab' }
        ]
      }
    ]
  },
  {
    id: 'sc03',
    name: 'SC 03',
    type: 'booth',
    events: [
      {
        id: 'evt13',
        title: 'Tech Showcase Station',
        time: '9:00 am - 6:00 pm',
        room: 'SC 03',
        description: 'Get hands-on with the latest XR hardware including headsets, haptic devices, and spatial audio systems.',
        company: 'HTC Vive',
        speakers: [
          { name: 'Sophie Martinez', title: 'Hardware Engineer', company: 'HTC Vive' }
        ]
      }
    ]
  }
];

export const allSchedule: Event[] = rooms.flatMap(room => room.events);

export function getRoomById(roomId: string): Room | undefined {
  return rooms.find(r => r.id === roomId);
}

export function getEventById(eventId: string): Event | undefined {
  return allSchedule.find(e => e.id === eventId);
}
