with open(r'c:\Users\shahv\OneDrive\Desktop\final..demo2\src\components\HorizontalExperience.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

old = (
    "          <section className=\"w-screen min-w-[100vw] h-screen shrink-0 relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 overflow-hidden select-none\">\r\n"
    "            \r\n"
    "            {/* Floating Perimeter Cards */}"
)

new = (
    "          <section className=\"w-screen min-w-[100vw] h-screen shrink-0 relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 overflow-hidden select-none\">\r\n"
    "            {/* Ambient light for emblem slide */}\r\n"
    "            <div className=\"absolute inset-0 pointer-events-none overflow-hidden z-0\" aria-hidden=\"true\">\r\n"
    "              <div className=\"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full\" style={{background: 'radial-gradient(circle, rgba(16,185,129,0.10) 0%, rgba(234,88,12,0.06) 50%, transparent 75%)', filter: 'blur(40px)', animation: 'hxEmeraldA 14s ease-in-out infinite'}} />\r\n"
    "              <div className=\"absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full\" style={{background: 'radial-gradient(circle, rgba(234,88,12,0.08) 0%, transparent 70%)', filter: 'blur(30px)', animation: 'hxAmberA 18s ease-in-out infinite 3s'}} />\r\n"
    "            </div>\r\n"
    "            \r\n"
    "            {/* Floating Perimeter Cards */}"
)

if old in content:
    content = content.replace(old, new, 1)
    with open(r'c:\Users\shahv\OneDrive\Desktop\final..demo2\src\components\HorizontalExperience.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print('SUCCESS: ambient section glow added')
else:
    # There could be multiple sections matching - let's narrow down by also looking for the SLIDE 4 comment
    marker = 'SLIDE 4: IMMERSIVE EMBLEM'
    idx = content.find(marker)
    if idx >= 0:
        snippet = content[idx:idx+600]
        print('FAIL - Snippet around SLIDE 4:')
        print(repr(snippet))
    else:
        print('FAIL: SLIDE 4 marker not found')
