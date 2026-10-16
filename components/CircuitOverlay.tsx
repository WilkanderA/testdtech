"use client";

// Total cycle = travel (3s) + pause. Stagger begins so at most 1-2 dots visible at once.
// With cycle ~18s and 13 dots spread across 0-130s of begin offsets, only ~1 fires per 10s window.
const routes = [
  { id: "p1",  d: "M 60 180 h 130 v -60 h 90 v 110 h 200 v -40 h 70 v 80 h 150 v -90 h 60",       fill: "#a78bfa", begin: 0    },
  { id: "p2",  d: "M 1380 120 h -110 v 90 h -80 v -70 h -200 v 130 h -90 v -50 h -130 v 60",        fill: "#c084fc", begin: 4    },
  { id: "p3",  d: "M 400 350 v -80 h 160 v 120 h -90 v -60 h 250 v 90 h 80 v -110 h 120",           fill: "#8b5cf6", begin: 8    },
  { id: "p4",  d: "M 80 980 h 200 v 70 h -120 v -110 h 300 v 80 h 90 v -60 h 180 v 100",            fill: "#ddd6fe", begin: 12   },
  { id: "p5",  d: "M 1300 1050 h -90 v 80 h -150 v -60 h -80 v 100 h -200 v -80 h -110",            fill: "#a78bfa", begin: 16   },
  { id: "p6",  d: "M 550 1250 v 90 h 130 v -70 h 200 v 110 h -80 v -60 h 160 v 80",                 fill: "#c084fc", begin: 20   },
  { id: "p7",  d: "M 120 2050 h 170 v -90 h 110 v 130 h -80 v -70 h 220 v 90 h 130 v -110 h 90",    fill: "#8b5cf6", begin: 24   },
  { id: "p8",  d: "M 1350 2200 h -140 v 100 h -90 v -80 h -180 v 120 h -100 v -60 h -130",          fill: "#ddd6fe", begin: 28   },
  { id: "p9",  d: "M 600 2500 v -80 h 200 v 110 h -130 v -70 h 180 v 90 h 100 v -100 h 80",         fill: "#a78bfa", begin: 32   },
  { id: "p10", d: "M 90 3650 h 150 v 80 h -100 v -110 h 250 v 70 h 120 v -90 h 200 v 100",          fill: "#c084fc", begin: 36   },
  { id: "p11", d: "M 1300 3800 h -180 v -90 h -120 v 130 h -90 v -80 h -200 v 100 h -80",           fill: "#8b5cf6", begin: 40   },
  { id: "p12", d: "M 450 4100 v 90 h 180 v -70 h 130 v 110 h -100 v -80 h 220 v 60",                fill: "#ddd6fe", begin: 44   },
  { id: "p13", d: "M 200 4750 h 220 v -70 h 150 v 100 h -90 v -60 h 300 v 80 h 100",                fill: "#a78bfa", begin: 48   },
];

const TRAVEL = 3;   // seconds to traverse the path
const CYCLE  = 52;  // full loop: travel + pause (13 dots × 4s apart = 52s cycle each)

export default function CircuitOverlay() {
  return (
    <svg
      className="absolute top-0 left-0 w-full pointer-events-none z-0"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: "6000px" }}
      preserveAspectRatio="none"
      viewBox="0 0 1440 6000"
    >
      <defs>
        <filter id="eglow" x="-300%" y="-300%" width="700%" height="700%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {routes.map(({ id, d, fill, begin }) => {
        const travelFrac = +(TRAVEL / CYCLE).toFixed(4);
        return (
          <g key={id}>
            <path id={id} d={d} fill="none" stroke="none" />
            <circle r="2.5" fill={fill} filter="url(#eglow)">
              {/* Motion on full cycle, keyPoints compress travel to first TRAVEL seconds */}
              <animateMotion
                dur={`${CYCLE}s`}
                repeatCount="indefinite"
                begin={`${begin}s`}
                keyPoints="0;1"
                keyTimes={`0;${travelFrac}`}
                calcMode="linear"
              >
                <mpath href={`#${id}`} />
              </animateMotion>
              {/* Visible only during travel window */}
              <animate
                attributeName="opacity"
                values={`0;1;1;0;0`}
                keyTimes={`0;0.005;${travelFrac - 0.005};${travelFrac};1`}
                dur={`${CYCLE}s`}
                repeatCount="indefinite"
                begin={`${begin}s`}
              />
            </circle>
          </g>
        );
      })}
    </svg>
  );
}
