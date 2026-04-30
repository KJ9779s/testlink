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
            { time: 24, text: "But the very next day you gave it away ", translation: "但就在隔天 妳就棄之於地" },
            { time: 28.5, text: "This year To save me from tears ", translation: "今年 我擺脫了悲傷" },
            { time: 32.8, text: "I'll give it to someone special ", translation: "我會將我的愛獻給那個特別的人" },
            { time: 37.9, text: "Last Christmas I gave you my heart", translation: "去年聖誕 我把心交給妳 " },
            { time: 41.7, text: "But the very next day you gave it away ", translation: "然而就在隔天 妳就將我的心給了別人" },
            { time: 46.5, text: "This year To save me from tears ", translation: "今年 我自淚水中掙脫" },
            { time: 50.8, text: "I'll give it to someone special ", translation: "我將會把我最好的獻給那位特別的人" },
            { time: 58.3, text: "Once bitten and twice shy ", translation: "過往的陰影導致今日的畏懼" },
            { time: 62.8, text: "I keep my distance But you still catch my eye ", translation: "我與妳保持距離 但妳仍舊吸引了我的目光 " },
            { time: 67.8, text: "Tell me baby Do you recognize me ", translation: "親愛的 告訴我 妳是否認得我" },
            { time: 72.1, text: "Well It's been a year It doesn't surprise me ", translation: "唉 一年了 我並不驚訝 " },
            { time: 77, text: "Happy Christmas I wrapped it up and sent it ", translation: "(聖誕快樂) 我將我的愛意仔細包裝 作為禮物送給妳" },
            { time: 81, text: "With a note saying 'I love you' I meant it  ", translation: "附上一條寫著我愛你的紙條 我是認真的" },
            { time: 86, text: "Now I know what a fool I've been ", translation: "現在卻知道這是多麼傻 " },
            { time: 89.5, text: "But if you kissed me now ", translation: "但若妳現在能再次親吻我" },
            { time: 92, text: "I know you'd fool me again ", translation: "我知道妳能再度將我玩弄於股掌之間" },
            { time: 95.5, text: "Last Christmas I gave you my heart", translation: "去年聖誕 我把心交給妳 " },
            { time: 99.5, text: "But the very next day you gave it away ", translation: "但就在隔天 妳就把我的愛棄之於地" },
            { time: 105, text: "This year To save me from tears ", translation: "今年 我擺脫了悲傷" },
            { time: 109.5, text: "I'll give it to someone special ", translation: "我會將我的愛獻給那個特別的人" },
            { time: 114, text: "Last Christmas I gave you my heart", translation: "去年聖誕 我把心交給妳 " },
            { time: 118, text: "But the very next day you gave it away ", translation: "然而就在隔天 妳就將我的心給了別人" },
            { time: 124, text: "This year To save me from tears ", translation: "今年 我自淚水中掙脫" },
            { time: 128, text: "I'll give it to someone special ", translation: "我將會把我最好的獻給那位特別的人" },
            { time: 133.5, text: "Last Christmas I gave you my heart", translation: "去年聖誕 我把心交給妳 " },
            { time: 137.5, text: "But the very next day you gave it away ", translation: "但就在隔天 妳就把我的愛棄之於地" },
            { time: 142.5, text: "This year To save me from tears ", translation: "今年 我自淚水中掙脫 " },
            { time: 146.9, text: "I'll give it to someone special ", translation: "我將會把我最好的獻給那位特別的人" },
            { time: 151, text: "A face on a lover with a fire in his heart ", translation: "愛人的臉龐配上一顆被愛火包圍的心" },
            { time: 156.5, text: "A man under cover buy you tore him apart ", translation: "雖故意隱藏 但妳在我身上造成難以抹滅的傷疤" },
            { time: 165.8, text: "I'll give it to someone ", translation: "我會把心交給別人 " },
            { time: 168.3, text: "I'll give it to someone special ", translation: "我會將我的愛意給予那個特別的人" },
            { time: 175, text: " ", translation: " " },
            { time: 176, text: " ", translation: " " },
            { time: 177, text: " ", translation: " " },
            { time: 178, text: " ", translation: " " },
            { time: 179, text: " ", translation: " " },
            { time: 180, text: " ", translation: " " }

        ]
    },
    {
        name: " Let it end ",
        artist: " Kao Supassara ",
        img: "https://i.pinimg.com/736x/9e/53/f8/9e53f814a569734340eb7865d0f8b181.jpg",
        src: "s7.mp3",
        video: "bMlm4nb8g9A",
        lyrics: [
            { time: 0, text: "(前奏)", translation: " " },
            { time: 14.1, text: "ผิดเอง ที่หลงเชื่อเธอหมดใจ", translation: "都怪我 當初太全心全意相信妳" },
            { time: 20.9, text: "ผิดเอง ที่รักมากไปอย่างนั้น", translation: "都怪我 愛得如此奮不顧身" },
            { time: 27.4, text: "ไม่เคยคิดฝันว่าเธอจะจากกันไป", translation: "從未料想到妳會這樣離去" },
            { time: 31.4, text: "อย่างไม่มีคำร่ำลา", translation: "不留一句道別" },
            { time: 35.1, text: "ทิ้งไว้แค่ภาพทรงจำที่ยังงดงาม", translation: "只留下依然美好的記憶畫面 " },
            { time: 42, text: "ตอนเธอไป ใจยังค้างคา", translation: "當妳離去 心還懸在半空" },
            { time: 46.5, text: "เจ็บปวด อย่างไม่รู้ว่า", translation: "疼痛蔓延 卻不知緣由" },
            { time: 49.9, text: "ทำอะไรผิดไป บอกฉันทีได้มั้ย", translation: "究竟做錯了什麼 能否告訴我" },
            { time: 56.2, text: "ไม่ได้ต้องการกลับไปหา", translation: "並非想要回到妳身邊" },
            { time: 60, text: "ไม่ได้ต้องการกลับมารัก", translation: "並非想要重新相愛 " },
            { time: 63.1, text: "แต่ช่วยมาทำให้มันจบ", translation: "請來給這一切劃上句號" },
            { time: 67, text: "เพื่อลบเรื่องที่ค้างคา", translation: "抹去未盡的牽絆" },
            { time: 70, text: "ไม่ได้ต้องการให้เธอกลับมา", translation: "不需要妳回到我身邊" },
            { time: 74.1, text: "ต้องการแค่เพียงคำบอกลา", translation: "只需一句正式告別" },
            { time: 77.3, text: "ให้รักที่เคยสร้างกันมา", translation: "讓曾經共建的愛情" },
            { time: 81, text: "ถูกลบเลือนไปให้หายไปจากหัวใจ", translation: "從心底徹底湮滅消散" },
            { time: 86, text: "( 間奏 )", translation: "" },
            { time: 91.7, text: "อยากถาม เหตุผลที่เธอจากไป", translation: "想追問 妳離去的原因" },
            { time: 98.7, text: "อยากรู้ เคยรักฉันจริงบ้างไหม", translation: "想知道 是否真心愛過我" },
            { time: 105.5, text: "ก็ตอนนั้นคิดจริงๆ เธอคือคนเดียว", translation: "那時的我天真以為" },
            { time: 109.4, text: "ที่ใจนั้นเลือกว่าใช่", translation: "妳就是命中注定" },
            { time: 112.8, text: "ทุกความทรงจำเหล่านั้นช่างมีความหมาย", translation: "所有記憶都意義非凡" },
            { time: 119.8, text: "ไม่เคยลืม เรื่องราวที่ค้างคา", translation: "從未遺忘 未完結的篇章" },
            { time: 124, text: "เจ็บปวด และทรมาน", translation: "痛苦難熬 輾轉難眠" },
            { time: 127, text: "กับการที่ถูกทอดทิ้ง กับน้ำตาที่รินไหล", translation: "被拋棄的痛楚 伴著淚水決堤" },
            { time: 133.9, text: "ไม่ได้ต้องการกลับไปหา", translation: "並非想要回到妳身邊" },
            { time: 137.4, text: "ไม่ได้ต้องการกลับมารัก", translation: "並非想要重新相愛 " },
            { time: 141, text: "แต่ช่วยมาทำให้มันจบ", translation: "請來給這一切劃上句號" },
            { time: 144.5, text: "เพื่อลบเรื่องที่ค้างคา", translation: "抹去未盡的牽絆" },
            { time: 147.8, text: "ไม่ได้ต้องการให้เธอกลับมา", translation: "不需要妳回到我身邊" },
            { time: 151.3, text: "ต้องการแค่เพียงคำบอกลา", translation: "只需一句正式告別" },
            { time: 155.5, text: "ให้รักที่เคยสร้างกันมา", translation: "讓曾經共建的愛情" },
            { time: 158.5, text: "ถูกลบเลือนไปให้หายไปจากหัวใจ", translation: "從心底徹底湮滅消散" },
            { time: 164, text: "( 間奏 )", translation: "" },
            { time: 176.2, text: "ไม่ได้ต้องการกลับไปหา", translation: "並非想要回到妳身邊" },
            { time: 179.8, text: "ไม่ได้ต้องการกลับมารัก", translation: "並非想要重新相愛 " },
            { time: 183.2, text: "แต่ช่วยมาทำให้มันจบ", translation: "請來給這一切劃上句號" },
            { time: 186.8, text: "เพื่อลบเรื่องที่ค้างคา", translation: "抹去未盡的牽絆" },
            { time: 190, text: "ไม่ได้ต้องการให้เธอกลับมา", translation: "不需要妳回到我身邊" },
            { time: 194.1, text: "ต้องการแค่เพียงคำบอกลา", translation: "只需一句正式告別" },
            { time: 197.5, text: "ให้รักที่เคยสร้างกันมา", translation: "讓曾經共建的愛情" },
            { time: 201, text: "", translation: "從心底徹底湮滅消散" },
            { time: 207, text: "", translation: "" },
            { time: 208, text: "", translation: "" },
            { time: 209, text: "", translation: "" },
            { time: 210, text: "", translation: "" },
            { time: 211, text: "", translation: "" },
        ]
    },

    {
        name: "ฝากใจ | 寄託心意",
        artist: "Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/4c/7b/cf/4c7bcfd7a55fd9d28d269d5248c64d9f.jpg",
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
    },
    {
        name: "Dum Dum",
        artist: "Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/92/ad/c3/92adc30e8e0378bbf751f3cf2c06a77a.jpg",
        src: "s8.mp3",
        video: "xG1BWRfr4Gg",
        lyrics: [
            { time: 0, text: "( 前奏 ) ", translation: " " },
            { time: 23.4, text: "Hmm, hmm, hmm-hmm", translation: "" },
            { time: 44.8, text: "เธอเป็นไง ฉันรู้อยู่", translation: "妳怎樣我全都懂" },
            { time: 47.5, text: "ทำอะไรก็รู้อยู่", translation: "妳在做什麼我也都看透" },
            { time: 50.1, text: "มีความสุขที่ได้ดู", translation: "其實我有點享受" },
            { time: 52.6, text: "ความเจ็บปวดที่เธอทำฉัน", translation: "看妳怎麼把我傷得這麼重" },
            { time: 55.1, text: "I've been tryna call you", translation: "我一直試著打給妳" },
            { time: 57.5, text: "เพื่อจะบอกว่าฉันจดจำ", translation: "只想告訴妳我還記得" },
            { time: 60.5, text: "วันที่เธอทำร้ายกัน", translation: "妳傷害我的那一天" },
            { time: 63, text: "วนและเวียนอย่างนั้น", translation: "一遍一遍在腦海輪迴著" },
            { time: 65, text: "เคยทรมานแต่ฉันเริ่มด้านชา", translation: "曾那麼痛　如今卻開始麻木" },
            { time: 70.4, text: "เคยภาวนาแต่ฉันเริ่มระอา", translation: "曾經祈求　現在只剩厭惡" },
            { time: 75.4, text: "ยิ่งเธอทำร้ายยิ่งดูน่าเวทนา", translation: "妳越傷我　看起來越可悲無助" },
            { time: 80.3, text: "ช่วยทำให้เจ็บกว่านี้ เพราะฉันยังมีเวลา", translation: "再狠一點吧　反正我還撐得住" },
            { time: 87.2, text: "Dum, deu, dum-dum, dum, dum-dum, um-um-um", translation: "" },
            { time: 94.2, text: "Um-um, um-um-um", translation: "" },
            { time: 97.5, text: "Dum, deu, dum-dum, dum, dum-dum, um-um-um", translation: "" },
            { time: 104.8, text: "Um-um, um-um-um", translation: "" },
            { time: 107, text: "(Um-um)", translation: "" },
            { time: 110.6, text: "คำรุนแรงที่ชอบบอก", translation: "那些刺耳的狠話" },
            { time: 113.1, text : "คำโกหกที่ชอบหลอก", translation: "那些妳最愛說的謊" },
            { time: 115.9, text: "เธอคงจำไม่ได้หรอก", translation: "大概早就忘了吧" },
            { time: 118.5, text: "กะโหลกใบนั้นไร้สิ่งใด", translation: "那空空如也的腦袋" },
            { time: 121, text: "เธอบอกเธอรักฉันจริง", translation: "妳說你是真的愛我" },
            { time: 123.8, text: "แต่ทำลายทุก ๆ สิ่ง", translation: "卻把一切全都摧毀" },
            { time: 126.2, text: "คำที่บอกว่ารักจริง", translation: "嘴上說的那句愛" },
            { time: 129, text: "บอกตัวเองหรือไง", translation: "是說給自己聽的嗎" },
            { time: 131, text: "เคยทรมานแต่ฉันเริ่มด้านชา", translation: "曾那麼痛　如今卻開始麻木" },
            { time: 136.2, text: "เคยภาวนาแต่ฉันเริ่มระอา", translation: "曾經祈求　現在只剩厭惡" },
            { time: 141.5, text: "ยิ่งเธอทำร้ายยิ่งดูน่าเวทนา", translation: "妳越傷我　看起來越可悲無助" },
            { time: 146.5, text: "ช่วยทำให้เจ็บกว่านี้ เพราะฉันยังมีเวลา", translation: "再狠一點吧　反正我還撐得住" },
            { time: 153.5, text: "Dum, deu, dum-dum, dum, dum-dum, um-um-um", translation: "" },
            { time: 157.5, text: "Um-um, um-um-um", translation: "" },
            { time: 163.3, text: "Dum, deu, dum-dum, dum, dum-dum, um-um-um", translation: "" },
            { time: 168, text: "Um-um, um-um-um", translation: "" },
            { time: 173, text: "(Um-um)", translation: "" },
            { time: 176.3, text: "เธอพูดเหมือนฉันต้องการเธอจัง", translation: "妳說得好像我非妳不可" },
            { time: 178.8, text: "สำคัญตัวเองผิดไปแล้วมั้ง", translation: "是不是太把自己當回事了" },
            { time: 181.8, text: "บอกใครต่อใครว่าฉันจะพัง", translation: "到處跟人說我會崩潰" },
            { time: 183.4, text: "เป็นตัวเธอเองหรือเปล่า", translation: "那說的　其實是妳吧" },
            { time: 187.1, text: "เธอพูดเหมือนฉันต้องการเธอจัง", translation: "妳說得好像我非妳不可" },
            { time: 189.5, text: "สำคัญตัวเองผิดไปแล้วมั้ง", translation: "是不是太把自己當回事了" },
            { time: 192, text: "บอกใครต่อใครว่าฉันจะพัง", translation: "到處跟人說我會崩潰" },
            { time: 194, text: "เป็นตัวเธอเองหรือเปล่า", translation: "那說的　其實是妳吧" },
            { time: 197.2, text: "( 間奏 )", translation: "" },
            { time: 229.8, text: "Dum, deu, dum-dum, dum, dum-dum, um-um-um", translation: "" },
            { time: 236.4, text: "Um-um, um-um-um", translation: "" },
            { time: 240, text: "Dum, deu, dum-dum, dum, dum-dum, um-um-um", translation: "" },
            { time: 247, text: "Um-um, um-um-um", translation: "" },

        ]
    },
    {
        name: "I'll Do It How You Like It",
        artist: " Kao Supassara, Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/e4/6b/98/e46b98aa8e817decb56f5ec7e82f0289.jpg",
        src: "s9.mp3",
        video: "yCizek9nmTE",
        lyrics: [
            { time: 0, text: "( 前奏 ) ", translation: " " },
            { time: 10.1, text: "เธอไม่ต้องพูดอะไร", translation: "妳不必多說什麼 " },
            { time: 13.4, text: "แค่มองตาคู่นั้น ฉันรู้ เธอเองก็หวั่นไหว", translation: "僅是四目相投 我便知道妳動搖了 " },
            { time: 20, text: "เข้าใกล้อีกนิดนึงได้ไหม", translation: "能再靠近一點嗎 " },
            { time: 23.2, text: "ไม่อยากให้คืนนี้ เข้ามาเพื่อแค่ผ่านไป", translation: "不想讓今晚就這樣匆匆過去 " },
            { time: 29.8, text: "Baby โลกดั่งหยุดหมุน เหมือนมีเพียงแค่เราเท่านั้น", translation: "世界停止轉動 彷彿只剩下我們 " },
            { time: 36.5, text: "( Can we stay in our bubble girl? )", translation: " " },
            { time: 39.4, text: "I don't care พรุ่งนี้จะเป็นไง ช่างมัน มันไม่สำคัญ", translation: "我不在乎明天會怎樣 那並不重要 " },
            { time: 49.5, text: "ขอฉันได้ฝันอีกนิด ได้หรือเปล่า", translation: "能不能讓我再多做一會兒夢 " },
            { time: 55.1, text: "ถ้าเธอไม่รีบร้อน ช่วยอยู่ก่อนได้ไหม", translation: "若妳不著急離開 能留下來嗎" },
            { time: 59.8, text: "ขอแค่เราได้มองตา และจับมือของฉันไว้", translation: "看著我的雙眼 緊握我的雙手 " },
            { time: 66.1, text: "I'll do it how you like it", translation: " " },
            { time: 70.8, text: "Can you stay with me a little longer?", translation: " " },
            { time: 73.4, text: "Stay with me a little longer", translation: " " },
            { time: 75.9, text: "ต่อเวลาของเรา five more minutes", translation: "只需要五分鐘的時間 " },
            { time: 80.5, text: "Baby โลกดั่งหยุดหมุน เหมือนมีเพียงแค่เราเท่านั้น", translation: "世界停止轉動 彷彿只剩下我們 " },
            { time: 87.8, text: "( Can we stay in our bubble girl? )", translation: " " },
            { time: 90.5, text: "I don't care พรุ่งนี้จะเป็นไง ช่างมัน มันไม่สำคัญ", translation: "我不在乎明天會怎樣 那並不重要 " },
            { time: 100.8, text: "ขอฉันได้ฝันอีกนิด ได้หรือเปล่า", translation: "能不能讓我再多做一會兒夢 " },
            { time: 106.4, text: "ถ้าเธอไม่รีบร้อน ช่วยอยู่ก่อนได้ไหม", translation: "若妳不著急離開 能留下來嗎" },
            { time: 111, text: "ขอแค่เราได้มองตา และจับมือของฉันไว้", translation: "看著我的雙眼 緊握我的雙手 " },
            { time: 117.1, text: "I'll do it how you like it", translation: " " },
            { time: 122, text: "( 間奏 ) ", translation: " " },
            { time: 141.5, text: "ขอฉันได้ฝันอีกนิด ได้หรือเปล่า", translation: "能不能讓我再多做一會兒夢 " },
            { time: 147.3, text: "ถ้าเธอไม่รีบร้อน ช่วยอยู่ก่อนได้ไหม", translation: "若妳不著急離開 能留下來嗎" },
            { time: 151.5, text: "ขอแค่เราได้มองตา และจับมือของฉันไว้", translation: "看著我的雙眼 緊握我的雙手 " },
            { time: 158.3, text: "I'll do it how you like it", translation: " " },
            { time: 162.2, text: "ขอฉันได้ฝันอีกนิด ได้หรือเปล่า", translation: "能不能讓我再多做一會兒夢 " },
            { time: 167.8, text: "ถ้าเธอไม่รีบร้อน ช่วยอยู่ก่อนได้ไหม", translation: "若妳不著急離開 能留下來嗎" },
            { time: 172, text: "ขอแค่เราได้มองตา และจับมือของฉันไว้", translation: "看著我的雙眼 緊握我的雙手 " },
            { time: 178.5, text: "I'll do it how you like it", translation: " " },

        ]
    },
    {
        name: "有妳在",
        artist: "Kao Supassara",
        img: "https://i.pinimg.com/736x/5f/eb/f9/5febf946bdb2add0fc4a01182a4512ac.jpg",
        src: "s10.mp3",
        video: "moEJJtx375I",
        lyrics: [
            { time: 0, text: "Baby you are my light", translation: " " },
            { time: 4, text: "妳點亮我的愛", translation: " " },
            { time: 8.5, text: "forever shine", translation: " " },
            { time: 10.4, text: "命中註定的安排", translation: " " },
            { time: 13.2, text: "我明白", translation: " " },
            { time: 16.8, text: "第一次見面妳的開場白", translation: " " },
            { time: 20.8, text: "沒有彩排 但卻意外可愛", translation: " " },
            { time: 23.9, text: "晚風吹過來 霧氣散開", translation: " " },
            { time: 27.9, text: "眼神在交換", translation: " " },
            { time: 31.7, text: "我世界按部就班的狀態", translation: " " },
            { time: 35.1, text: "遇見妳的瞬間 明亮起來", translation: " " },
            { time: 38.8, text: "烏雲都散開 沒什麼陰霾", translation: " " },
            { time: 42.7, text: "有妳在", translation: " " },
            { time: 44.2, text: "Baby you are my light", translation: " " },
            { time: 47.9, text: "妳點亮我的愛", translation: " " },
            { time: 52.3, text: "forever shine", translation: " " },
            { time: 54.5, text: "命中註定的安排", translation: " " },
            { time: 57.1, text: "我明白", translation: " " },
            { time: 58.9, text: "流星劃過窗臺", translation: " " },
            { time: 62.7, text: "抹上極光的色彩", translation: " " },
            { time: 67.2, text: "妳的存在 把我的夜空填滿", translation: " " },
            { time: 71.9, text: "多絢爛 煙花在盛開", translation: " " },
            { time: 79.4, text: "銀河裡星星彼此在呢喃", translation: " " },
            { time: 82.9, text: "只要妳和我輕輕抬頭看", translation: " " },
            { time: 87.1, text: "就能把愛 全部裝進宇宙的口袋", translation: " " },
            { time: 94, text: "晚風吹走我的遲疑躲閃", translation: " " },
            { time: 97.7, text: "月光灑下只想對妳依賴", translation: " " },
            { time: 100.8, text: "夜色很浪漫 時間變很慢", translation: " " },
            { time: 104.9, text: "有妳在", translation: " " },
            { time: 106.6, text: "Baby you are my light", translation: " " },
            { time: 110, text: "妳點亮我的愛", translation: " " },
            { time: 115, text: "forever shine", translation: " " },
            { time: 116.8, text: "命中註定的安排", translation: " " },
            { time: 119.5, text: "我明白", translation: " " },
            { time: 121.5, text: "流星劃過窗臺", translation: " " },
            { time: 125, text: "抹上極光的色彩", translation: " " },
            { time: 129.2, text: "妳的存在 把我的夜空填滿", translation: " " },
            { time: 134.2, text: "多絢爛 煙花在盛開", translation: " " },
            { time: 144.2, text: "不再孤單 朝著約定的彼岸", translation: " " },
            { time: 148.8, text: "我明白 愛早已到來", translation: " " }


        ]
    },
    {
        name: "理想情人",
        artist: "Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/ab/70/64/ab7064fab9c6c4c94f24fc5b99ac945b.jpg",
        src: "s11.mp3",
        video: "VCio1RYu7u0",
        lyrics: [
            { time: 0, text: "( 前奏 ) ", translation: " " },
            { time: 12.3, text: "穿上洋裝 看著手錶", translation: " " },
            { time: 16.1, text: "時間快到 心碰碰的跳", translation: " " },
            { time: 19.8, text: "和你的第一次約會來臨了", translation: " " },
            { time: 26.9, text: "金色的陽光灑滿人行道", translation: " " },
            { time: 30.5, text: "換了新脣膏把頭髮弄好", translation: " " },
            { time: 33.2, text: "要你看到 我的好", translation: " " },
            { time: 41.2, text: "喜歡看你走路充滿自信", translation: " " },
            { time: 45, text: "說話時候你的專注眼神", translation: " " },
            { time: 48.5, text: "溫柔的表情笑容裡的天真", translation: " " },
            { time: 53.1, text: "我相信", translation: " " },
            { time: 55.9, text: "找不到有比你更好的人", translation: " " },
            { time: 59.1, text: "你心裡理想情人是幾分", translation: " " },
            { time: 62, text: "是否也會 有我的份", translation: " " },
            { time: 72.9, text: "好想知道你的100分 會給怎樣的人", translation: " " },
            { time: 80, text: "親愛的你不要再陌生 增加我戲份", translation: " " },
            { time: 86.2, text: "我想問 親愛的你把感情升等 朋友變成情人", translation: " " },
            { time: 94.5, text: "可不可以 告訴我標準 不要讓我一直等", translation: " " },
            { time: 106.3, text: "( 間奏 ) ", translation: " " },
            { time: 117.6, text: "喜歡看你走路充滿自信", translation: " " },
            { time: 121.1, text: "說話時候你的專注眼神", translation: " " },
            { time: 125, text: "溫柔的表情笑容裡的天真", translation: " " },
            { time: 129.4, text: "我相信", translation: " " },
            { time: 132.2, text: "找不到有比你更好的人", translation: " " },
            { time: 135.8, text: "你心裡理想情人是幾分", translation: " " },
            { time: 138.8, text: "是否也會 有我的份", translation: " " },
            { time: 146.5, text: "好想知道你的100分 會給怎樣的人", translation: " " },
            { time: 153.7, text: "親愛的你不要再陌生 增加我戲份", translation: " " },
            { time: 160, text: "我想問 親愛的你把感情升等 朋友變成情人", translation: " " },
            { time: 168.3, text: "可不可以 告訴我標準 不要讓我一直等", translation: " " },
            { time: 175.5, text: "聽著那時間滴答的走 對街的你在點頭", translation: " " },
            { time: 185, text: "好像一個夢 漸漸 走到我前頭", translation: " " },
            { time: 190.8, text: "好想知道你的100分 會給怎樣的人", translation: " " },
            { time: 198.2, text: "親愛的你不要再陌生 增加我戲份", translation: " " },
            { time: 204.5, text: "我想問 親愛的你把感情升等 朋友變成情人", translation: " " },
            { time: 212.7, text: "可不可以 告訴我標準 不要讓我一直等", translation: " " }


        ]
    },
    {
        name: "愛妳但說不出口",
        artist: "Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/58/00/84/580084459ec9f52b9504eebce1bb81f9.jpg",
        src: "s12.mp3",
        video: "Q3xtNfYymFE",
        lyrics: [
            { time: 0, text: "( 前奏 ) ", translation: " " },
            { time: 16, text: "寶貝 今晚的我有點醉", translation: " " },
            { time: 22.1, text: "別理會妳聽的 那些謊話", translation: " " },
            { time: 26, text: "我沒辦法", translation: " " },
            { time: 28.1, text: "把真相都證明給妳啊", translation: " " },
            { time: 31.2, text: "So 我的寶貝", translation: " " },
            { time: 34.1, text: "妳別看我渣也會累", translation: " " },
            { time: 38.3, text: "脆弱的心被妳一擊就碎", translation: " " },
            { time: 41.8, text: "So what you say？", translation: " " },
            { time: 44.4, text: "能不能再給個機會？", translation: " " },
            { time: 48.5, text: "誰能把妳的心 撫慰", translation: " " },
            { time: 50.8, text: "就算天黑 我也不怕會疲憊", translation: " " },
            { time: 56.7, text: "犯過的罪 沒人能體會", translation: " " },
            { time: 59.8, text: "是我不對 剩自己在流淚", translation: " " },
            { time: 64.3, text: "我想念妳", translation: " " },
            { time: 65.8, text: "我恨自己錯過", translation: " " },
            { time: 69.2, text: "愛妳 但說不出口", translation: " " },
            { time: 72.5, text: "妳說太累所以是誰惹的禍", translation: " " },
            { time: 75.9, text: "是我", translation: " " },
            { time: 77.3, text: "愛妳 但說不出口", translation: " " },
            { time: 80.7, text: "( 間奏 )", translation: " " },
            { time: 88.8, text: "妳說太累所以是誰惹的禍", translation: " " },
            { time: 91.8, text: "是我", translation: " " },
            { time: 93.5, text: "愛妳 但說不出口", translation: " " },
            { time: 96, text: "寶貝 今晚的我有點累", translation: " " },
            { time: 102.2, text: "不知道該跟妳說些什麼", translation: " " },
            { time: 105.8, text: "寫了這首歌 送給妳一個交代", translation: " " },
            { time: 112.2, text: "誰能把妳的心 撫慰", translation: " " },
            { time: 114.9, text: "就算天黑 我也不怕會疲憊", translation: " " },
            { time: 120.8, text: "犯過的罪 沒人能體會", translation: " " },
            { time: 123.8, text: "是我不對 剩自己在流淚", translation: " " },
            { time: 128.3, text: "我想念妳", translation: " " },
            { time: 129.8, text: "我恨自己錯過", translation: " " },
            { time: 133.2, text: "愛妳 但說不出口", translation: " " },
            { time: 136.7, text: "妳說太累所以是誰惹的禍", translation: " " },
            { time: 139.7, text: "是我", translation: " " },
            { time: 141.5, text: "愛妳 但說不出口", translation: " " },
            { time: 146.5, text: "( 耍帥中... )", translation: " " },
            { time: 178.5, text: "我想念妳", translation: " " },
            { time: 179.8, text: "我恨自己錯過", translation: " " },
            { time: 183.5, text: "愛妳 但說不出口", translation: " " },
            { time: 186.7, text: "妳說太累所以是誰惹的禍", translation: " " },
            { time: 189.7, text: "是我", translation: " " },
            { time: 191.4, text: "愛妳 但說不出口", translation: " " },
        ]
    },
    {
        name: "有點甜",
        artist: "Kao Supassara, Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/cc/68/64/cc6864633acb15fba06431f6eca0debc.jpg",
        src: "s13.mp3",
        video: "rrN3U6nocnk",
        lyrics: [
            { time: 0, text: "摘一顆蘋果", translation: " " },
            { time: 2.4, text: "等妳從門前經過", translation: " " },
            { time: 5.2, text: "送到妳的手中幫你解渴", translation: " " },
            { time: 8.7, text: "像夏天的可樂", translation: " " },
            { time: 11.2, text: "像冬天的可可", translation: " " },
            { time: 14, text: "妳是對的時間對的角色", translation: " " },
            { time: 18.5, text: "已經約定過", translation: " " },
            { time: 20.5, text: "一起過下個周末", translation: " " },
            { time: 23.2, text: "妳的小小情緒對我來說", translation: " " },
            { time: 27, text: "我也不知為何", translation: " " },
            { time: 29.7, text: "傷口還没癒合", translation: " " },
            { time: 32.5, text: "妳就這樣闖進我的心窩", translation: " " },
            { time: 36.8, text: "是妳讓我看見乾枯沙漠開出花一朵", translation: " " },
            { time: 41.4, text: "是妳讓我想要每天為你寫一首情歌", translation: " " },
            { time: 46, text: "用最浪漫的副歌", translation: " " },
            { time: 48.3, text: "妳也輕輕的附和", translation: " " },
            { time: 50.7, text: "眼神堅定著我們的選擇", translation: " " },
            { time: 55.1, text: "是妳讓我的世界從那刻變成粉紅色", translation: " " },
            { time: 59.4, text: "是妳讓我的生活從此都只要妳配合", translation: " " },
            { time: 64.2, text: "愛要精心來雕刻", translation: " " },
            { time: 66.4, text: "我是米開朗基羅", translation: " " },
            { time: 69, text: "用心刻畫最幸福的風格", translation: " " },
            { time: 74, text: "用時間 去思念 愛情有點甜", translation: " " },
            { time: 82.9, text: "這心願 不會變 愛情有點甜", translation: " " },
            { time: 91.7, text: "已經約定過", translation: " " },
            { time: 93.6, text: "一起過下個周末", translation: " " },
            { time: 96.5, text: "妳的小小情緒對我來說", translation: " " },
            { time: 100.4, text: "我也不知為何", translation: " " },
            { time: 102.8,text: "傷口還没癒合", translation: " " },
            { time: 105.6, text: "妳就這樣闖進我的心窩", translation: " " },
            { time: 109.8, text: "是妳讓我看見乾枯沙漠開出花一朵", translation: " " },
            { time: 114.4, text: "是妳讓我想要每天為你寫一首情歌", translation: " " },
            { time: 119.1, text: "用最浪漫的副歌", translation: " " },
            { time: 121.4, text: "妳也輕輕的附和", translation: " " },
            { time: 123.8, text: "眼神堅定著我們的選擇", translation: " " },
            { time: 128.2, text: "是妳讓我的世界從那刻變成粉紅色", translation: " " },
            { time: 132.6, text: "是妳讓我的生活從此都只要妳配合", translation: " " },
            { time: 137.4, text: "愛要精心來雕刻", translation: " " },
            { time: 139.6, text: "我是米開朗基羅", translation: " " },
            { time: 142.1, text: "用心刻畫最幸福的風格", translation: " " },
            { time: 146.4, text: "是妳讓我看見乾枯沙漠開出花一朵", translation: " " },
            { time: 151, text: "是妳讓我想要每天為你寫一首情歌", translation: " " },
            { time: 155.7, text: "用最浪漫的副歌", translation: " " },
            { time: 158, text: "妳也輕輕的附和", translation: " " },
            { time: 160.4, text: "眼神堅定著我們的選擇", translation: " " },
            { time: 164.7, text: "是妳讓我的世界從那刻變成粉紅色", translation: " " },
            { time: 169.3, text: "是妳讓我的生活從此都只要妳配合", translation: " " },
            { time: 174, text: "愛要精心來雕刻", translation: " " },
            { time: 176.3, text: "我是米開朗基羅", translation: " " },
            { time: 178.6, text: "用心刻畫最幸福的風格", translation: " " },
            { time: 183.1, text: "用心刻畫最幸福的風格", translation: " " }

        ]
    },
    {
        name: "Your Love",
        artist: "Kao Supassara, Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/5e/79/61/5e79613adfe20845cdfd56901315d925.jpg",
        src: "s14.mp3",
        video: "SrkjXH1s_9M",
        lyrics: [
            { time: 0, text: "( 前奏 )", translation: " " },
            { time: 17, text: "You're the one that never lets me sleep", translation: "妳就是那個讓我輾轉難眠的人 " },
            { time: 22.3, text: "To my mind down to my soul you touch my lips", translation: "從我的思緒到靈魂深處 妳觸碰著我的雙唇 " },
            { time: 29, text: "You're the one that I can't wait to see", translation: "妳就是那個讓我迫不及待想見的人 " },
            { time: 34, text: "With you here by my side I'm in ecstasy", translation: "只要妳在我身邊 我便沉浸在狂喜之中 " },
            { time: 41, text: "I am all alone without you", translation: "沒有妳 我倍感孤獨" },
            { time: 46.8, text: "My days are dark without a glimpse of you", translation: "若不見妳的身影 我的日子便一片漆黑 " },
            { time: 52, text: "But now that you came into my life I feel complete", translation: "但自從妳走進我的生命 我感到人生完整 " },
            { time: 57.8, text: "The flowers bloom, my morning shines and I can see", translation: "花兒綻放 晨光閃耀 我終於能看清世界 " },
            { time: 70, text: "Your love is like the sun that lights up my whole world", translation: "妳的愛像太陽 照亮了我的整個世界 " },
            { time: 76.3, text: "I feel the warmth inside", translation: "我感受到內心的溫暖 " },
            { time: 81.9, text: "Your love is like a river that flows down through my veins", translation: "妳的愛像河流 在我的血管裡流淌 " },
            { time: 88.5, text: "I feel the chill inside", translation: "我感受到內心的悸動 " },
            { time: 106, text: "I am all alone without you", translation: "沒有妳 我倍感孤獨" },
            { time: 112, text: "My days are dark without a glimpse of you", translation: "若不見妳的身影 我的日子便一片漆黑 " },
            { time: 117, text: "But now that you came into my life I feel complete", translation: "但自從妳走進我的生命 我感到人生完整 " },
            { time: 123, text: "The flowers bloom, my morning shines and I can see", translation: "花兒綻放 晨光閃耀 我終於能看清世界 " },
            { time: 132, text: "Your love is like the sun that lights up my whole world", translation: "妳的愛像太陽 照亮了我的整個世界 " },
            { time: 138.8, text: "I feel the warmth inside", translation: "我感受到內心的溫暖 " },
            { time: 144, text: "Your love is like a river that flows down through my veins", translation: "妳的愛像河流 在我的血管裡流淌 " },
            { time: 150.5, text: "I feel the chill inside", translation: "我感受到內心的悸動 " },
            { time: 155.7, text: "(your love...)", translation: " " },
            { time: 167.2, text: "Your love is like a river that flows down through my veins", translation: "妳的愛像河流 在我的血管裡流淌 " },
            { time: 179, text: " ", translation: "" },
            { time: 180, text: " ", translation: "" },
            { time: 181, text: " ", translation: "" },
            { time: 182, text: " ", translation: "" },
            { time: 183, text: " ", translation: "" }          
        ]
    },
    {
        name: "So Easy",
        artist: "Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/e2/b2/e0/e2b2e0e3178f8d2d881eaa5163d4ddfc.jpg",
        src: "s15.mp3",
        video: "Av_At5PSnFA",
        lyrics: [
            { time: 0, text: " ( 前奏 ) ", translation: "" },
            { time: 7.3, text: "I could be the twist, the one to make you stop", translation: "我可以成為那個讓妳人生轉彎 為我停下腳步的人 " },
            { time: 10.4, text: "The icing on your cake, the cherry on the top", translation: "像是錦上添花的那一筆 蛋糕上最完美的那顆櫻桃 " },
            { time: 13.7, text: "It's heaven in my heart, and we could find you some space", translation: "我心裡藏著一片天堂　也願意留給妳一點空間 " },
            { time: 20.9, text: "I could be the world to you, the missing piece", translation: "我可以成為妳的全世界 妳生命中缺少的那一塊 " },
            { time: 24, text: "That extra sentimental kind of chemistry", translation: "那種多一點感性 多一點心動的化學反應 " },
            { time: 27.6, text: "Some people make it hard, with me, that isn't the case", translation: "有些人讓愛變得困難　但跟我在一起一點都不困難 " },
            { time: 32, text: "'Cause I make it so easy to fall in love", translation: "因為愛上我其實很簡單 " },
            { time: 38.7, text: "So come give me a call, and we'll fall into us", translation: "打電話給我吧　我和妳可以慢慢變成「我們」 " },
            { time: 45.5, text: "I'm the perfect mix of Saturday night and the rest of your life", translation: "我是那種既可以讓妳在週六夜晚心動　也能陪妳走過一輩子的人 " },
            { time: 51, text: "Anyone with a heart would agree", translation: "只要是有心的人都會同意 " },
            { time: 54.8, text: "It's so easy,To fall in love with", translation: "愛上 一點都不困難" },
            { time: 60.1, text: "The way I do my hair, the way I make you laugh", translation: "我整理頭髮的樣子 我逗妳笑的方式 " },
            { time: 63.5, text: "The way we like to share a walk in Central Park", translation: "我們喜歡在中央公園一起散步的那種日常 " },
            { time: 67.3, text: "I could be fresh air, might be the girl of your dreams", translation: "我可以是讓妳感到自在的那個人　也可能是妳的夢中情人 " },
            { time: 73.4, text: "There's no need to hide if you're into me", translation: "如果妳喜歡我　真的不用假裝 " },
            { time: 76.9, text: "'Cause I'm into you quite intimately", translation: "因為我對妳　也不只是朋友那種喜歡 " },
            { time: 80.2, text: "And maybe one night could turn into three", translation: "也許一個夜晚　會悄悄變成三個 " },
            { time: 83.5, text: "Well, I'm down to see", translation: "我願意看看　我們會走到哪裡 " },
            { time: 85.4, text: "'Cause I make it so easy to fall in love", translation: "因為愛上我其實很簡單 " },
            { time: 92, text: "So come give me a call, and we'll fall into us", translation: "打電話給我吧　我和妳可以慢慢變成「我們」 " },
            { time: 98.6, text: "I'm the perfect mix of Saturday night and the rest of your life", translation: "我是那種既可以讓妳在週六夜晚心動　也能陪妳走過一輩子的人 " },
            { time: 104.2, text: "Anyone with a heart would agree", translation: "只要是有心的人都會同意 " },
            { time: 107.9, text: "It's so easy,To fall in love with me", translation: "愛上我 一點都不困難" },
            { time: 126.8, text: "It's so easy", translation: "其實很簡單" },
            { time: 130.3, text: "It's so easy", translation: "其實很簡單" },
            { time: 133.6, text: "It's so easy", translation: "其實很簡單" },
            { time: 138.4, text: "'Cause I make it so easy to fall in love", translation: "因為愛上我其實很簡單 " },
            { time: 145, text: "So come give me a call, and we'll fall into us", translation: "打電話給我吧　我和妳可以慢慢變成「我們」 " },
            { time: 151.9, text: "I'm the perfect mix of Saturday night and the rest of your life", translation: "我是那種既可以讓妳在週六夜晚心動　也能陪妳走過一輩子的人 " },
            { time: 157.3, text: "Anyone with a heart would agree", translation: "只要是有心的人都會同意 " },
            { time: 161, text: "It's so easy,To fall in love with me", translation: "愛上我 一點都不困難" }
        ]
    },
    {
        name: "昨夜風今宵月",
        artist: "Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/b9/65/3b/b9653b8829fdd9080d70a18396db53d0.jpg",
        src: "s16.mp3",
        video: "Oo_SnRnTjLk",
        lyrics: [
            { time: 0, text: " ( 前奏 ) ", translation: "" },
            { time: 22.9, text: "我不愛 無聊人間", translation: "" },
            { time: 28, text: "只偏愛 妳眉眼", translation: "" },
            { time: 33.4, text: "如果妳 也有時間", translation: "" },
            { time: 38.8, text: "陪我把這 風景看遍", translation: "" },
            { time: 47.2, text: "想要牽住妳的左手 卻紅了臉", translation: "" },
            { time: 52.5, text: "想要摟緊妳的左肩 卻又膽怯", translation: "" },
            { time: 56.7, text: "陪妳走到飛花的街 如何能把故事續寫", translation: "" },
            { time: 63.2, text: "原諒我太笨 風情不解", translation: "" },
            { time: 68.2, text: "我不愛 無聊人間", translation: "" },
            { time: 73.5, text: "只偏愛 妳眉眼", translation: "" },
            { time: 78.9, text: "如果妳 也有時間", translation: "" },
            { time: 84.25, text: "陪我把這 風景看遍", translation: "" },
            { time: 88.55, text: "為妳寫", translation: "" },
            { time: 89.5, text: "幾頁詩篇 幾行誓言", translation: "" },
            { time: 92.15, text: "幾個長夜 幾次想念", translation: "" },
            { time: 95.25, text: "妳的轉身 讓我又失眠", translation: "" },
            { time: 99.25, text: "為妳寫", translation: "" },
            { time: 100.25, text: "昨夜的風 今宵的月", translation: "" },
            { time: 102.8, text: "前世的戀 今生的籤", translation: "" },
            { time: 105.95, text: "和妳白頭 的那一場雪", translation: "" },
            { time: 111, text: " ( 間奏 ) ", translation: "" },
            { time: 132.45, text: "我不愛 無聊人間", translation: "" },
            { time: 137.5, text: "只偏愛 妳眉眼", translation: "" },
            { time: 142.9, text: "如果妳 也有時間", translation: "" },
            { time: 148.2, text: "陪我把這 風景看遍", translation: "" },
            { time: 152.6, text: "為妳寫", translation: "" },
            { time: 153.5, text: "幾頁詩篇 幾行誓言", translation: "" },
            { time: 156.25, text: "幾個長夜 幾次想念", translation: "" },
            { time: 159.25, text: "妳的轉身 讓我又失眠", translation: "" },
            { time: 163.3, text: "為妳寫", translation: "" },
            { time: 164.25, text: "昨夜的風 今宵的月", translation: "" },
            { time: 166.85, text: "前世的戀 今生的籤", translation: "" },
            { time: 169.7, text: "和妳白頭 的那一場雪", translation: "" },
            { time: 176, text: "", translation: "" },
            { time: 177, text: "", translation: "" },
            { time: 178, text: "", translation: "" },
            { time: 179, text: "", translation: "" },
            { time: 180, text: "", translation: "" },
        ]
    },
    {
        name: "戀人未滿",
        artist: "Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/e1/21/b3/e121b38ddde89ad769c1d7f8ee778879.jpg",
        src: "s17.mp3",
        video: "EmfivQb4J7U",
        lyrics: [
            { time: 0, text: "再靠近一點點", translation: "" },
            { time: 3.1, text: "再靠近一點點 就讓妳牽手", translation: "" },
            { time: 7.25, text: "再勇敢一點點 我就跟妳走", translation: "" },
            { time: 11.05, text: "妳還等什麼 時間已經不多", translation: "" },
            { time: 15, text: "再下去 只好只做朋友", translation: "" },
            { time: 19.8, text: "為什麼只和妳能聊一整夜", translation: "" },
            { time: 23.75, text: "為什麼才道別就又想見面", translation: "" },
            { time: 27.6, text: "在朋友裡面 就屬妳最特別", translation: "" },
            { time: 31.5, text: "總讓我覺得很親很貼", translation: "" },
            { time: 36.25, text: "為什麼妳在意誰陪我逛街", translation: "" },
            { time: 40.3, text: "為什麼妳擔心誰對我放電", translation: "" },
            { time: 44.2, text: "妳說妳對我 比別人多一些", translation: "" },
            { time: 48.25, text: "卻又不說是多哪一些", translation: "" },
            { time: 52.75, text: "友達以上 戀人未滿", translation: "" },
            { time: 56.5, text: "甜蜜心煩 愉悅混亂", translation: "" },
            { time: 61, text: "我們以後 會變怎樣", translation: "" },
            { time: 65.25, text: "我迫不及待想知道答案", translation: "" },
            { time: 69.25, text: "再靠近一點點 就讓妳牽手", translation: "" },
            { time: 73.27, text: "再勇敢一點點 我就跟妳走", translation: "" },
            { time: 77.45, text: "妳還等什麼 時間已經不多", translation: "" },
            { time: 81.25, text: "再下去 只好只做朋友", translation: "" },
            { time: 85.75, text: "再向前一點點 我就會點頭", translation: "" },
            { time: 90, text: "再衝動一點點 我就不閃躲", translation: "" },
            { time: 93.75, text: "不過三個字 別猶豫這麼久", translation: "" },
            { time: 97.75, text: "只要妳說出口 妳就能擁有我", translation: "" },
            { time: 110.75, text: "為什麼妳寂寞只想要我陪", translation: "" },
            { time: 114.75, text: "為什麼我難過只肯讓妳安慰", translation: "" },
            { time: 118.75, text: "我們心裡面 明明都有感覺", translation: "" },
            { time: 122.8, text: "為什麼不敢面對", translation: "" },
            { time: 127.26, text: "友達以上 戀人未滿", translation: "" },
            { time: 131.1, text: "甜蜜心煩 愉悅混亂", translation: "" },
            { time: 135.5, text: "我們以後 會變怎樣", translation: "" },
            { time: 139.60, text: "我迫不及待想知道答案", translation: "" },
            { time: 144, text: "再靠近一點點 就讓妳牽手", translation: "" },
            { time: 148, text: "再勇敢一點點 我就跟妳走", translation: "" },
            { time: 151.75, text: "妳還等什麼 時間已經不多", translation: "" },
            { time: 155.55, text: "再下去 只好只做朋友", translation: "" },
            { time: 160.35, text: "再向前一點點 我就會點頭", translation: "" },
            { time: 164.45, text: "再衝動一點點 我就不閃躲", translation: "" },
            { time: 168.3, text: "不過三個字 別猶豫這麼久", translation: "" },
            { time: 172.25, text: "只要妳說出口 妳就能擁有我", translation: "" },
            { time: 180.25, text: "我不相信 都動了感情卻到不了 愛情", translation: "" },
            { time: 187.5, text: "那麼貼心卻進不了 心底", translation: "" },
            { time: 191.6, text: "妳能不能快一點決定", translation: "" },
            { time: 196.5, text: "對我說我愛妳", translation: "" },
            { time: 201.9, text: "再靠近一點點 就讓妳牽手", translation: "" },
            { time: 205.75, text: "再勇敢一點點 我就跟妳走", translation: "" },
            { time: 209.75, text: "妳還等什麼 時間已經不多", translation: "" },
            { time: 213.5, text: "再下去 只好只做朋友", translation: "" },
            { time: 218.25, text: "再向前一點點 我就會點頭", translation: "" },
            { time: 222.45, text: "再衝動一點點 我就不閃躲", translation: "" },
            { time: 226.30, text: "不過三個字 別猶豫這麼久", translation: "" },
            { time: 230.20, text: "只要妳說出口 妳就能擁有我", translation: "" },
            { time: 238.45, text: "只要妳說出口 妳就能擁有我", translation: "" },
        ]
    },
    {
        name: "像晴天像雨天",
        artist: "Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/2d/a6/b5/2da6b508e3b2080e471a2443cc3558e9.jpg",
        src: "s18.mp3",
        video: "iDs1ElSfM60",
        lyrics: [
            { time: 7, text: "措手不及", translation: "" },
            { time: 9.5, text: "遇見妳 我開始變得不太聰明", translation: "" },
            { time: 13.25, text: "心跳加速 有時候呼吸也暫停", translation: "" },
            { time: 17.25, text: "身體 無法控制向妳靠近", translation: "" },
            { time: 22, text: "步步為營", translation: "" },
            { time: 24.55, text: "人物關係走向不可控的劇情", translation: "" },
            { time: 28.25, text: "窗外飛過的宣告戀愛的蜻蜓", translation: "" },
            { time: 32.25, text: "想妳 我的心事變得透明", translation: "" },
            { time: 38.8, text: "一意孤行 汲汲營營 寸步難行", translation: "" },
            { time: 46.25, text: "慢慢累積 拼湊不完整的旋律", translation: "" },
            { time: 51.8, text: "我一貫的小心翼翼", translation: "" },
            { time: 55.6, text: "現在卻想要告訴妳", translation: "" },
            { time: 61.25, text: "好喜歡妳 像春天的花朵盛開在夏夜裡", translation: "" },
            { time: 67.6, text: "像微風吹過雨後泥土的香氣", translation: "" },
            { time: 71.4, text: "像迷途的旅人到達了目的地", translation: "" },
            { time: 75.25, text: "像飛舞蝴蝶被絢爛色彩吸引", translation: "" },
            { time: 79, text: "像流傳許久神秘的愛情咒語", translation: "" },
            { time: 82.6, text: "像喧囂的午後突然變的安靜", translation: "" },
            { time: 86.4, text: "像眼淚落入海底 逃離了孤寂", translation: "" },
            { time: 90, text: "如果我能給妳短暫的開心", translation: "" }
           
        ]
    },
    {
        name: "只是太愛妳",
        artist: "Janeeyeh Methika",
        img: "https://i.pinimg.com/736x/42/11/a0/4211a09995e8d1dc387fc926ceb4bdc5.jpg",
        src: "s19.mp3",
        video: "bWkWBZFUnHE",
        lyrics: [
            { time: 0, text: "( 前奏 )", translation: "" },
            { time: 12, text: "原諒我真的喝醉了", translation: "" },
            { time: 15.70, text: "因為我真的想妳了", translation: "" },
            { time: 19.4, text: "一不小心就被寂寞", translation: "" },
            { time: 22.4, text: "吞噬了愛着妳的快樂", translation: "" },
            { time: 26.75, text: "我知道這樣不應該", translation: "" },
            { time: 30.4, text: "也知道妳會受傷害", translation: "" },
            { time: 34.1, text: "只是不想再讓自己", translation: "" },
            { time: 37.25, text: "對妳太過依賴", translation: "" },
            { time: 41.1, text: "我明白妳給的愛是真實地存在", translation: "" },
            { time: 48.45, text: "只是我不懂得如何去愛", translation: "" },
            { time: 53.75, text: "才會讓妳想離開", translation: "" },
            { time: 62, text: "因為我不知道", translation: "" },
            { time: 64.5, text: "下一輩子還是否能遇見妳", translation: "" },
            { time: 69.15, text: "所以我今生才會", translation: "" },
            { time: 72.45, text: "那麼努力把最好的給妳", translation: "" },
            { time: 77.5, text: "愛妳都變成傷害妳", translation: "" },
            { time: 81.25, text: "我們的愛快要窒息", translation: "" },
            { time: 85.15, text: "不是故意 只是太愛妳", translation: "" },
            { time: 91, text: "( 間奏 )", translation: "" },
            { time: 104.25, text: "原諒我真的喝醉了", translation: "" },
            { time: 108, text: "因為我真的想妳了", translation: "" },
            { time: 111.75, text: "一不小心就被寂寞", translation: "" },
            { time: 114.75, text: "吞噬了愛着妳的快樂", translation: "" },
            { time: 119.2, text: "我知道這樣不應該", translation: "" },
            { time: 122.75, text: "也知道妳會受傷害", translation: "" },
            { time: 126.5, text: "只是不想再讓自己", translation: "" },
            { time: 129.5, text: "對妳太過依賴", translation: "" }, 
            { time: 133.45, text: "我明白妳給的愛是真實地存在", translation: "" },
            { time: 140.75, text: "只是我不懂得如何去愛", translation: "" },
            { time: 146, text: "才會讓妳想離開", translation: "" },
            { time: 154.25, text: "因為我不知道", translation: "" },
            { time: 156.6, text: "下一輩子還是否能遇見妳", translation: "" },
            { time: 161.45, text: "所以我今生才會", translation: "" },
            { time: 164.75, text: "那麼努力把最好的給妳", translation: "" },
            { time: 169.8, text: "愛妳都變成傷害妳", translation: "" },
            { time: 173.5, text: "我們的愛快要窒息", translation: "" },
            { time: 177.5, text: "不是故意 只是太愛妳", translation: "" },
            { time: 183.75, text: "因為我不知道", translation: "" },
            { time: 186.45, text: "下一輩子還是否能遇見妳", translation: "" },
            { time: 191, text: "所以我今生才會", translation: "" },
            { time: 194.25, text: "那麼努力把最好的給妳", translation: "" },
            { time: 199.35, text: "愛妳都變成傷害妳", translation: "" },
            { time: 203, text: "我們的愛快要窒息", translation: "" },
            { time: 207, text: "不是故意 只是太愛妳", translation: "" },
            { time: 217.75, text: "", translation: "" },
            { time: 218.75, text: "", translation: "" },
            { time: 219.75, text: "", translation: "" },
            { time: 220.75, text: "", translation: "" },
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
    repeatBtn = mainContainer.querySelector("#repeat-plist"),
    showListBtn = mainContainer.querySelector("#show-list"),
    closeListBtn = mainContainer.querySelector("#close-list"),
    musicList = mainContainer.querySelector(".music-list"),
    ulTag = musicList.querySelector("ul"),
    progressBar = mainContainer.querySelector(".progress-bar"),
    progressArea = mainContainer.querySelector(".progress-area"),
    musicCurrentTime = mainContainer.querySelector(".current"),
    musicDuration = mainContainer.querySelector(".duration"),
    volumeSlider = mainContainer.querySelector("#volume-slider"),
    lyricsWrapper = document.getElementById("lyrics-wrapper"),
    loadingOverlay = document.getElementById("loading-overlay");
    ACCESS_PASSWORD = "0619";

let musicIndex = 0;
let mainAudio = new Audio();
let isPlaying = false;
let isRepeat = false;
let currentLyricIndex = -1;
let ytPlayer;

function checkPassword() {
    const input = document.getElementById("password-input").value;
    const screen = document.getElementById("password-screen");
    const errorMsg = document.getElementById("password-error");

    if (input === ACCESS_PASSWORD) {
        screen.style.transition = "opacity 0.6s ease";
        screen.style.opacity = "0";
        setTimeout(() => {
            screen.style.display = "none";
        }, 600);
        sessionStorage.setItem("kj_space_verified", "true");
    } else {
        errorMsg.style.display = "block";
        document.getElementById("password-input").value = "";
    }
}

window.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("kj_verified") === "true") {
        document.getElementById("password-screen").style.display = "none";
    }
});

