import TeamMember from '@/components/about/TeamMember';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    bio: 'Passionate about building great products and leading amazing teams.',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    bio: 'Tech enthusiast with over 15 years of experience in software development.',
  },
  {
    name: 'Mike Johnson',
    role: 'Design Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    bio: 'Creating beautiful and intuitive user experiences is my passion.',
  },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            We are a team of passionate individuals dedicated to creating amazing digital experiences.
            Our mission is to help businesses thrive in the digital age through innovative solutions
            and cutting-edge technology.
          </p>
          <div className="bg-primary/5 border-l-4 border-primary p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To empower businesses with innovative digital solutions that drive growth and success
              in an ever-evolving technological landscape.
            </p>
          </div>
          <div className="bg-secondary/5 border-l-4 border-secondary p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To be the leading force in digital transformation, setting new standards for excellence
              and innovation in the industry.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </section>
    </div>
  );
}