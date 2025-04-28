
import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Shield, Zap, DatabaseBackup } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';

const blogPosts = [
  {
    id: 'firewalls-importance',
    title: 'The Critical Role of Firewalls in Modern Business Security',
    excerpt: 'Understanding why firewalls are essential for protecting your business from cyber threats and how they form the foundation of your security infrastructure.',
    date: 'April 25, 2025',
    icon: Shield,
    path: '/blog/firewalls-importance'
  },
  {
    id: 'it-planning-importance',
    title: 'Why Strategic IT Planning Is Crucial for Business Success',
    excerpt: 'Discover how proper IT planning and architecture can drive business growth, reduce costs, and create a competitive advantage.',
    date: 'April 28, 2025',
    icon: Zap,
    path: '/blog/it-planning-importance'
  },
  {
    id: 'data-recovery-importance',
    title: 'The Importance of Data Recovery and Business Continuity',
    excerpt: 'Learn why having a solid data recovery and business continuity plan is crucial for your organization\'s survival in today\'s digital landscape.',
    date: 'April 28, 2025',
    icon: DatabaseBackup,
    path: '/blog/data-recovery-importance'
  }
];

const Blog = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Blog | IT Launch Solutions</title>
        <meta name="description" content="Read our latest articles about IT security, planning, and best practices for your business." />
      </Helmet>
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-blue-800">IT Launch Blog</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card 
                key={post.id}
                className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate(post.path)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <post.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-gray-600 text-sm">{post.date}</span>
                </div>
                <h2 className="text-2xl font-semibold mb-3 text-blue-700">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
              </Card>
            ))}
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
