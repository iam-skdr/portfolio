import { useState } from 'react';
import { run } from '@softwaretechnik/dbml-renderer/lib/api.js';

export default function DBMLViewer() {
  const [dbml, setDbml] = useState(`Table users {
  id integer [primary key]
  username varchar
}

Table posts {
  id integer [primary key]
  title varchar
  user_id integer
}

Ref: posts.user_id > users.id`);
  const [svg, setSvg] = useState('');

  const renderDiagram = () => {
    try {
      const output = run(dbml, 'svg');
      setSvg(output);
    } catch (e) {
      setSvg(`<pre>${e.message}</pre>`);
    }
  };

  return (
    <section id="dbml" className="py-20 container mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-4">DBML Viewer</h2>
      <textarea
        value={dbml}
        onChange={e => setDbml(e.target.value)}
        className="w-full h-48 p-2 bg-gray-800 text-white rounded mb-4"
      />
      <button
        onClick={renderDiagram}
        className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Render
      </button>
      <div className="overflow-auto" dangerouslySetInnerHTML={{ __html: svg }} />
    </section>
  );
}
