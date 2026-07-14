const allMusic = [
    {
        id: 1,
        name: " วิมานเพลง | Love Design",
        artist: " Kao Supassara, Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/85/7b/da/857bda2aab209e80f20fca0fbb38391f.jpg",
        date: "2026-07-13"
    },
    {
        id: 2,
        name: "Loving You",
        artist: "Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/e9/d9/39/e9d9395a0ec6e582ce2e7c73562a56cd.jpg",
        date: "2026-07-13"
    },
    {
        id: 3,
        name: "Our Little Thing",
        artist: "Palm Paramee",
        img: "https://i.pinimg.com/736x/c2/95/27/c29527731c80709e56483f79bd40c3f6.jpg",
        date: "2026-07-13"
    },
    {
        id: 4,
        name: "ฤดูรัก (Cover Version)",
        artist: " Kao Supassara, Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/1c/69/3f/1c693f8b964ab2d2b899b39950bc1bb2.jpg",
        date: "2026-07-13"
    },
    {
        id: 5,
        name: " Last Christmas ",
        artist: " Kao Supassara, Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/80/4d/f2/804df27bde16e748afa65bb49f44d2eb.jpg",
        date: "2026-07-13"
    },
    {
        id: 6,
        name: "ฝากใจ | 寄託心意",
        artist: "Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/4c/7b/cf/4c7bcfd7a55fd9d28d269d5248c64d9f.jpg",
        date: "2026-07-13"
    },
    {
        id: 7,
        name: " Let it end ",
        artist: " Kao Supassara ",
        img: "https://i.pinimg.com/736x/9e/53/f8/9e53f814a569734340eb7865d0f8b181.jpg",
        date: "2026-07-13"
    },
    {
        id: 8,
        name: "Dum Dum",
        artist: "Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/92/ad/c3/92adc30e8e0378bbf751f3cf2c06a77a.jpg",
        date: "2026-07-13"
    },
    {
        id: 9,
        name: "I'll Do It How You Like It",
        artist: " Kao Supassara, Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/e4/6b/98/e46b98aa8e817decb56f5ec7e82f0289.jpg",
        date: "2026-07-13"
    },
    {
        id: 10,
        name: "有妳在",
        artist: "Kao Supassara",
        img: "https://i.pinimg.com/736x/5f/eb/f9/5febf946bdb2add0fc4a01182a4512ac.jpg",
        date: "2026-07-13"
    },
    {
        id: 11,
        name: "理想情人",
        artist: "Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/ab/70/64/ab7064fab9c6c4c94f24fc5b99ac945b.jpg",
        date: "2026-07-13"
    },

    {
        id: 12,
        name: "愛妳但說不出口",
        artist: "Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/58/00/84/580084459ec9f52b9504eebce1bb81f9.jpg",
        date: "2026-07-13"
    },
    {
        id: 13,
        name: "有點甜",
        artist: "Kao Supassara, Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/cc/68/64/cc6864633acb15fba06431f6eca0debc.jpg",
        date: "2026-07-13"
    },
    {
        id: 14,
        name: "Your Love",
        artist: "Kao Supassara, Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/5e/79/61/5e79613adfe20845cdfd56901315d925.jpg",
        date: "2026-07-13"
    },
    {
        id: 15,
        name: "So Easy",
        artist: "Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/e2/b2/e0/e2b2e0e3178f8d2d881eaa5163d4ddfc.jpg",
        date: "2026-07-13"
    },
    {
        id: 16,
        name: "昨夜風今宵月",
        artist: "Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/b9/65/3b/b9653b8829fdd9080d70a18396db53d0.jpg",
        date: "2026-07-13"
    },
    {
        id: 17,
        name: "戀人未滿",
        artist: "Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/e1/21/b3/e121b38ddde89ad769c1d7f8ee778879.jpg",
        date: "2026-07-13"
    },
    {
        id: 18,
        name: "像晴天像雨天",
        artist: "Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/2d/a6/b5/2da6b508e3b2080e471a2443cc3558e9.jpg",
        date: "2026-07-13"
    },
    {
        id: 19,
        name: "只是太愛妳",
        artist: "Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/42/11/a0/4211a09995e8d1dc387fc926ceb4bdc5.jpg",
        date: "2026-07-13"
    },
    {
        id: 20,
        name: "如果可以",
        artist: "Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/f7/85/f5/f785f5af46813dab59734e9c909c675d.jpg",
        date: "2026-07-13"
    },
    {
        id: 21,
        name: "รับผิดชอบใจฉันด้วย (LOVE RESPONSE)",
        artist: "SIZZY x EARTHMIX",
        img: "images/s21.jpg",
        date: "2026-07-14"
    },
    {
        id: 22,
        name: "เปลี่ยนคะแนนเป็นแฟนได้ไหม (Love Score)",
        artist: "SIZZY x NANON",
        img: "images/s22.jpg",
        date: "2026-07-14"
    },
    {
        id: 23,
        name: "ห้ามใจ (Unstoppable)",
        artist: "SIZZY",
        img: "images/s23.jpg",
        date: "2026-07-14"
    },
    {
        id: 24,
        name: "พิสูจน์ (Prove It)",
        artist: "SIZZY",
        img: "images/s24.jpg",
        date: "2026-07-14"
    },
    {
        id: 25,
        name: "ชักช้า (Loading Love)",
        artist: "SIZZY",
        img: "images/s25.jpg",
        date: "2026-07-14"
    },
    {
        id: 26,
        name: "HUI LAY HUI",
        artist: "LYKN x SIZZY",
        img: "images/s26.jpg",
        date: "2026-07-14"
    },


];