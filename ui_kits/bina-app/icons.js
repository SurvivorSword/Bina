/* Bina — inline icon set (lucide-style: 24px grid, 2px round strokes).
   Exposed on window so all babel scripts can use them. */
(function(){
  const I = (paths, extra={}) => (p={}) => React.createElement('svg', {
    viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:2,
    strokeLinecap:'round', strokeLinejoin:'round', width:'1em', height:'1em', ...extra, ...p
  }, paths.map((d,i)=>React.createElement('path',{key:i,d})));

  const Circle = (cx,cy,r)=>React.createElement('circle',{key:'c'+cx+cy,cx,cy,r});

  window.BinaIcons = {
    Search:(p={})=>React.createElement('svg',{viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2,strokeLinecap:'round',width:'1em',height:'1em',...p},[Circle(11,11,7),React.createElement('path',{key:'l',d:'M21 21l-4.3-4.3'})]),
    Bell:I(['M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9','M13.7 21a2 2 0 0 1-3.4 0']),
    Star:I(['M12 3l2.7 5.8 6.3.8-4.7 4.3 1.3 6.3L12 17.8 6.1 20.5l1.3-6.3L2.7 9.6l6.3-.8z']),
    ArrowUp:I(['M12 19V5','M5 12l7-7 7 7']),
    ArrowDown:I(['M12 5v14','M19 12l-7 7-7-7']),
    ArrowLeft:I(['M19 12H5','M12 19l-7-7 7-7']),
    TrendUp:I(['M3 17l6-6 4 4 8-8','M17 7h4v4']),
    Clock:(p={})=>React.createElement('svg',{viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round',width:'1em',height:'1em',...p},[Circle(12,12,9),React.createElement('path',{key:'h',d:'M12 7v5l3 2'})]),
    Sliders:I(['M4 6h11','M19 6h1','M9 12h11','M4 12h1','M14 18h6','M4 18h6'].map(d=>d)),
    Layers:I(['M12 3l9 5-9 5-9-5 9-5z','M3 13l9 5 9-5','M3 8l9 5 9-5']),
    Compass:(p={})=>React.createElement('svg',{viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round',width:'1em',height:'1em',...p},[Circle(12,12,9),React.createElement('path',{key:'n',d:'M16 8l-2.5 5.5L8 16l2.5-5.5L16 8z'})]),
    Sparkle:I(['M12 3v4','M12 17v4','M3 12h4','M17 12h4','M7 7l2 2','M15 15l2 2','M17 7l-2 2','M9 15l-2 2']),
    Link:I(['M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1','M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1']),
    External:I(['M15 3h6v6','M10 14L21 3','M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5']),
  };
})();