document.getElementById("password-input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") checkPassword();
});

function restoreMusicOrder() {
    try {
        const savedOrder = localStorage.getItem("musicPlaylistOrder");
        if (savedOrder) {
            const orderArray = JSON.parse(savedOrder);
            allMusic.sort((a, b) => {
                let indexA = orderArray.indexOf(a.name);
                let indexB = orderArray.indexOf(b.name);
                if (indexA === -1) indexA = 999;
                if (indexB === -1) indexB = 999;
                return indexA - indexB;
            });
        }
    } catch (e) {
        console.error("讀取播放清單順序失敗:", e);
    }
}

function saveMusicOrder() {
    const orderArray = allMusic.map(music => music.name);
    localStorage.setItem("musicPlaylistOrder", JSON.stringify(orderArray));
}

function initList() {
    restoreMusicOrder();
    ulTag.innerHTML = "";
    allMusic.forEach((music, index) => {
        let liTag = `<li li-index="${index}">
                        <i class="fas fa-bars drag-handle"></i> 
                        <div class="row">
                            <span>${music.name}</span>
                            <p>${music.artist}</p>
                        </div>
                    </li>`;
        ulTag.insertAdjacentHTML("beforeend", liTag);
    });

    const allLiTags = ulTag.querySelectorAll("li");
    allLiTags.forEach(li => {
        li.addEventListener("click", (e) => {
            if (e.target.classList.contains('drag-handle')) return;
            musicIndex = parseInt(li.getAttribute("li-index"));
            loadMusic(musicIndex);
            playSong();
        });
    });

    if (typeof Sortable !== 'undefined') {
        new Sortable(ulTag, {
            handle: '.drag-handle',
            animation: 150,
            delay: 150,
            delayOnTouchOnly: true,
            touchStartThreshold: 5,
            onEnd: function (evt) {
                const currentPlayingName = allMusic[musicIndex].name;
                const movedItem = allMusic.splice(evt.oldIndex, 1)[0];
                allMusic.splice(evt.newIndex, 0, movedItem);
                const liTags = ulTag.querySelectorAll("li");
                liTags.forEach((li, index) => li.setAttribute("li-index", index));
                musicIndex = allMusic.findIndex(music => music.name === currentPlayingName);
                playingNow();
                saveMusicOrder();
            },
        });
    }
}

