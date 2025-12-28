import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User } from 'lucide-react';

export default function BlogPage() {
  const posts = [
    {
      slug: 'ultimate-guide-indian-wedding-catering',
      title: 'The Ultimate Guide to Planning Your Indian Wedding Catering',
      excerpt: 'Planning an Indian wedding? Discover expert tips for creating the perfect menu that will delight your guests and honor tradition.',
      author: 'Chef Rajesh Kumar',
      date: '2024-01-15',
      category: 'Wedding Planning',
    },
    {
      slug: 'corporate-event-catering-guide',
      title: 'Corporate Event Catering: Making Your Business Celebration Memorable',
      excerpt: 'Learn how to choose the perfect catering for your corporate events, from team lunches to annual galas.',
      author: 'Priya Mehta',
      date: '2024-01-10',
      category: 'Corporate Events',
    },
    {
      slug: 'housewarming-party-catering-tips',
      title: 'Housewarming Party Catering: Welcoming Guests to Your New Home',
      excerpt: 'Make your housewarming party unforgettable with the perfect blend of traditional and contemporary Indian cuisine.',
      author: 'Chef Rajesh Kumar',
      date: '2024-01-05',
      category: 'Party Planning',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative h-[400px] bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-orange-50">
              Tips, Stories, and Insights from Our Catering Experts
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-orange-100 to-red-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">📝</span>
                  </div>
                  
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <User size={16} className="mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" className="w-full">Read More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
