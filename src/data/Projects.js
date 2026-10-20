const projects = [
    {
        id: 'data-warehouse',
        title: 'Modern Data Warehouse & Analytics',
        category: 'Data Engineering & Analytics',
        description:
          'Built a Bronze/Silver/Gold ELT pipeline in PostgreSQL, then used SQL and Python to analyze revenue trends and segment 18.4K+ customers. Found that Bikes generate $28.3M (96.5%) of total revenue.',
        tech: ['PostgreSQL', 'SQL', 'Python', 'pandas', 'matplotlib'],
        image: 'projects/warehouse.png',
        demo: null,
        repo: 'https://github.com/ttr007/SQL-Medallion',
    },
    {
      id: 'pierce-county-resource',
      title: 'Data Analysis Concepts Resource',
      category: 'Education & Web Development',
      description:
        'Led front-end development of an accessible learning platform for older, non-technical workers, built with a Pierce County sponsor from user interviews and a Figma prototype into a React app.',
      tech: ['React', 'Figma', 'Accessibility', 'User Research'],
      image: 'projects/capstone.png',
      demo: 'https://ttr007.github.io/capstone-/',
      repo: 'https://github.com/ttr007/capstone-',
    },
    {
      id: 'grocery-database',
      title: 'National Grocery Database',
      category: 'Databases & Data Modeling',
      description:
        'Designed a MongoDB database for a 6M+ row grocery dataset, then tuned indexes and aggregation pipelines using estimated query frequencies, cutting a top-5 discounts query from 340 ms to 4 ms.',
      tech: ['MongoDB', 'NoSQL', 'ERDs', 'Indexing'],
      image: 'projects/grocery.png',
      demo: null,
      repo: 'https://github.com/ttr007/grocecy-mongodb',
    }
  ]
  
  export default projects