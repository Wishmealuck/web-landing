'use client';
import React, { useState } from 'react';

interface Props {
  data: { id: number; content: string; title: string }[];
}

export default function DocsComponent(props: Props) {
  const { data } = props;
  const [selectedSection, setSelectedSection] = useState(data[0]);

  return (
    <main className='w-full flex justify-center'>
      <div className='flex lg:flex-row flex-col  gap-10 pt-20 w-[90%] lg:w-[88%] xl:w-[85%] justify-center pb-32'>
        <section className='w-full lg:w-1/3 border border-1 h-max '>
          <ul>
            {data.map((section) => (
              <li
                key={section.id}
                className={`px-4 py-3 cursor-pointer ${
                  selectedSection.id === section.id
                    ? 'bg-custom-gradient text-white '
                    : ''
                }`}
                onClick={() => setSelectedSection(section)}
              >
                {section.title}
              </li>
            ))}
          </ul>
        </section>
        <section className='w-2/3'>
          <h2 className='text-xl font-bold pb-4'>{selectedSection.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: selectedSection.content }}></p>
        </section>
      </div>
    </main>
  );
}
