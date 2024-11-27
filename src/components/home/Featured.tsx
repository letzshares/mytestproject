export default function Featured() {
  const features = [
    {
      title: 'Innovation',
      description: 'Stay ahead with cutting-edge technology solutions.',
      icon: '🚀',
    },
    {
      title: 'Quality',
      description: 'Delivering excellence in every project we undertake.',
      icon: '⭐',
    },
    {
      title: 'Support',
      description: '24/7 dedicated support for all your needs.',
      icon: '💪',
    },
  ];

  return (
    <section id="featured" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}