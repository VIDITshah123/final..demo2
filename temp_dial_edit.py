with open(r'c:\Users\shahv\OneDrive\Desktop\final..demo2\src\components\HorizontalExperience.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

old = (
    "              {/* Central Chronograph Radar Dial */}\r\n"
    "            <div className=\"relative z-20 flex flex-col items-center justify-center text-center pointer-events-auto my-auto\">\r\n"
    "              <div className=\"relative w-[260px] sm:w-[360px] md:w-[440px] h-[260px] sm:h-[360px] md:h-[440px] flex items-center justify-center\">\r\n"
    "                \r\n"
    "                <div className=\"absolute inset-0 rounded-full border border-white/[0.08] pointer-events-none\" />"
)

new = (
    "              {/* Central Chronograph Radar Dial */}\r\n"
    "            <div className=\"relative z-20 flex flex-col items-center justify-center text-center pointer-events-auto my-auto\">\r\n"
    "              <div className=\"relative w-[260px] sm:w-[360px] md:w-[440px] h-[260px] sm:h-[360px] md:h-[440px] flex items-center justify-center\">\r\n"
    "\r\n"
    "                {/* Ambient glow behind dial */}\r\n"
    "                <div className=\"absolute inset-0 rounded-full pointer-events-none\" style={{background: 'radial-gradient(circle, rgba(16,185,129,0.13) 0%, rgba(234,88,12,0.07) 45%, transparent 75%)', filter: 'blur(18px)'}} />\r\n"
    "\r\n"
    "                {/* Outer static ring */}\r\n"
    "                <div className=\"absolute inset-[-18px] sm:inset-[-22px] rounded-full border border-white/[0.05] pointer-events-none\" />\r\n"
    "                {/* Mid-outer static ring */}\r\n"
    "                <div className=\"absolute inset-[-6px] sm:inset-[-8px] rounded-full border border-white/[0.07] pointer-events-none\" />\r\n"
    "                {/* Main inner ring */}\r\n"
    "                <div className=\"absolute inset-0 rounded-full border border-white/[0.08] pointer-events-none\" />\r\n"
    "                {/* Inner accent ring */}\r\n"
    "                <div className=\"absolute inset-[22px] sm:inset-[28px] rounded-full border border-[#10B981]/[0.18] pointer-events-none\" style={{animation: 'emblemRingPulse 4s ease-in-out infinite'}} />\r\n"
    "                {/* Innermost gold ring */}\r\n"
    "                <div className=\"absolute inset-[44px] sm:inset-[56px] rounded-full border border-[#D6B779]/[0.15] pointer-events-none\" style={{animation: 'emblemRingPulse 6s ease-in-out infinite 1s'}} />"
)

if old in content:
    content = content.replace(old, new, 1)
    with open(r'c:\Users\shahv\OneDrive\Desktop\final..demo2\src\components\HorizontalExperience.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print('SUCCESS: central dial enhanced')
else:
    # Debug: find the section and show exact text
    marker = 'Central Chronograph Radar Dial'
    idx = content.find(marker)
    if idx >= 0:
        snippet = content[idx-14:idx+400]
        print('FAIL. Snippet around marker:')
        print(repr(snippet))
    else:
        print('FAIL: marker not found at all')
