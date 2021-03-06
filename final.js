var dataMap = {};
function dataFormatter(obj1) {
  var pList = [ 'enero', 'febrero', 'marzo', 'abril', 'mayo',
      'junio', 'julio', 'agosto', 'setiembre', 'octubre',
      'noviembre', 'diciembre' ];
  var temp;
  var max = 0;
  var obj = JSON.parse(JSON.stringify(obj1));
  for (var year = 2008; year <= 2014; year++) {
    temp = obj[year];
    for (var i = 0, l = temp.length; i < l; i++) {
      max = Math.max(max, temp[i]);
      obj[year][i] = {
        name : pList[i],
        value : temp[i]
      }
    }
    obj[year + 'max'] = Math.floor(max / 100) * 100;
  }
  return obj;
}

function dataMix(list) {
  var mixData = {};
  for (var i = 0, l = list.length; i < l; i++) {
    for ( var key in list[i]) {
      if (list[i][key] instanceof Array) {
        mixData[key] = mixData[key] || [];
        for (var j = 0, k = list[i][key].length; j < k; j++) {
          mixData[key][j] = mixData[key][j] || {
            name : list[i][key][j].name,
            value : []
          };
          mixData[key][j].value.push(list[i][key][j].value);
        }
      }
    }
  }
  return mixData;
}


dataMap.dataIndices = { ipc : {
  2008: [103.4,
    104.9,
    106.1,
    107.7,
    106.4,
    108.6,
    109.3,
    110.3,
    108.7,
    106.2,
    105.9,
    107.5],
  2009: [108.7,
        107.4,
        105.5,
        104.2,
        103.8,
        106.5,
        104.8,
        108,
        109.4,
        112,
        110.2,
        112.2,],
  2010: [115.1,
113.4,
115.4,
117.8,
113.9,
114.9,
114.3,
116.6,
114.5,
121.4,
120.9,
124.8
],
2011 : [129.2,
132.8,
137.3,
136.5,
135.8,
131.4,
130.5,
134.2,
134.1,
130.1,
128.1,
129.7
],
2012 : [131.8,
132.9,
133.3,
131.8,
131.8,
129.3,
129.3,
127.7,
127.7,
125.8,
127.8,
130.6
],
2013 : [135.3,
131.7,
131.7,
132.4,
130.6,
131.3,
132,
134,
134.3,
137.6,
139.8,
139.4
],
2014 : [141.8,
142.4,
144.1,
145.1,
145.4,
144.3,
142.9,
140.9,
140,
139.8,
142.1,
145.3
]}, dolar : {  2010 : [4800,4727,4716,4745,4763,4773,4768,4785,4871,4952,4709,4621],
  2009 : [ 5032.64,5127.03,5149.60,5054.53,5046.81,5036.34,5033.84,4960.80,4939.43,4885.63,4835.03,4681.48],
  2008 : [ 4746.74,4724.49,4544.539,4304.204,4125.156,4000.78,3999.84,4002.88,4016.22,4481.25,4875.5,4916.43],
  2011 : [ 4653,4582,4156,4068,4061,4018,3809,3894,4176,4180,4453,4479],
  2012 : [ 4735,4295,4338,4332,4531,4556,4424,4428,4476,4472,4449,4339],
  2013 : [ 4148,4055,4056,4201,4337,4532,4468,4495,4481,4471,4458,4638],
  2014 : [ 4710,4497,4520,4498,4506,4460,4390,4338,4531,4661,4686,4708]}
};

