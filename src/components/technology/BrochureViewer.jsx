export default function BrochureViewer() {
  return (
    <section style={{ background: '#D4D3DC', padding: '80px 0 80px' }}>
      <div style={{ maxWidth: '210mm', margin: '0 auto', padding: '0 16px' }}>
        <div className="brochure-header-bar">
          <h1>Capabilities Brochure · 2026</h1>
          <button className="brochure-print-btn" onClick={() => window.print()}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="6 9 6 2 18 2 18 9"/>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
              <rect x="6" y="14" width="12" height="8"/>
            </svg>
            Print / Save PDF
          </button>
        </div>
      </div>

      <div className="brochure-viewer" style={{ marginTop: 0, padding: '16px 16px 0' }}>

        {/* PAGE 1: COVER */}
        <section className="br-page br-cover">
          <div className="br-cover-img">
            <img src="/brochure/hero-cover.jpg" alt="Industrial phosphating bath" fetchPriority="high" />
          </div>
          <div className="br-cover-over"></div>
          <div className="br-cover-wm">Zn₃(PO₄)₂ · FePO₄ · Mn₃(PO₄)₂</div>
          <div className="br-cover-vrule"></div>
          <div className="br-cover-eyebrow-line"><span>Capabilities Overview</span></div>
          <div className="br-cover-inner">
            <div className="br-cover-top">
              <div className="br-logo-mark">
                <svg width="38" height="44" aria-hidden="true" viewBox="0 0 30 34" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M11 4 H19" strokeLinecap="round"/>
                  <path d="M12 4 V11 L6 26 Q5 30 9 30 H21 Q25 30 24 26 L18 11 V4" strokeLinejoin="round"/>
                  <path d="M9 22 H21" opacity="0.6"/>
                  <circle cx="13" cy="25" r="0.8" fill="currentColor" stroke="none"/>
                  <circle cx="17" cy="24" r="0.8" fill="currentColor" stroke="none"/>
                </svg>
                <div>
                  <div className="br-logo-name">MACRO COATS P LTD</div>
                  <div className="br-logo-sub">Formerly Technical Electroless Chemical Co.</div>
                </div>
              </div>
            </div>
            <div className="br-cover-bottom">
              <div>
                <p className="br-cover-vp">Surface Treatment Is<br/><em>a System, Not a Product.</em></p>
                <p className="br-cover-tagline">Chemistry engineered to your water profile,<br/>throughput, and compliance requirements.</p>
              </div>
              <div className="br-cover-stamp">Capabilities | 2026<br/>Est. 1993 · Chennai, India</div>
            </div>
          </div>
        </section>

        {/* PAGE 2: COMPANY OVERVIEW */}
        <section className="br-page">
          <div className="br-ledge"></div>
          <div className="br-p-in">
            <div className="br-eyebrow">Who We Are</div>
            <h1 className="br-hl">Thirty Years of Industrial<br/>Chemistry. Zero Stock Formulations.</h1>
            <p className="br-lede">MacroCoats engineers conversion coatings around your operation — not off a shelf. Since 1993, we've served Indian Railways, automotive OEMs, fastener manufacturers, and heavy engineering facilities. Every formulation is built around your water chemistry, metal substrate, throughput targets, and compliance obligations.</p>

            <div className="br-stat-band">
              <div className="br-stat-cell"><div className="br-stat-num">1993</div><div className="br-stat-lbl">Established</div></div>
              <div className="br-stat-cell"><div className="br-stat-num">30<span style={{fontSize:'0.5em',verticalAlign:'super'}}>+</span></div><div className="br-stat-lbl">Years R&D</div></div>
              <div className="br-stat-cell"><div className="br-stat-num">500<span style={{fontSize:'0.5em',verticalAlign:'super'}}>+</span></div><div className="br-stat-lbl">Industrial Clients</div></div>
              <div className="br-stat-cell"><div className="br-stat-num">100<span style={{fontSize:'0.5em',verticalAlign:'super'}}>%</span></div><div className="br-stat-lbl">Custom Formulation</div></div>
            </div>

            <div className="br-eyebrow">The MacroCoats Approach</div>
            <h2 className="br-sh">We Begin With Your Constraints.</h2>
            <p className="br-body" style={{marginBottom:'4mm'}}>Most suppliers deliver a concentrate and leave. MacroCoats engineers the full pre-treatment system — from your first rinse tank to your final passivation stage. The result holds specification across every shift, every operator, and every season.</p>

            <div className="br-pillars">
              <div className="br-pillar">
                <div className="br-pil-lbl">Water-Smart Chemistry</div>
                <p className="br-pil-body">Every molecule matched to your incoming water hardness, chloride load, and dissolved iron. Real process intelligence, not guesswork.</p>
              </div>
              <div className="br-pillar">
                <div className="br-pil-lbl">Real-Time Confirmation</div>
                <p className="br-pil-body">Salt spray validation, paint adhesion testing, crystal microscopy. Every batch certified before dispatch.</p>
              </div>
              <div className="br-pillar">
                <div className="br-pil-lbl">Global Standards Built In</div>
                <p className="br-pil-body">REACH-registered, RoHS-compliant, EU ELV-certified, IS 6005:2011, ISO 9001:2015, BIS-approved. Chrome-free options available.</p>
              </div>
            </div>

            <div className="br-ind-strip">
              <div className="br-ind-lbl">Industries<br/>Served</div>
              <div className="br-ind-cell">
                <svg className="br-ind-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 16 V11 L6 8 H18 L21 11 V16 H18 Q18 18 16 18 Q14 18 14 16 H10 Q10 18 8 18 Q6 18 6 16 Z"/><line x1="6" y1="11" x2="18" y2="11" opacity="0.5"/></svg>
                <div><div className="br-ind-name">Automotive</div><div className="br-ind-meta">Zn · Fe</div></div>
              </div>
              <div className="br-ind-cell">
                <svg className="br-ind-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="3"/><line x1="8" y1="11" x2="8" y2="20"/><path d="M5 14 H11" opacity="0.5"/><circle cx="17" cy="16" r="2.5"/><line x1="17" y1="13.5" x2="17" y2="6"/></svg>
                <div><div className="br-ind-name">Fasteners &amp; Hardware</div><div className="br-ind-meta">Zn · Mn</div></div>
              </div>
              <div className="br-ind-cell">
                <svg className="br-ind-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 3V6 M12 18V21 M3 12H6 M18 12H21 M5.5 5.5L7.5 7.5 M16.5 16.5L18.5 18.5 M5.5 18.5L7.5 16.5 M16.5 7.5L18.5 5.5"/></svg>
                <div><div className="br-ind-name">Heavy Engineering</div><div className="br-ind-meta">Mn · Fe</div></div>
              </div>
              <div className="br-ind-cell">
                <svg className="br-ind-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6 L21 6 L18 12 L21 18 L3 18 L6 12 Z"/><line x1="6" y1="12" x2="18" y2="12" opacity="0.5"/></svg>
                <div><div className="br-ind-name">Rail &amp; Defence</div><div className="br-ind-meta">Fe · Zn</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* PAGE 3: PROCESS */}
        <section className="br-page">
          <div className="br-ledge"></div>
          <div className="br-p-in">
            <div className="br-eyebrow">Process Methodology</div>
            <h1 className="br-hl" style={{fontSize:'19pt',marginBottom:'0.5mm'}}>Four Verified Stages</h1>
            <p className="br-body" style={{fontStyle:'italic',color:'var(--br-muted)',marginBottom:'3mm'}}>From surface prep through corrosion protection — every step controlled.</p>

            <div className="br-stages">
              <div className="br-stage-row br-sv-01">
                <div className="br-s-vis">
                  <img src="/brochure/stage-01-surface-prep.jpg" alt="Surface preparation" loading="lazy"/>
                  <div className="br-s-tint"></div>
                  <div className="br-s-badge">
                    <div className="br-s-num">Stage 01</div>
                    <div className="br-s-name">Surface Preparation</div>
                    <div className="br-s-spec">pH 12.4 · 65°C · Alkaline Degrease</div>
                  </div>
                </div>
                <div className="br-s-ct">
                  <div className="br-sct-eyebrow">Clean &amp; Activate</div>
                  <div className="br-sct-title">Surface Preparation</div>
                  <p className="br-sct-body">Low-sludge degreasers strip oils and oxides without residue buildup. Custom pre-dip conditioners prime the substrate for maximum phosphate nucleation — cutting cycle time and improving coating uniformity across complex part geometry.</p>
                </div>
              </div>
              <div className="br-stage-row br-sv-02 rev">
                <div className="br-s-ct">
                  <div className="br-sct-eyebrow">Crystal Control</div>
                  <div className="br-sct-title">Conversion Coating</div>
                  <p className="br-sct-body">Engineered accelerators reduce immersion time 20–40% while achieving tighter crystal refinement. Iron, zinc, and manganese chemistries tailored to your temperature, throughput, and coating-weight targets.</p>
                </div>
                <div className="br-s-vis">
                  <img src="/brochure/stage-02-barrel-plating.jpg" alt="Conversion coating" loading="lazy"/>
                  <div className="br-s-tint"></div>
                  <div className="br-s-badge">
                    <div className="br-s-num">Stage 02</div>
                    <div className="br-s-name">Conversion Coating</div>
                    <div className="br-s-spec">Zn₃(PO₄)₂ · 4H₂O</div>
                  </div>
                </div>
              </div>
              <div className="br-stage-row br-sv-03">
                <div className="br-s-vis">
                  <img src="/brochure/stage-03-ph-meter.jpg" alt="In-process verification" loading="lazy"/>
                  <div className="br-s-tint"></div>
                  <div className="br-s-badge">
                    <div className="br-s-num">Stage 03</div>
                    <div className="br-s-name">In-Process Verification</div>
                    <div className="br-s-spec">ASTM B117 · IS 6005 · 1.5–4.5 g/m²</div>
                  </div>
                </div>
                <div className="br-s-ct">
                  <div className="br-sct-eyebrow">Real-Time Assurance</div>
                  <div className="br-sct-title">In-Process Verification</div>
                  <p className="br-sct-body">IoT-enabled bath monitoring with sub-30-second alert-to-correction response. Out-of-spec conditions trigger action before parts are coated. Dashboards display accelerator ratio, crystal density, bath age, and contamination trends.</p>
                </div>
              </div>
              <div className="br-stage-row br-sv-04 rev">
                <div className="br-s-ct">
                  <div className="br-sct-eyebrow">Durability Engineered In</div>
                  <div className="br-sct-title">Corrosion Protection</div>
                  <p className="br-sct-body">Rust preventive oils and sealers extend performance to 1,000-hour salt spray. Chrome-free passivation for aluminium and stainless meets EU ELV and REACH without sacrificing durability.</p>
                </div>
                <div className="br-s-vis">
                  <img src="/brochure/stage-04-powder-coating.jpg" alt="Corrosion protection" loading="lazy"/>
                  <div className="br-s-tint"></div>
                  <div className="br-s-badge">
                    <div className="br-s-num">Stage 04</div>
                    <div className="br-s-name">Corrosion Protection</div>
                    <div className="br-s-spec">Cr-FREE · Low-Sludge · 1000h Salt Spray</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="br-iot">
              <div>
                <div className="br-eyebrow" style={{color:'var(--br-violet-s)'}}>IoT Intelligence</div>
                <div className="br-iot-h">Smart Bath Management — <em>Real-Time Control</em></div>
                <p className="br-iot-b">Sensors embedded in your bath monitor accelerator stability, crystal density, contamination, and temperature continuously. Alerts within 30 seconds of drift stop defects before they reach the part.</p>
              </div>
              <div className="br-iot-stats">
                <div className="br-iot-stat"><div className="br-iot-n">&lt; 30s</div><div className="br-iot-l">Alert to auto-dose correction</div></div>
                <div className="br-iot-stat"><div className="br-iot-n">24/7</div><div className="br-iot-l">Continuous monitoring, no shift gaps</div></div>
                <div className="br-iot-stat"><div className="br-iot-n">±0.1</div><div className="br-iot-l">pH accuracy across all tanks</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* PAGE 4: PHOSPHATING */}
        <section className="br-page">
          <div className="br-ledge"></div>
          <div className="br-p-in">
            <div className="br-prod-hdr">
              <div>
                <div className="br-eyebrow">Product Portfolio — Phosphating</div>
                <h1 className="br-hl" style={{fontSize:'19pt',marginBottom:'0.5mm'}}>Phosphating: Foundation of Every Surface</h1>
                <p className="br-prod-intro">Iron, zinc, and manganese phosphate — three base chemistries for specific substrates, load profiles, and downstream requirements. Room-temperature to hot-accelerated processes, all stress-tested in real production.</p>
              </div>
              <div className="br-prod-count"><strong>7</strong>Products</div>
            </div>
            <div className="br-g2">
              <div className="br-pc">
                <div className="br-pc-hd">
                  <div className="br-pc-code">UNIKOAT ZN-NI</div>
                  <div className="br-pc-name">Zinc-Nickel Phosphate</div>
                  <div className="br-pc-spec">[Zn-Ni Hopeite · 40–55°C]</div>
                </div>
                <div className="br-pc-bd">
                  <p className="br-pc-desc">Premium zinc phosphating with nickel/manganese accelerators. Suppresses phosphophyllite formation, refines crystals to 2–4 µm — superior adhesion and corrosion resistance under CED/KTL electrocoat.</p>
                  <ul className="br-pc-uses">
                    <li>Automotive body-in-white for CED/KTL</li>
                    <li>Two-wheeler frames and fuel tanks</li>
                    <li>Tier-1 stamped components for paint audits</li>
                  </ul>
                </div>
                <div className="br-pc-tags"><span className="br-tag br-ti">OEM Premium</span><span className="br-tag br-tm">CED/KTL Ready</span><span className="br-tag br-ti">2–4 µm Crystal</span></div>
              </div>
              <div className="br-pc">
                <div className="br-pc-hd">
                  <div className="br-pc-code">UNIKOAT LT450</div>
                  <div className="br-pc-name">Zinc Phosphate Hot</div>
                  <div className="br-pc-spec">[Zn₃(PO₄)₂ · 40–60°C · 4–10 g/m²]</div>
                </div>
                <div className="br-pc-bd">
                  <p className="br-pc-desc">Standard-temperature zinc phosphating for OEM paint adhesion in 7-stage immersion or spray-immersion. Hopeite/phosphophyllite structure optimised for primer and topcoat corrosion performance.</p>
                  <ul className="br-pc-uses">
                    <li>Tier-1/2 automotive stamped body parts</li>
                    <li>White goods requiring 240h+ salt spray</li>
                    <li>Agricultural and construction equipment</li>
                  </ul>
                </div>
                <div className="br-pc-tags"><span className="br-tag br-ti">OEM Validated</span><span className="br-tag br-tm">7-Stage</span><span className="br-tag br-ti">240h+ Salt Spray</span></div>
              </div>
            </div>
            <div className="br-g3">
              <div className="br-pc">
                <div className="br-pc-hd">
                  <div className="br-pc-code">UNIKOAT LT700</div>
                  <div className="br-pc-name">Zinc Phosphate RT Heavy</div>
                  <div className="br-pc-spec">[Ambient · 7–15 g/m²]</div>
                </div>
                <div className="br-pc-bd">
                  <p className="br-pc-desc">Room-temperature heavy-coat zinc phosphating. Comparable performance to heated processes on ferrous substrates with 40–60% energy savings.</p>
                  <ul className="br-pc-uses">
                    <li>Energy-sensitive lines, no heating</li>
                    <li>Heavy engineering and structural steel</li>
                  </ul>
                </div>
                <div className="br-pc-tags"><span className="br-tag br-ti">Ambient</span><span className="br-tag br-te">No Heating</span><span className="br-tag br-ti">Energy Save</span></div>
              </div>
              <div className="br-pc">
                <div className="br-pc-hd">
                  <div className="br-pc-code">UNIKOAT LT450-RT</div>
                  <div className="br-pc-name">Zinc Phosphate RT Fine</div>
                  <div className="br-pc-spec">[Ambient · Fine Crystal · 2–5 g/m²]</div>
                </div>
                <div className="br-pc-bd">
                  <p className="br-pc-desc">Room-temperature fine-crystal zinc phosphating optimised for paint adhesion. Maximum paint anchor surface area on tight-tolerance parts.</p>
                  <ul className="br-pc-uses">
                    <li>Pre-paint for powder coat on steel</li>
                    <li>Tight-tolerance / thin-wall stampings</li>
                  </ul>
                </div>
                <div className="br-pc-tags"><span className="br-tag br-ti">Fine Crystal</span><span className="br-tag br-tm">Paint Optimised</span></div>
              </div>
              <div className="br-pc">
                <div className="br-pc-hd">
                  <div className="br-pc-code">UNIKOAT LT2000</div>
                  <div className="br-pc-name">Zinc Phosphate 70°C Heavy</div>
                  <div className="br-pc-spec">[65–75°C · 15–25 g/m²]</div>
                </div>
                <div className="br-pc-bd">
                  <p className="br-pc-desc">High-temperature, heavy-coat zinc phosphating for maximum standalone corrosion protection. Salt spray exceeds 500 hours on coated and passivated ferrous substrates.</p>
                  <ul className="br-pc-uses">
                    <li>Heavy engineering, coastal environments</li>
                    <li>Railway wagon structures</li>
                  </ul>
                </div>
                <div className="br-pc-tags"><span className="br-tag br-ti">Heavy Duty</span><span className="br-tag br-tm">500h+ Salt Spray</span></div>
              </div>
            </div>
            <div className="br-g2">
              <div className="br-pc">
                <div className="br-pc-hd br-pc-hd--fe">
                  <div className="br-pc-code">UNI-IRON PHOSPHATE</div>
                  <div className="br-pc-name">Iron Phosphate</div>
                  <div className="br-pc-spec">[FePO₄ · Amorphous · 45–65°C · 0.3–1 g/m²]</div>
                </div>
                <div className="br-pc-bd">
                  <p className="br-pc-desc">Thin amorphous conversion layer for ferrous and galvanised substrates. Iridescent or grey-blue finish improves paint adhesion in a compact 3–5 stage process.</p>
                  <ul className="br-pc-uses">
                    <li>Household appliances before powder coat</li>
                    <li>Steel furniture, doors, and frames</li>
                    <li>Agricultural implements and hand tools</li>
                  </ul>
                </div>
                <div className="br-pc-tags"><span className="br-tag br-te">Low Sludge</span><span className="br-tag br-ti">3–5 Stage</span><span className="br-tag br-ti">Economical</span></div>
              </div>
              <div className="br-pc">
                <div className="br-pc-hd br-pc-hd--mn">
                  <div className="br-pc-code">UNI-MANGANESE PHOS</div>
                  <div className="br-pc-name">Manganese Phosphate</div>
                  <div className="br-pc-spec">[Mn₃(PO₄)₂ · 80–98°C · 5–30 g/m²]</div>
                </div>
                <div className="br-pc-bd">
                  <p className="br-pc-desc">Heavy crystalline manganese phosphating producing dense dark grey-black structure with exceptional lubricity and wear resistance. Oil-retaining morphology provides sustained break-in lubrication.</p>
                  <ul className="br-pc-uses">
                    <li>Gearbox gears, shafts, synchroniser rings</li>
                    <li>Railway axles, couplings, and bogies</li>
                    <li>Military small arms and firearm components</li>
                  </ul>
                </div>
                <div className="br-pc-tags"><span className="br-tag br-tm">Oil Retaining</span><span className="br-tag br-ti">Anti-Galling</span><span className="br-tag br-ti">5–30 g/m²</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* PAGE 5: SURFACE PREPARATION */}
        <section className="br-page">
          <div className="br-ledge"></div>
          <div className="br-p-in">
            <div className="br-prod-hdr">
              <div>
                <div className="br-eyebrow">Product Portfolio — Surface Preparation</div>
                <h1 className="br-hl" style={{fontSize:'19pt',marginBottom:'0.5mm'}}>Clean Surfaces Begin With Smart Degreasing</h1>
                <p className="br-prod-intro">Low-sludge degreasers, titanium conditioners, inhibited acids, and combination chemistries. Every cleaner removes contamination without compromising the substrate.</p>
              </div>
              <div className="br-prod-count"><strong>6</strong>Products</div>
            </div>
            <div className="br-g3">
              <div className="br-pc">
                <div className="br-pc-hd">
                  <div className="br-pc-code">UNICLEAN-AL</div>
                  <div className="br-pc-name">Degreasing — Aluminium</div>
                  <div className="br-pc-spec">[Alkaline · pH 10–11.5]</div>
                </div>
                <div className="br-pc-bd">
                  <p className="br-pc-desc">Mildly alkaline aqueous degreaser formulated for aluminium and alloys. Removes stamping oils and machining coolants without attacking the native oxide layer. Low-foam; spray or immersion.</p>
                  <ul className="br-pc-uses">
                    <li>Al extrusion and sheet before passivation</li>
                    <li>Automotive die-cast parts before powder coat</li>
                    <li>Precision Al components before anodising</li>
                  </ul>
                </div>
                <div className="br-pc-tags"><span className="br-tag br-ti">Non-Etching</span><span className="br-tag br-te">Low Foam</span><span className="br-tag br-ti">Al Safe</span></div>
              </div>
              <div className="br-pc">
                <div className="br-pc-hd">
                  <div className="br-pc-code">UNICLEAN SP</div>
                  <div className="br-pc-name">Degreasing SP (Heavy Duty)</div>
                  <div className="br-pc-spec">[Alkaline · pH 11–13 · High Load]</div>
                </div>
                <div className="br-pc-bd">
                  <p className="br-pc-desc">Heavy-duty alkaline degreaser for removal of heavy forming oils, stamping lubricants, neat cutting oils, and anti-rust compounds from ferrous and non-ferrous metal.</p>
                  <ul className="br-pc-uses">
                    <li>Automotive stamped steel with deep-draw oils</li>
                    <li>Machined components with neat cutting oils</li>
                    <li>Heavy fabrications before phosphating</li>
                  </ul>
                </div>
                <div className="br-pc-tags"><span className="br-tag br-ti">Heavy Duty</span><span className="br-tag br-tm">High Alkali</span><span className="br-tag br-ti">Fe / NF</span></div>
              </div>
              <div className="br-pc">
                <div className="br-pc-hd">
                  <div className="br-pc-code">UNISOLVE H3</div>
                  <div className="br-pc-name">De-Rust (Heavy Duty)</div>
                  <div className="br-pc-spec">[HCl · Inhibited · High Strength]</div>
                </div>
                <div className="br-pc-bd">
                  <p className="br-pc-desc">Inhibited HCl-based de-rusting for rapid removal of heavy rust, mill scale, and weld spatter. Inhibitor package prevents over-pickling and base metal attack.</p>
                  <ul className="br-pc-uses">
                    <li>Heavy rust on fabricated structural steel</li>
                    <li>Mill scale on hot-rolled sections</li>
                    <li>Weld spatter and heat scale removal</li>
                  </ul>
                </div>
                <div className="br-pc-tags"><span className="br-tag br-ti">High Strength</span><span className="br-tag br-tm">Mill Scale</span><span className="br-tag br-ti">Inhibited</span></div>
              </div>
            </div>
            <div className="br-g3">
              <div className="br-pc">
                <div className="br-pc-hd">
                  <div className="br-pc-code">UNISOLVE</div>
                  <div className="br-pc-name">De-Rust Chemical</div>
                  <div className="br-pc-spec">[H₂SO₄/H₃PO₄ · Inhibited]</div>
                </div>
                <div className="br-pc-bd">
                  <p className="br-pc-desc">Inhibited sulfuric/phosphoric acid for light-to-medium rust on ferrous metal. Lower hydrogen embrittlement risk; phosphoric acid variant leaves mild passivation in a single step.</p>
                  <ul className="br-pc-uses">
                    <li>Light rust on cold-rolled steel</li>
                    <li>High-tensile steel, H₂ embrittlement risk</li>
                  </ul>
                </div>
                <div className="br-pc-tags"><span className="br-tag br-te">Low HE Risk</span><span className="br-tag br-ti">Mild Passivation</span></div>
              </div>
              <div className="br-pc">
                <div className="br-pc-hd">
                  <div className="br-pc-code">UNICLEAN 3 IN 1</div>
                  <div className="br-pc-name">3-in-1 Combined Chemistry</div>
                  <div className="br-pc-spec">[Degrease + De-Rust + Phosphate · 1 Stage]</div>
                </div>
                <div className="br-pc-bd">
                  <p className="br-pc-desc">Single-stage chemistry that simultaneously degreases, removes light rust, and deposits a thin phosphate layer. Ideal for job-shops or field maintenance, eliminating three separate chemical stages.</p>
                  <ul className="br-pc-uses">
                    <li>Light-duty fabricated steel</li>
                    <li>Small job-shops without multi-stage lines</li>
                  </ul>
                </div>
                <div className="br-pc-tags"><span className="br-tag br-tm">3-in-1</span><span className="br-tag br-te">Low CapEx</span><span className="br-tag br-ti">Single Tank</span></div>
              </div>
              <div className="br-pc">
                <div className="br-pc-hd">
                  <div className="br-pc-code">UNIKSTRIP</div>
                  <div className="br-pc-name">Paint &amp; Scale Stripper</div>
                  <div className="br-pc-spec">[Alkaline · pH 13–14 · 60–80°C]</div>
                </div>
                <div className="br-pc-bd">
                  <p className="br-pc-desc">High-pH alkaline stripper for rework of miscoated or over-cured painted components. Saponifies and lifts cured powder coat, liquid paint, and epoxy primer without attacking the base metal.</p>
                  <ul className="br-pc-uses">
                    <li>Rework of over-cured powder-coated steel</li>
                    <li>Scale and deposit removal from jigs/hooks</li>
                  </ul>
                </div>
                <div className="br-pc-tags"><span className="br-tag br-ti">Paint Strip</span><span className="br-tag br-te">Base Metal Safe</span><span className="br-tag br-tm">Jig Cleaning</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* PAGE 6: PASSIVATION + BATH AUXILIARIES */}
        <section className="br-page">
          <div className="br-ledge"></div>
          <div className="br-p-in">
            <div className="br-eyebrow">Passivation &amp; Sealing</div>
            <h2 className="br-sh" style={{marginBottom:'0.5mm'}}>Aluminium &amp; Steel: Protection Without Compromise</h2>
            <p className="br-body" style={{color:'var(--br-muted)',marginBottom:'3mm'}}>Chrome-free and chrome-based passivation — from MIL-DTL-5541 aerospace specification to REACH-compliant drop-in replacements.</p>

            <div className="br-pass-grid3">
              <div className="br-passc">
                <div className="br-passc-hd br-passc-hd--cr">
                  <div className="br-passc-code">UNIPASS-AL CHROME</div>
                  <div className="br-passc-name">Aluminium Passivation — Chrome</div>
                  <div className="br-passc-spec">[Cr⁶⁺ Conversion · Yellow Iridescent]</div>
                </div>
                <div className="br-passc-bd">
                  <p className="br-passc-desc">Hexavalent chromate conversion coating with self-healing mechanism. 200+ hours salt spray; excellent base for paints and adhesives.</p>
                </div>
                <div className="br-passc-tags"><span className="br-tag br-ti">200+ h</span><span className="br-tag br-tm">Self-Healing</span><span className="br-tag br-to">MIL-DTL-5541</span></div>
              </div>
              <div className="br-passc">
                <div className="br-passc-hd br-passc-hd--nc">
                  <div className="br-passc-code">UNIPASS-AL NON CHROME</div>
                  <div className="br-passc-name">Aluminium Passivation — Chrome Free</div>
                  <div className="br-passc-spec">[Zr/Ti Complex · REACH Compliant]</div>
                </div>
                <div className="br-passc-bd">
                  <p className="br-passc-desc">Zirconium/titanium-based Cr-free coating. 120–160 hours salt spray. Full REACH, RoHS, EU ELV compliance. Validated drop-in for chrome systems.</p>
                </div>
                <div className="br-passc-tags"><span className="br-tag br-te">REACH</span><span className="br-tag br-te">RoHS</span><span className="br-tag br-te">EU ELV</span></div>
              </div>
              <div className="br-passc">
                <div className="br-passc-hd br-passc-hd--st">
                  <div className="br-passc-code">UNIPASS-AL</div>
                  <div className="br-passc-name">Aluminium Passivation — Standard</div>
                  <div className="br-passc-spec">[Phosphate Blend · Clear Film]</div>
                </div>
                <div className="br-passc-bd">
                  <p className="br-passc-desc">Standard-duty aluminium passivation. Clear uniform coating. 72–120 hours salt spray. Compatible with powder coat, liquid paint, and lacquer at minimal cost.</p>
                </div>
                <div className="br-passc-tags"><span className="br-tag br-ti">Clear Film</span><span className="br-tag br-te">Low Cost</span><span className="br-tag br-ti">Paint Compatible</span></div>
              </div>
            </div>

            <div className="br-pass-grid2">
              <div className="br-passc">
                <div className="br-passc-hd br-passc-hd--cr">
                  <div className="br-passc-code">UNIPASS-FE CHROME</div>
                  <div className="br-passc-name">Iron Passivation — Chrome Based</div>
                  <div className="br-passc-spec">[Cr⁶⁺ Sealer · Post-Phosphate]</div>
                </div>
                <div className="br-passc-bd">
                  <p className="br-passc-desc">Hexavalent chromium post-phosphate sealer. Self-healing mechanism delivers 40–60% higher corrosion resistance than chrome-free alternatives. 200+ hours salt spray.</p>
                </div>
                <div className="br-passc-tags"><span className="br-tag br-ti">200+ h</span><span className="br-tag br-tm">Self-Healing</span><span className="br-tag br-ti">Post-Phosphate</span></div>
              </div>
              <div className="br-passc">
                <div className="br-passc-hd br-passc-hd--nc">
                  <div className="br-passc-code">UNIPASS-FE NON CHROME</div>
                  <div className="br-passc-name">Iron Passivation — Non Chrome</div>
                  <div className="br-passc-spec">[Zr/Organic · REACH Compliant]</div>
                </div>
                <div className="br-passc-bd">
                  <p className="br-passc-desc">Cr-free post-phosphate passivation sealer. 120–200 hours salt spray without REACH or EU ELV restriction. Validated direct Cr⁶⁺ replacement — zero equipment modification needed.</p>
                </div>
                <div className="br-passc-tags"><span className="br-tag br-te">REACH</span><span className="br-tag br-te">EU ELV</span><span className="br-tag br-te">Zero Cr⁶⁺</span></div>
              </div>
            </div>

            <div className="br-rule"></div>

            <div className="br-eyebrow">Bath Auxiliaries</div>
            <h2 className="br-sh" style={{fontSize:'12pt',marginBottom:'1mm'}}>Chemistry That Keeps Chemistry Working</h2>
            <p className="br-body" style={{color:'var(--br-muted)',marginBottom:'2.5mm'}}>Accelerators, conditioners, and rust preventives engineered to synergize with your base chemistry and water profile.</p>

            <div className="br-aux-grid">
              <div className="br-auxc">
                <div className="br-auxc-hd">
                  <div className="br-pc-code">UNIKCONDITIONER</div>
                  <div className="br-pc-name">Pre-Dip Conditioner (Ti Based)</div>
                  <div className="br-pc-spec">[Ti Colloid · pH 7–9]</div>
                </div>
                <div className="br-auxc-bd">
                  <p className="br-pc-desc" style={{fontSize:'7.5pt'}}>Titanium colloidal surface conditioner applied before zinc or manganese phosphating. Increases crystal nucleation density 10–100×, producing finer (2–5 µm) structures versus unconditioned metal (10–20 µm).</p>
                  <div className="br-pc-tags" style={{padding:'1.5mm 0 0'}}><span className="br-tag br-ti">Ti Colloid</span><span className="br-tag br-tm">Crystal Refiner</span></div>
                </div>
              </div>
              <div className="br-auxc">
                <div className="br-auxc-hd">
                  <div className="br-pc-code">UNIKTONER</div>
                  <div className="br-pc-name">Accelerator</div>
                  <div className="br-pc-spec">[NO₂⁻ / ClO₃⁻ · Oxidising]</div>
                </div>
                <div className="br-auxc-bd">
                  <p className="br-pc-desc" style={{fontSize:'7.5pt'}}>Oxidising bath accelerator removes hydrogen evolved during phosphating, preventing H₂ bubbles from blocking crystal growth sites. Reduces process time and improves coating uniformity on blind holes.</p>
                  <div className="br-pc-tags" style={{padding:'1.5mm 0 0'}}><span className="br-tag br-tm">Oxidising</span><span className="br-tag br-ti">20–40% Faster</span></div>
                </div>
              </div>
              <div className="br-auxc">
                <div className="br-auxc-hd">
                  <div className="br-pc-code">UNIKGUARD RPI</div>
                  <div className="br-pc-name">Rust Preventive Compound</div>
                  <div className="br-pc-spec">[Petroleum · Inhibitor Blend]</div>
                </div>
                <div className="br-auxc-bd">
                  <p className="br-pc-desc" style={{fontSize:'7.5pt'}}>Water-displacing rust preventive oil applied after phosphating or passivation. Thin, self-levelling petroleum film seals the crystal structure — 6–12 months inter-process protection during storage and transit.</p>
                  <div className="br-pc-tags" style={{padding:'1.5mm 0 0'}}><span className="br-tag br-ti">Water Displacing</span><span className="br-tag br-tm">6–12 Months</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PAGE 7: OILS + CERTIFICATIONS */}
        <section className="br-page">
          <div className="br-ledge"></div>
          <div className="br-p-in">
            <div className="br-eyebrow">Extended Portfolio</div>
            <h2 className="br-sh">Industrial Oils &amp; Process Fluids</h2>

            <div className="br-oils-wrap">
              <img className="br-oils-img" src="/brochure/oils-process-fluids.jpg" alt="Process Oils and Fluids" loading="lazy"/>
              <div style={{fontFamily:'var(--mono)',fontSize:'7.5pt',fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--br-muted)',marginBottom:'3mm'}}>Six Categories · Industrial Grade · Formulated for Indian Conditions</div>
              <div className="br-oils-grid">
                <div className="br-oil-cell">
                  <svg className="br-oil-ico" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 Q6 11 6 15 A6 6 0 0 0 18 15 Q18 11 12 3 Z"/></svg>
                  <div><div className="br-oil-name">Rust Preventive Oils</div><p className="br-oil-desc">Temporary corrosion protection for stored and transported components.</p></div>
                </div>
                <div className="br-oil-cell">
                  <svg className="br-oil-ico" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/><line x1="12" y1="3" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="21"/><line x1="3" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="21" y2="12"/></svg>
                  <div><div className="br-oil-name">Industrial Lubricants</div><p className="br-oil-desc">High-performance lubrication for bearings, gears, and sliding surfaces.</p></div>
                </div>
                <div className="br-oil-cell">
                  <svg className="br-oil-ico" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="12" height="16" rx="1"/><line x1="6" y1="9" x2="18" y2="9"/><path d="M9 14 H15 M9 17 H13" opacity="0.6"/></svg>
                  <div><div className="br-oil-name">Duncan Oil</div><p className="br-oil-desc">Specialty oil for electrical transformer maintenance and insulation.</p></div>
                </div>
                <div className="br-oil-cell">
                  <svg className="br-oil-ico" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 14 Q6 12 9 14 T15 14 T21 14"/><path d="M3 18 Q6 16 9 18 T15 18 T21 18" opacity="0.6"/><path d="M12 4 V11" opacity="0.6"/><circle cx="12" cy="6" r="1.2" fill="currentColor" stroke="none"/></svg>
                  <div><div className="br-oil-name">Coolants</div><p className="br-oil-desc">Water-based and semi-synthetic coolants for machining and grinding.</p></div>
                </div>
                <div className="br-oil-cell">
                  <svg className="br-oil-ico" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4 L20 20"/><path d="M16 4 L20 8 L16 12" opacity="0.7"/><path d="M8 12 L4 16 L8 20" opacity="0.7"/></svg>
                  <div><div className="br-oil-name">Cutting Oils</div><p className="br-oil-desc">Neat and soluble cutting oils for turning, milling, drilling, and tapping.</p></div>
                </div>
                <div className="br-oil-cell">
                  <svg className="br-oil-ico" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 4 Q4 9 4 13 A4 4 0 0 0 12 13 Q12 9 8 4 Z"/><path d="M16 18 L20 14 M16 14 L20 18" opacity="0.7"/></svg>
                  <div><div className="br-oil-name">Dewatering Fluids</div><p className="br-oil-desc">Displaces moisture from metal surfaces to prevent flash rust post-cleaning.</p></div>
                </div>
              </div>
            </div>

            <div className="br-rule"></div>

            <div className="br-eyebrow">Quality &amp; Compliance</div>
            <h2 className="br-sh" style={{fontSize:'12pt',marginBottom:'1mm'}}>Chemistry You Can Certify.</h2>
            <p className="br-body" style={{color:'var(--br-muted)',marginBottom:'3.5mm'}}>Every MacroCoats formulation is produced and documented to meet applicable Indian and international standards.</p>

            <div className="br-cert-grid">
              <div className="br-cert-card">
                <div className="br-cert-ico"><svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="3" width="20" height="26" rx="2"/><path d="M11 10h10M11 15h10M11 20h6"/></svg></div>
                <div className="br-cert-name">IS 6005 : 2011</div><div className="br-cert-sub">Phosphating Spec</div>
              </div>
              <div className="br-cert-card ci">
                <div className="br-cert-ico"><svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="16" cy="16" r="12"/><path d="M11 16l4 4 6-7"/></svg></div>
                <div className="br-cert-name">ISO 9001 : 2015</div><div className="br-cert-sub">Quality Mgmt</div>
              </div>
              <div className="br-cert-card ci">
                <div className="br-cert-ico"><svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="16,3 28,9 28,23 16,29 4,23 4,9"/><path d="M12 16l3 3 5-5"/></svg></div>
                <div className="br-cert-name">BIS Compliance</div><div className="br-cert-sub">Bureau of Standards</div>
              </div>
              <div className="br-cert-card ce">
                <div className="br-cert-ico"><svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3l2.5 8h8l-6.5 5 2.5 8L16 19l-6.5 5 2.5-8L5.5 11h8z"/></svg></div>
                <div className="br-cert-name">RoHS Compliant</div><div className="br-cert-sub">Hazardous Substances</div>
              </div>
              <div className="br-cert-card ce">
                <div className="br-cert-ico"><svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4l9 4.5V17c0 5.5-4 9.5-9 11-5-1.5-9-5.5-9-11V8.5L16 4z"/><path d="M12 16l3 3 6-6"/></svg></div>
                <div className="br-cert-name">Cr(VI)-Free</div><div className="br-cert-sub">Chromium-Free Available</div>
              </div>
              <div className="br-cert-card">
                <div className="br-cert-ico"><svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="16" cy="16" r="12"/><path d="M16 11v5" strokeWidth="2"/><circle cx="16" cy="20" r="1" fill="currentColor" stroke="none"/></svg></div>
                <div className="br-cert-name">MSDS Compliant</div><div className="br-cert-sub">Safety Data</div>
              </div>
            </div>
          </div>
        </section>

        {/* PAGE 8: CLIENTS + WHY + CONTACT */}
        <section className="br-page">
          <div className="br-ledge"></div>
          <div className="br-p-in" style={{paddingBottom:'16mm'}}>
            <div className="br-eyebrow">Trusted By</div>
            <h2 className="br-sh" style={{marginBottom:'2.5mm'}}>Major Clients &amp; Partners</h2>

            <div className="br-client-strip">
              <div className="br-client-logo"><img src="/images/logo-indian-railways.svg" alt="Indian Railways"/></div>
              <div className="br-client-logo"><img src="/images/logo-tvs.webp" alt="TVS Motor Company"/></div>
              <div className="br-client-logo"><img src="/images/logo-lnt.svg" alt="Larsen &amp; Toubro"/></div>
              <div className="br-client-logo"><img src="/images/logo-rane.webp" alt="Rane Group"/></div>
              <div className="br-client-logo"><img src="/images/logo-chemplast.webp" alt="Chemplast Sanmar"/></div>
              <div className="br-client-logo"><img src="/images/logo-tube-investments.webp" alt="Tube Investments"/></div>
            </div>

            <div className="br-rule"></div>

            <div className="br-eyebrow">Our Commitment</div>
            <h2 className="br-sh" style={{marginBottom:'2.5mm'}}>Why Choose Macro Coats?</h2>

            <div className="br-why-grid">
              <div className="br-why-card">
                <div className="br-why-ico-wrap">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12L10 17L19 7"/></svg>
                </div>
                <div>
                  <div className="br-why-name">Formulation Intelligence That Scales</div>
                  <p className="br-why-desc">Engineered chemistry scaled across your multi-location operations with zero batch variation. Consistency that your ISO 9001 auditors certify.</p>
                </div>
              </div>
              <div className="br-why-card">
                <div className="br-why-ico-wrap">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19 Q5 9 13 5 Q21 4 19 12 Q17 19 9 19 Z"/><path d="M5 19 Q11 14 17 8" opacity="0.7"/></svg>
                </div>
                <div>
                  <div className="br-why-name">Environmental Compliance Built In</div>
                  <p className="br-why-desc">Chrome-free passivation, low-sludge chemistries, REACH and RoHS registration. You meet modern standards today — no reformulation tomorrow.</p>
                </div>
              </div>
              <div className="br-why-card">
                <div className="br-why-ico-wrap">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="1.5"/><path d="M8 12L11 15L16 9"/></svg>
                </div>
                <div>
                  <div className="br-why-name">Bath Life That Justifies the Cost</div>
                  <p className="br-why-desc">Engineered accelerators stable 60+ days under your throughput and temperature. Fewer drum swaps. Fewer line stoppages. Lower cost-per-part.</p>
                </div>
              </div>
              <div className="br-why-card">
                <div className="br-why-ico-wrap">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 19 Q3 13 9 13 Q15 13 15 19"/><circle cx="17" cy="9" r="2"/><path d="M14 19 Q14 15 17 15 Q21 15 21 19"/></svg>
                </div>
                <div>
                  <div className="br-why-name">Process Chemists on Speed Dial</div>
                  <p className="br-why-desc">Real chemists with cross-industry experience. Troubleshooting, optimization, custom formulation — your technical partner, not a drum vendor.</p>
                </div>
              </div>
            </div>

            <div className="br-cta-band">
              <div className="br-cta-ey">Let's Engineer Your Process</div>
              <p className="br-cta-line">Stop Treating Surface Finishing <em>as a Commodity.</em></p>
              <div className="br-cta-accent"></div>
              <p className="br-cta-sub">Engineer chemistry around your operation. Get stability, durability, and compliance as one system.</p>
              <div className="br-cta-btn">Request Engineering Consultation</div>
            </div>

            <div className="br-contact-footer">
              <div className="br-contact-col">
                <h4>Contact</h4>
                <div className="br-contact-name">Macro Coats Pvt. Ltd.</div>
                <div className="br-contact-role">Formerly Tecco Pvt. Ltd. · Metal Surface Treatment Chemicals</div>
                <div className="br-contact-line">
                  Registered HQ — Chennai, Tamil Nadu, India<br/>
                  +91 98840 80377 &nbsp;·&nbsp;
                  <a href="mailto:info@macrocoats.in">info@macrocoats.in</a> &nbsp;·&nbsp;
                  <a href="https://macrocoats.in">macrocoats.in</a>
                </div>
              </div>
              <div></div>
              <div className="br-footer-logo">
                <div className="br-logo-mark" style={{color:'var(--br-navy)'}}>
                  <svg width="26" height="30" aria-hidden="true" viewBox="0 0 30 34" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M11 4 H19" strokeLinecap="round"/>
                    <path d="M12 4 V11 L6 26 Q5 30 9 30 H21 Q25 30 24 26 L18 11 V4" strokeLinejoin="round"/>
                    <path d="M9 22 H21" opacity="0.6"/>
                    <circle cx="13" cy="25" r="0.8" fill="currentColor" stroke="none"/>
                    <circle cx="17" cy="24" r="0.8" fill="currentColor" stroke="none"/>
                  </svg>
                  <div>
                    <div className="br-logo-name" style={{fontSize:'11pt',color:'var(--br-navy)'}}>MACROCOATS</div>
                    <div className="br-logo-sub" style={{textAlign:'right',fontSize:'7pt'}}>Surface Treatment Chemistry · Engineered for Your Process</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="br-abs-footer">
            <span className="br-abs-footer-text">© 2026 Macro Coats Pvt Ltd. All rights reserved.</span>
            <span className="br-abs-footer-text">macrocoats.in</span>
          </div>
        </section>

      </div>
    </section>
  );
}
