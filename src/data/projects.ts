export const projects = [
  {
    slug: 'robot-arm-competition',
    title: 'Autonomous Robot Arm (Competition)',
    date: '2024-06',
    description: 'Built an autonomous robot arm for pick-and-place tasks with vision guidance.',
    tags: ['Robotics', 'Computer Vision', 'C++'],
    role: 'Lead Builder & Programmer',
    featured: true,
    thumbnail: '/images/project1.jpg',
    heroImage: '/images/project1.jpg',
    sections: {
      overview: 'A compact robot arm designed for speed and accuracy.',
      goals: 'Win the regional robotics arm challenge and improve repeatability.',
      process: 'Designed using CAD, prototyped with 3D printing, programmed control loops in C++ with OpenCV for vision.',
      results: 'Finished 2nd place; achieved 95% pick success in testing.',
      improve: 'Improve gripper design and add force sensing.'
    }
  },
  {
    slug: 'satellite-sim',
    title: 'CubeSat Attitude Simulator',
    date: '2023-11',
    description: 'A backyard CubeSat simulator for testing control algorithms.',
    tags: ['Aerospace', 'Python', 'Simulations'],
    role: 'Programmer',
    featured: true,
    thumbnail: '/images/project2.jpg',
    heroImage: '/images/project2.jpg',
    sections: {
      overview: 'A low-cost simulator to validate attitude control algorithms.',
      goals: 'Create realistic dynamics and add telemetry logging.',
      process: 'Modeled dynamics in Python and used Raspberry Pi for hardware-in-loop testing.',
      results: 'Stable pointing within 2 degrees in closed-loop tests.',
      improve: 'Add reaction wheel modeling and sensor noise.'
    }
  },
  {
    slug: 'competition-chassis',
    title: 'Lightweight Competition Chassis',
    date: '2024-02',
    description: 'Designed an ultra-light chassis for high agility in robotics competitions.',
    tags: ['CAD', 'Manufacturing'],
    role: 'Designer',
    featured: false,
    thumbnail: '/images/project3.jpg',
    heroImage: '/images/project3.jpg',
    sections: {
      overview: 'Optimized for stiffness-to-weight ratio.',
      goals: 'Reduce weight while preserving durability.',
      process: 'Iterative CAD in Onshape and FEA simulations.',
      results: '30% weight reduction vs previous design.',
      improve: 'Explore alternate materials and fabrication techniques.'
    }
  }
]

export function getProjectBySlug(slug:string){
  return projects.find(p => p.slug === slug)
}