dataMap.data = { Kokito : {
2008 :
[
  5720,
  5815,
  6047,
  6239,
  6200,
  6421,
  6596,
  6506,
  6562,
  6366,
  6177,
  6172
], 2009 :
[
  6249,
  6168,
  5999,
  6122,
  6093,
  6090,
  6103,
  6109,
  6131,
  6153,
  6209,
  6056
], 2010 :
[
  6048,
  5954,
  6084,
  6057,
  6056,
  6047,
  6040,
  6375,
  6296,
  7703,
  8115,
  6906
], 2011 :
[
  6331,
  6578,
  6645,
  6763,
  6579,
  6641,
  6657,
  6925,
  6792,
  6979,
  6690,
  6779
], 2012 :
[
  6790,
  6809,
  6588,
  6848,
  6836,
  6392,
  6662,
  6662,
  7094,
  7051,
  7197,
  7276
], 2013 :
[
  7485,
  7180,
  7376,
  7231,
  7459,
  7312,
  7624,
  7918,
  9044,
  9331,
  10571,
  9102
], 2014 :
[
  9809,
  10000,
  9498,
  9294,
  9842,
  9574,
  9164,
  8850,
  9798,
  9176,
  9294,
  9942
]
},
PanFelipito : {
2008 :
[
  3161,
  3273,
  3293,
  3475,
  3526,
  3570,
  3619,
  3509,
  3471,
  3356,
  3125,
  3149
], 2009 :
[
  3260,
  3073,
  3045,
  3079,
  2981,
  2824,
  2755,
  3051,
  3009,
  2980,
  2987,
  2827
], 2010 :
[
  2963,
  2826,
  2896,
  2870,
  2834,
  2808,
  2847,
  2902,
  2881,
  3568,
  3751,
  3190
], 2011 :
[
  3081,
  2995,
  3367,
  3257,
  3175,
  3199,
  3250,
  3379,
  3309,
  3256,
  3225,
  3358
], 2012 :
[
  3188,
  3020,
  3187,
  3074,
  3120,
  3186,
  3063,
  3256,
  3168,
  3288,
  3215,
  3183
], 2013 :
[
  3273,
  3227,
  3052,
  3235,
  3182,
  3174,
  3172,
  3319,
  3719,
  3934,
  3876,
  4024
], 2014 :
[
  3917,
  3852,
  4070,
  3933,
  4022,
  4002,
  4002,
  3811,
  4358,
  3764,
  3933,
  3982
]
},
Naranja : {
2008 :
[
  1616,
  1982,
  2182,
  2161,
  1947,
  1863,
  1845,
  1827,
  1837,
  1926,
  1877,
  1798
], 2009 :
[
  2018,
  2301,
  2393,
  2233,
  2267,
  2225,
  2062,
  1956,
  2202,
  2215,
  2526,
  2331
], 2010 :
[
  2345,
  2450,
  2765,
  2784,
  2785,
  2413,
  2639,
  2162,
  2148,
  3037,
  3100,
  2617
], 2011 :
[
  3428,
  3745,
  4059,
  3866,
  3774,
  3861,
  3890,
  1962,
  2174,
  2493,
  2353,
  2465
], 2012 :
[
  2654,
  3033,
  3098,
  2685,
  2750,
  2271,
  2004,
  2056,
  2131,
  2241,
  2086,
  2366
], 2013 :
[
  2311,
  2331,
  2307,
  2049,
  2120,
  2202,
  1963,
  2255,
  2187,
  2402,
  3068,
  2918
], 2014 :
[
  3028,
  3108,
  3725,
  3757,
  2908,
  2958,
  3014,
  2251,
  3148,
  3210,
  3757,
  3040
]
},
QuesoParaguay : {
2008 :
[
  14201,
  16397,
  18623,
  9805,
  21950,
  14667,
  27075,
  23610,
  20163,
  18554,
  17670,
  15995
], 2009 :
[
  6177,
  14806,
  16457,
  17347,
  17872,
  21762,
  23178,
  21816,
  20832,
  19675,
  18101,
  16183
], 2010 :
[
  15304,
  14459,
  18679,
  20075,
  19933,
  24911,
  19611,
  25583,
  23618,
  28414,
  30534,
  25552
], 2011 :
[
  18481,
  18756,
  21643,
  26060,
  21235,
  21924,
  22715,
  29154,
  24148,
  21839,
  18917,
  19743
], 2012 :
[
  19079,
  19743,
  21929,
  22745,
  21655,
  21096,
  23176,
  21957,
  20386,
  18717,
  19087,
  18004
], 2013 :
[
  16429,
  19030,
  21670,
  20367,
  20091,
  20289,
  26761,
  23686,
  23430,
  24762,
  24209,
  20782
], 2014 :
[
  19887,
  20044,
  22888,
  24509,
  29730,
  28468,
  28578,
  24039,
  30700,
  27478,
  24509,
  20262
]
},
TapadeAsado : {
2008 :
[], 2009 :
[
  -1,
  16499,
  15490,
  15682,
  15075,
  14606,
  15446,
  15279,
  15232,
  15591,
  15069,
  15152
], 2010 :
[
  15540,
  15561,
  15279,
  15308,
  15651,
  15669,
  15493,
  17752,
  17670,
  20559,
  21786,
  18652
], 2011 :
[
  20871,
  20948,
  21086,
  20244,
  20787,
  20766,
  20721,
  20726,
  20293,
  16805,
  17756,
  17100
], 2012 :
[
  17605,
  19480,
  17385,
  17410,
  17027,
  16846,
  16863,
  16861,
  17099,
  16817,
  17401,
  17596
], 2013 :
[
  17157,
  17546,
  17115,
  16875,
  15946,
  16871,
  17806,
  16984,
  17921,
  18360,
  18593,
  19809
], 2014 :
[
  19001,
  19293,
  17385,
  17793,
  19293,
  19445,
  19495,
  18218,
  19990,
  19600,
  17793,
  19445
]
},
Costilla : {
2008 :
[
  13334,
  12133,
  12356,
  12725,
  13014,
  12551,
  13002,
  14538,
  13892,
  14883,
  15393,
  14910
], 2009 :
[
  14875,
  12519,
  11372,
  12363,
  11276,
  11710,
  11704,
  11774,
  13421,
  13355,
  12027,
  14897
], 2010 :
[
  15007,
  10433,
  11212,
  10917,
  11901,
  10632,
  11019,
  13879,
  12942,
  15093,
  15891,
  13765
], 2011 :
[
  16359,
  14857,
  16171,
  15808,
  15799,
  15659,
  15859,
  18875,
  17235,
  24894,
  20173,
  20491
], 2012 :
[
  17835,
  17546,
  13147,
  18390,
  13620,
  13699,
  12707,
  13909,
  13201,
  15087,
  16131,
  16942
], 2013 :
[
  17106,
  13003,
  12790,
  12347,
  12855,
  12749,
  12066,
  11592,
  14171,
  16069,
  16913,
  18288
], 2014 :
[
  15942,
  14754,
  14645,
  15034,
  13732,
  14352,
  16532,
  14976,
  13643,
  13610,
  15034,
  17293
]
},
Lomo : {
2008 :
[
  26220,
  25606,
  25551,
  25064,
  25412,
  25808,
  26652,
  27303,
  27696,
  26560,
  25520,
  24744
], 2009 :
[
  24080,
  24220,
  24688,
  24681,
  23557,
  24862,
  25822,
  26830,
  26668,
  26097,
  26917,
  27916
], 2010 :
[
  27909,
  27511,
  27543,
  27455,
  27955,
  27917,
  27676,
  31119,
  32672,
  36835,
  39055,
  33471
], 2011 :
[
  35235,
  34839,
  35980,
  36227,
  35570,
  35654,
  35858,
  33659,
  33521,
  28143,
  25053,
  26926
], 2012 :
[
  27734,
  25783,
  25994,
  24824,
  24273,
  22150,
  24640,
  23674,
  24971,
  25636,
  26753,
  27814
], 2013 :
[
  28231,
  28244,
  27090,
  26496,
  26567,
  27099,
  26537,
  25850,
  27581,
  28513,
  31679,
  32051
], 2014 :
[
  32567,
  32734,
  32419,
  32471,
  33372,
  32772,
  32170,
  28556,
  29240,
  34138,
  32471,
  31877
]
},
Harina : {
2008 :
[
  3005,
  2758,
  2851,
  2965,
  3094,
  3183,
  3252,
  3171,
  3054,
  2737,
  2451,
  2148
], 2009 :
[
  2127,
  2160,
  2205,
  2139,
  2022,
  2109,
  2107,
  2194,
  2241,
  2216,
  2175,
  2055
], 2010 :
[
  2042,
  1980,
  1921,
  1869,
  1845,
  1946,
  1912,
  1933,
  1935,
  2393,
  2530,
  2140
], 2011 :
[
  2087,
  2212,
  2415,
  2641,
  2339,
  2402,
  2449,
  2542,
  2363,
  2319,
  2226,
  2166
], 2012 :
[
  2216,
  2091,
  2246,
  2038,
  2122,
  2178,
  2082,
  2128,
  2150,
  2150,
  2218,
  2282
], 2013 :
[
  2400,
  2439,
  2400,
  2451,
  2446,
  2434,
  2560,
  2711,
  3060,
  3780,
  3077,
  3534
], 2014 :
[
  3408,
  3427,
  3510,
  3596,
  3433,
  3505,
  3255,
  3159,
  3627,
  3010,
  3596,
  3355
]
},
Galleta : {
2008 :
[
  3644,
  3767,
  3872,
  3942,
  4145,
  4029,
  4164,
  4105,
  4066,
  3940,
  3759,
  3784
], 2009 :
[
  3834,
  3798,
  3570,
  3572,
  3513,
  3323,
  3381,
  3474,
  3455,
  3487,
  3422,
  3334
], 2010 :
[
  3471,
  3340,
  3383,
  3365,
  3277,
  3317,
  3336,
  3373,
  3500,
  4201,
  4432,
  3768
], 2011 :
[
  3330,
  3442,
  3736,
  3747,
  3564,
  3622,
  3667,
  3696,
  3878,
  3775,
  3714,
  3753
], 2012 :
[
  3625,
  3662,
  3669,
  3919,
  3779,
  3706,
  3658,
  3923,
  3750,
  3783,
  3817,
  3806
], 2013 :
[
  3742,
  3693,
  3565,
  3809,
  3765,
  3708,
  3829,
  3905,
  4321,
  4427,
  4548,
  4573
], 2014 :
[
  4448,
  4465,
  4556,
  4477,
  4690,
  4542,
  4650,
  4370,
  5458,
  4482,
  4477,
  4568
]
},
Mandioca : {
2008 :
[
  939,
  1200,
  1207,
  1138,
  985,
  955,
  987,
  999,
  1041,
  1110,
  1148,
  1428
], 2009 :
[
  1578,
  1445,
  1290,
  1085,
  1020,
  1080,
  1054,
  1019,
  1066,
  1099,
  1140,
  1115
], 2010 :
[
  1340,
  1261,
  1165,
  1109,
  1103,
  930,
  1113,
  931,
  1064,
  1285,
  1331,
  1145
], 2011 :
[
  1494,
  1555,
  1522,
  1480,
  1513,
  1517,
  1508,
  1290,
  1245,
  1268,
  1101,
  1049
], 2012 :
[
  1726,
  1700,
  1391,
  1115,
  1389,
  1331,
  1283,
  1341,
  1630,
  1658,
  1691,
  2136
], 2013 :
[
  1848,
  1782,
  1706,
  1431,
  1343,
  1566,
  1309,
  1289,
  1428,
  1516,
  2133,
  2066
], 2014 :
[
  2665,
  2568,
  2512,
  2693,
  2422,
  2042,
  2102,
  1554,
  2183,
  2170,
  2693,
  2772
]
},
Arroz : {
2008 :
[
  2451,
  2481,
  2522,
  2530,
  2837,
  3331,
  3512,
  3531,
  3454,
  3421,
  3319,
  3060
], 2009 :
[
  2854,
  2822,
  2893,
  2897,
  2446,
  2501,
  2637,
  2718,
  2611,
  2710,
  2765,
  2811
], 2010 :
[
  2885,
  2790,
  2749,
  2809,
  2707,
  2622,
  2736,
  2785,
  2638,
  3372,
  3538,
  3014
], 2011 :
[
  2775,
  2614,
  2691,
  2972,
  2763,
  2760,
  2797,
  2511,
  3053,
  2988,
  2587,
  2804
], 2012 :
[
  3037,
  2770,
  2676,
  2311,
  2646,
  2577,
  2478,
  2742,
  2545,
  2803,
  3065,
  2923
], 2013 :
[
  3203,
  3184,
  2940,
  2771,
  2730,
  2906,
  2700,
  2620,
  2403,
  2634,
  2729,
  2564
], 2014 :
[
  2751,
  2954,
  2284,
  2160,
  2430,
  3355,
  2815,
  2634,
  2793,
  2805,
  2160,
  2973
]
},
Fideo : {
2008 :
[
  3441,
  3324,
  3545,
  3633,
  3884,
  3948,
  3912,
  3902,
  3986,
  3881,
  3804,
  3636
], 2009 :
[
  3558,
  3423,
  3446,
  3333,
  3124,
  3096,
  3265,
  3266,
  3253,
  3121,
  3205,
  3165
], 2010 :
[
  3334,
  3202,
  3086,
  3117,
  3126,
  3061,
  3118,
  3164,
  3105,
  3894,
  4086,
  3473
], 2011 :
[
  3168,
  3056,
  3096,
  3265,
  3146,
  3141,
  3162,
  3281,
  3381,
  3363,
  3269,
  3210
], 2012 :
[
  2955,
  2930,
  3021,
  2797,
  2868,
  2722,
  2668,
  2652,
  2713,
  2647,
  2638,
  2682
], 2013 :
[
  2811,
  2729,
  2780,
  2980,
  2779,
  2817,
  2779,
  2832,
  3091,
  3572,
  3569,
  3661
], 2014 :
[
  3661,
  3604,
  3988,
  3986,
  3790,
  3790,
  3615,
  3228,
  3730,
  4090,
  3986,
  4053
]
},
Azucar : {
2008 :
[
  2985,
  2745,
  2671,
  2711,
  2754,
  2828,
  2881,
  2837,
  2789,
  2814,
  2833,
  2741
], 2009 :
[
  2933,
  2974,
  3078,
  3104,
  3193,
  3212,
  3186,
  3178,
  3289,
  3953,
  4659,
  4658
], 2010 :
[
  5011,
  5103,
  5572,
  5633,
  5523,
  5356,
  5437,
  4896,
  5143,
  6589,
  6855,
  5784
], 2011 :
[
  7526,
  7179,
  6805,
  6761,
  7068,
  6953,
  6897,
  5829,
  6016,
  5682,
  5659,
  5210
], 2012 :
[
  5712,
  5751,
  5574,
  5094,
  5020,
  4837,
  4609,
  5004,
  5031,
  4935,
  4759,
  4489
], 2013 :
[
  4579,
  3754,
  3636,
  3503,
  3357,
  3562,
  3461,
  3021,
  3127,
  3484,
  3231,
  3242
], 2014 :
[
  3538,
  3368,
  3593,
  3753,
  3718,
  3680,
  3740,
  3187,
  3683,
  3695,
  3753,
  3508
]
},
Bananacarape : {
2008 :
[
  1990,
  1497,
  1592,
  1543,
  1391,
  1305,
  1316,
  1356,
  1229,
  1445,
  1960,
  2061
], 2009 :
[
  2150,
  2067,
  2065,
  2070,
  1858,
  1445,
  1536,
  1773,
  2080,
  2300,
  2422,
  3457
], 2010 :
[
  3095,
  2379,
  2374,
  2196,
  1937,
  1654,
  2108,
  1784,
  1712,
  2299,
  2389,
  2059
], 2011 :
[
  3371,
  2934,
  2583,
  2544,
  2858,
  2730,
  2679,
  1786,
  1747,
  2109,
  2530,
  3731
], 2012 :
[
  4031,
  3389,
  3898,
  2977,
  3230,
  2606,
  2628,
  2448,
  2354,
  2268,
  3417,
  3216
], 2013 :
[
  2946,
  2874,
  2567,
  2362,
  2274,
  2519,
  1580,
  1501,
  1932,
  2288,
  2994,
  4411
], 2014 :
[
  4554,
  3900,
  4263,
  4302,
  2914,
  2322,
  2324,
  1744,
  1157,
  1750,
  4302,
  4898
]
},
Yerba : {
2008 :
[
  3532,
  3519,
  3672,
  3578,
  3591,
  3719,
  3754,
  3727,
  3576,
  3541,
  3484,
  3563
], 2009 :
[
  2903,
  2819,
  3371,
  3171,
  3025,
  3087,
  3131,
  3080,
  3092,
  3009,
  2960,
  3083
], 2010 :
[
  3383,
  3158,
  3193,
  3254,
  3141,
  3271,
  3203,
  3280,
  3184,
  4020,
  4239,
  3585
], 2011 :
[
  3509,
  3745,
  3286,
  3056,
  3399,
  3371,
  3278,
  4531,
  4060,
  3545,
  3358,
  4299
], 2012 :
[
  3468,
  3532,
  4007,
  3636,
  3327,
  4288,
  4797,
  3954,
  5721,
  5958,
  5467,
  5642
], 2013 :
[
  6500,
  6283,
  5612,
  5980,
  6290,
  6041,
  6690,
  6730,
  7251,
  7233,
  7203,
  8832
], 2014 :
[
  9881,
  10115,
  10228,
  11330,
  10945,
  12245,
  12295,
  7048,
  10475,
  11697,
  11330,
  10935
]
},
Vacio : {
2008 :
[], 2009 :
[], 2010 :
[
  -1,
  12906,
  14507,
  13988,
  14403,
  13830,
  13927,
  17517,
  16118,
  18949,
  20085,
  17319
], 2011 :
[
  22175,
  20370,
  21082,
  19846,
  20868,
  20541,
  20584,
  23722,
  22542,
  28016,
  25651,
  24546
], 2012 :
[
  22523,
  21676,
  16788,
  21223,
  17810,
  15536,
  15612,
  17002,
  16322,
  17244,
  18978,
  20890
], 2013 :
[
  21052,
  16551,
  16328,
  16042,
  16158,
  16270,
  15103,
  15193,
  17013,
  19261,
  20193,
  21590
], 2014 :
[
  20494,
  19974,
  18760,
  18416,
  17172,
  18072,
  19572,
  17977,
  16718,
  19014,
  18416,
  20810
]
},
Poroto : {
2008 :
[
  4420,
  5000,
  4860,
  4963,
  4951,
  5074,
  5995,
  6728,
  6562,
  5954,
  5511,
  5175
], 2009 :
[
  5011,
  5276,
  5291,
  5033,
  4944,
  5076,
  5224,
  5531,
  5537,
  5363,
  5143,
  5116
], 2010 :
[
  5291,
  4839,
  4768,
  5266,
  5314,
  5122,
  5062,
  5310,
  5341,
  6537,
  6843,
  5819
], 2011 :
[
  7775,
  6355,
  6296,
  7074,
  6875,
  6650,
  6724,
  7172,
  7861,
  7872,
  7753,
  7070
], 2012 :
[
  6176,
  6364,
  7314,
  5979,
  6864,
  7672,
  6856,
  7527,
  7827,
  7723,
  7517,
  7123
], 2013 :
[
  7560,
  6242,
  7274,
  7086,
  7117,
  6930,
  6324,
  6189,
  6877,
  7443,
  7500,
  6935
], 2014 :
[
  7174,
  7070,
  6665,
  5787,
  6777,
  7027,
  7320,
  6508,
  8273,
  7697,
  5787,
  8893
]
},
Puchero : {
2008 :
[], 2009 :
[], 2010 :
[
  -1,
  5217,
  5357,
  4707,
  5438,
  5611,
  5266,
  4895,
  5116,
  6581,
  6867,
  5745
], 2011 :
[
  5036,
  4739,
  5454,
  5720,
  5237,
  5287,
  5425,
  5955,
  6034,
  5635,
  6322,
  5812
], 2012 :
[
  5581,
  4992,
  4934,
  5547,
  5651,
  4736,
  5110,
  5027,
  5033,
  4712,
  5154,
  5166
], 2013 :
[
  3978,
  5361,
  5191,
  6240,
  6037,
  5707,
  5213,
  5004,
  5846,
  5093,
  4988,
  5159
], 2014 :
[
  6108,
  5590,
  4735,
  5615,
  4623,
  4814,
  4810,
  4740,
  4857,
  5320,
  5615,
  4990
]
},
TapaCuadril : {
2008 :
[], 2009 :
[
  -1,
  27524,
  25316,
  24997,
  24253,
  24688,
  25127,
  26343,
  26592,
  27164,
  27344,
  27280
], 2010 :
[
  28503,
  28678,
  28426,
  28613,
  29047,
  28857,
  28724,
  31551,
  32865,
  37761,
  39940,
  34168
], 2011 :
[
  39920,
  41586,
  41499,
  44299,
  41826,
  42302,
  42482,
  41074,
  41536,
  35667,
  33257,
  32925
], 2012 :
[
  33862,
  32758,
  31469,
  29890,
  31567,
  31356,
  30047,
  30486,
  33130,
  33740,
  33056,
  31123
], 2013 :
[
  34802,
  35448,
  33162,
  31410,
  30179,
  32550,
  30159,
  30962,
  32381,
  33322,
  34943,
  34702
], 2014 :
[
  34502,
  33436,
  34161,
  34271,
  42754,
  33892,
  35892,
  31984,
  35657,
  38098,
  34271,
  33493
]
}};
console.log(dataMap.data['Kokito']);
dataMap.dataFormat = {ipc : dataFormatter(dataMap.dataIndices['ipc']),
                      dolar : dataFormatter(dataMap.dataIndices['dolar']),
                      PanFelipito : dataFormatter(dataMap.data['PanFelipito']),
                      Kokito : dataFormatter(dataMap.data['Kokito']),
                      Bananacarape : dataFormatter(dataMap.data['Bananacarape']),
                      TapaCuadril : dataFormatter(dataMap.data['TapaCuadril']),
                      TapadeAsado : dataFormatter(dataMap.data['TapadeAsado']),
                      QuesoParaguay : dataFormatter(dataMap.data['QuesoParaguay']),
                      Harina : dataFormatter(dataMap.data['Harina']),
                      Poroto : dataFormatter(dataMap.data['Poroto']),
                      Costilla : dataFormatter(dataMap.data['Costilla']),
                      Lomo : dataFormatter(dataMap.data['Lomo']),
                      Galleta : dataFormatter(dataMap.data['Galleta']),
                      Mandioca : dataFormatter(dataMap.data['Mandioca']),
                      Fideo : dataFormatter(dataMap.data['Fideo']),
                      Azucar : dataFormatter(dataMap.data['Azucar']),
                      Yerba : dataFormatter(dataMap.data['Yerba']),
                      Vacio : dataFormatter(dataMap.data['Vacio']),
                      Puchero : dataFormatter(dataMap.data['Puchero'])};
var producto = 'TapaCuadril';
var indice = 'ipc';
dataMap.dataGDP_Estate = dataMix([ dataMap.dataFormat[indice], dataMap.dataFormat[producto] ]);
