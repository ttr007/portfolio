const projects = [
    {
      id: 'churn-prediction',
      title: 'Customer Churn Prediction',
      category: 'Predictive Modeling',
      description:
        'Gradient boosting model that flags at-risk subscribers, with SHAP explanations for the retention team.',
      tech: ['Python', 'XGBoost', 'SHAP', 'scikit-learn'],
      image: 'projects/churn.jpg', // file in public/projects/, optional
      demo: null,
      repo: 'https://github.com/your-username/churn-prediction',
    },
    {
      id: 'sentiment-nlp',
      title: 'Review Sentiment Analysis',
      category: 'Natural Language Processing',
      description:
        'Fine-tuned transformer that classifies product reviews and surfaces recurring complaint themes.',
      tech: ['Python', 'PyTorch', 'Hugging Face'],
      image: null,
      demo: 'https://example.com',
      repo: 'https://github.com/your-username/sentiment-nlp',
    },
    {
      id: 'forecasting-dashboard',
      title: 'Demand Forecasting Dashboard',
      category: 'Data Storytelling',
      description:
        'Time-series forecasts for inventory planning, delivered in an interactive dashboard.',
      tech: ['Python', 'Prophet', 'Streamlit'],
      image: null,
      demo: null,
      repo: 'https://github.com/your-username/forecasting',
    },
  ]
  
  export default projects