import React from 'react';
import './TestSeries.css';
import TestCard from './TestCard';

import Logo1 from './assets/Logo1.png';
import Logo2 from './assets/Logo2.png';
import Logo3 from './assets/Logo3.png';
import Logo4 from './assets/Logo4.png';

const testSeriesData = [
  {
    title: 'Civil Services',
    exampleTest: 'General Studies Prelims–Full-Length Mock',
    duration: '2 hours',
    coverage: 'History, Polity, Economy, Environment',
    features: 'Timed test, instant results, performance analysis',
    ranking: 'All-India leaderboard',
    icon: Logo1,
  },
  {
    title: 'State Services',
    exampleTest: 'MPPSC GS Paper I – Chapter-Wise Practice',
    duration: '60 minutes',
    coverage: 'State-specific history, geography, polity',
    features: 'Topic-wise insights, instant scoring',
    ranking: 'State comparison',
    icon: Logo2,
  },
  {
    title: 'Railways',
    exampleTest: 'RRB NTPC Full-Length Mock',
    duration: '90 minutes',
    coverage: 'General Awareness, Math, Reasoning',
    features: 'Timed test, detailed solutions',
    ranking: 'National comparison',
    icon: Logo3,
  },
  {
    title: 'Banking Exams',
    exampleTest: 'IBPS PO Prelims – Quant & Reasoning Drill',
    duration: '60 minutes',
    coverage: 'Quantitative Aptitude, Reasoning',
    features: 'Instant results, performance tracking',
    ranking: 'All-India leaderboard',
    icon: Logo4,
  }
];

function TestSeries() {
  return (
    <div className="test-series-container">
      <h2 className="test-series-title">Test Series – Level Up Your Preparation</h2>
      <div className="test-cards">
        {testSeriesData.map((item, index) => (
          <TestCard key={index} data={item} />
        ))}
      </div>
      <div className="explore-btn-container">
        <button className="explore-btn">Explore All Test series</button>
      </div>
    </div>
  );
}

export default TestSeries;
