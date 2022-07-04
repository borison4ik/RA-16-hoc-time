import React, { useState } from 'react';

import { VideoList } from './components/VideoList';

import { DATA } from './data';

export default function App() {
  const [list] = useState(DATA);

  return <VideoList list={list} />;
}
