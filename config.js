// config.js - v42.0 Ultimate Physics Library
const SVG_LIB = {
    // === 1. 几何与数学 (Geometry & Math) ===
    'coord': '<svg viewBox="0 0 100 100" fill="none" stroke="black" stroke-width="2"><line x1="10" y1="90" x2="90" y2="90"/><polyline points="85 85 90 90 85 95" fill="black"/><line x1="10" y1="90" x2="10" y2="10"/><polyline points="5 15 10 10 15 15" fill="black"/><text x="92" y="95" font-family="serif" font-size="14" stroke="none" fill="black">x</text><text x="0" y="10" font-family="serif" font-size="14" stroke="none" fill="black">y</text><text x="0" y="100" font-family="serif" font-size="14" stroke="none" fill="black">O</text></svg>',
    'coord3d': '<svg viewBox="0 0 100 100" fill="none" stroke="black" stroke-width="2"><line x1="50" y1="50" x2="50" y2="10"/><polyline points="47 15 50 10 53 15" fill="black"/><line x1="50" y1="50" x2="90" y2="50"/><polyline points="85 47 90 50 85 53" fill="black"/><line x1="50" y1="50" x2="20" y2="80"/><polyline points="20 75 20 80 25 80" fill="black"/><text x="45" y="8" font-family="serif" font-size="14" stroke="none" fill="black">z</text><text x="92" y="55" font-family="serif" font-size="14" stroke="none" fill="black">y</text><text x="10" y="90" font-family="serif" font-size="14" stroke="none" fill="black">x</text></svg>',
    'angle': '<svg viewBox="0 0 50 50" fill="none" stroke="black" stroke-width="2"><path d="M 45 5 A 45 45 0 0 0 5 45"/></svg>',
    'brace': '<svg viewBox="0 0 100 20" fill="none" stroke="black" stroke-width="2"><path d="M0 20 Q0 0 10 0 L40 0 Q50 0 50 10 Q50 0 60 0 L90 0 Q100 0 100 20"/></svg>',
    'triangle_geo': '<svg viewBox="0 0 60 60" fill="none" stroke="black" stroke-width="2"><polygon points="10,50 50,50 30,10"/></svg>',
    'triangle_right': '<svg viewBox="0 0 60 60" fill="none" stroke="black" stroke-width="2"><polygon points="10,50 10,10 50,50"/></svg>',
    'cylinder': '<svg viewBox="0 0 40 60" fill="none" stroke="black" stroke-width="2"><ellipse cx="20" cy="10" rx="18" ry="6"/><path d="M2 10 L2 50"/><path d="M38 10 L38 50"/><path d="M2 50 A 18 6 0 0 0 38 50"/></svg>',
// [确认] 修正带 (Whiteout) - 纯白矩形，用于覆盖
    'eraser_tape': '<svg viewBox="0 0 60 20"><rect x="0" y="0" width="60" height="20" fill="white" stroke="none"/></svg>',

// 新增2D元件
    'triangle_arb': '<svg viewBox="0 0 100 60" fill="none" stroke="black" stroke-width="2"><polygon points="10,50 40,10 90,50"/></svg>',
    'parallelogram': '<svg viewBox="0 0 100 60" fill="none" stroke="black" stroke-width="2"><polygon points="25,50 45,10 95,10 75,50"/></svg>',
    'trapezoid': '<svg viewBox="0 0 100 60" fill="none" stroke="black" stroke-width="2"><polygon points="20,10 80,10 95,50 5,50"/></svg>',
    'rhombus': '<svg viewBox="0 0 100 100" fill="none" stroke="black" stroke-width="2"><polygon points="50,10 80,50 50,90 20,50"/></svg>',
    'pentagon': '<svg viewBox="0 0 100 100" fill="none" stroke="black" stroke-width="2"><polygon points="50,10 90,38 75,85 25,85 10,38"/></svg>',
    'hexagon': '<svg viewBox="0 0 100 100" fill="none" stroke="black" stroke-width="2"><polygon points="25,10 75,10 100,50 75,90 25,90 0,50"/></svg>',
    'semicircle': '<svg viewBox="0 0 100 60" fill="none" stroke="black" stroke-width="2"><path d="M 10 50 A 40 40 0 0 1 90 50 L 10 50 Z"/></svg>',
    'quarter_circle': '<svg viewBox="0 0 60 60" fill="none" stroke="black" stroke-width="2"><path d="M 10 50 L 50 50 A 40 40 0 0 0 10 10 L 10 50 Z"/></svg>',

    // 新增3D元件
    'cube': '<svg viewBox="0 0 80 80" fill="none" stroke="black" stroke-width="2"><rect x="10" y="30" width="40" height="40"/><path d="M10 30 L30 10 L70 10 L50 30"/><path d="M70 10 L70 50 L50 70"/><path d="M50 30 L50 70"/><path d="M10 70 L30 50 L70 50" stroke-dasharray="3,2"/><path d="M30 50 L30 10" stroke-dasharray="3,2"/></svg>',
    'cuboid': '<svg viewBox="0 0 100 80" fill="none" stroke="black" stroke-width="2"><rect x="10" y="30" width="60" height="40"/><path d="M10 30 L30 10 L90 10 L70 30"/><path d="M90 10 L90 50 L70 70"/><path d="M70 30 L70 70"/><path d="M10 70 L30 50 L90 50" stroke-dasharray="3,2"/><path d="M30 50 L30 10" stroke-dasharray="3,2"/></svg>',
    'parallelepiped': '<svg viewBox="0 0 100 80" fill="none" stroke="black" stroke-width="2"><path d="M10 70 L60 70 L80 30 L30 30 Z"/><path d="M10 70 L25 50 L75 50 L60 70" stroke-dasharray="3,2"/><path d="M30 30 L45 10 L95 10 L80 30"/><path d="M75 50 L95 10" stroke-dasharray="3,2"/><path d="M25 50 L45 10" stroke-dasharray="3,2"/><path d="M60 70 L80 30"/><path d="M10 70 L30 30"/></svg>',
    'sphere': '<svg viewBox="0 0 80 80" fill="none" stroke="black" stroke-width="2"><circle cx="40" cy="40" r="38"/><ellipse cx="40" cy="40" rx="38" ry="12" stroke-dasharray="3,2"/><path d="M78 40 A 38 12 0 0 0 2 40" stroke="none" fill="none"/></svg>',
    'prism_tri': '<svg viewBox="0 0 80 100" fill="none" stroke="black" stroke-width="2"><polygon points="10,20 70,20 40,5" fill="none"/><polygon points="10,90 70,90 40,75" fill="none"/><line x1="10" y1="20" x2="10" y2="90"/><line x1="70" y1="20" x2="70" y2="90"/><line x1="40" y1="5" x2="40" y2="75" stroke-dasharray="3,2"/><line x1="40" y1="75" x2="10" y2="90" stroke-dasharray="3,2"/><line x1="40" y1="75" x2="70" y2="90" stroke-dasharray="3,2"/></svg>',
   'prism_quad': '<svg viewBox="0 0 100 100" fill="none" stroke="black" stroke-width="2"><path d="M 35 15 L 75 15 L 60 30 L 20 30 Z" /><path d="M 20 30 L 20 90 L 60 90 L 60 30" /><path d="M 75 15 L 75 75 L 60 90" /><path d="M 35 15 L 35 75 L 75 75" stroke-dasharray="3,2" /><path d="M 35 75 L 20 90" stroke-dasharray="3,2" /></svg>',
   'frustum': '<svg viewBox="0 0 100 100" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="35,35 65,35 85,15 55,15" /><path d="M35 35 L10 90 L70 90 L65 35 M70 90 L90 70 L85 15" /><path d="M10 90 L30 70 L90 70 M30 70 L55 15" stroke-dasharray="4,3" /></svg>',
    'cone': '<svg viewBox="0 0 80 100" fill="none" stroke="black" stroke-width="2"><ellipse cx="40" cy="85" rx="35" ry="10"/><path d="M5 85 L40 10 L75 85"/><path d="M5 85 A 35 10 0 0 1 75 85" stroke-dasharray="3,2" stroke="white" fill="none"/></svg>',

    // === 2. 力学 (Mechanics) ===
    'block': '<svg viewBox="0 0 100 60" fill="none" stroke="black" stroke-width="2"><rect x="2" y="2" width="96" height="56"/></svg>',
    'point': '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" fill="black"/></svg>',
    'spring': '<svg viewBox="0 0 100 20" fill="none" stroke="black" stroke-width="2"><path d="M0 10 L10 10 Q12 0 15 10 Q17 20 20 10 Q22 0 25 10 Q27 20 30 10 Q32 0 35 10 Q37 20 40 10 Q42 0 45 10 Q47 20 50 10 Q52 0 55 10 Q57 20 60 10 Q62 0 65 10 Q67 20 70 10 Q72 0 75 10 Q77 20 80 10 Q82 0 85 10 L100 10"/></svg>',
    'pulley': '<svg viewBox="0 0 50 50" fill="none" stroke="black" stroke-width="2"><circle cx="25" cy="25" r="20" stroke-width="3"/><circle cx="25" cy="25" r="5" fill="black"/><line x1="25" y1="25" x2="25" y2="0" stroke-dasharray="2,2"/></svg>',
    'wall': '<svg viewBox="0 0 100 20" fill="none" stroke="black" stroke-width="2"><line x1="0" y1="0" x2="100" y2="0" stroke-width="3"/><path d="M0 0 L-5 10 M10 0 L5 10 M20 0 L15 10 M30 0 L25 10 M40 0 L35 10 M50 0 L45 10 M60 0 L55 10 M70 0 L65 10 M80 0 L75 10 M90 0 L85 10 M100 0 L95 10" stroke-width="1"/></svg>',
    'wedge': '<svg viewBox="0 0 100 60" fill="none" stroke="black" stroke-width="2"><path d="M0 60 L100 60 L100 10 Z"/></svg>',
    'pendulum': '<svg viewBox="0 0 40 100" fill="none" stroke="black" stroke-width="2"><line x1="20" y1="0" x2="20" y2="80"/><circle cx="20" cy="90" r="10" fill="white"/></svg>',
    'cart': '<svg viewBox="0 0 100 50" fill="none" stroke="black" stroke-width="2"><rect x="5" y="5" width="90" height="30"/><circle cx="25" cy="40" r="8" fill="white"/><circle cx="75" cy="40" r="8" fill="white"/><circle cx="25" cy="40" r="3" fill="black"/><circle cx="75" cy="40" r="3" fill="black"/></svg>',
    'balance': '<svg viewBox="0 0 100 50" fill="none" stroke="black" stroke-width="2"><polygon points="50,20 40,50 60,50" fill="white"/><line x1="10" y1="20" x2="90" y2="20" stroke-width="3"/></svg>',
    'weight': '<svg viewBox="0 0 40 50" fill="none" stroke="black" stroke-width="2"><path d="M15 0 L25 0 L25 10 L15 10 Z"/><path d="M10 10 L30 10 L35 45 L5 45 Z"/></svg>',
    'scale': '<svg viewBox="0 0 30 100" fill="none" stroke="black" stroke-width="2"><rect x="5" y="10" width="20" height="70"/><line x1="15" y1="0" x2="15" y2="10"/><path d="M15 80 L15 90 Q15 100 25 95"/><line x1="10" y1="20" x2="20" y2="20"/><line x1="10" y1="30" x2="20" y2="30"/><line x1="10" y1="40" x2="20" y2="40"/></svg>',
    // [新增] 1. 直角墙壁 (Corner Wall) - 用于限制物体运动
    'wall_corner': '<svg viewBox="0 0 100 100" fill="none" stroke="black" stroke-width="2"><path d="M10 10 L10 90 L90 90" stroke-width="3"/><path d="M10 10 L5 20 M10 30 L5 40 M10 50 L5 60 M10 70 L5 80 M10 90 L5 100 M30 90 L25 100 M50 90 L45 100 M70 90 L65 100 M90 90 L85 100" stroke-width="1"/></svg>',

    // [新增] 2. 多节火车 (Train) - 用于连接体问题
    'train': '<svg viewBox="0 0 120 40" fill="none" stroke="black" stroke-width="2"><rect x="5" y="5" width="40" height="25"/><circle cx="15" cy="35" r="4" fill="white"/><circle cx="35" cy="35" r="4" fill="white"/><rect x="55" y="5" width="40" height="25"/><circle cx="65" cy="35" r="4" fill="white"/><circle cx="85" cy="35" r="4" fill="white"/><line x1="45" y1="17.5" x2="55" y2="17.5" stroke-width="2"/><circle cx="25" cy="17.5" r="1" fill="black"/><circle cx="75" cy="17.5" r="1" fill="black"/></svg>',

    // [新增] 3. 刻度尺 (Ruler)
    'ruler': '<svg viewBox="0 0 100 20" fill="white" stroke="black" stroke-width="2"><rect x="0" y="0" width="100" height="20"/><line x1="10" y1="0" x2="10" y2="8"/><line x1="20" y1="0" x2="20" y2="5"/><line x1="30" y1="0" x2="30" y2="8"/><line x1="40" y1="0" x2="40" y2="5"/><line x1="50" y1="0" x2="50" y2="10"/><line x1="60" y1="0" x2="60" y2="5"/><line x1="70" y1="0" x2="70" y2="8"/><line x1="80" y1="0" x2="80" y2="5"/><line x1="90" y1="0" x2="90" y2="8"/></svg>',

    // [新增] 4. 火柴人 (Stickman) - 观察者或拉力施加者
    'stickman': '<svg viewBox="0 0 40 80" fill="none" stroke="black" stroke-width="2"><circle cx="20" cy="15" r="8" fill="white"/><line x1="20" y1="23" x2="20" y2="50"/><line x1="20" y1="50" x2="5" y2="75"/><line x1="20" y1="50" x2="35" y2="75"/><line x1="20" y1="30" x2="5" y2="45"/><line x1="20" y1="30" x2="35" y2="45"/></svg>',

    // [新增] 5. 轻质木杆 (Light Rod) - 杆模型
    'rod': '<svg viewBox="0 0 100 20" fill="none" stroke="black" stroke-width="2"><rect x="5" y="8" width="90" height="4" fill="white"/><circle cx="5" cy="10" r="3" fill="white"/><circle cx="95" cy="10" r="3" fill="white"/></svg>',

    // [新增] 6. 挂钩 (Hook) - 挂重物用
    'hook': '<svg viewBox="0 0 30 50" fill="none" stroke="black" stroke-width="2"><rect x="10" y="0" width="10" height="10" fill="black"/><line x1="15" y1="10" x2="15" y2="30"/><path d="M15 30 Q 15 45 25 45 Q 30 45 30 35"/></svg>',

    // [新增] 7. 半圆形凹槽 (Semicircular Groove) - 能量守恒题必备
    'groove_semi': '<svg viewBox="0 0 100 60" fill="none" stroke="black" stroke-width="2"><path d="M0 0 L100 0 L100 50 L0 50 Z" /><path d="M15 0 A 35 35 0 0 0 85 0" fill="white" stroke-width="2"/></svg>',

    // [新增] 8. 椭圆 (Ellipse) - 轨道或零件
    'ellipse_mech': '<svg viewBox="0 0 100 60" fill="none" stroke="black" stroke-width="2"><ellipse cx="50" cy="30" rx="45" ry="25"/></svg>',

    // [新增] 9. 有桌腿的桌面 (Table)
    'table': '<svg viewBox="0 0 100 60" fill="none" stroke="black" stroke-width="2"><rect x="5" y="10" width="90" height="5" fill="white"/><line x1="15" y1="15" x2="15" y2="60" stroke-width="3"/><line x1="85" y1="15" x2="85" y2="60" stroke-width="3"/><line x1="0" y1="60" x2="100" y2="60" stroke-width="1"/></svg>',

    
   // [修改后] 1/4 圆弧轨道 (Standard Quarter Track)
    'groove_quarter': '<svg viewBox="0 0 100 100" fill="none" stroke="black" stroke-width="2"><path d="M10 10 L10 90 L90 90 A 80 80 0 0 1 10 10 Z" fill="white" stroke-linejoin="round"/></svg>',
    // [新增] 11. 简化小船 (Boat)
    'boat': '<svg viewBox="0 0 100 50" fill="none" stroke="black" stroke-width="2"><path d="M10 30 L90 30 L80 50 L20 50 Z"/><line x1="50" y1="30" x2="50" y2="5"/><path d="M50 5 L80 15 L50 25 Z" fill="white"/><path d="M5 45 Q 50 60 95 45" stroke="blue" stroke-width="1" stroke-dasharray="3,2"/></svg>',

    // [新增] 12. 平抛轨迹 (Trajectory Horizontal)
    'traj_hori': '<svg viewBox="0 0 100 80" fill="none" stroke="black" stroke-width="2"><path d="M10 10 Q 60 10 90 70" stroke-dasharray="4,3" marker-end="url(#arrow_traj)"/><circle cx="10" cy="10" r="3" fill="black"/><defs><marker id="arrow_traj" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="black"/></marker></defs></svg>',

    // [新增] 13. 斜抛轨迹 (Trajectory Oblique)
    'traj_obli': '<svg viewBox="0 0 100 80" fill="none" stroke="black" stroke-width="2"><path d="M10 70 Q 50 -10 90 70" stroke-dasharray="4,3" marker-end="url(#arrow_traj2)"/><circle cx="10" cy="70" r="3" fill="black"/><defs><marker id="arrow_traj2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="black"/></marker></defs></svg>',

    // [新增] 14. 辐条轮 (Spoked Wheel)
    'wheel': '<svg viewBox="0 0 60 60" fill="none" stroke="black" stroke-width="2"><circle cx="30" cy="30" r="28"/><circle cx="30" cy="30" r="3" fill="black"/><line x1="30" y1="2" x2="30" y2="58"/><line x1="2" y1="30" x2="58" y2="30"/><line x1="10.2" y1="10.2" x2="49.8" y2="49.8"/><line x1="49.8" y1="10.2" x2="10.2" y2="49.8"/></svg>',

    // [新增] 15. 齿轮 (Gear) - 传动问题
    'gear': '<svg viewBox="0 0 60 60" fill="none" stroke="black" stroke-width="2"><path d="M30 5 L33 10 L38 10 L40 15 L45 16 L46 21 L51 23 L51 28 L55 30 L51 32 L51 37 L46 39 L45 44 L40 45 L38 50 L33 50 L30 55 L27 50 L22 50 L20 45 L15 44 L14 39 L9 37 L9 32 L5 30 L9 28 L9 23 L14 21 L15 16 L20 15 L22 10 L27 10 Z"/><circle cx="30" cy="30" r="5"/></svg>',
// [新增] 小球 (Ball) - 比质点更大，有立体感
    'ball': '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="white" stroke="black" stroke-width="2"/><circle cx="14" cy="14" r="4" fill="white" opacity="0.5"/></svg>',
// [新增] 打点计时器 (Ticker Timer) - 含纸带示意
   'ticker_timer': '<svg viewBox="0 0 100 60" fill="none" stroke="black" stroke-width="2"><rect x="15" y="10" width="70" height="40" rx="4" ry="4" fill="white"/><line x1="0" y1="30" x2="100" y2="30" stroke="#999" stroke-width="6" opacity="0.4"/><circle cx="50" cy="30" r="3" fill="black"/><path d="M50 30 L50 15" stroke-width="2"/><circle cx="25" cy="40" r="3" fill="white"/><circle cx="75" cy="40" r="3" fill="white"/><circle cx="25" cy="40" r="1" fill="black" stroke="none"/><circle cx="75" cy="40" r="1" fill="black" stroke="none"/><path d="M40 15 L60 15 L60 25 L40 25 Z" fill="#ddd"/><text x="42" y="22" font-size="6" stroke="none" fill="black" font-family="Arial">50Hz</text></svg>',
// [新增] 数字计时器 (Digital Timer)
    'digi_timer': '<svg viewBox="0 0 80 50" fill="none" stroke="black" stroke-width="2"><rect x="5" y="5" width="70" height="40" rx="4" ry="4" fill="#f0f0f0"/><rect x="15" y="15" width="50" height="20" fill="black"/><text x="40" y="29" font-family="monospace" font-size="16" fill="red" text-anchor="middle">0.000</text><circle cx="15" cy="40" r="2" fill="black"/><circle cx="65" cy="40" r="2" fill="black"/><text x="40" y="42" font-family="Arial" font-size="6" fill="black" text-anchor="middle" stroke="none">DIGITAL TIMER</text></svg>',

    // [新增] 光电门 (Photogate)
    'photogate': '<svg viewBox="0 0 40 80" fill="none" stroke="black" stroke-width="2"><path d="M5 75 L5 5 L35 5 L35 75" fill="#ddd"/><line x1="5" y1="20" x2="35" y2="20" stroke-dasharray="3,2"/><circle cx="5" cy="20" r="2" fill="black"/><circle cx="35" cy="20" r="2" fill="black"/><rect x="15" y="75" width="10" height="5" fill="black"/></svg>',

    // [新增] 气垫导轨 (Air Track) - 带刻度
    'air_track': '<svg viewBox="0 0 200 40" fill="none" stroke="black" stroke-width="2"><rect x="5" y="15" width="190" height="15" fill="#e0e0e0"/><line x1="5" y1="15" x2="195" y2="15"/><line x1="5" y1="30" x2="195" y2="30"/><line x1="5" y1="30" x2="5" y2="35"/><line x1="55" y1="30" x2="55" y2="35"/><line x1="105" y1="30" x2="105" y2="35"/><line x1="155" y1="30" x2="155" y2="35"/><line x1="195" y1="30" x2="195" y2="35"/><text x="5" y="38" font-size="6" stroke="none" fill="black" text-anchor="middle">0</text><text x="55" y="38" font-size="6" stroke="none" fill="black" text-anchor="middle">10</text><text x="105" y="38" font-size="6" stroke="none" fill="black" text-anchor="middle">20</text><text x="155" y="38" font-size="6" stroke="none" fill="black" text-anchor="middle">30</text><text x="195" y="38" font-size="6" stroke="none" fill="black" text-anchor="middle">cm</text></svg>',

    // [新增] 槽码 (Slotted Weights)
    'slot_weights': '<svg viewBox="0 0 30 50" fill="none" stroke="black" stroke-width="2"><rect x="5" y="35" width="20" height="5" rx="1" ry="1" fill="#999"/><rect x="5" y="28" width="20" height="5" rx="1" ry="1" fill="#999"/><rect x="5" y="21" width="20" height="5" rx="1" ry="1" fill="#999"/><rect x="7" y="14" width="16" height="5" rx="1" ry="1" fill="#999"/><line x1="15" y1="14" x2="15" y2="0"/><circle cx="15" cy="2" r="2" fill="black"/></svg>',

    // [新增] 遮光条 (Light Gate Flag) - 安装在滑块上的
    'gate_flag': '<svg viewBox="0 0 20 40" fill="none" stroke="black" stroke-width="2"><rect x="8" y="5" width="4" height="30" fill="black"/><rect x="2" y="35" width="16" height="5" fill="#ddd"/></svg>',
// [新增] 台式弹簧秤 (Tabletop Scale) - 仿照参考图绘制
    'scale_table': '<svg viewBox="0 0 100 130" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 125 Q50 115 80 125 L75 105 L25 105 Z" fill="#b0d4de"/><rect x="42" y="15" width="16" height="20" fill="#b0d4de"/><rect x="20" y="5" width="60" height="10" fill="#f0e68c"/><circle cx="50" cy="70" r="38" fill="#b0d4de"/><circle cx="50" cy="70" r="30" fill="#fffbe8"/><g stroke-width="1"><line x1="50" y1="42" x2="50" y2="46"/><line x1="74" y1="56" x2="71" y2="59"/><line x1="74" y1="84" x2="71" y2="81"/><line x1="50" y1="98" x2="50" y2="94"/><line x1="26" y1="84" x2="29" y2="81"/><line x1="26" y1="56" x2="29" y2="59"/></g><g font-family="Arial" font-size="8" fill="#006699" stroke="none" text-anchor="middle"><text x="50" y="55">0</text><text x="50" y="65" font-size="10" font-weight="bold">N</text><text x="65" y="62">20</text><text x="65" y="85">40</text><text x="50" y="92">60</text><text x="35" y="85">80</text><text x="35" y="62">100</text></g><path d="M50 70 L72 48" stroke="#ff0066" stroke-width="2"/><circle cx="50" cy="70" r="3" fill="#ff0066" stroke="none"/></svg>',
// [修改版] 自行车传动系统 
    'bike_system': '<svg viewBox="0 0 600 400" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="150" cy="200" r="130" stroke="#333" stroke-width="15" /><circle cx="150" cy="200" r="120" stroke="#999" stroke-width="2" /><path d="M150 200 L150 80 M150 200 L235 115 M150 200 L270 200 M150 200 L235 285 M150 200 L150 320 M150 200 L65 285 M150 200 L30 200 M150 200 L65 115" stroke="#ccc" stroke-width="2"/><path d="M450 150 L150 180 A 20 20 0 1 0 150 220 L450 250 A 50 50 0 1 0 450 150 Z" fill="none" stroke="#555" stroke-width="6"/><path d="M450 150 L150 180 A 20 20 0 1 0 150 220 L450 250 A 50 50 0 1 0 450 150 Z" fill="none" stroke="#ccc" stroke-width="2" stroke-dasharray="5,3"/><circle cx="450" cy="200" r="55" fill="#ddd" stroke="#666" stroke-width="2"/><circle cx="450" cy="200" r="50" fill="none" stroke="#666" stroke-width="5" stroke-dasharray="5,4"/><path d="M450 200 L480 300" stroke="#666" stroke-width="10"/><rect x="465" y="300" width="30" height="10" fill="#333"/><circle cx="150" cy="200" r="25" fill="#999" stroke="none"/></svg>',




    // === 3. 电磁学 (Electromagnetism) ===
   'resistor': '<svg viewBox="0 0 100 40" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="0" y1="20" x2="20" y2="20"/><rect x="20" y="8" width="60" height="24" fill="white" stroke="black" stroke-width="2"/><line x1="80" y1="20" x2="100" y2="20"/></svg>',
    'inductor': '<svg viewBox="0 0 100 30" fill="none" stroke="black" stroke-width="2"><path d="M0 15 L10 15 Q15 0 20 15 Q25 30 30 15 Q35 0 40 15 Q45 30 50 15 Q55 0 60 15 Q65 30 70 15 Q75 0 80 15 L100 15"/></svg>',
    'mutual_ind': '<svg viewBox="0 0 100 60" fill="none" stroke="black" stroke-width="2"><path d="M0 15 L10 15 Q15 0 20 15 Q25 30 30 15 Q35 0 40 15 Q45 30 50 15 Q55 0 60 15 Q65 30 70 15 Q75 0 80 15 L100 15"/><path d="M0 45 L10 45 Q15 30 20 45 Q25 60 30 45 Q35 30 40 45 Q 45 60 50 45 Q 55 30 60 45 Q 65 60 70 45 Q 75 30 80 45 L 100 45"/></svg>',
   'rheostat': '<svg viewBox="0 0 100 60" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="0" y1="45" x2="20" y2="45"/><line x1="80" y1="45" x2="100" y2="45"/><rect x="20" y="33" width="60" height="24" fill="white" stroke="black" stroke-width="2"/><line x1="50" y1="0" x2="50" y2="33"/><path d="M50 33 L45 23 L55 23 Z" fill="black" stroke="none"/></svg>',
    'battery': '<svg viewBox="0 0 100 40" fill="none" stroke="black" stroke-width="2"><line x1="0" y1="20" x2="45" y2="20"/><line x1="55" y1="20" x2="100" y2="20"/><line x1="45" y1="5" x2="45" y2="35" stroke-width="3"/><line x1="55" y1="12" x2="55" y2="28" stroke-width="4"/><text x="35" y="10" font-size="10">+</text></svg>',
    'ac_source': '<svg viewBox="0 0 60 60" fill="none" stroke="black" stroke-width="2"><circle cx="30" cy="30" r="20"/><path d="M15 30 Q 22 15 30 30 Q 38 45 45 30"/><line x1="0" y1="30" x2="10" y2="30"/><line x1="50" y1="30" x2="60" y2="30"/></svg>',
    'ground': '<svg viewBox="0 0 40 40" fill="none" stroke="black" stroke-width="2"><line x1="20" y1="0" x2="20" y2="20"/><line x1="5" y1="20" x2="35" y2="20"/><line x1="10" y1="27" x2="30" y2="27"/><line x1="15" y1="34" x2="25" y2="34"/></svg>',
    'capacitor': '<svg viewBox="0 0 100 40" fill="none" stroke="black" stroke-width="2"><line x1="0" y1="20" x2="45" y2="20"/><line x1="55" y1="20" x2="100" y2="20"/><line x1="45" y1="5" x2="45" y2="35" stroke-width="3"/><line x1="55" y1="5" x2="55" y2="35" stroke-width="3"/></svg>',
    'diode': '<svg viewBox="0 0 100 40" fill="none" stroke="black" stroke-width="2"><line x1="0" y1="20" x2="40" y2="20"/><path d="M40 5 L40 35 L65 20 Z"/><line x1="65" y1="5" x2="65" y2="35"/><line x1="65" y1="20" x2="100" y2="20"/></svg>',
    'switch': '<svg viewBox="0 0 100 40" fill="none" stroke="black" stroke-width="2"><line x1="0" y1="30" x2="30" y2="30"/><circle cx="30" cy="30" r="2" fill="black"/><line x1="30" y1="30" x2="65" y2="10"/><circle cx="70" cy="30" r="2" fill="black"/><line x1="70" y1="30" x2="100" y2="30"/></svg>',
    'bulb': '<svg viewBox="0 0 60 60" fill="none" stroke="black" stroke-width="2"><circle cx="30" cy="30" r="20"/><path d="M30 30 L44 16 M30 30 L16 16 M30 30 L44 44 M30 30 L16 44"/><line x1="0" y1="30" x2="10" y2="30"/><line x1="50" y1="30" x2="60" y2="30"/></svg>',
    'transformer': '<svg viewBox="0 0 80 80" fill="none" stroke="black" stroke-width="2"><path d="M10 10 Q30 10 30 20 Q30 30 10 30 M10 30 Q30 30 30 40 Q30 50 10 50 M10 50 Q30 50 30 60 Q30 70 10 70"/><line x1="35" y1="10" x2="35" y2="70"/><line x1="45" y1="10" x2="45" y2="70"/><path d="M70 10 Q50 10 50 20 Q50 30 70 30 M70 30 Q50 30 50 40 Q50 50 70 50 M70 50 Q50 50 50 60 Q50 70 70 70"/></svg>',
    'meter_a': '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="white" stroke="black" stroke-width="2"/><text x="10" y="28" font-family="serif" font-size="24" font-weight="bold">A</text></svg>',
    'meter_v': '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="white" stroke="black" stroke-width="2"/><text x="10" y="28" font-family="serif" font-size="24" font-weight="bold">V</text></svg>',
    'meter_g': '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="white" stroke="black" stroke-width="2"/><text x="10" y="28" font-family="serif" font-size="24" font-weight="bold">G</text></svg>',
    'mag_in': '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="none" stroke="black" stroke-width="2"/><line x1="10" y1="10" x2="30" y2="30" stroke="black" stroke-width="2"/><line x1="30" y1="10" x2="10" y2="30" stroke="black" stroke-width="2"/></svg>',
    'mag_out': '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="none" stroke="black" stroke-width="2"/><circle cx="20" cy="20" r="4" fill="black"/></svg>',
    'magnet_u': '<svg viewBox="0 0 60 60" fill="none" stroke="black" stroke-width="2"><path d="M10 60 L10 25 A 20 20 0 0 1 50 25 L50 60 L40 60 L40 25 A 10 10 0 0 0 20 25 L20 60 Z"/><text x="12" y="55" font-family="sans-serif" font-weight="bold" font-size="10" stroke="none" fill="black">N</text><text x="42" y="55" font-family="sans-serif" font-weight="bold" font-size="10" stroke="none" fill="black">S</text></svg>',
  // [新增] 正电荷 (Positive Charge)
    'charge_pos': '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#ffcccc" stroke="#ff0000" stroke-width="2"/><line x1="10" y1="20" x2="30" y2="20" stroke="#ff0000" stroke-width="3"/><line x1="20" y1="10" x2="20" y2="30" stroke="#ff0000" stroke-width="3"/></svg>',

    // [新增] 负电荷 (Negative Charge)
    'charge_neg': '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#ccccff" stroke="#0000ff" stroke-width="2"/><line x1="10" y1="20" x2="30" y2="20" stroke="#0000ff" stroke-width="3"/></svg>',

// [修改版] 枕形导体 (Pillow Conductor) 
    'conductor_pillow': '<svg viewBox="0 0 200 150" fill="none" stroke="black" stroke-width="1"><defs><linearGradient id="grad_metal" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#d0d0d0;"/><stop offset="30%" style="stop-color:#ffffff;"/><stop offset="100%" style="stop-color:#909090;"/></linearGradient><linearGradient id="grad_stand" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:#999;"/><stop offset="50%" style="stop-color:#ccc;"/><stop offset="100%" style="stop-color:#999;"/></linearGradient></defs><ellipse cx="60" cy="130" rx="20" ry="6" fill="#777" stroke="none"/><ellipse cx="60" cy="128" rx="18" ry="5" fill="url(#grad_stand)" stroke="#555"/><rect x="56" y="50" width="8" height="80" fill="url(#grad_stand)" stroke="#555"/><ellipse cx="140" cy="130" rx="20" ry="6" fill="#777" stroke="none"/><ellipse cx="140" cy="128" rx="18" ry="5" fill="url(#grad_stand)" stroke="#555"/><rect x="136" y="50" width="8" height="80" fill="url(#grad_stand)" stroke="#555"/><path d="M 30,30 Q 30,5 50,5 L 150,5 Q 170,5 170,30 Q 170,55 150,55 L 50,55 Q 30,55 30,30 Z" fill="url(#grad_metal)" stroke="#666" stroke-width="1"/><line x1="100" y1="5" x2="100" y2="55" stroke="#888" stroke-width="1"/><line x1="38" y1="45" x2="38" y2="75" stroke="#888" stroke-width="1"/><line x1="162" y1="45" x2="162" y2="75" stroke="#888" stroke-width="1"/></svg>',
// [新增] 验电器 (Electroscope) 
    'electroscope': '<svg viewBox="0 0 100 160" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><defs><radialGradient id="grad_knob" cx="30%" cy="30%" r="70%"><stop offset="0%" style="stop-color:#ffffff"/><stop offset="100%" style="stop-color:#999999"/></radialGradient></defs><path d="M30 140 L10 160 M70 140 L90 160" stroke="#999" stroke-width="3"/><circle cx="50" cy="85" r="55" stroke="#008080" stroke-width="8" fill="none"/><circle cx="50" cy="85" r="51" fill="rgba(255,255,255,0.3)" stroke="none"/><rect x="42" y="30" width="16" height="15" fill="#eee" stroke="none"/><circle cx="50" cy="20" r="12" fill="url(#grad_knob)" stroke="none"/><line x1="50" y1="45" x2="50" y2="95" stroke="#999" stroke-width="3"/><g fill="#ffd700" stroke="none"><path d="M50 95 L35 130 L38 130 L50 97 Z" opacity="0.9"/><path d="M50 95 L65 130 L62 130 L50 97 Z" opacity="0.9"/></g><g stroke="#000" stroke-width="1"><line x1="25" y1="100" x2="35" y2="102"/><line x1="22" y1="110" x2="32" y2="112"/><line x1="20" y1="120" x2="30" y2="122"/></g><rect x="80" y="135" width="8" height="10" fill="red" stroke="none"/></svg>',
// [修正] 正电荷电场线 
    'efield_pos_point': '<svg viewBox="-50 -50 100 100" fill="none" stroke="#008080" stroke-width="2"><defs><g id="ray_pos"><line x1="0" y1="-12" x2="0" y2="-48"/><path d="M0 -48 L-4 -40 L4 -40 Z" fill="#008080" stroke="none"/></g></defs><use href="#ray_pos"/><use href="#ray_pos" transform="rotate(45)"/><use href="#ray_pos" transform="rotate(90)"/><use href="#ray_pos" transform="rotate(135)"/><use href="#ray_pos" transform="rotate(180)"/><use href="#ray_pos" transform="rotate(225)"/><use href="#ray_pos" transform="rotate(270)"/><use href="#ray_pos" transform="rotate(315)"/><circle cx="0" cy="0" r="10" fill="#ffcccc" stroke="#ff0000" stroke-width="1.5"/><text x="0" y="5" text-anchor="middle" font-size="14" font-weight="bold" stroke="none" fill="#ff0000">+</text></svg>',

    // [修正] 负电荷电场线 
    'efield_neg_point': '<svg viewBox="-50 -50 100 100" fill="none" stroke="#008080" stroke-width="2"><defs><g id="ray_neg"><line x1="0" y1="-12" x2="0" y2="-48"/><path d="M0 -25 L-4 -35 L4 -35 Z" fill="#008080" stroke="none"/></g></defs><use href="#ray_neg"/><use href="#ray_neg" transform="rotate(45)"/><use href="#ray_neg" transform="rotate(90)"/><use href="#ray_neg" transform="rotate(135)"/><use href="#ray_neg" transform="rotate(180)"/><use href="#ray_neg" transform="rotate(225)"/><use href="#ray_neg" transform="rotate(270)"/><use href="#ray_neg" transform="rotate(315)"/><circle cx="0" cy="0" r="10" fill="#ccccff" stroke="#0000ff" stroke-width="1.5"/><text x="0" y="4" text-anchor="middle" font-size="14" font-weight="bold" stroke="none" fill="#0000ff">-</text></svg>',

// [修正] 等量异种电荷电场线 
    'efield_dipole': `<svg viewBox="-110 -80 220 160" fill="none" stroke="#008080" stroke-width="1.5">
      <defs>
        <path id="arr_left" d="M 5 -3 L -2 0 L 5 3 Z" fill="#008080" stroke="none"/>
        <path id="arr_right" d="M -5 -3 L 2 0 L -5 3 Z" fill="#008080" stroke="none"/>
      </defs>
      
      <line x1="50" y1="0" x2="-50" y2="0"/>
      <use href="#arr_left" x="0" y="0"/>

      <path d="M 52 -10 Q 0 -45 -52 -10"/>
      <use href="#arr_left" x="0" y="-27.5"/>
      
      <path d="M 52 10 Q 0 45 -52 10"/>
      <use href="#arr_left" x="0" y="27.5"/>

      <path d="M 56 -20 Q 0 -90 -56 -20"/>
      <use href="#arr_left" x="0" y="-55"/>
      
      <path d="M 56 20 Q 0 90 -56 20"/>
      <use href="#arr_left" x="0" y="55"/>

      <path d="M 64 -18 Q 80 -40 100 -50"/> 
      <use href="#arr_right" x="81" y="-37" transform="rotate(-42 81 -37)"/>
      
      <path d="M 64 18 Q 80 40 100 50"/>  
      <use href="#arr_right" x="81" y="37" transform="rotate(42 81 37)"/>
      
      <line x1="70" y1="0" x2="105" y2="0"/> 
      <use href="#arr_right" x="90" y="0"/>

      <path d="M -100 -50 Q -80 -40 -64 -18"/> 
      <use href="#arr_right" x="-81" y="-37" transform="rotate(42 -81 -37)"/>
      
      <path d="M -100 50 Q -80 40 -64 18"/>  
      <use href="#arr_right" x="-81" y="37" transform="rotate(-42 -81 37)"/>
      
      <line x1="-105" y1="0" x2="-70" y2="0"/> 
      <use href="#arr_right" x="-90" y="0"/>

      <circle cx="-60" cy="0" r="12" fill="#ffcccc" stroke="#d45500" stroke-width="2"/>
      <line x1="-66" y1="0" x2="-54" y2="0" stroke="black" stroke-width="2"/>
      
      <circle cx="60" cy="0" r="12" fill="#ffcccc" stroke="#d45500" stroke-width="2"/>
      <line x1="54" y1="0" x2="66" y2="0" stroke="black" stroke-width="2"/>
      <line x1="60" y1="-6" x2="60" y2="6" stroke="black" stroke-width="2"/>
    </svg>`,


// [Max] 等量同种电荷排斥
    'efield_repulsion': `<svg viewBox="-120 -100 240 200" fill="none" stroke="#008080" stroke-width="1.2">
      <defs>
        <path id="arr_rep" d="M -4 -2.5 L 1 0 L -4 2.5 Z" fill="#008080" stroke="none"/>
      </defs>
      
      <g transform="translate(60,0)">
        <line x1="12" y1="0" x2="55" y2="0"/>
        <use href="#arr_rep" x="33.5" y="0"/>
        
        <path d="M 11 -4 Q 35 -15 55 -25"/> <use href="#arr_rep" x="34" y="-14.8" transform="rotate(-25.5 34 -14.8)"/>
        <path d="M 10 -7 Q 30 -30 50 -55"/> <use href="#arr_rep" x="30" y="-30.5" transform="rotate(-50.2 30 -30.5)"/>
        <path d="M 8 -10 Q 20 -45 35 -80"/> <use href="#arr_rep" x="20.8" y="-45" transform="rotate(-68.9 20.8 -45)"/>
        <path d="M 5 -11 Q 5 -55 15 -90"/>  <use href="#arr_rep" x="7.5" y="-52.8" transform="rotate(-82.8 7.5 -52.8)"/>
        
        <path d="M 2 -12 Q -10 -30 -15 -95"/> <use href="#arr_rep" x="-8.3" y="-41.8" transform="rotate(-101.6 -8.3 -41.8)"/>
        <path d="M -2 -12 Q -25 -35 -35 -95"/><use href="#arr_rep" x="-21.8" y="-44.3" transform="rotate(-111.7 -21.8 -44.3)"/>
        <path d="M -6 -10 Q -40 -30 -55 -90"/><use href="#arr_rep" x="-35.3" y="-40" transform="rotate(-121.5 -35.3 -40)"/>

        <path d="M 11 4 Q 35 15 55 25"/>  <use href="#arr_rep" x="34" y="14.8" transform="rotate(25.5 34 14.8)"/>
        <path d="M 10 7 Q 30 30 50 55"/>  <use href="#arr_rep" x="30" y="30.5" transform="rotate(50.2 30 30.5)"/>
        <path d="M 8 10 Q 20 45 35 80"/>  <use href="#arr_rep" x="20.8" y="45" transform="rotate(68.9 20.8 45)"/>
        <path d="M 5 11 Q 5 55 15 90"/>   <use href="#arr_rep" x="7.5" y="52.8" transform="rotate(82.8 7.5 52.8)"/>
        
        <path d="M 2 12 Q -10 30 -15 95"/>  <use href="#arr_rep" x="-8.3" y="41.8" transform="rotate(101.6 -8.3 41.8)"/>
        <path d="M -2 12 Q -25 35 -35 95"/> <use href="#arr_rep" x="-21.8" y="44.3" transform="rotate(111.7 -21.8 44.3)"/>
        <path d="M -6 10 Q -40 30 -55 90"/> <use href="#arr_rep" x="-35.3" y="40" transform="rotate(121.5 -35.3 40)"/>
      </g>

      <g transform="translate(-60,0)">
        <line x1="-12" y1="0" x2="-55" y2="0"/>
        <use href="#arr_rep" x="-33.5" y="0" transform="rotate(180 -33.5 0)"/>
        
        <path d="M -11 -4 Q -35 -15 -55 -25"/> <use href="#arr_rep" x="-34" y="-14.8" transform="rotate(-154.5 -34 -14.8)"/>
        <path d="M -10 -7 Q -30 -30 -50 -55"/> <use href="#arr_rep" x="-30" y="-30.5" transform="rotate(-129.8 -30 -30.5)"/>
        <path d="M -8 -10 Q -20 -45 -35 -80"/> <use href="#arr_rep" x="-20.8" y="-45" transform="rotate(-111.1 -20.8 -45)"/>
        <path d="M -5 -11 Q -5 -55 -15 -90"/>  <use href="#arr_rep" x="-7.5" y="-52.8" transform="rotate(-97.2 -7.5 -52.8)"/>
        
        <path d="M -2 -12 Q 10 -30 15 -95"/> <use href="#arr_rep" x="8.3" y="-41.8" transform="rotate(-78.4 8.3 -41.8)"/>
        <path d="M 2 -12 Q 25 -35 35 -95"/><use href="#arr_rep" x="21.8" y="-44.3" transform="rotate(-68.3 21.8 -44.3)"/>
        <path d="M 6 -10 Q 40 -30 55 -90"/><use href="#arr_rep" x="35.3" y="-40" transform="rotate(-58.5 35.3 -40)"/>

        <path d="M -11 4 Q -35 15 -55 25"/>  <use href="#arr_rep" x="-34" y="14.8" transform="rotate(154.5 -34 14.8)"/>
        <path d="M -10 7 Q -30 30 -50 55"/>  <use href="#arr_rep" x="-30" y="30.5" transform="rotate(129.8 -30 30.5)"/>
        <path d="M -8 10 Q -20 45 -35 80"/>  <use href="#arr_rep" x="-20.8" y="45" transform="rotate(111.1 -20.8 45)"/>
        <path d="M -5 11 Q -5 55 -15 90"/>   <use href="#arr_rep" x="-7.5" y="52.8" transform="rotate(97.2 -7.5 52.8)"/>
        
        <path d="M -2 12 Q 10 30 15 95"/>  <use href="#arr_rep" x="8.3" y="41.8" transform="rotate(78.4 8.3 41.8)"/>
        <path d="M 2 12 Q 25 35 35 95"/> <use href="#arr_rep" x="21.8" y="44.3" transform="rotate(68.3 21.8 44.3)"/>
        <path d="M 6 10 Q 40 30 55 90"/> <use href="#arr_rep" x="35.3" y="40" transform="rotate(58.5 35.3 40)"/>
      </g>

      <g stroke="black" stroke-width="2">
          <circle cx="-60" cy="0" r="12" fill="#ffcccc" stroke="#d45500"/>
          <path d="M -66 0 L -54 0 M -60 -6 L -60 6"/>
          <circle cx="60" cy="0" r="12" fill="#ffcccc" stroke="#d45500"/>
          <path d="M 54 0 L 66 0 M 60 -6 L 60 6"/>
      </g>
    </svg>`,
// [终极修正] 任意电场 (无字母、无点，纯净电场线)
    'efield_arbitrary': `<svg viewBox="0 0 200 120" fill="none" stroke="#008080" stroke-width="1.5">
      <defs>
        <path id="arr_arb" d="M -4 -2.5 L 1 0 L -4 2.5 Z" fill="#008080" stroke="none"/>
      </defs>

      <path d="M 10 40 Q 80 10 180 20"/>
      <use href="#arr_arb" x="180" y="20" transform="rotate(5 180 20)"/>

      <path d="M 15 55 Q 90 25 185 35"/>
      <use href="#arr_arb" x="185" y="35" transform="rotate(8 185 35)"/>

      <path d="M 20 70 Q 100 40 190 55"/>
      <use href="#arr_arb" x="190" y="55" transform="rotate(12 190 55)"/>

      <path d="M 25 85 Q 110 55 185 85"/>
      <use href="#arr_arb" x="185" y="85" transform="rotate(28 185 85)"/>

      <path d="M 35 100 Q 120 70 180 110"/>
      <use href="#arr_arb" x="180" y="110" transform="rotate(40 180 110)"/>
    </svg>`,
// [新增] 示波器/阴极射线管 (CRT Oscilloscope) - 含侧视图和正视图
    'crt_oscilloscope': `<svg viewBox="0 0 600 220" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <defs>
        <radialGradient id="grad_screen" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:#eeffaa; stop-opacity:1" />
          <stop offset="100%" style="stop-color:#ccee88; stop-opacity:1" />
        </radialGradient>
        <linearGradient id="grad_metal" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#ddd" />
          <stop offset="50%" style="stop-color:#999" />
          <stop offset="100%" style="stop-color:#777" />
        </linearGradient>
      </defs>

      <path d="M 10 90 L 80 90" stroke="#555" stroke-width="1.5"/>
      <path d="M 10 130 L 80 130" stroke="#555" stroke-width="1.5"/>
      <ellipse cx="10" cy="110" rx="5" ry="20" stroke="#555" stroke-width="1.5"/>
      
      <path d="M 80 90 L 190 90 L 320 50" stroke="#555" stroke-width="1.5"/>
      <path d="M 80 130 L 190 130 L 320 170" stroke="#555" stroke-width="1.5"/>
      <ellipse cx="320" cy="110" rx="10" ry="60" fill="#eeffaa" stroke="#555" opacity="0.8"/>

      <path d="M 20 105 L 30 105 Q 35 110 30 115 L 20 115" stroke="#333"/>
      <rect x="45" y="95" width="25" height="30" fill="url(#grad_metal)" stroke="#555"/>
      <line x1="58" y1="95" x2="58" y2="85" stroke="#555"/> <rect x="100" y="80" width="30" height="4" fill="#888" stroke="none"/> <line x1="115" y1="80" x2="115" y2="60" stroke="#555"/> <rect x="100" y="136" width="30" height="4" fill="#888" stroke="none"/> <line x1="115" y1="140" x2="115" y2="160" stroke="#555"/> <path d="M 150 90 L 175 90 L 175 120 L 150 120 Z" fill="#666" stroke="none"/>
      <path d="M 155 100 L 180 100 L 180 130 L 155 130 Z" fill="#999" stroke="#555"/>
      <line x1="167" y1="100" x2="185" y2="70" stroke="#555"/> <line x1="30" y1="110" x2="320" y2="110" stroke="#ff0066" stroke-width="2"/>
      <circle cx="320" cy="110" r="3" fill="#ff0066" stroke="none"/>

      <line x1="320" y1="50" x2="400" y2="50" stroke="#999" stroke-dasharray="4,4" stroke-width="1"/>
      <line x1="320" y1="170" x2="400" y2="170" stroke="#999" stroke-dasharray="4,4" stroke-width="1"/>
      <line x1="320" y1="110" x2="400" y2="110" stroke="#999" stroke-dasharray="4,4" stroke-width="1"/>


      <g transform="translate(480, 110)">
        <circle cx="0" cy="0" r="60" fill="url(#grad_screen)" stroke="#555" stroke-width="2"/>
        
        <g stroke="#333" stroke-width="1.5">
            <line x1="-15" y1="-50" x2="15" y2="-50"/>
            <line x1="0" y1="-50" x2="0" y2="-65"/>
            <line x1="-15" y1="50" x2="15" y2="50"/>
            <line x1="0" y1="50" x2="0" y2="65"/>
            <line x1="-50" y1="-15" x2="-50" y2="15"/>
            <line x1="-50" y1="0" x2="-65" y2="0"/>
            <line x1="50" y1="-15" x2="50" y2="15"/>
            <line x1="50" y1="0" x2="65" y2="0"/>
        </g>
        
        <line x1="-55" y1="0" x2="55" y2="0" stroke="#555" stroke-dasharray="3,3" stroke-width="1"/>
        <line x1="0" y1="-55" x2="0" y2="55" stroke="#555" stroke-dasharray="3,3" stroke-width="1"/>

        <circle cx="0" cy="0" r="5" fill="#ff0066" stroke="none"/>
        <circle cx="0" cy="0" r="10" fill="#ff0066" stroke="none" opacity="0.3"/>
      </g>
    </svg>`,
// [新增] 游标卡尺 (Vernier Caliper)
    'caliper': `<svg viewBox="0 0 400 120" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <defs>
        <linearGradient id="grad_steel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#e0e0e0"/>
          <stop offset="50%" style="stop-color:#f8f8f8"/>
          <stop offset="100%" style="stop-color:#d0d0d0"/>
        </linearGradient>
      </defs>
      <rect x="20" y="40" width="360" height="25" fill="url(#grad_steel)" stroke="#555"/>
      <path d="M40 40 L40 50 M50 40 L50 48 M60 40 L60 48 M70 40 L70 48 M80 40 L80 48 M90 40 L90 50" stroke="#555" stroke-width="1"/>
      <line x1="25" y1="52" x2="375" y2="52" stroke="#bbb" stroke-width="1"/>
      
      <path d="M20 40 L20 90 L40 90 L40 65" fill="url(#grad_steel)" stroke="#555"/> <path d="M20 40 L20 10 L30 10 L35 40" fill="url(#grad_steel)" stroke="#555"/> <g transform="translate(60, 0)">
        <path d="M0 38 L100 38 L100 65 L20 65 L20 90 L0 90 Z" fill="url(#grad_steel)" stroke="#555"/>
        <path d="M0 38 L5 10 L15 10 L20 38" fill="url(#grad_steel)" stroke="#555"/>
        <circle cx="50" cy="30" r="4" fill="#ccc" stroke="#555"/>
        <line x1="50" y1="30" x2="50" y2="26"/>
        <rect x="100" y="48" width="200" height="4" fill="#ccc" stroke="none"/>
        <rect x="10" y="52" width="80" height="10" fill="#eee" stroke="none"/>
        <line x1="15" y1="52" x2="15" y2="58" stroke="#555"/>
        <line x1="85" y1="52" x2="85" y2="58" stroke="#555"/>
      </g>
    </svg>`,

    // [新增] 螺旋测微器/千分尺 (Micrometer)
    'micrometer': `<svg viewBox="0 0 300 150" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <defs>
        <linearGradient id="grad_frame" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#446688"/> <stop offset="100%" style="stop-color:#224466"/>
        </linearGradient>
        <linearGradient id="grad_knob" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#eee"/>
          <stop offset="100%" style="stop-color:#999"/>
        </linearGradient>
      </defs>
      
      <path d="M20 50 A 50 50 0 1 0 120 100 L 150 100 L 150 80 L 100 80" fill="none" stroke="none"/> <path d="M30 65 A 45 45 0 0 0 130 110 L 140 110 L 140 85 L 120 70 A 30 30 0 0 1 30 65 Z" fill="url(#grad_frame)" stroke="#223344" stroke-width="2"/>
      
      <rect x="140" y="60" width="10" height="15" fill="#ccc" stroke="#555"/>
      <line x1="150" y1="67.5" x2="155" y2="67.5" stroke="#555" stroke-width="2"/>

      <rect x="25" y="62" width="15" height="10" fill="#ccc" stroke="#555"/>
      <line x1="40" y1="67.5" x2="60" y2="67.5" stroke="#555" stroke-width="2"/>

      <rect x="140" y="55" width="80" height="25" fill="url(#grad_knob)" stroke="#555"/>
      <line x1="140" y1="67.5" x2="220" y2="67.5" stroke="#555"/> <path d="M160 67.5 L160 75 M170 67.5 L170 60 M180 67.5 L180 75 M190 67.5 L190 60" stroke="#555" stroke-width="1"/>

      <path d="M210 50 L260 55 L260 80 L210 85 Z" fill="url(#grad_knob)" stroke="#555"/>
      <path d="M215 52 L215 83" stroke="#555" stroke-width="1"/> <path d="M225 54 L225 81" stroke="#555" stroke-width="1" stroke-dasharray="2,2"/> <path d="M235 55 L235 80" stroke="#555" stroke-width="1" stroke-dasharray="2,2"/>
      <path d="M245 55 L245 80" stroke="#555" stroke-width="1" stroke-dasharray="2,2"/>

      <rect x="260" y="60" width="10" height="15" fill="#888" stroke="#555"/>
      <rect x="270" y="62" width="5" height="11" fill="#666" stroke="#555"/>
    </svg>`,

// [新增] 多用电表 (Multimeter) - 简笔画风格
    'multimeter': `<svg viewBox="0 0 100 160" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="10" y="10" width="80" height="130" rx="15" fill="white" stroke="black" stroke-width="2"/>
      
      <rect x="20" y="25" width="60" height="45" fill="#e6f2ff" stroke="black" stroke-width="2"/>
      
      <circle cx="50" cy="105" r="22" fill="white" stroke="black" stroke-width="2"/>
      
      <path d="M 50 105 L 68 98 L 68 112 Z" fill="#e6f2ff" stroke="black" stroke-width="2"/>
      
      <path d="M 25 140 L 25 155" stroke="black" stroke-width="6"/> <path d="M 75 140 L 75 155" stroke="black" stroke-width="6"/> </svg>`,
// [新增] 小磁针 (Small Magnetic Needle)
    'magnetic_needle_small': '<svg viewBox="0 0 40 80" stroke="black" stroke-width="1.5" stroke-linejoin="round"><polygon points="20,0 40,40 0,40" fill="#ff3333"/><text x="20" y="32" text-anchor="middle" fill="white" font-size="16" font-weight="bold" stroke="none">N</text><polygon points="0,40 40,40 20,80" fill="#3366ff"/><text x="20" y="62" text-anchor="middle" fill="white" font-size="16" font-weight="bold" stroke="none">S</text><circle cx="20" cy="40" r="3" fill="#555" stroke="none"/></svg>',
// [新增] 条形磁铁 (Bar Magnet)
    'bar_magnet': '<svg viewBox="0 0 120 40" stroke="black" stroke-width="1.5"><rect x="0" y="0" width="60" height="40" fill="#ff3333"/><text x="30" y="28" text-anchor="middle" fill="white" font-size="24" font-weight="bold" stroke="none">N</text><rect x="60" y="0" width="60" height="40" fill="#3366ff"/><text x="90" y="28" text-anchor="middle" fill="white" font-size="24" font-weight="bold" stroke="none">S</text></svg>',
// [修正版] 环形电流 (Circular Current) - 正圆 + 逆时针箭头
    'current_loop': `<svg viewBox="-55 -55 110 110" fill="none" stroke="#0066cc" stroke-width="2.5">
      <defs>
        <path id="arr_on_circle" d="M -6 -3 L 2 0 L -6 3 Z" fill="#0066cc" stroke="none"/>
      </defs>
      
      <circle cx="0" cy="0" r="40"/>
      
      <use href="#arr_on_circle" x="0" y="-40" transform="rotate(180 0 -40)"/>
      <use href="#arr_on_circle" x="0" y="40" transform="rotate(0 0 40)"/>
      
      <circle cx="0" cy="0" r="2" fill="#0066cc" stroke="none" opacity="0.5"/>
    </svg>`,

   // [终极修正] 通电螺线管 (Vertical Solenoid with Core) - 还原实物图
    'solenoid_current': `<svg viewBox="-40 -10 160 220" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <defs>
        <linearGradient id="core_grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#dcb368; stop-opacity:1" /> <stop offset="40%" style="stop-color:#fcebc5; stop-opacity:1" /> <stop offset="100%" style="stop-color:#c49028; stop-opacity:1" /> </linearGradient>
        <circle id="terminal" r="3" fill="white" stroke="black" stroke-width="1.5"/>
      </defs>

      <ellipse cx="40" cy="20" rx="30" ry="10" fill="#cd9e55" stroke="black" stroke-width="1.5"/>
      <path d="M 10 20 L 10 180 C 10 190 70 190 70 180 L 70 20" fill="url(#core_grad)" stroke="black" stroke-width="1.5"/>
      <path d="M 10 20 A 30 10 0 0 0 70 20" fill="none" stroke="black" stroke-width="1.5"/>

      <g stroke="#222" stroke-width="2" fill="none">
        <line x1="-30" y1="50" x2="10" y2="50"/> 
        <use href="#terminal" x="-30" y="50"/> <path d="M 10 50 Q 40 58 70 50"/> 
        <path d="M 10 65 Q 40 73 70 65"/>
        <path d="M 10 80 Q 40 88 70 80"/>
        <path d="M 10 95 Q 40 103 70 95"/>
        <path d="M 10 110 Q 40 118 70 110"/>
        <path d="M 10 125 Q 40 133 70 125"/>
        <path d="M 10 140 Q 40 148 70 140"/>
        <path d="M 10 155 Q 40 163 70 155"/>
        
        <line x1="70" y1="155" x2="110" y2="155"/>
        <use href="#terminal" x="110" y="155"/> </g>

      <g stroke="#222" stroke-width="2" opacity="1">
         <path d="M 70 50 L 70 53" stroke="none"/> </g>
    </svg>`,

// [终极修正] N-S 正对匀强磁场 (手动绘制实心箭头，确保显示)
    'b_field_uniform_ns': `<svg viewBox="0 0 200 250" fill="none" stroke="none">
      <g transform="translate(0, 20)">
        <path d="M 20 20 C 60 5, 140 35, 180 20 L 180 50 L 20 50 Z" fill="#999"/>
        <rect x="20" y="50" width="160" height="30" fill="#e63946"/>
        <text x="100" y="72" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold" font-size="20">N</text>
      </g>

      <g transform="translate(0, 180)">
        <path d="M 20 0 C 60 -15, 140 15, 180 0 L 180 30 L 20 30 Z" fill="#005b96"/>
        <path d="M 20 30 L 180 30 L 160 50 L 40 50 Z" fill="#004070"/>
        <text x="100" y="22" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold" font-size="20">S</text>
      </g>

      <g stroke="#00a896" stroke-width="2.5">
        <line x1="40" y1="85" x2="40" y2="165"/>
        <path d="M 34 160 L 40 175 L 46 160 Z" fill="#00a896" stroke="none"/> <line x1="70" y1="85" x2="70" y2="165"/>
        <path d="M 64 160 L 70 175 L 76 160 Z" fill="#00a896" stroke="none"/>

        <line x1="100" y1="85" x2="100" y2="165"/>
        <path d="M 94 160 L 100 175 L 106 160 Z" fill="#00a896" stroke="none"/>

        <line x1="130" y1="85" x2="130" y2="165"/>
        <path d="M 124 160 L 130 175 L 136 160 Z" fill="#00a896" stroke="none"/>

        <line x1="160" y1="85" x2="160" y2="165"/>
        <path d="M 154 160 L 160 175 L 166 160 Z" fill="#00a896" stroke="none"/>
      </g>
      
      <text x="175" y="135" fill="#00a896" font-family="Times New Roman, serif" font-style="italic" font-size="24" font-weight="bold">B</text>
    </svg>`,

// [新增] 显像管/磁偏转原理 (CRT - Magnetic Deflection)
    'crt_magnetic': `<svg viewBox="0 0 260 140" fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <defs>
        <linearGradient id="grad_coil" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#dcb368" />
          <stop offset="50%" style="stop-color:#b08040" />
          <stop offset="100%" style="stop-color:#8a6030" />
        </linearGradient>
      </defs>

      <g stroke="#333">
          <rect x="5" y="55" width="20" height="30" rx="2" fill="#ddd"/> <rect x="25" y="62" width="15" height="16" fill="#bbb"/> <line x1="5" y1="70" x2="0" y2="70"/> </g>

      <path d="M 40 55 L 90 55 Q 120 55 140 20 L 230 10" stroke="#777" stroke-width="2"/> <path d="M 40 85 L 90 85 Q 120 85 140 120 L 230 130" stroke="#777" stroke-width="2"/> <path d="M 230 10 Q 250 70 230 130" stroke="#555" stroke-width="3"/>
      <path d="M 227 13 Q 247 70 227 127" stroke="#00ffff" stroke-width="2" opacity="0.3"/>

      <path d="M 85 54 Q 100 50 115 45 L 125 55 Q 110 60 95 60 Z" fill="url(#grad_coil)" stroke="none"/>
      <path d="M 85 86 Q 100 90 115 95 L 125 85 Q 110 80 95 80 Z" fill="url(#grad_coil)" stroke="none"/>
      <path d="M 85 54 Q 100 50 115 45 M 85 86 Q 100 90 115 95" stroke="#8a6030" stroke-width="0.5" fill="none"/>

      <path d="M 40 70 L 90 70 Q 130 70 236 28" stroke="#ff3366" stroke-width="2" fill="none"/>
      
      <circle cx="236" cy="28" r="3" fill="#ff3366" stroke="none"/>
      <circle cx="236" cy="28" r="8" fill="#ff3366" opacity="0.3" stroke="none"/>
    </svg>`,




    // === 4. 光学 (Optics) ===
    'lens': '<svg viewBox="0 0 40 100" fill="none" stroke="black" stroke-width="2"><path d="M20 10 L20 90"/><path d="M15 15 L20 10 L25 15"/><path d="M15 85 L20 90 L25 85"/></svg>',
    'lens_concave': '<svg viewBox="0 0 40 100" fill="none" stroke="black" stroke-width="2"><line x1="20" y1="10" x2="20" y2="90"/><path d="M15 10 L20 15 L25 10"/><path d="M15 90 L20 85 L25 90"/></svg>',
    'mirror_flat': '<svg viewBox="0 0 100 20" fill="none" stroke="black" stroke-width="2"><line x1="0" y1="10" x2="100" y2="10"/><path d="M10 10 L0 20 M30 10 L20 20 M50 10 L40 20 M70 10 L60 20 M90 10 L80 20" stroke-width="1"/></svg>',
    'mirror_convex': '<svg viewBox="0 0 30 100" fill="none" stroke="black" stroke-width="2"><path d="M20 10 Q30 50 20 90"/><path d="M20 10 L10 15 M22 20 L12 25 M24 30 L14 35 M25 50 L15 55 M24 70 L14 75 M22 80 L12 85 M20 90 L10 95" stroke-width="1"/></svg>',
    'mirror_concave': '<svg viewBox="0 0 30 100" fill="none" stroke="black" stroke-width="2"><path d="M10 10 Q0 50 10 90"/><path d="M10 10 L0 15 M8 20 L-2 25 M5 50 L-5 55 M8 80 L-2 85 M10 90 L0 95" stroke-width="1"/></svg>',
    'prism': '<svg viewBox="0 0 60 60" fill="none" stroke="black" stroke-width="2"><polygon points="30,5 5,55 55,55"/></svg>',
    'doubleslit': '<svg viewBox="0 0 20 100" fill="none" stroke="black" stroke-width="2"><line x1="10" y1="0" x2="10" y2="40"/><line x1="10" y1="45" x2="10" y2="55"/><line x1="10" y1="60" x2="10" y2="100"/></svg>',
    'grating': '<svg viewBox="0 0 60 100" fill="none" stroke="black" stroke-width="2"><rect x="2" y="2" width="56" height="96"/><g stroke-width="1"><line x1="10" y1="5" x2="10" y2="95"/><line x1="20" y1="5" x2="20" y2="95"/><line x1="30" y1="5" x2="30" y2="95"/><line x1="40" y1="5" x2="40" y2="95"/><line x1="50" y1="5" x2="50" y2="95"/></g></svg>',
    'youngs_exp': '<svg viewBox="0 0 100 60" fill="none" stroke="black" stroke-width="2"><line x1="20" y1="0" x2="20" y2="22"/><line x1="20" y1="28" x2="20" y2="32"/><line x1="20" y1="38" x2="20" y2="60"/><line x1="90" y1="5" x2="90" y2="55" stroke-width="3"/><path d="M20 25 L90 30 M20 35 L90 30" stroke-width="1" stroke-dasharray="3,2"/><path d="M20 25 L90 15 M20 35 L90 15" stroke-width="1" stroke-dasharray="3,2"/></svg>',
    'michelson': '<svg viewBox="0 0 100 100" fill="none" stroke="black" stroke-width="2"><path d="M10 50 L90 50 M50 10 L50 90" stroke-width="1"/><rect x="0" y="45" width="10" height="10" fill="black"/><line x1="35" y1="10" x2="65" y2="10" stroke-width="4"/><line x1="90" y1="35" x2="90" y2="65" stroke-width="4"/><line x1="35" y1="90" x2="65" y2="90" stroke-width="4"/><line x1="30" y1="70" x2="70" y2="30" stroke-dasharray="3,2"/></svg>',
// [新增] 杨氏双缝干涉实验 (Young's Double Slit Interference)
    'youngs_interference': `<svg viewBox="0 0 300 150" fill="none" stroke="black" stroke-width="1.5">
      <defs>
        <linearGradient id="interference_pattern" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" style="stop-color:#000"/>
          <stop offset="20%" style="stop-color:#f00; stop-opacity:0.5"/> <stop offset="35%" style="stop-color:#000"/>
          <stop offset="50%" style="stop-color:#ff0000; stop-opacity:1"/> <stop offset="65%" style="stop-color:#000"/>
          <stop offset="80%" style="stop-color:#f00; stop-opacity:0.5"/> <stop offset="100%" style="stop-color:#000"/>
        </linearGradient>
        <marker id="arrow_path" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="#555" stroke="none"/>
        </marker>
      </defs>

      <g stroke="#ff0000" stroke-width="2" opacity="0.6">
        <line x1="20" y1="20" x2="20" y2="130"/>
        <line x1="40" y1="20" x2="40" y2="130"/>
        <line x1="60" y1="20" x2="60" y2="130"/>
      </g>
      <text x="10" y="75" fill="#ff0000" stroke="none" font-size="14" text-anchor="middle" transform="rotate(-90 10 75)">Light Source</text>

      <path d="M 80 10 L 80 55  M 80 65 L 80 85 M 80 95 L 80 140" stroke="#555" stroke-width="6" stroke-linecap="butt"/>
      <text x="70" y="62" fill="#555" stroke="none" font-size="12">S1</text>
      <text x="70" y="98" fill="#555" stroke="none" font-size="12">S2</text>

      <rect x="270" y="10" width="20" height="130" fill="url(#interference_pattern)" stroke="#333" stroke-width="1"/>
      <text x="280" y="155" fill="#333" stroke="none" font-size="14" text-anchor="middle">Screen</text>

      <g stroke="#ff0000" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.8">
        <line x1="83" y1="60" x2="270" y2="40" /> 
        <line x1="83" y1="90" x2="270" y2="40" />
      </g>
      <circle cx="270" cy="40" r="3" fill="#ff0000" stroke="none"/>
      <text x="255" y="45" fill="#ff0000" stroke="none" font-size="14">P</text>

      <g stroke="#555" stroke-width="1">
        <line x1="83" y1="60" x2="96" y2="69" stroke-dasharray="2,2"/> 
        <line x1="85" y1="85" x2="98" y2="66" marker-end="url(#arrow_path)" marker-start="url(#arrow_path)"/>
        <text x="105" y="80" fill="#555" stroke="none" font-size="14" font-style="italic">Δr</text>
      </g>
    </svg>`,

// [修正版] 迈克尔逊干涉仪 (纯净版，无文字标注)
    'michelson_interferometer': `<svg viewBox="0 0 300 260" fill="none" stroke="#333" stroke-width="1.5">
      <defs>
        <marker id="arrow_red_light" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="#ff0000" stroke="none"/>
        </marker>
      </defs>

      <rect x="10" y="115" width="30" height="20" fill="#555" stroke="none"/>

      <g transform="rotate(45 150 125)">
        <rect x="138" y="105" width="24" height="40" fill="#aaddff" opacity="0.4" stroke="#0066cc"/>
        <line x1="150" y1="105" x2="150" y2="145" stroke="#0066cc" stroke-width="2" opacity="0.6"/>
      </g>

      <g>
        <rect x="130" y="10" width="40" height="6" fill="#ddd" stroke="#555"/>
        <line x1="130" y1="16" x2="170" y2="16" stroke="#aaa" stroke-width="3"/>
      </g>

      <g>
        <rect x="260" y="105" width="6" height="40" fill="#ddd" stroke="#555"/>
        <line x1="260" y1="105" x2="260" y2="145" stroke="#aaa" stroke-width="3"/>
        <line x1="275" y1="125" x2="295" y2="125" stroke="#555" marker-end="url(#arrow_red_light)" marker-start="url(#arrow_red_light)"/>
      </g>

      <g>
        <rect x="120" y="230" width="60" height="10" fill="#eee" stroke="#555"/>
        <circle cx="150" cy="230" r="12" stroke="#ff0000" stroke-width="2" fill="none" opacity="0.3"/>
        <circle cx="150" cy="230" r="7" stroke="#ff0000" stroke-width="2" fill="none" opacity="0.6"/>
        <circle cx="150" cy="230" r="3" fill="#ff0000" stroke="none"/>
      </g>

      <g stroke="#ff0000" stroke-width="1.5">
        <line x1="40" y1="125" x2="135" y2="125" marker-end="url(#arrow_red_light)"/>
        
        <line x1="150" y1="125" x2="150" y2="30" marker-end="url(#arrow_red_light)"/>
        <line x1="150" y1="16" x2="150" y2="110" marker-end="url(#arrow_red_light)"/>

        <line x1="150" y1="125" x2="245" y2="125" marker-end="url(#arrow_red_light)"/>
        <line x1="260" y1="125" x2="165" y2="125" marker-end="url(#arrow_red_light)"/>
        
        <line x1="150" y1="125" x2="150" y2="220" marker-end="url(#arrow_red_light)" stroke-width="2"/>
      </g>
    </svg>`,



    // === 5. 热学 (Thermal) ===
    'thermometer': '<svg viewBox="0 0 20 100" fill="none" stroke="black" stroke-width="2"><path d="M10 10 L10 80 A 8 8 0 1 1 10 90 A 8 8 0 1 1 10 80" stroke-width="2"/><line x1="10" y1="80" x2="10" y2="20" stroke-width="1"/><line x1="6" y1="30" x2="10" y2="30" stroke-width="1"/><line x1="6" y1="40" x2="10" y2="40" stroke-width="1"/><line x1="6" y1="50" x2="10" y2="50" stroke-width="1"/><circle cx="10" cy="88" r="4" fill="black"/></svg>',
    'flame': '<svg viewBox="0 0 40 50" fill="none" stroke="black" stroke-width="2"><path d="M5 50 L35 50 L30 30 L10 30 Z"/><path d="M20 30 Q 10 15 20 0 Q 30 15 20 30" fill="white"/></svg>',
    'piston': '<svg viewBox="0 0 60 100" fill="none" stroke="black" stroke-width="2"><line x1="10" y1="10" x2="10" y2="90"/><line x1="10" y1="90" x2="50" y2="90"/><line x1="50" y1="90" x2="50" y2="10"/><rect x="12" y="50" width="36" height="10" fill="white"/><line x1="30" y1="50" x2="30" y2="20"/></svg>',

    // === 6. 近代物理 (Modern Physics) ===
    'atom_bohr': '<svg viewBox="0 0 60 60" fill="none" stroke="black" stroke-width="2"><circle cx="30" cy="30" r="4" fill="black"/><ellipse cx="30" cy="30" rx="12" ry="25" stroke-width="1" transform="rotate(45 30 30)"/><ellipse cx="30" cy="30" rx="12" ry="25" stroke-width="1" transform="rotate(-45 30 30)"/><circle cx="38" cy="12" r="2" fill="black"/><circle cx="22" cy="48" r="2" fill="black"/></svg>',
    'photoelectric': '<svg viewBox="0 0 80 60" fill="none" stroke="black" stroke-width="2"><rect x="10" y="40" width="60" height="10" fill="gray"/><path d="M10 10 L25 40 M20 10 L35 40 M30 10 L45 40" stroke="orange" stroke-dasharray="3,1" marker-end="url(#arrow_small)"/><path d="M35 35 L45 15 M55 35 L65 15" stroke="blue" marker-end="url(#arrow_small)"/><defs><marker id="arrow_small" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="black"/></marker></defs></svg>'
};