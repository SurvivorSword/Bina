/* Bina app — single topic detail */
function TopicDetail({ topicId, onOpen, onBack }) {
  const { Card, Badge, Tag, Button, Sparkline, IconButton, Tooltip } = window.SeleneDesignSystem_7655ad;
  const Ic = window.BinaIcons;
  const D = window.BINA_DATA;
  const t = D.topics.find(x => x.id === topicId) || D.topics[0];
  const up = t.momentum === 'rise';
  const milestones = D.milestones[t.id] || [
    { date:t.peak, label:'Reached peak attention across the index' },
    { date:'—', label:'First appeared in the Bina corpus' },
  ];

  return (
    <main style={{maxWidth:'var(--container)',margin:'0 auto',padding:'var(--space-6) var(--space-6) var(--space-9)'}}>
      <Button variant="ghost" size="sm" onClick={onBack} style={{marginBottom:'var(--space-5)'}}>
        <Ic.ArrowLeft/>Back to timeline
      </Button>

      {/* header */}
      <div style={{display:'flex',alignItems:'flex-start',gap:'var(--space-5)',flexWrap:'wrap'}}>
        <div style={{flex:1,minWidth:280}}>
          <div className="eyebrow" style={{color:'var(--glow-300)'}}>Broke out in {t.year} · peak {t.peak}</div>
          <h1 style={{fontSize:'var(--text-6xl)',fontWeight:500,letterSpacing:'-.02em',margin:'8px 0 12px'}}>{t.name}</h1>
          <p style={{font:'var(--type-body)',fontSize:'var(--text-lg)',color:'var(--night-200)',maxWidth:620}}>{t.blurb}</p>
          <div style={{display:'flex',gap:10,marginTop:16,alignItems:'center',flexWrap:'wrap'}}>
            <Badge tone={up?'rise':'fall'} dot>{up?'Rising':'Cooling'} {t.delta}</Badge>
            {t.tier==='gold' && <Badge tone="gold">Topic of the year</Badge>}
            <Button variant="primary" size="sm"><Ic.Bell/>Track this topic</Button>
            <IconButton variant="solid" label="Share"><Ic.Link/></IconButton>
          </div>
        </div>
      </div>

      {/* momentum chart */}
      <Card glow style={{marginTop:'var(--space-6)'}} padded={false}>
        <div style={{padding:'var(--space-5) var(--space-5) 0',display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
          <h2 style={{fontFamily:'var(--font-body)',fontWeight:700,fontSize:'var(--text-xl)',color:'var(--text-primary)'}}>Momentum, 2017 → now</h2>
          <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-sm)',color:up?'var(--signal-rise)':'var(--signal-fall)'}}>
            {up?'▲':'▼'} {t.delta} <span style={{color:'var(--text-muted)'}}>vs. prior quarter</span>
          </span>
        </div>
        <div style={{padding:'var(--space-4) var(--space-5) var(--space-5)'}}>
          <Sparkline data={t.series} tone={up?'rise':'fall'} width={1100} height={150} strokeWidth={2.5} style={{width:'100%',height:150}} />
        </div>
      </Card>

      {/* stats + milestones */}
      <div style={{display:'grid',gridTemplateColumns:'1fr 1.4fr',gap:'var(--space-5)',marginTop:'var(--space-5)'}}>
        <Card>
          <div className="eyebrow">By the numbers</div>
          <div style={{display:'flex',flexDirection:'column',gap:'var(--space-4)',marginTop:'var(--space-4)'}}>
            {[['Total signals',t.mentions],['Peak month',t.peak],['First seen',String(t.year)],['Momentum',t.delta]].map(([k,v])=>(
              <div key={k} style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',borderBottom:'1px solid var(--border-strong)',paddingBottom:10}}>
                <span style={{font:'var(--type-label)',color:'var(--text-secondary)'}}>{k}</span>
                <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-lg)',color:'var(--text-display)'}}>{v}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="eyebrow">Key moments</div>
          <div style={{position:'relative',paddingLeft:26,marginTop:'var(--space-4)'}}>
            <div style={{position:'absolute',left:5,top:6,bottom:6,width:2,background:'linear-gradient(180deg,var(--glow-500),transparent)'}}/>
            {milestones.map((m,i)=>(
              <div key={i} style={{position:'relative',marginBottom:'var(--space-4)'}}>
                <span style={{position:'absolute',left:-26,top:3,width:12,height:12,borderRadius:'50%',background:'var(--glow-400)',boxShadow:'0 0 8px var(--glow-400)'}}/>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-xs)',color:'var(--glow-300)',letterSpacing:'.06em'}}>{m.date}</div>
                <div style={{font:'var(--type-body)',color:'var(--text-primary)',marginTop:3}}>{m.label}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* related */}
      <div style={{marginTop:'var(--space-6)'}}>
        <div className="eyebrow" style={{marginBottom:12}}>Related topics</div>
        <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
          {t.related.map(r => <Tag key={r} hash onClick={()=>{}}>{r}</Tag>)}
        </div>
      </div>

      {/* neighbors */}
      <div style={{marginTop:'var(--space-6)'}}>
        <div className="eyebrow" style={{marginBottom:12}}>Also breaking out</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-4)'}}>
          {D.topics.filter(x=>x.id!==t.id).slice(0,3).map(n=>(
            <Card key={n.id} interactive onClick={()=>onOpen(n.id)}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:10}}>
                <h4 style={{fontFamily:'var(--font-display)',fontSize:'var(--text-2xl)',fontWeight:600,color:'var(--text-display)'}}>{n.name}</h4>
                <Badge tone={n.momentum==='rise'?'rise':'fall'}>{n.delta}</Badge>
              </div>
              <div style={{marginTop:12}}><Sparkline data={n.series} tone={n.momentum==='rise'?'rise':'fall'} width={240} height={40} style={{width:'100%'}}/></div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
window.TopicDetail = TopicDetail;
