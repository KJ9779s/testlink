const allMusic = [
    {
        name: " วิมานเพลง | Love Design",
        artist: " Kao Supassara, Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/85/7b/da/857bda2aab209e80f20fca0fbb38391f.jpg",
        src: "s1.mp3",
        video: "phP8xHNDP5E",
        lyrics: [
            { time: 0, text: "（前奏）", translation: " " },
            { time: 15, text: "ความรักเกิดขึ้นเมื่อไหร่ ก็ไม่รู้ แต่ก็เกิดไปแล้ว", translation: "我不知道愛情是何時開始的 但它就這樣發生了" },
            { time: 21, text: "ไม่ค่อยเข้าใจ ทำไมเป็นเธอคนนี้", translation: "不太明白 為什麼會是妳" },
            { time: 27, text: "ไม่รู้ทำไมแค่เห็นเธอยิ้ม ราวกับภาพวาดงดงาม", translation: "不知為何 只要看到妳的笑容 就如同一幅美麗的畫 " },
            { time: 32, text: "เหมือนเติมสีสันชัดเจนในใจ", translation: "彷彿在我心中增添了鮮明的色彩" },
            { time: 38, text: "อาจไม่ค่อยเข้ากันเท่าไหร่ แต่ยังไงก็ขอแค่ใกล้กัน", translation: "也許我們並不是那麼合拍 但我只想待在妳身邊" },
            { time: 44, text: "เธอนั้นก็คิดแบบฉันใช่มั้ย", translation: "妳也跟我有一樣感覺 對吧" },
            { time: 49, text: "แค่เธออยู่ข้างฉัน วันนี้ ก็ดีไปหมดทุกอย่าง", translation: "只要妳在我身邊 今天一切都會變好" },
            { time: 55, text: "ถ้าฟังเสียงหัวใจ ได้ยินว่าคำตอบคือเธอ", translation: "如果傾聽心聲 聽到的答案就是妳" },
            { time: 60, text: "ไม่มีหรอกเหตุผลที่รักกัน", translation: "愛無須理由" },
            { time: 64, text: "แต่ต้องเป็นเธอเท่านั้น", translation: "但非妳不可" },
            { time: 67, text: "คนที่ฉันเลือกในวันนี้คือเธอ", translation: "今天我選擇的人就是妳" },
            { time: 72, text: "(間奏)", translation: "" },
            { time: 92, text: "จากไม่ค่อยรู้ใจตัวเอง", translation: "以前我不太了解自己的心" },
            { time: 95, text: "ก็ได้พบว่าเธอคือรักที่ฉัน", translation: "直到我發現妳就是" },
            { time: 98, text: "เดินทางตามหามาทั้งชีวิต", translation: "我一生尋找的愛" },
            { time: 103, text: "แค่เธออยู่ข้างฉัน วันนี้ ก็ดีไปหมดทุกอย่าง", translation: "只要妳在我身邊 今天一切都會變好" },
            { time: 109.5, text: "ถ้าฟังเสียงหัวใจ ได้ยินว่าคำตอบคือเธอ", translation: "如果傾聽心聲 聽到的答案就是妳" },
            { time: 114.5, text: "ไม่มีหรอกเหตุผลที่รักกัน", translation: "愛無須理由" },
            { time: 118.3, text: "แต่ต้องเป็นเธอเท่านั้น", translation: "但非妳不可" },
            { time: 121, text: "คนที่ฉันเลือกในวันนี้คือเธอ", translation: "今天我選擇的人就是妳" },
            { time: 126.5, text: "อยากจะรักกันแบบไหน", translation: "想要怎樣相愛呢" },
            { time: 129.5, text: "ใช้ใจเราออกแบบมันดูดีมั้ย", translation: "讓我們用心去設計這份愛 好嗎" },
            { time: 134.5, text: "เพราะมันคือการที่เราจะอยู่ด้วยกัน", translation: "因為這就是我們想要一起生活的方式" },
            { time: 138.5, text: "จากนี้ต่อไปในทุกวัน", translation: "從今以後的每一天" },
            { time: 141, text: "แต่งเติมด้วยรักของฉันกับเธอ", translation: "用我和妳的愛去填滿彼此的日子" },
            { time: 146, text: "แค่เธออยู่ข้างฉัน วันนี้ ก็ดีไปหมดทุกอย่าง", translation: "只要妳在我身邊 今天一切都會變好" },
            { time: 152.5, text: "ถ้าฟังเสียงหัวใจ ได้ยินว่าคำตอบคือเธอ", translation: "如果傾聽心聲 聽到的答案就是妳" },
            { time: 157.5, text: "ไม่มีหรอกเหตุผลที่รักกัน", translation: "愛無須理由" },
            { time: 161, text: "แต่ต้องเป็นเธอเท่านั้น", translation: "但非妳不可" },
            { time: 164.5, text: "คนที่ฉันเลือกในวันนี้คือเธอ", translation: "今天我選擇的人就是妳" },
            { time: 170, text: "อยากมีเธอ ข้างกันตรงนี้ เรื่อยไป", translation: "好想有妳 在身邊 直到永遠" }
        ]
    },
    {
        name: "Loving You",
        artist: "Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/e9/d9/39/e9d9395a0ec6e582ce2e7c73562a56cd.jpg",
        src: "s2.mp3",
        video: "NjnlW04Q01A",
        lyrics: [
            { time: 0, text: " ", translation: " " },
            { time: 4, text: "ยังไงอ่ะใจ มันเป็นอะไร", translation: "這是怎麼了 心跳失了控" },
            { time: 7, text: "ทนไม่ไหวไปซะงั้น", translation: "思念蔓延 我快無法承受" },
            { time: 9, text: "ห้ามไม่ให้คิด แต่ก็ยังคิด", translation: "越是抑制思念 卻還是忍不住" },
            { time: 12, text: "คิดเรื่องเธอได้ทั้งวัน", translation: "一整天都在想妳 " },
            { time: 14, text: "เธอมีอยู่จริง I found you baby", translation: "妳真的存在 我找到了妳" },
            { time: 17, text: "ฉันไม่ได้ฝัน", translation: "這不是夢境" },
            { time: 21, text: "and I need your heart", translation: "我需要妳" },
            { time: 23.5, text: "ทำไงดีก็มันรักเข้าแล้วไง", translation: "怎麼辦 我已深陷於愛中 " },
            { time: 26, text: "มากกว่าเพื่อนคงต้องเลื่อนเป็นแฟนไหม", translation: "超越朋友關係 是不是該升級為戀人" },
            { time: 28, text: "ถ้ารักก็พูด ไม่ต้องเก็บไว้", translation: "愛就大聲說出來 不要藏在心裡" },
            { time: 31, text: "ใจของฉัน เธอได้ยินแล้วใช่ไหม", translation: "我的心跳 妳是否聽見" },
            { time: 33.4, text: "ถ้าเธอรัก ฉันก็จะไม่ร้าย", translation: "若妳願意愛我 絕不會讓妳傷心" },
            { time: 36, text: "ถ้าเธอพร้อม ก็จะไม่วุ่นวาย", translation: "若妳已決定 世間便再無紛擾" },
            { time: 40, text: "No,no no no", translation: " " },
            { time: 43, text: "แค่เธอลองมองที่ตาฉันดู", translation: "對視我的雙眼" },
            { time: 47.9, text: "จะรู้ว่ารักเธอไปเท่าไร", translation: "便知我的真心 " },
            { time: 52.8, text: "แค่เธอลองคิดว่าตัวฉันดีกับใจเธอมั๊ย", translation: "只要妳想一想 我對妳的真心" },
            { time: 58.9, text: "แค่บอกกันให้รู้ no no", translation: "快快大聲說愛" },
            { time: 62.9, text: "Luv ya, loving you", translation: " " },
            { time: 65, text: "เอาใจเธอมาคู่ฉันที", translation: "讓兩顆心靠近 不再分開 " },
            { time: 67.9, text: "Baby baby boo", translation: " " },
            { time: 70, text: "รอเธออยู่ ไม่รู้ว่าเมื่อไร", translation: "我一直在等妳 就算是天荒地老" },
            { time: 73.5, text: "ที่เธอจะมองเห็นฉันในใจ", translation: "等妳終於看見 我眼裡的愛" },
            { time: 77, text: "อยากรู้แค่พูดมาเลยได้หรือไม่", translation: "現在能否告訴我答案" },
            { time: 80.9, text: "I'm crazy about you ", translation: " " },
            { time: 85, text: "ยังไงอ่ะใจ มันเป็นอะไร", translation: "這是怎麼了 心跳加速" },
            { time: 88, text: "ใทำยังไงให้ไม่เขิน", translation: "臉紅藏不住" },
            { time: 90, text: "ห้ามไม่ให้คิด แต่ก็ยังคิด", translation: "越是抑制思念 卻還是忍不住" },
            { time: 92.5, text: "เพราะเธอมันน่ารักเกิน", translation: "因為妳實在太可愛" },
            { time: 95, text: "เปิดดูดิใจของฉันในตอนนี้", translation: "看看我現在的心吧" },
            { time: 98.2, text: "มันมีแต่เธอ", translation: "我的心裡只有妳" },
            { time: 101, text: "Cause I love you", translation: " " },
            { time: 104, text: "แค่เธอลองมองที่ตาฉันดู", translation: "對視我的雙眼" },
            { time: 109, text: "จะรู้ว่ารักเธอไปเท่าไร", translation: "便知我的真心 " },
            { time: 114, text: "แค่เธอลองคิดว่าตัวฉันดีกับใจเธอมั๊ย", translation: "只要妳想一想 我對妳的真心" },
            { time: 120, text: "แค่บอกกันให้รู้ no no", translation: "快快大聲說愛" },
            { time: 124, text: "Luv ya, loving you", translation: " " },
            { time: 126, text: "เอาใจเธอมาคู่ฉันที", translation: "讓兩顆心靠近 不再分開 " },
            { time: 128.8, text: "Baby baby boo", translation: " " },
            { time: 131, text: "รอเธออยู่ ไม่รู้ว่าเมื่อไร", translation: "我一直在等妳 就算是天荒地老" },
            { time: 134.5, text: "ที่เธอจะมองเห็นฉันในใจ", translation: "等妳終於看見 我眼裡的愛" },
            { time: 138, text: "อยากรู้แค่พูดมาเลยได้หรือไม่", translation: "現在能否告訴我答案" },
            { time: 141.8, text: "I'm crazy about you ", translation: " " },
            { time: 145.8, text: "คำว่ารักที่เคยเป็นเพียงแค่ภาพลวงตา", translation: "曾經以為 愛只是虛幻的錯覺" },
            { time: 150, text: "ก็ได้เห็นมันอย่างชัดเจนเมื่อเธอเข้ามา", translation: "直到妳的出現 一切變得清晰" },
            { time: 155, text: "Oh oh", translation: "" },
            { time: 157.8, text: "รู้มั้ยถ้าเรานั้นได้เคียงกัน", translation: "若我們並肩 會是怎樣的畫面" },
            { time: 160, text: "จะมีความสุขเพียงใด No no", translation: "將會多麼幸福" },
            { time: 163, text: "Luv ya, loving you", translation: " " },
            { time: 165, text: "เอาใจเธอมาคู่ฉันที", translation: "讓兩顆心靠近 不再分開 " },
            { time: 168, text: "Baby baby boo", translation: " " },
            { time: 170.7, text: "รอเธออยู่ ไม่รู้ว่าเมื่อไร", translation: "我一直在等妳 就算是天荒地老" },
            { time: 173.9, text: "ที่เธอจะมองเห็นฉันในใจ", translation: "等妳終於看見 我眼裡的愛" },
            { time: 177.5, text: "อยากรู้แค่พูดมาเลยได้หรือไม่", translation: "現在能否告訴我答案" },
            { time: 180.5, text: "I'm crazy about you ", translation: " " },
            { time: 183.9, text: "la la la...", translation: " " },
            { time: 203, text: " ", translation: " " },
            { time: 204, text: " ", translation: " " },
            { time: 205, text: " ", translation: " " },
            { time: 206, text: " ", translation: " " },
            { time: 207, text: " ", translation: " " },
            { time: 208, text: " ", translation: " " },
            { time: 209, text: " ", translation: " " }
        ]
    },
    {
        name: "Our Little Thing",
        artist: "Palm Paramee",
        img: "https://i.pinimg.com/736x/c2/95/27/c29527731c80709e56483f79bd40c3f6.jpg",
        src: "s3.mp3",
        video: "675RmjZMDXM",
        lyrics: [
            { time: 0, text: " ", translation: " " },
            { time: 23.8, text: "I'll meet you there at our city's fair ", translation: "我會在城市的市集遇見妳" },
            { time: 28.9, text: "dressed in your favorite shirt that nobody knows,um", translation: "妳穿著那件只有我知道的襯衫 " },
            { time: 37.9, text: "can't let it show,um", translation: "不能被看穿 " },
            { time: 44, text: "then i'll put on the loveliest smile ", translation: "然後我微笑 " },
            { time: 49.3, text: "and they'll never know cuz it's our little thing", translation: "沒有人會知道這是我們的祕密 " },
            { time: 57.9, text: "got a nice little rin,um ", translation: "那枚小小的戒指 " },
            { time: 64.8, text: "tell me all the things that no one can know ", translation: "告訴我那些不能說的事 " },
            { time: 68.7, text: "although it shows ", translation: "卻早已寫在妳臉上 " },
            { time: 75, text: "i'll step into this world ", translation: "我走進這個世界 " },
            { time: 79, text: "seeing you miles away ", translation: "在人群中看見妳 " },
            { time: 85, text: "and it's all okay, even if this remains between us two ", translation: "就算只屬於我們也沒關係 " },
            { time: 95.5, text: "and i'll smile behind your back a thousand more times a day ", translation: "我會在妳背後無數次微笑 " },
            { time: 104.5, text: "cuz nobody knows, my love ", translation: "因為沒有人知道我的愛 " },
            { time: 110, text: "no one can know, and it's okay", translation: "不知道也沒關係 " },
            { time: 120, text: "( um... )", translation: " " },
            { time: 137, text: "tell me all the things that no one can know", translation: "告訴我那些不能說的事 " },
            { time: 140, text: "although it shows", translation: "卻怎麼也藏不住 " },
            { time: 149, text: "i'll step into this world", translation: "我走進這個世界 " },
            { time: 153.5, text: "seeing you miles away", translation: "在人群中看見妳 " },
            { time: 159.5, text: "and it's all okay, even if this remains between us two", translation: "只要是我們就好 " },
            { time: 169.8, text: "and i'll smile behind your back a thousand more times a day", translation: "我會在妳背後一直微笑 " },
            { time: 179, text: "cuz nobody knows, my love", translation: "因為沒有人知道我的愛 " },
            { time: 184, text: "no one can know, and it's okay", translation: "不知道也沒關係 " },
            { time: 203.7, text: "i'll make sure you can smile the loveliest smile today", translation: "我只希望妳今天能笑 " },
            { time: 213, text: "cuz it's all okay even if this remains between us two", translation: "就算只剩我們也沒關係 " },
            { time: 224, text: "and i'll smile behind your back a thousand more times a day", translation: "我會在妳背後一直微笑 " },
            { time: 233, text: "cuz nobody knows, my love", translation: "因為沒有人知道我的愛 " },
            { time: 238, text: "no one can know, and it's okay", translation: "不知道也沒關係 " },
            { time: 248, text: " ", translation: " " },
            { time: 250, text: " ", translation: " " },
            { time: 251, text: " ", translation: " " },
            { time: 252, text: " ", translation: " " },
            { time: 253, text: " ", translation: " " },
            { time: 254, text: " ", translation: " " },
            { time: 255, text: " ", translation: " " }
        ]
    },
    {
        name: "ฤดูรัก (Cover Version)",
        artist: " Kao Supassara, Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/1c/69/3f/1c693f8b964ab2d2b899b39950bc1bb2.jpg",
        src: "s4.mp3",
        video: "Rbr1O0UBvZo",
        lyrics: [
            { time: 0, text: "（前奏）", translation: " " },
            { time: 17, text: "ตั้งแต่วันที่ฉันได้พบเธอ", translation: "從遇見妳的那天起" },
            { time: 19, text: "ก็เหมือนว่าโลกใบนี้มันเริ่มหยุด หมุนไป", translation: "整個世界彷彿停止了轉動 " },
            { time: 25.4, text: "หน้าหนาวจะหนาวซักเท่าไหร่ ", translation: "冬日嚴寒有多凜洌 " },
            { time: 27.5, text: "หน้าร้อนจะร้อนซักแค่ไหน ก็ไม่เคยสน ", translation: "夏日驕陽有多炙熱 從未在意 " },
            { time: 33.2, text: "เพราะทุก ๆ วันที่มีเธออยู่", translation: "因為有妳相伴的每一天  " },
            { time: 37, text: "ก็ไม่รู้ ไม่รู้ฤดูอะไร ", translation: "是什麼季節 都渾然不覺" },
            { time: 42.5, text: "ฉันรู้แต่ว่าใจ ฉันมีเธอ ", translation: "我只知道心中是妳 " },
            { time: 46.9, text: "มีเธอเป็นฤดูแห่งความรัก", translation: "有妳 便是愛的季節 " },
            { time: 51.5, text: "ฤดูที่ทำให้โลกนี้สดใส", translation: "讓世界變得絢爛的季節 " },
            { time: 54.8, text: "มีเธอเป็นฤดูที่ใคร ก็คงไม่เข้าใจ ", translation: "有妳 便是他人不會明白的季節 " },
            { time: 59.9, text: "ถ้าหากไม่ลองเปิดหัวใจ ให้รักเธออย่างฉัน  ", translation: "除非願意敞開心扉 像我這般愛妳 " },
            { time: 66, text: "（間奏）", translation: " " },
            { time: 81, text: "หน้าร้อนก็ไม่เคยร้อนใจ ", translation: "熱季未曾讓我煩惱 " },
            { time: 83.5, text: "หน้าฝนมีเธอกางร่ม เราเดินไปด้วยกัน  ", translation: "雨季有妳為我撐傘 並肩而行 " },
            { time: 89.7, text: "หน้าหนาวก็ยังไม่สำคัญ  ", translation: "寒冬也無足輕重 " },
            { time: 91.3, text: "แค่มีเพียงเธอเท่านั้น ก็อุ่นใจแล้ว ", translation: "只要有妳在身旁 便溫暖我心 " },
            { time: 97.2, text: "เพราะทุก ๆ วันที่มีเธออยู่ ", translation: "因為有妳相伴的每一天 " },
            { time: 101, text: "ก็ไม่รู้ ไม่รู้ฤดูอะไร ", translation: "是什麼季節 都渾然不覺 " },
            { time: 106.5, text: "ฉันรู้แต่ว่าใจ ฉันมีเธอ ", translation: "我只知道心中是妳 " },
            { time: 110.4, text: "มีเธอเป็นฤดูแห่งความรัก", translation: "有妳 便是愛的季節 " },
            { time: 115.4, text: "ฤดูที่ทำให้โลกนี้สดใส", translation: "讓世界變得絢爛的季節 " },
            { time: 118.4, text: "มีเธอเป็นฤดูที่ใคร ก็คงไม่เข้าใจ ", translation: "有妳 便是他人不會明白的季節 " },
            { time: 123.4, text: "ถ้าหากไม่ลองเปิดหัวใจ", translation: "除非願意敞開心扉" },
            { time: 126.5, text: "มีเธอเป็นฤดูแห่งความรัก", translation: "有妳 便是愛的季節 " },
            { time: 131.4, text: "ฤดูที่ทำให้โลกนี้สดใส", translation: "讓世界變得絢爛的季節 " },
            { time: 134.7, text: "มีเธอเป็นฤดูที่ใคร ก็คงไม่เข้าใจ ", translation: "有妳 便是他人不會明白的季節 " },
            { time: 139.5, text: "ถ้าหากไม่ลองเปิดหัวใจ", translation: "除非願意敞開心扉" },
            { time: 144.5, text: "ให้รักเธออย่างฉัน  ", translation: "像我這般愛妳 " },
            { time: 148, text: " ", translation: " " },
            { time: 149, text: " ", translation: " " },
            { time: 150, text: " ", translation: " " },
            { time: 151, text: " ", translation: " " },
            { time: 152, text: " ", translation: " " },
            { time: 153, text: " ", translation: " " }

        ]
    },
    {
        name: " Last Christmas ",
        artist: " Kao Supassara, Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/80/4d/f2/804df27bde16e748afa65bb49f44d2eb.jpg",
        src: "s5.mp3",
        video: "F1FXa56T0WE",
        lyrics: [
            { time: 0, text: "(前奏)", translation: " " },
            { time: 19.9, text: "Last Christmas I gave you my heart", translation: "去年聖誕 我把心交給妳 " },
            { time: 24, text: "But the very next day you gave it away ", translation: " 可是 就在第二天 妳卻丟棄了" },
            { time: 28.5, text: "This year To save me from tears ", translation: "今年 可以免我流淚了吧 " },
            { time: 32.8, text: "I'll give it to someone special ", translation: "因為我會把它交給另一個特別的人 " },
            { time: 37.9, text: "Last Christmas I gave you my heart", translation: "去年聖誕 我把心交給妳 " },
            { time: 41.7, text: "But the very next day you gave it away ", translation: " 可是 就在第二天 妳卻丟棄了" },
            { time: 46.5, text: "This year To save me from tears ", translation: "今年 可以免我流淚了吧 " },
            { time: 50.8, text: "I'll give it to someone special ", translation: "因為我會把它交給另一個特別的人 " },
            { time: 58.3, text: "Once bitten and twice shy ", translation: "一次邂逅是美妙的 兩次就會害羞了 " },
            { time: 62.8, text: "I keep my distance But you still catch my eye ", translation: "我保持距離 但淚水依然充滿了我的眼眶 " },
            { time: 67.8, text: "Tell me baby Do you recognize me ", translation: "告訴我 寶貝 妳還記得我嗎" },
            { time: 72.1, text: "Well It's been a year It doesn't surprise me ", translation: "唉 一年了 我並不驚訝 " },
            { time: 77, text: "Happy Christmas I wrapped it up and sent it ", translation: "去年聖誕 我用緞帶把禮物包裝好 " },
            { time: 81, text: "With a note saying 'I love you' I meant it  ", translation: "再留一張條告訴妳 我愛妳 " },
            { time: 86, text: "Now I know what a fool I've been ", translation: "現在卻知道這是多麼傻 " },
            { time: 89.5, text: "But if you kissed me now ", translation: "可是 如果妳現在親吻我 " },
            { time: 92, text: "I know you'd fool me again ", translation: "我知道妳一定將再次愚弄我 " },
            { time: 95.5, text: "Last Christmas I gave you my heart", translation: "去年聖誕 我把心交給妳 " },
            { time: 99.5, text: "But the very next day you gave it away ", translation: " 可是 就在第二天 妳卻丟棄了" },
            { time: 105, text: "This year To save me from tears ", translation: "今年 可以免我流淚了吧 " },
            { time: 109.5, text: "I'll give it to someone special ", translation: "因為我會把它交給另一個特別的人 " },
            { time: 114, text: "Last Christmas I gave you my heart", translation: "去年聖誕 我把心交給妳 " },
            { time: 118, text: "But the very next day you gave it away ", translation: " 可是 就在第二天 妳卻丟棄了" },
            { time: 124, text: "This year To save me from tears ", translation: "今年 可以免我流淚了吧 " },
            { time: 128, text: "I'll give it to someone special ", translation: "因為我會把它交給另一個特別的人 " },
            { time: 133.5, text: "Last Christmas I gave you my heart", translation: "去年聖誕 我把心交給妳 " },
            { time: 137.5, text: "But the very next day you gave it away ", translation: " 可是 就在第二天 妳卻丟棄了" },
            { time: 142.5, text: "This year To save me from tears ", translation: "今年 可以免我流淚了吧 " },
            { time: 146.9, text: "I'll give it to someone special ", translation: "因為我會把它交給另一個特別的人 " },
            { time: 151, text: "A face on a lover with a fire in his heart ", translation: "面對戀人 火花 人影 面紗 " },
            { time: 156.5, text: "A man under cover buy you tore him apart ", translation: "刻意掩飾 妳卻將我拆穿 " },
            { time: 165.8, text: "I'll give it to someone ", translation: "我會把心交給別人 " },
            { time: 168.3, text: "I'll give it to someone special ", translation: "交給另一個特別的人 " },
            { time: 175, text: " ", translation: " " },
            { time: 176, text: " ", translation: " " },
            { time: 177, text: " ", translation: " " },
            { time: 178, text: " ", translation: " " },
            { time: 179, text: " ", translation: " " },
            { time: 180, text: " ", translation: " " }

        ]
    },
    {
        name: "ฝากใจ | 寄託心意",
        artist: "Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/bc/55/2b/bc552b4db500d5cb62fc44ae714a51b9.jpg",
        src: "s6.mp3",
        video: "tCo0VPlzyKE",
        lyrics: [
            { time: 0, text: "( 前奏 ) ", translation: " " },
            { time: 24.9, text: "เธอชอบพูดว่าเธอนั้นโชคดี ที่ชีวิตได้พบเจอกับฉัน", translation: "妳總喜歡說自己很幸運 生命中遇見了我" },
            { time: 33, text: "แต่รู้บ้างหรือเปล่าว่าฉันโชคดีกว่า ที่ได้รับความรักจากเธอ", translation: "但妳知道嗎 我才更幸運 能夠得到妳的愛 " },
            { time: 42.2, text: "เธอชอบพูดว่าเธอไม่เข้าใจ ว่าฉันนั้นชอบเธอที่ตรงไหน", translation: "妳總喜歡說自己不明白 我喜歡妳哪一點" },
            { time: 50.5, text: "ก็ชอบที่เป็นเธอ แค่เธอเป็นเธอก็พอแล้ว", translation: "就喜歡這樣的妳 只要妳做自己就足夠了" },
            { time: 59.6, text: "ฉันก็ไม่รู้ว่าอนาคตเป็นอย่างไร จะไม่นึกย้อนเสียใจ", translation: "我也不知道未來會怎麼樣 不想回想後悔" },
            { time: 66, text: "เลือกกี่ครั้งก็เหมือนเดิม ใจฉันเลือกเธอไปแล้ว", translation: "無論做幾次選擇都一樣 我的心選擇妳了" },
            { time: 74.5, text: "ฝากใจฉันไว้ที่เธอ ฝากให้เธอช่วยดูแล", translation: "我的心寄託於妳 請妳替我好好照顧" },
            { time: 83, text: "ฉันไม่อ้อนวอน อะไรเธอมากมาย", translation: "我不懇求妳太多太多" },
            { time: 88, text: "แค่ช่วยอยู่กับฉันตลอดไป", translation: "但求妳永遠和我在一起" },
            { time: 91.5, text: "ฝากใจฉันไว้ที่เธอ ฝากให้เธอช่วยดูแล", translation: "我的心寄託於妳 請妳替我好好照顧" },
            { time: 100, text: "ขอเธอไม่ลืม ขอให้เธอจดจำไว้", translation: "求妳別忘記 希望妳銘記於心" },
            { time: 105.4, text: "จากนี้ หัวใจฉันอยู่ที่เธอแล้ว", translation: "從今往后 我的心已屬於妳了" },
            { time: 111.7, text: "(間奏)", translation: "" },
            { time: 119.5, text: "เธอรู้ไหมที่แท้โชคชะตา ก็แค่พาเธอพบเจอกับฉัน", translation: "妳知道嗎 其實命運就只是指引妳我相遇" },
            { time: 128, text: "แต่ที่เรารักกัน มันเกิดขึ้นได้เพราะฉันกับเธอ", translation: "但我們愛上彼此 那是因為妳我的心意相通" },
            { time: 136.5, text: "ฉันก็ไม่รู้ว่าอนาคตเป็นอย่างไร จะไม่นึกย้อนเสียใจ", translation: "我也不知道未來會怎麼樣 不想回想後悔" },
            { time: 143.3, text: "เลือกกี่ครั้งก็เหมือนเดิม ใจฉันเลือกเธอไปแล้ว", translation: "無論做幾次選擇都一樣 我的心選擇妳了" },
            { time: 151.2, text: "ฝากใจฉันไว้ที่เธอ ฝากให้เธอช่วยดูแล", translation: "我的心寄託於妳 請妳替我好好照顧" },
            { time: 160, text: "ฉันไม่อ้อนวอน อะไรเธอมากมาย", translation: "我不懇求妳太多太多" },
            { time: 165, text: "แค่ช่วยอยู่กับฉันตลอดไป", translation: "但求妳永遠和我在一起" },
            { time: 168.9, text: "ฝากใจฉันไว้ที่เธอ ฝากให้เธอช่วยดูแล", translation: "我的心寄託於妳 請妳替我好好照顧" },
            { time: 177.5, text: "ขอเธอไม่ลืม ขอให้เธอจดจำไว้", translation: "求妳別忘記 希望妳銘記於心" },
            { time: 182.3, text: "จากนี้ หัวใจฉันอยู่ที่เธอแล้ว", translation: "從今往后 我的心已屬於妳了" },
            { time: 191.5, text: "ฉันขอสัญญาว่าจะไม่ไปไหน", translation: "我發誓會不離不棄" },
            { time: 196, text: "เธอไม่ต้องกลัวว่าฉันจะหายไป", translation: "妳不必擔心我會消失不見 " },
            { time: 200, text: "ฉันพร้อมและมอบหัวใจฉันฝากไว้ที่เธอแล้ว", translation: "我準備獻出全心全意 寄託於妳" },
            { time: 208.8, text: "ฉันขอสัญญาว่าจะไม่ไปไหน", translation: "我發誓會不離不棄" },
            { time: 213, text: "เธอไม่ต้องกลัวว่าฉันจะหายไป", translation: "妳不必擔心我會消失不見 " },
            { time: 217.3, text: "ฉันพร้อมและมอบหัวใจฉันฝากไว้ที่เธอแล้ว", translation: "我準備獻出全心全意 寄託於妳" },
            { time: 226.9, text: "ฝากใจฉันไว้ที่เธอ ฝากให้เธอช่วยดูแล", translation: "我的心寄託於妳 請妳替我好好照顧" },
            { time: 235.2, text: "ฉันไม่อ้อนวอน อะไรเธอมากมาย", translation: "我不懇求妳太多太多" },
            { time: 240, text: "แค่ช่วยอยู่กับฉันตลอดไป", translation: "但求妳永遠和我在一起" },
            { time: 243.8, text: "ฝากใจฉันไว้ที่เธอ ฝากให้เธอช่วยดูแล", translation: "我的心寄託於妳 請妳替我好好照顧" },
            { time: 252.3, text: "ขอเธอไม่ลืม ขอให้เธอจดจำไว้", translation: "求妳別忘記 希望妳銘記於心" },
            { time: 257.3, text: "จากนี้ หัวใจฉันอยู่ที่เธอแล้ว", translation: "從今往後 我的心已屬於妳了" },
            { time: 264, text: "( 私心最愛 小葉有那麼一刻把自己唱進去了吧...) ", translation: " " },
            { time: 276.1, text: "หัวใจฉันอยู่ที่เธอแล้ว", translation: "我的心已屬於妳了" },

        ]
    }
];
const mainContainer = document.querySelector(".main-container"),
    musicImg = mainContainer.querySelector(".img-area img"),
    musicName = mainContainer.querySelector(".song-details .name"),
    musicArtist = mainContainer.querySelector(".song-details .artist"),
    playPauseBtn = mainContainer.querySelector(".play-pause"),
    playPauseIcon = mainContainer.querySelector(".play-pause i"),
    prevBtn = mainContainer.querySelector("#prev"),
    nextBtn = mainContainer.querySelector("#next"),
    progressBar = mainContainer.querySelector(".progress-bar"),
    progressArea = mainContainer.querySelector(".progress-area"),
    musicCurrentTime = mainContainer.querySelector(".current"),
    musicDuration = mainContainer.querySelector(".duration"),
    volumeSlider = mainContainer.querySelector("#volume-slider"),
    lyricsWrapper = document.getElementById("lyrics-wrapper");

