import type { ToolKind } from '@/lib/types';
export function ToolArt({
  kind,
  className = ''
}: {
  kind: ToolKind;
  className?: string;
}) {
  const art: Record<ToolKind, React.ReactNode> = {
    drill: <>
    <path d="M98 77h83l20 18-12 32h-36l-7 51h-36l12-62-24-9Z" fill="#29675b" />
    <path d="M155 87h47v27h-47z" fill="#263b38" />
    <path d="M203 94h20v13h-20z" fill="#91a4a2" />
    <path d="M224 98h27v5h-27z" fill="#526463" />
    <path d="m115 133 31 3-5 29h-31zM99 171h58v17H99z" fill="#273b38" />
    <path d="M106 82h28v17h-28z" fill="#e39450" />
    <path d="M114 110h29" stroke="#8eb2a1" strokeWidth="5" />
  </>,
    saw: <>
    <circle cx="160" cy="132" r="54" fill="#8c9b98" />
    <circle cx="160" cy="132" r="44" fill="#c6ceca" stroke="#f3f4ef" strokeWidth="3" strokeDasharray="3 8" />
    <path d="M103 131a57 57 0 0 1 114 0h-57Z" fill="#287c7d" />
    <path d="M129 77V57h57v26" fill="none" stroke="#263b38" strokeWidth="15" strokeLinejoin="round" />
    <circle cx="160" cy="132" r="10" fill="#334946" />
    <path d="M92 177h139v9H92z" fill="#3a514d" />
  </>,
    sander: <>
    <path d="M101 144h115l-12-41h-91Z" fill="#a65d37" />
    <path d="M116 108V83q40-26 79 0v25" fill="#344c43" />
    <path d="M119 86q35-14 70 0" fill="none" stroke="#84958b" strokeWidth="7" />
    <path d="M94 143h128v24H94z" fill="#273a35" />
    <ellipse cx="158" cy="167" rx="64" ry="12" fill="#b7ab96" />
    <path d="M210 117h33v24h-28z" fill="#50635a" />
  </>,
    solder: <>
    <path d="M70 120h99l10 57H61Z" fill="#354c58" />
    <path d="M83 134h41v22H83z" fill="#add2c0" />
    <circle cx="146" cy="147" r="10" fill="#e4b55a" />
    <path d="M185 164h49v13h-49zM207 163l-7-43 21-16" stroke="#526363" strokeWidth="8" fill="none" />
    <path d="m195 88 49 20" stroke="#354c58" strokeWidth="15" strokeLinecap="round" />
    <path d="m243 108 23 9" stroke="#9aaba9" strokeWidth="6" />
    <path d="M74 122q-32-52 28-58t94 24" fill="none" stroke="#344845" strokeWidth="4" />
  </>,
    meter: <>
    <rect x="113" y="52" width="88" height="135" rx="12" fill="#deb346" />
    <rect x="124" y="65" width="66" height="36" rx="3" fill="#405a50" />
    <path d="M137 78h38v12h-38z" fill="#b2c5ae" />
    <circle cx="157" cy="132" r="22" fill="#344943" />
    <path d="m157 132 9-16" stroke="#e7e8d9" strokeWidth="5" />
    <circle cx="139" cy="171" r="5" fill="#344943" />
    <circle cx="175" cy="171" r="5" fill="#a94d3b" />
    <path d="M139 175q-46 54-61 8V113M175 175q49 47 56 6v-70" fill="none" stroke="#364b44" strokeWidth="5" />
    <path d="M231 142v-31" stroke="#ba5341" strokeWidth="9" />
  </>,
    pliers: <>
    <path d="m127 65 35 55-49 65m72-120-28 55 45 65" fill="none" stroke="#526864" strokeWidth="16" strokeLinejoin="round" />
    <path d="m155 132-39 53m54-53 32 53" stroke="#ac533e" strokeWidth="20" strokeLinecap="round" />
    <circle cx="160" cy="118" r="9" fill="#b8c3be" />
  </>,
    wrench: <>
    <path d="m109 176 74-89m-9-29a30 30 0 0 0-13 47 30 30 0 0 0 47-20l-22 12-15-16 3-23Z" stroke="#8c9f98" strokeWidth="16" fill="#c4cec5" strokeLinejoin="round" />
    <circle cx="106" cy="180" r="11" fill="#b8c5bc" />
    <path d="M215 129h26v55h-12v-43h-14z" fill="#435e51" />
  </>,
    hammer: <>
    <path d="m136 174 28-96" stroke="#c18b54" strokeWidth="23" strokeLinecap="round" />
    <path d="m132 181 14-45" stroke="#3e594b" strokeWidth="26" strokeLinecap="round" />
    <path d="m125 62 65 18 18-17 13 5-9 39-59-17-7 8-29-9Z" fill="#728880" />
    <path d="m119 64 23 7-7 24-23-7z" fill="#b5c2b8" />
  </>,
    ladder: <>
    <path d="m108 193 36-146h28l40 146m-95-31h86m-77-36h65m-56-35h47m-36-35h27" fill="none" stroke="#8a9c94" strokeWidth="12" strokeLinejoin="round" />
    <path d="M137 46h44" stroke="#2c6450" strokeWidth="15" strokeLinecap="round" />
  </>,
    shears: <>
    <path d="m109 56 51 68 46-68" fill="none" stroke="#92a396" strokeWidth="13" />
    <path d="m109 183 51-59 50 59" fill="none" stroke="#496f49" strokeWidth="20" strokeLinecap="round" />
    <circle cx="160" cy="123" r="10" fill="#cfb383" />
  </>,
    spade: <>
    <path d="M144 45h33v32h-33z" fill="none" stroke="#425f48" strokeWidth="9" />
    <path d="M160 77v76" stroke="#b68b58" strokeWidth="12" />
    <path d="M132 145h56v35l-28 25-28-25z" fill="#657a67" />
    <path d="M160 151v34" stroke="#8fa08b" strokeWidth="3" />
  </>,
    washer: <>
    <path d="M128 74V48h52v26" stroke="#354941" strokeWidth="10" fill="none" />
    <rect x="115" y="75" width="79" height="105" rx="17" fill="#c3a53e" />
    <path d="M123 105h62v40h-62z" fill="#3e5042" />
    <circle cx="126" cy="181" r="16" fill="#2e4138" />
    <circle cx="183" cy="181" r="16" fill="#2e4138" />
    <path d="m215 181 18-90 15-21m-32 103q-15 36-36-4" stroke="#344a3f" strokeWidth="7" fill="none" />
    <path d="m233 91 15-21" stroke="#aab3a4" strokeWidth="5" />
  </>
  };
  return <svg className={className} viewBox="0 0 320 240" fill="none" aria-hidden="true">
    <ellipse cx="160" cy="205" rx="83" ry="9" fill="#233e31" opacity=".08" />
    {art[kind]}
  </svg>;
}