function playingNow() {
    const allLiTags = ulTag.querySelectorAll("li");
    allLiTags.forEach(li => {
        if (parseInt(li.getAttribute("li-index")) === musicIndex) {
            li.classList.add("playing");
        } else {
            li.classList.remove("playing");
        }
    });
}

function loadMusic(index) {
    loadingOverlay.style.display = "flex";
    musicImg.style.opacity = "0.3"; 
    
    const music = allMusic[index];
    musicName.innerText = music.name;
    musicArtist.innerText = music.artist;
    musicImg.src = music.img;
    
    mainAudio.src = music.src;
    mainAudio.load();

    mainAudio.oncanplaythrough = () => {
        loadingOverlay.style.display = "none";
        musicImg.style.opacity = "1";
    };

    mainAudio.onwaiting = () => {
        loadingOverlay.style.display = "flex";
    };

    if (ytPlayer && ytPlayer.loadVideoById) {
        ytPlayer.loadVideoById({ videoId: music.video, playlist: music.video });
    }
    
    currentLyricIndex = -1;
    displayLyrics(music.lyrics);
    playingNow();
    updateMediaSession();
}

function playSong() {
    isPlaying = true;
    playPauseIcon.classList.replace("fa-play", "fa-pause");
    mainAudio.play().then(syncPlaybackState).catch(() => {
        console.log("Waiting for user interaction");
    });
}