let musicIndex = 0;
let mainAudio = new Audio();
let isPlaying = false;
let currentLyricIndex = -1;
let ytPlayer;

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('player', {
        videoId: allMusic[musicIndex].video,
        playerVars: {
            'autoplay': 1, 'mute': 1, 'controls': 0, 'loop': 0, 
            'playlist': allMusic[musicIndex].video,
            'playsinline': 1, 'modestbranding': 1, 'rel': 0
        },
        events: {
            'onReady': (e) => {
                e.target.playVideo();
                setInterval(() => {
                    const duration = ytPlayer.getDuration();
                    const currentTime = ytPlayer.getCurrentTime();
                    if (duration > 0 && (duration - currentTime) < 0.5) {
                        ytPlayer.seekTo(0);
                        ytPlayer.playVideo();
                    }
                }, 100);
            },
            'onStateChange': (e) => {
                if (e.data === YT.PlayerState.ENDED) {
                    ytPlayer.seekTo(0);
                    ytPlayer.playVideo();
                }
            }
        }
    });
}
function loadMusic(index) {
    const music = allMusic[index];
    musicName.innerText = music.name;
    musicArtist.innerText = music.artist;
    musicImg.src = music.img;
    mainAudio.src = music.src;
    mainAudio.load();

    if (ytPlayer && ytPlayer.loadVideoById) {
        ytPlayer.loadVideoById({
            videoId: music.video,
            playlist: music.video,
            startSeconds: 0
        });
    }
    currentLyricIndex = -1;
    displayLyrics(music.lyrics);
}

