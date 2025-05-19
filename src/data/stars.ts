/** 紫微斗数四化 */
export const MUTAGEN = ['sihuaLu', 'sihuaQuan', 'sihuaKe', 'sihuaJi'] as const;

/**
 * 星耀信息
 * 其中包含：
 * 1. 亮度（bright）, 按照宫位地支排序（从寅开始）
 * 2. 五行（fiveElements）
 * 3. 阴阳（yinYang）
 */
export const STARS_INFO = {
  ziweiMaj: {
    // tử vi
    // bu: bat // dan    mao     thin      tị    ngọ      mùi     thân    dậu     tuất    hợi      tí      sửu
    brightness: ['miao', 'ping', 'wang', 'miao', 'miao', 'de', 'miao', 'ping', 'wang', 'ping', 'ping', 'de'],
    fiveElements: '土',
    yinYang: '阴',
  },
  tianjiMaj: {
    // thiên cơ
    //- Miếu địa ở các cung Thìn, Tuất, Mão, Dậu.
    //
    // - Vượng địa ở các cung Tỵ, Thân.
    //
    // - Đắc địa ở các cung Tý, Ngọ, Sửu, Mùi.
    //
    // - Hãm địa ở các cung Dần, Hợi.
    brightness: ['xian', 'miao', 'miao', 'wang', 'de', 'de', 'wang', 'miao', 'miao', 'xian', 'de', 'de'],
    fiveElements: '木',
    yinYang: '阴',
  },
  taiyangMaj: {
    // Thái dươpng
    // Miếu (miao): Tỵ (3), Ngọ (4)
    //
    // Vượng (wang): Dần (0), Mão (1), Thìn (2)
    // Địa (de): Sửu (11), Mùi (5)
    // Hãm (xian): Thân (6), Dậu (7), Tuất (8), Hợi (9), Tý (10)
    brightness: ['wang', 'wang', 'wang', 'miao', 'miao', 'de', 'xian', 'xian', 'xian', 'xian', 'xian', 'de'],
    fiveElements: '',
    yinYang: '',
  },
  wuquMaj: {
    // Vũ khúc
    // Miếu (miao): Thìn (2), Tuất (8), Sửu (11), Mùi (5)
    // Vượng (wang): Dần (0), Thân (6), Tý (10), Ngọ (4)
    // Địa (de): Mão (1), Dậu (7)
    // Hãm (xian): Tỵ (3), Hợi (9)
    brightness: ['wang', 'de', 'miao', 'xian', 'wang', 'miao', 'wang', 'de', 'miao', 'xian', 'wang', 'miao'],
    fiveElements: '金',
    yinYang: '阴',
  },
  tiantongMaj: {
    // thiên đồng
    // Miếu (miao): Dần (0), Thân (6)
    // Vượng (wang): Tý (10)
    // Địa (de): Mão (1), Tỵ (3), Hợi (9)
    // Hãm (xian): Thìn (2), Tuất (8), Sửu (11), Mùi (5), Ngọ (4), Dậu (7)
    brightness: ['miao', 'de', 'xian', 'de', 'xian', 'xian', 'miao', 'xian', 'xian', 'de', 'wang', 'xian'],
    fiveElements: '水',
    yinYang: '阳',
  },
  lianzhenMaj: {
    // liêm trinh
    // Miếu (miao): Thìn (2), Tuất (8)
    // Vượng (wang): Dần (0), Thân (6), Tý (10), Ngọ (4)
    // Địa (de): Sửu (11), Mùi (5)
    // Hãm (xian): Tỵ (3), Hợi (9), Mão (1), Dậu (7)
    brightness: ['wang', 'xian', 'miao', 'xian', 'wang', 'de', 'wang', 'xian', 'miao', 'xian', 'wang', 'de'],
    fiveElements: '火',
    yinYang: '阴',
  },
  tianfuMaj: {
    // thiên phủ
    //Miếu (miao): Dần (0), Thân (6), Tý (10), Ngọ (4)
    // Vượng (wang): Thìn (2), Tuất (8)
    // Địa (de): Tỵ (3), Hợi (9), Mùi (5)
    // Bình (ping): Mão (1), Dậu (7), Sửu (11)
    brightness: ['miao', 'ping', 'wang', 'de', 'miao', 'de', 'miao', 'ping', 'wang', 'de', 'miao', 'ping'],
    fiveElements: '土',
    yinYang: '阳',
  },
  taiyinMaj: {
    // thái âm
    // Miếu (miao): Dần (0), Thân (6), Tý (10), Ngọ (4)
    // Vượng (wang): Hợi (9)
    // Địa (de): Sửu (11), Mùi (5)
    // Hãm (xian): Mão (1), Thìn (2), Tỵ (3), Dậu (7), Tuất (8)
    brightness: ['miao', 'xian', 'xian', 'xian', 'miao', 'de', 'miao', 'xian', 'xian', 'wang', 'miao', 'de'],
    fiveElements: '水',
    yinYang: '阴',
  },
  tanlangMaj: {
    // tham lang
    // Miếu (miao): Sửu (11), Mùi (5)
    // Vượng (wang): Thìn (2), Tuất (8)
    // Đắc/Địa (de): Dần (0), Thân (6)
    // Hãm (xian): Tý (10), Ngọ (4), Mão (1), Dậu (7), Tỵ (3), Hợi (9)
    brightness: ['de', 'xian', 'wang', 'xian', 'xian', 'miao', 'de', 'xian', 'wang', 'xian', 'xian', 'miao'],
    fiveElements: '水',
    yinYang: '',
  },
  jumenMaj: {
    // cự môn
    //Miếu (miao): Mão (1), Dậu (7)
    // Vượng (wang): Tý (10), Ngọ (4), Dần (0)
    // Địa (de): Thân (6), Hợi (9)
    // Hãm (xian): Thìn (2), Tuất (8), Sửu (11), Mùi (5), Tỵ (3)
    brightness: ['wang', 'miao', 'xian', 'xian', 'wang', 'xian', 'de', 'miao', 'xian', 'de', 'wang', 'xian'],
    fiveElements: '土',
    yinYang: '阴',
  },
  tianxiangMaj: {
    // thiên tướng
    // Miếu (miao): Dần (0), Thân (6)
    // Vượng (wang): Thìn (2), Tuất (8), Tý (10), Ngọ (4)
    // Địa (de): Sửu (11), Mùi (5), Tỵ (3), Hợi (9)
    // Hãm (xian): Mão (1), Dậu (7)
    brightness: ['miao', 'xian', 'wang', 'de', 'wang', 'de', 'miao', 'xian', 'wang', 'de', 'wang', 'de'],
    fiveElements: '水',
    yinYang: '',
  },
  tianliangMaj: {
    // thiên lương
    // Miếu (miao): Ngọ (4), Thìn (2), Tuất (8)
    // Vượng (wang): Tý (10), Mão (1), Dần (0), Thân (6)
    // Địa (de): Sửu (11), Mùi (5)
    // Hãm (xian): Dậu (7), Tỵ (3), Hợi (9)
    brightness: ['wang', 'wang', 'miao', 'xian', 'miao', 'de', 'wang', 'xian', 'miao', 'xian', 'wang', 'de'],
    fiveElements: '土',
    yinYang: '',
  },
  qishaMaj: { // that sat
    // miao: mieu
    // want: vuong
    // ping: trung binh
    // de: dia
    // ham: ham
    // bu: bat    // dan   mao   thin      tị       ngọ   mùi     thân    dậu     tuất    hợi      tí      sửu
    brightness: ['miao', 'xian', 'xian', 'wang', 'miao', 'de', 'miao', 'xian', 'xian', 'wang', 'miao', 'de'],
    fiveElements: '',
    yinYang: '',
  },
  pojunMaj: {
    // pha quan
    //   Miếu địa : Tý, Ngọ.
    // Vượng địa : Sửu, Mùi.
    // Đắc địa :Thìn, Tuất.
    // Hãm địa : Mão Dậu, Dần Thân, Tỵ Hợi.

    brightness: ['xian', 'xian', 'de', 'xian', 'miao', 'wang', 'xian', 'xian', 'de', 'xian', 'miao', 'wang'],
    fiveElements: '水',
    yinYang: '',
  },
  wenchangMin: {
    // văn xương
    // Đắc địa: Thìn, Tuất, Sửu, Mùi, Tỵ, Hợi
    // Hãm địa: Tý, Dần, Ngọ, Thân
    brightness: ['xian', '', 'de', 'de', 'xian', 'de', 'xian', '', 'de', 'de', 'xian', 'de'],
    fiveElements: '金',
  },
  wenquMin: {
    // văn khúc
    brightness: ['xian', '', 'de', 'de', 'xian', 'de', 'xian', '', 'de', 'de', 'xian', 'de'],
  },
  huoxingMin: {
    brightness: ['miao', 'li', 'xian', 'de', 'miao', 'li', 'xian', 'de', 'miao', 'li', 'xian', 'de'],
  },
  lingxingMin: {
    // linh tinh
    // Miếu (miao): Dần (0), Ngọ (4), Tuất (8)
    // Đắc địa (de): Tỵ (3), Dậu (7), Sửu (11)
    // Lợi ích (li): Mão (1), Mùi (5), Hợi (9)
    // Hãm địa (xian): Thìn (2), Thân (6), Tý (10)
    brightness: ['miao', 'li', 'xian', 'de', 'miao', 'li', 'xian', 'de', 'miao', 'li', 'xian', 'de'],
  },
  qingyangMin: {
    brightness: ['', 'xian', 'miao', '', 'xian', 'miao', '', 'xian', 'miao', '', 'xian', 'miao'],
  },
  tuoluoMin: {
    brightness: ['xian', '', 'miao', 'xian', '', 'miao', 'xian', '', 'miao', 'xian', '', 'miao'],
  },
} as const;