function pauseSong() {
    isPlaying = false;
    playPauseIcon.classList.replace("fa-pause", "fa-play");
    mainAudio.pause();
    syncPlaybackState();
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

function updateMediaSession() {
    if ('mediaSession' in navigator) {
        const music = allMusic[musicIndex];
        navigator.mediaSession.metadata = new MediaMetadata({
            title: music.name,
            artist: music.artist,
            artwork: [{ src: music.img, sizes: '512x512', type: 'image/jpeg' }]
        });

        navigator.mediaSession.setActionHandler('play', playSong);
        navigator.mediaSession.setActionHandler('pause', pauseSong);
        navigator.mediaSession.setActionHandler('previoustrack', prevMusic);
        navigator.mediaSession.setActionHandler('nexttrack', nextMusic);
        
        navigator.mediaSession.setActionHandler('seekto', (details) => {
            mainAudio.currentTime = details.seekTime;
        });
    }
}

function syncPlaybackState() {
    if ('mediaSession' in navigator) {
        navigator.mediaSession.playbackState = isPlaying ? "playing" : "paused";
        if (!isNaN(mainAudio.duration)) {
            navigator.mediaSession.setPositionState({
                duration: mainAudio.duration,
                playbackRate: mainAudio.playbackRate,
                position: mainAudio.currentTime
            });
        }
    }
}

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
        if (Math.floor(currentTime) % 2 === 0) syncPlaybackState();
    }
});

