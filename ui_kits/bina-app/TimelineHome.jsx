/* Bina app — Explore / living timeline (home) */
function TimelineHome({ onOpen }) {
  const { Card, Badge, Tag, Tabs, Sparkline, Button } = window.SeleneDesignSystem_7655ad;
  const Ic = window.BinaIcons;
  const D = window.BINA_DATA;
  const [range, setRange] = React.useState('all');
  const [showFall, setShowFall] = React.useState(true);

  const topics = D.topics
    .filter(t => showFall || t.momentum !== 'fall')
    .slice().sort((a,b)=> b.year - a.year);

  // group by year
  const byYear = {};
  topics.forEach(t => { (byYear[t.year] = byYear[t.year] || []).push(t); });
  const years = Object.keys(byYear).map(Number).sort((a,b)=>b-a);

  return (
    <main>
      {/* hero */}
      <section style={{position:'relative',overflow:'hidden',borderBottom:'1px solid var(--border-strong)'}}>
        <img src="../../assets/moonlit-hero.jpg" alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'70% 28%',opacity:.5}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,var(--night-950) 28%, color-mix(in oklch,var(--night-950) 30%,transparent) 100%)'}}/>
        <div style={{position:'relative',maxWidth:'var(--container)',margin:'0 auto',padding:'var(--space-9) var(--space-6) var(--space-8)'}}>
          <div className="eyebrow" style={{color:'var(--glow-300)'}}>The living timeline of artificial intelligence</div>
          <h1 style={{fontSize:'var(--text-7xl)',fontWeight:500,letterSpacing:'-.02em',margin:'12px 0 0',maxWidth:760,textShadow:'var(--glow-text)'}}>
            Every idea the field<br/>obsessed over, <em style={{fontStyle:'italic',color:'var(--glow-300)'}}>in order.</em>
          </h1>
          <p style={{font:'var(--type-body)',fontSize:'var(--text-lg)',color:'var(--night-200)',maxWidth:540,marginTop:18}}>
            Bina tracks the rise and fall of every conversation in AI — indexed weekly across papers, posts, and releases since 2017.
          </p>
          <div style={{display:'flex',gap:'var(--space-6)',marginTop:'var(--space-6)'}}>
            {[['1,240','topics tracked'],['8.4M','signals indexed'],['2017','earliest record']].map(([n,l])=>(
              <div key={l}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-3xl)',color:'var(--text-display)',fontWeight:500}}>{n}</div>
                <div className="eyebrow">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* controls */}
      <div style={{maxWidth:'var(--container)',margin:'0 auto',padding:'var(--space-6) var(--space-6) 0',display:'flex',alignItems:'center',gap:'var(--space-4)',flexWrap:'wrap'}}>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--text-3xl)',fontWeight:600,marginRight:'auto'}}>Topic timeline</h2>
        <Tabs value={range} onChange={setRange} items={[{value:'all',label:'All time'},{value:'5y',label:'5 years'},{value:'1y',label:'This year'}]} />
        <Button variant="secondary" onClick={()=>setShowFall(s=>!s)}>
          <Ic.Sliders/>{showFall ? 'Hide declining' : 'Show all'}
        </Button>
      </div>

      {/* timeline feed */}
      <div style={{maxWidth:'var(--container)',margin:'0 auto',padding:'var(--space-5) var(--space-6) var(--space-9)'}}>
        <div style={{position:'relative',paddingLeft:42}}>
          {/* spine */}
          <div style={{position:'absolute',left:14,top:8,bottom:8,width:2,background:'linear-gradient(180deg,var(--glow-500),var(--cobalt-500) 60%, transparent)'}}/>
          {years.map(yr => (
            <div key={yr} style={{marginBottom:'var(--space-6)'}}>
              <div style={{position:'relative',marginBottom:'var(--space-4)'}}>
                <span style={{position:'absolute',left:-42,top:-2,width:30,height:30,borderRadius:'50%',background:'var(--night-850)',border:'2px solid var(--glow-500)',boxShadow:'var(--glow-sm)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <span style={{width:8,height:8,borderRadius:'50%',background:'var(--glow-400)',boxShadow:'0 0 8px var(--glow-400)'}}/>
                </span>
                <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-xl)',color:'var(--text-display)',fontWeight:500,letterSpacing:'.02em'}}>{yr}</span>
                <span className="eyebrow" style={{marginLeft:10}}>{byYear[yr].length} {byYear[yr].length>1?'topics broke out':'topic broke out'}</span>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
                {byYear[yr].map(t => <TopicRow key={t.id} t={t} onOpen={onOpen} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

function TopicRow({ t, onOpen }) {
  const { Card, Badge, Tag, Sparkline } = window.SeleneDesignSystem_7655ad;
  const Ic = window.BinaIcons;
  const up = t.momentum === 'rise';
  return (
    <Card interactive glow={t.tier==='gold'} onClick={()=>onOpen(t.id)} padded={false}>
      <div style={{display:'flex',alignItems:'center',gap:'var(--space-5)',padding:'var(--space-5)'}}>
        <div style={{flex:1,minWidth:0}}>
          <div style={{display:'flex',alignItems:'center',gap:10,flexWrap:'wrap'}}>
            <h3 style={{fontFamily:'var(--font-display)',fontSize:'var(--text-3xl)',fontWeight:600,color:'var(--text-display)'}}>{t.name}</h3>
            <Badge tone={up?'rise':'fall'} dot>{up?'Rising':'Cooling'} {t.delta}</Badge>
            {t.tier==='gold' && <Badge tone="gold">{(()=>{return "Topic of the year"})()}</Badge>}
          </div>
          <p style={{font:'var(--type-body)',color:'var(--text-secondary)',marginTop:8,maxWidth:560}}>{t.blurb}</p>
          <div style={{display:'flex',gap:8,marginTop:14,flexWrap:'wrap'}}>
            {t.related.slice(0,3).map(r => <Tag key={r} hash>{r}</Tag>)}
          </div>
        </div>
        <div style={{flex:'none',textAlign:'right',display:'flex',flexDirection:'column',alignItems:'flex-end',gap:8}}>
          <Sparkline data={t.series} tone={up?'rise':'fall'} width={160} height={48} />
          <div style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-xs)',color:'var(--text-muted)',letterSpacing:'.06em'}}>
            <Ic.Clock style={{verticalAlign:'-2px',marginRight:4}}/>PEAK {t.peak.toUpperCase()} · {t.mentions}
          </div>
        </div>
      </div>
    </Card>
  );
}
window.TimelineHome = TimelineHome;