function playSong() {
    isPlaying = true;
    playPauseIcon.classList.replace("fa-play", "fa-pause");
    mainAudio.play();
}

function pauseSong() {
    isPlaying = false;
    playPauseIcon.classList.replace("fa-pause", "fa-play");
    mainAudio.pause();
}

function nextMusic() {
    musicIndex = (musicIndex + 1) % allMusic.length;
    loadMusic(musicIndex);
    playSong();
}

function prevMusic() {
    musicIndex = (musicIndex - 1 + allMusic.length) % allMusic.length;
    loadMusic(musicIndex);
    playSong();
}

playPauseBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    isPlaying ? pauseSong() : playSong();
});

nextBtn.addEventListener("click", () => nextMusic());
prevBtn.addEventListener("click", () => prevMusic());

volumeSlider.addEventListener("input", (e) => {
    mainAudio.volume = e.target.value;
});

mainAudio.addEventListener("ended", () => nextMusic());

window.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        e.preventDefault();
        isPlaying ? pauseSong() : playSong();
    }
    else if (e.code === "ArrowLeft") {
        mainAudio.currentTime = Math.max(0, mainAudio.currentTime - 5);
        currentLyricIndex = -1;
    }
    else if (e.code === "ArrowRight") {
        mainAudio.currentTime = Math.min(mainAudio.duration, mainAudio.currentTime + 5);
        currentLyricIndex = -1;
    }
    else if (e.code === "ArrowUp") {
        e.preventDefault();
        mainAudio.volume = Math.min(1, mainAudio.volume + 0.05);
        volumeSlider.value = mainAudio.volume;
    }
    else if (e.code === "ArrowDown") {
        e.preventDefault();
        mainAudio.volume = Math.max(0, mainAudio.volume - 0.05);
        volumeSlider.value = mainAudio.volume;
    }
});

