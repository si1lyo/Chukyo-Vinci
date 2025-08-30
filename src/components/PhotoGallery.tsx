import React, { useEffect, useRef, useState } from 'react';

interface PhotoItem {
  id: number;
  image: string;
  title: string;
  description: string;
  alt: string;
}

const PhotoGallery: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const observerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const photos: PhotoItem[] = [
    {
      id: 1,
      image: '/IMG_0863.jpg',
      title: 'Chukyo:Vinci',
      description: 'トライ式高等学院名駅キャンパスの軽音サークル',
      alt: 'Chukyo:Vinci 軽音サークルの活動風景'
    },
    {
      id: 2,
      image: '/IMG_0840.jpg',
      title: 'Gt./Vo.',
      description: 'スタジオ練習',
      alt: '音楽活動の様子'
    },
    {
      id: 3,
      image: '/IMG_0825.jpg',
      title: 'Vo.',
      description: 'スタジオ練習',
      alt: '音楽活動の様子'
    },
    {
      id: 4,
      image: '/IMG_0822.jpg',
      title: 'Dr.',
      description: 'スタジオ練習',
      alt: '音楽活動の様子'
    },
    {
      id: 5,
      image: '/live.jpg',
      title: '発表',
      description: '文化祭"百花繚乱"での発表',
      alt: 'Hikotei'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleItems(prev => new Set([...Array.from(prev), id]));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    observerRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observerRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extralight tracking-widest text-white mb-4">
            Gallery
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto">
            Chukyo:Vinciの活動の様子
          </p>
        </div>

        <div className="space-y-32">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              ref={(el) => {
                observerRefs.current[index] = el;
              }}
              data-id={photo.id}
              className={`transition-all duration-1000 ease-out ${
                visibleItems.has(photo.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              }`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 0 ? 'lg:grid-flow-col' : 'lg:grid-flow-col-dense'
              }`}>
                {/* 写真 */}
                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={photo.image}
                      alt={photo.alt}
                      className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* テキストコンテンツ */}
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="text-center lg:text-left">
                    <h3 className="text-3xl md:text-4xl font-extralight tracking-widest text-white mb-4">
                      {photo.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide leading-relaxed">
                      {photo.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
