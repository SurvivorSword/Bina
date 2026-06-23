/* Bina app — top navigation bar */
function TopBar({ onHome }) {
  const { IconButton, Avatar, Input } = window.SeleneDesignSystem_7655ad;
  const Ic = window.BinaIcons;
  return (
    <header style={{
      position:'sticky', top:0, zIndex:20,
      display:'flex', alignItems:'center', gap:'var(--space-5)',
      padding:'14px var(--space-6)',
      borderBottom:'1px solid var(--border-strong)',
      background:'color-mix(in oklch, var(--night-950) 72%, transparent)',
      backdropFilter:'var(--blur-glass)', WebkitBackdropFilter:'var(--blur-glass)',
    }}>
      <button onClick={onHome} style={{display:'flex',alignItems:'center',gap:10,background:'none',border:0,cursor:'pointer',padding:0}}>
        <img src="../../assets/bina-mark.svg" alt="" style={{width:32,height:32,filter:'drop-shadow(0 0 12px color-mix(in oklch,var(--glow-400) 55%,transparent))'}} />
        <span style={{fontFamily:'var(--font-display)',fontWeight:600,fontSize:26,color:'var(--text-display)',letterSpacing:'-.01em'}}>Bina</span>
      </button>

      <nav style={{display:'flex',gap:4,marginLeft:8}}>
        {['Explore','Trending','Atlas'].map((t,i)=>(
          <span key={t} style={{
            font:'var(--type-label)', color:i===0?'var(--text-primary)':'var(--text-secondary)',
            padding:'.4rem .7rem', borderRadius:'var(--radius-sm)',
            background:i===0?'var(--surface-hover)':'transparent', cursor:'pointer'
          }}>{t}</span>
        ))}
      </nav>

      <div style={{flex:1,maxWidth:380,marginLeft:'auto'}}>
        <Input icon={<Ic.Search/>} placeholder="Search 1,240 topics…" />
      </div>

      <IconButton variant="solid" label="Alerts"><Ic.Bell/></IconButton>
      <Avatar name="Mei Tanaka" ring />
    </header>
  );
}
window.TopBar = TopBar;