mainAudio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    if (duration) {
        let progressWidth = (currentTime / duration) * 100;
        progressBar.style.width = `${progressWidth}%`;

        let curMin = Math.floor(currentTime / 60);
        let curSec = Math.floor(currentTime % 60);
        musicCurrentTime.innerText = `${curMin}:${curSec < 10 ? '0' + curSec : curSec}`;

        let durMin = Math.floor(duration / 60);
        let durSec = Math.floor(duration % 60);
        musicDuration.innerText = `${durMin}:${durSec < 10 ? '0' + durSec : durSec}`;

        updateLyrics(currentTime);

        if ((currentTime / duration) > 0.8) {
            let nextIndex = (musicIndex + 1) % allMusic.length;
            let preloadAudio = new Audio();
            preloadAudio.src = allMusic[nextIndex].src;
            preloadAudio.preload = "auto"; 
        }
    }
});
progressArea.addEventListener("click", (e) => {
    let progressWidth = progressArea.clientWidth;
    let clickedOffsetX = e.offsetX;
    mainAudio.currentTime = (clickedOffsetX / progressWidth) * mainAudio.duration;
    playSong();
});

function displayLyrics(lyrics) {
    lyricsWrapper.innerHTML = lyrics.map(line =>
        `<div class="lyric-line">
            <div class="main-text">${line.text}</div>
            <div class="sub-text">${line.translation || ""}</div>
        </div>`
    ).join("");
    lyricsWrapper.style.transform = `translateY(180px)`;
}

function updateLyrics(currentTime) {
    const lyrics = allMusic[musicIndex].lyrics;
    let activeIndex = -1;
    for (let i = 0; i < lyrics.length; i++) {
        if (currentTime >= lyrics[i].time) activeIndex = i;
    }

    if (activeIndex !== -1 && activeIndex !== currentLyricIndex) {
        currentLyricIndex = activeIndex;
        const lines = document.querySelectorAll(".lyric-line");
        const activeLine = lines[activeIndex];
        lines.forEach((line, index) => {
            if (index === activeIndex) {
                line.classList.add("active");
                const offset = 200 - activeLine.offsetTop;
                lyricsWrapper.style.transform = `translateY(${offset}px)`;
            } else {
                line.classList.remove("active");
            }
        });
    }
}

window.addEventListener("load", () => {
    loadMusic(musicIndex);
    document.body.addEventListener('click', () => {
        if (ytPlayer && ytPlayer.playVideo) ytPlayer.playVideo();
    }, { once: true });
});