progressArea.addEventListener("click", (e) => {
    mainAudio.currentTime = (e.offsetX / progressArea.clientWidth) * mainAudio.duration;
    playSong();
});

playPauseBtn.addEventListener("click", () => isPlaying ? pauseSong() : playSong());
nextBtn.addEventListener("click", nextMusic);
prevBtn.addEventListener("click", prevMusic);

repeatBtn.addEventListener("click", () => {
    isRepeat = !isRepeat;
    repeatBtn.classList.toggle("active");
});

showListBtn.addEventListener("click", () => musicList.classList.toggle("show"));
closeListBtn.addEventListener("click", () => musicList.classList.remove("show"));

mainAudio.addEventListener("ended", () => isRepeat ? (mainAudio.currentTime = 0, playSong()) : nextMusic());

volumeSlider.addEventListener("input", (e) => {
    const vol = e.target.value;
    mainAudio.volume = vol;
    if (ytPlayer && ytPlayer.setVolume) ytPlayer.setVolume(vol * 100);
});

window.addEventListener("keydown", (e) => {
    const keysToBlock = ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    if (keysToBlock.includes(e.code)) e.preventDefault();

    switch (e.code) {
        case "Space": 
            isPlaying ? pauseSong() : playSong();
            break;
        case "ArrowLeft": 
            mainAudio.currentTime = Math.max(0, mainAudio.currentTime - 5);
            break;
        case "ArrowRight": 
            mainAudio.currentTime = Math.min(mainAudio.duration, mainAudio.currentTime + 5);
            break;
        case "ArrowUp": 
            volumeSlider.value = Math.min(1, parseFloat(volumeSlider.value) + 0.05);
            volumeSlider.dispatchEvent(new Event('input'));
            break;
        case "ArrowDown": 
            volumeSlider.value = Math.max(0, parseFloat(volumeSlider.value) - 0.05);
            volumeSlider.dispatchEvent(new Event('input'));
            break;
        case "Digit1": 
        case "Numpad1":
            repeatBtn.click();
            break;
    }
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
        lines.forEach((line, index) => {
            if (index === activeIndex) {
                line.classList.add("active");
                const offset = 170 - line.offsetTop;
                lyricsWrapper.style.transform = `translateY(${offset}px)`;
            } else {
                line.classList.remove("active");
            }
        });
    }
}

window.addEventListener("load", () => {
    initList();
    loadMusic(musicIndex);
    mainAudio.volume = volumeSlider.value;
});

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('player', {
        videoId: allMusic[musicIndex].video,
        playerVars: { 
            'autoplay': 1, 
            'mute': 1, 
            'controls': 0, 
            'playsinline': 1,
            'rel': 0,
            'showinfo': 0,
            'modestbranding': 1,
            'iv_load_policy': 3 
        },
        events: {
            'onReady': (e) => e.target.playVideo(),
            'onStateChange': onPlayerStateChange 
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        const duration = ytPlayer.getDuration();
        const checkLoop = setInterval(() => {
            if (ytPlayer.getPlayerState() !== YT.PlayerState.PLAYING) {
                clearInterval(checkLoop);
                return;
            }
            const currentTime = ytPlayer.getCurrentTime();
            if (currentTime > duration - 0.2) {
                ytPlayer.seekTo(0);
                ytPlayer.playVideo();
            }
        }, 100);
    }
    
    if (event.data === YT.PlayerState.ENDED) {
        ytPlayer.seekTo(0); 
        ytPlayer.playVideo();
    }
}