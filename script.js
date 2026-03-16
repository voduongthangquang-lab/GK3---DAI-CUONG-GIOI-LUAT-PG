const quizData = [
    {
        question: "Câu 1: Định nghĩa “phòng phi chỉ ác” được dùng để chỉ ý nghĩa của khái niệm nào sau đây?",
        options: [
            "a. Học xứ",
            "b. Giới luật",
            "c. Sìla"
        ],
        correctAnswer: 1,
        explanation: "“Phòng phi chỉ ác” nghĩa là: Phòng → ngăn ngừa, Phi → điều sai trái, Chỉ → dừng lại, Ác → điều xấu. Tức là: ngăn ngừa điều sai và dừng các điều ác. Đây chính là ý nghĩa của “Giới” (Sīla) trong Phật giáo."
    },
    {
        question: "Câu 2: Theo Kinh Hoa Nghiêm, giới được ví như là gì?",
        options: [
            "a. Con đường tu tập",
            "b. Gốc vô thượng Bồ đề",
            "c. Pháp điều chỉnh thân tâm"
        ],
        correctAnswer: 1,
        explanation: "Trong Kinh Hoa Nghiêm có câu nổi tiếng: “Giới thị vô thượng Bồ-đề bổn.” Nghĩa là Giới là gốc của Vô thượng Bồ-đề."
    },
    {
        question: "Câu 3: Trong Kinh A Hàm, “Tư niệm là giới” được nhắc đến trong kinh nào?",
        options: [
            "a. Kinh Giới",
            "b. Kinh Chủng Đức",
            "c. Kinh Ngũ chi vật chủ"
        ],
        correctAnswer: 1,
        explanation: "Trong Kinh A-hàm, nội dung nói: Tư niệm là giới, Luật nghi / Oai nghi là giới, Tâm sở là giới được đề cập trong Kinh Chủng Đức."
    },
    {
        question: "Câu 4: Theo Tạp A hàm, “Tăng thượng giới học” được mô tả như thế nào?",
        options: [
            "a. Chuyên niệm không quên tu hành tam vô lậu học.",
            "b. Giới phát sanh từ tâm.",
            "c. An trụ giới, luật nghi Ba - la - đề - mộc – xoa, đầy đủ oai nghi, thấy tội nhỏ nhặt sanh lòng sợ hãi."
        ],
        correctAnswer: 2,
        explanation: "Trong Tạp A-hàm, khi nói về tăng thượng giới học, kinh mô tả người tu: an trụ giới luật, giữ Ba-la-đề-mộc-xoa luật nghi, đầy đủ oai nghi, đối với tội nhỏ nhặt cũng sinh tâm sợ hãi."
    },
    {
        question: "Câu 6: Hai loại giới theo ý nghĩa là gì?",
        options: [
            "a. Giới tại gia và giới xuất gia",
            "b. Hữu lậu giới và vô lậu giới",
            "c. Chỉ ác giới và Tác thiện giới (Chỉ trì giới và Tác trì giới)"
        ],
        correctAnswer: 2,
        explanation: "Phân loại giới theo ý nghĩa có 2 loại: Chỉ trì giới (ngăn không làm điều ác) và Tác trì giới (siêng làm điều thiện)."
    },
    {
        question: "Câu 7: Trước khi có các quy định về giới, Tăng đoàn được nhiếp bằng phương pháp nào?",
        options: [
            "a. Bát chánh đạo",
            "b. Lục hòa",
            "c. Y pháp nhiếp Tăng"
        ],
        correctAnswer: 2,
        explanation: "12 năm đầu sau khi thành đạo, Tăng đoàn chưa có giới điều cụ thể. Các đệ tử nghe pháp rồi tự sống đúng theo chánh pháp, gọi là “Y pháp nhiếp Tăng”."
    },
    {
        question: "Câu 8: Đức Phật bắt đầu chế giới sau bao nhiêu năm thành đạo?",
        options: [
            "a. 5 năm",
            "b. 10 năm",
            "c. 12 năm"
        ],
        correctAnswer: 2,
        explanation: "12 năm đầu Tăng đoàn chưa có giới điều. Khi bắt đầu có những trường hợp vi phạm, Đức Phật mới tùy phạm mà chế giới."
    },
    {
        question: "Câu 9: Theo các vị Phật Tỳ Bà Thi, Thi Khí và Tỳ Xá Phù, phạm hạnh không cửu trụ là do thiếu yếu tố nào?",
        options: [
            "a. Không có đệ tử",
            "b. Không quảng thuyết khế kinh, không kết giới và không thuyết giới",
            "c. Không tu tập thiền định"
        ],
        correctAnswer: 1,
        explanation: "Ba vị Phật này phạm hạnh không cửu trụ vì không quảng thuyết khế kinh, không kết giới và không thuyết Ba-la-đề-mộc-xoa."
    },
    {
        question: "Câu 10: Trong ba nghĩa của “Giới luật”, nghĩa thứ nhất liên quan đến",
        options: [
            "A. Học xứ – những điều cần học tập",
            "B. Giới điều – quy định hành vi của người tu",
            "C. Sìla – hành vi, tập quán, tính cách, đạo đức",
            "D. Sự tu tập và thiền định"
        ],
        correctAnswer: 2,
        explanation: "Ba nghĩa của giới luật: 1. Sīla (hành vi, đạo đức); 2. Học xứ (những điều cần học và thực hành); 3. Giới điều."
    },
    {
        question: "Câu 11: Theo Phạn Anh từ điển của M. Monier–Williams “giới” có nghĩa:",
        options: [
            "A. Conduct, dicposition, nature",
            "B. Morality, custom, a moral precept",
            "C. Conduct, hebit, usage",
            "D. Cả A, B, C"
        ],
        correctAnswer: 3,
        explanation: "Trong từ điển của Monier–Williams, Śīla được giải thích với nhiều nghĩa như: hành vi, tính cách, bản tính, đạo đức, thói quen, giới điều."
    },
    {
        question: "Câu 12: “Giới” ngôn ngữ Pali là:",
        options: [
            "A. Śīla",
            "B. Sīlā",
            "C. Śila",
            "D. Sīla"
        ],
        correctAnswer: 3,
        explanation: "Trong Phật học: ngôn ngữ Pāli là Sīla, Sanskrit là Śīla."
    },
    {
        question: "Câu 13: “Học xứ” trong giới luật có nghĩa:",
        options: [
            "A. Những điều, đối tượng cần phải học tập",
            "B. Nơi học tập",
            "C. Các điều đã được quy định thành văn trong luật",
            "D. A và C"
        ],
        correctAnswer: 0,
        explanation: "Học xứ (Śikṣāpada) nghĩa là những điều cần học và thực hành trong đời sống tu tập."
    },
    {
        question: "Câu 14: “Giới” mang nghĩa:",
        options: [
            "A. Quy định những điều bất thiện trong phạm vi tôn giáo",
            "B. Quy định đức xấu nơi đạo đức thế gian",
            "C. Phòng phi chỉ ác",
            "D. Quy chuẩn kinh doanh, pháp luật, kể cả việc điều dưỡng sức khỏe"
        ],
        correctAnswer: 2,
        explanation: "Trong Phật giáo, giới (Sīla) được định nghĩa là phòng phi chỉ ác, nghĩa là phòng ngừa điều sai trái và ngăn dừng các điều ác."
    },
    {
        question: "Câu 15: “Tư niệm là giới\" nghĩa này trong kinh:",
        options: [
            "A. Kinh Tạp A Hàm",
            "B. Kinh Trường A Hàm",
            "C. Kinh Tăng nhất A Hàm",
            "D. Kinh Trung A Hàm"
        ],
        correctAnswer: 3,
        explanation: "Ba nghĩa của giới (Tư niệm, Luật nghi/Oai nghi, Tâm sở) được nói trong Kinh Trung A-hàm (Kinh Chủng Đức)."
    },
    {
        question: "Câu 16: Nội dung “Tâm sở cũng là giới” trong kinh nào:",
        options: [
            "A. Tạp A-hàm",
            "B. Trung A-hàm",
            "C. Trường A-hàm",
            "D. Tăng nhất A-hàm"
        ],
        correctAnswer: 1,
        explanation: "Tâm sở cũng là giới được đề cập trong Kinh Trung A-hàm."
    },
    {
        question: "Câu 17: Chọn câu phù hợp nhất:",
        options: [
            "A. Giới và luật dùng song song, tùy văn cảnh mà hiểu cho đúng.",
            "B. Khái niệm giới và luật hoàn toàn đồng nhất.",
            "C. Giới và luật dùng song song.",
            "D. Từ 'giới luật' xuất hiện trong Phật giáo thời kỳ đầu."
        ],
        correctAnswer: 0,
        explanation: "Giới thiên về đạo đức cá nhân, Luật thiên về kỷ cương Tăng đoàn. Hai từ thường dùng song song nhưng không đồng nhất."
    },
    {
        question: "Câu 18: Cụ túc giới là chỉ:",
        options: [
            "A. Tỳ Kheo, tỳ kheo ni giới",
            "B. 5 giới, 10 giới, Bồ tát giới",
            "C. Tinh thần của giới luật",
            "D. Cả A, B, C"
        ],
        correctAnswer: 0,
        explanation: "Cụ túc giới (Upasampadā) là giới đầy đủ của người xuất gia (Tỳ-kheo có 250 giới, Tỳ-kheo-ni có 348 giới)."
    },
    {
        question: "Câu 19: Thế nào là tăng thượng giới học?",
        options: [
            "A. Tỷ-kheo an trụ giới, luật nghi... thấy tội nhỏ nhặt chưa sanh lòng sợ hãi.",
            "B. Giữ gìn giới luật nghiêm túc từng phần... giúp hành giả luôn hưởng thượng.",
            "C. Tỷ-kheo an trụ Giới Ba-la-đề-mộc-xoa, đầy đủ oai nghi hành xử, thấy tội vị tế (nhỏ nhặt) sanh lòng sợ hãi, thọ trì học giới."
        ],
        correctAnswer: 2,
        explanation: "Người tu phải an trụ luật nghi Ba-la-đề-mộc-xoa, đầy đủ oai nghi, và đối với những lỗi nhỏ nhặt cũng sinh lòng sợ hãi cẩn trọng."
    },
    {
        question: "Câu 20: 5 giới, bát quan trai giới thuộc:",
        options: [
            "A. Giải thoát luật nghi",
            "B. Tịnh lự luật nghi",
            "C. Vô lậu giới",
            "D. Xuất gia giới"
        ],
        correctAnswer: 0,
        explanation: "Giải thoát luật nghi là những giới giữ để hướng đến giải thoát, bao gồm: 5 giới, Bát quan trai, và giới của Tỳ-kheo/Tỳ-kheo-ni."
    },
    {
        question: "Câu 21: Chọn câu CHƯA phù hợp:",
        options: [
            "A. Nếu Tỳ-kheo nào phạm giới thì làm tổn hại gìn giữ các căn.",
            "B. Nếu Tỳ-kheo giữ giới thì không có sự hối hận, hân hoan, hý...",
            "C. Nếu đã giải thoát thì liền đắc Niết-bàn.",
            "D. Giữ giới thì hối hận, hân hoan, hỷ, tĩnh chỉ, lạc, định..."
        ],
        correctAnswer: 3,
        explanation: "Câu D sai vì giữ giới thanh tịnh thì phải là 'KHÔNG hối hận' chứ không phải sinh ra hối hận."
    },
    {
        question: "Câu 22: Chọn câu phù hợp nhất:",
        options: [
            "A. Giới có nghĩa là chỉ ác (chỉ hành giới/luật nghi giới); hành thiện (tác trì giới/tác thiện giới).",
            "B. Giới có nghĩa là chỉ ác (chỉ trì giới/luật nghi giới); hành thiện (tác giới/tác thiện giới).",
            "C. Giới có nghĩa là chỉ ác (chỉ trì giới/luật nghi giới); hành thiện (tác trì giới/tác thiện giới)."
        ],
        correctAnswer: 2,
        explanation: "Theo hành trì có hai ý nghĩa: Chỉ trì giới (ngăn ác) và Tác trì giới (siêng làm thiện)."
    },
    {
        question: "Câu 23: Chọn câu mang nghĩa đúng nhất:",
        options: [
            "A. Bồ tát giới là đại thừa giới, hàng thanh văn không được thọ.",
            "B. Thông giới là thông tam giới.",
            "C. Thông giữa nam truyền và đại thừa.",
            "D. Bắc truyền Phật giáo có Bồ tát giới là thông giới."
        ],
        correctAnswer: 3,
        explanation: "Bồ-tát giới được xem là 'thông giới' vì cả hàng xuất gia và tại gia đều có thể thọ trì."
    },
    {
        question: "Câu 24: Trong hàng đệ tử xuất gia của Đức Phật có người sanh hữu lậu pháp khi:",
        options: [
            "A. Phật chế giới",
            "B. Người căn tánh thấp xuất gia",
            "C. Số người xuất gia đông",
            "D. Hàng đệ tử xuất gia thiên về lợi dưỡng."
        ],
        correctAnswer: 3,
        explanation: "Khi một số người xuất gia vì danh lợi, lợi dưỡng, từ đó phát sinh hữu lậu pháp, buộc Đức Phật phải bắt đầu chế giới."
    },
    {
        question: "Câu 25: Chọn câu mang nghĩa đúng nhất:",
        options: [
            "A. Những tỳ kheo căn tính thông lợi khó tự điều phục, sanh hữu lậu pháp.",
            "B. Từ thực hành giới đến giữ giới đã quy định thành từng điểm cụ thể là ưu điểm lớn nhất.",
            "C. Đức Phật cụ thể hóa giới học bằng các học xứ (giới điều), để hàng căn tánh thấp dễ học và hành trì.",
            "D. Tất cả đều sai."
        ],
        correctAnswer: 2,
        explanation: "Giới điều ra đời vì khi Tăng đoàn đông, người căn cơ thấp khó tự điều phục, cần quy định cụ thể để dễ học, dễ hành."
    },
    {
        question: "Câu 26: Bố Tát (posadha) bắt nguồn từ:",
        options: [
            "A. Đức Phật định ra",
            "B. Văn hóa Ấn Độ cổ",
            "C. Nghi lễ tôn giáo cổ Ấn Độ",
            "D. Veda của Ấn Độ"
        ],
        correctAnswer: 3,
        explanation: "Bố Tát (Uposatha) có nguồn gốc từ nghi lễ Vệ-đà (Veda), sau đó Đức Phật chuyển hóa thành nghi thức tụng giới thanh tịnh của Tăng đoàn."
    },
    {
        question: "Câu 27: Ba đời chư Phật phạm hạnh không cửu trụ là:",
        options: [
            "A. Tỳ Bà Thi Phật, Thi Khí Phật, Tỳ Xá Phù Phật.",
            "B. Tỳ Bà Thi Phật, Câu Lưu Tôn Phật, Ca Diếp Phật.",
            "C. Tỳ Xá Phù Phật, Thi Khí Phật, Ca Diếp Phật."
        ],
        correctAnswer: 0,
        explanation: "Vì 3 vị Phật này không kết giới và không thuyết giới (Ba-la-đề-mộc-xoa) nên sau khi Phật diệt độ, phạm hạnh không tồn tại lâu dài."
    },
    {
        question: "Câu 28: Kệ bố tát Đức Phật Thích Ca thuyết là:",
        options: [
            "A. Cũng như người mắt sáng, tránh khỏi lối hiểm nghèo...",
            "B. Hết thảy ác chớ làm, hãy vắng hành các thiện...",
            "C. Khéo phòng hộ lời nói, tâm chí tự lắng trong, thân không làm các ác...",
            "D. Chớ làm các điều ác, vâng làm các điều lành..."
        ],
        correctAnswer: 2,
        explanation: "Bài kệ: 'Khéo phòng hộ lời nói, tâm chí tự lắng trong, thân không làm các ác, thực hành được như thế...' là bài kệ Bố Tát đặc thù của Phật Thích Ca."
    },
    {
        question: "Câu 29: Nguyên lý chế định giới luật là:",
        options: [
            "A. Duyên sanh pháp",
            "B. Duyên khởi",
            "C. Duyên khởi pháp",
            "D. 12 nhân duyên"
        ],
        correctAnswer: 2,
        explanation: "Giới luật được chế định dựa trên Duyên khởi pháp (có nhân duyên vi phạm xảy ra thì mới chế định điều giới)."
    },
    {
        question: "Câu 30: Chọn câu KHÔNG đúng:",
        options: [
            "A. Ba đời chư Phật quảng thuyết kinh pháp, vì đệ tử chế định giới luật...",
            "B. Ba đời chư Phật quảng thuyết kinh pháp, đệ tử chế định giới luật...",
            "C. Ba đời chư Phật quảng thuyết kinh pháp, vì đệ tử chế định giới luật, thuyết ba la đề mộc xoa..."
        ],
        correctAnswer: 1,
        explanation: "Câu B sai vì chủ thể chế giới phải là Đức Phật, đệ tử không có quyền chế định giới luật."
    },
    {
        question: "Câu 31: Chọn câu đúng:",
        options: [
            "A. Tùy phạm mà chế vì tránh ngoại đạo cười chê, đệ tử sanh lòng bất mãn.",
            "B. Tùy phạm mà chế vì tránh ngoại đạo cười chê, đệ tử sanh lòng bị mẫn.",
            "C. Tùy phạm mà chế vì tránh ngoại đạo cười chê, đệ tử không muốn."
        ],
        correctAnswer: 0,
        explanation: "Đức Phật không chế giới trước, mà khi có lỗi mới chế giới, nhằm tránh ngoại đạo cười chê và tránh đệ tử sinh tâm bất mãn."
    },
    {
        question: "Câu 32: Tùy phạm tùy chế là vì:",
        options: [
            "A. Nhân duyên chưa đủ",
            "B. Thời cơ chưa đến",
            "C. Vì đệ tử phòng hộ các căn",
            "D. Chế giới phải hợp cơ, hợp nhân, hợp thời, hợp xứ."
        ],
        correctAnswer: 3,
        explanation: "Đức Phật chế giới không tùy tiện mà phải đầy đủ các yếu tố: hợp cơ (căn cơ), hợp nhân (nhân duyên), hợp thời (thời điểm) và hợp xứ (hoàn cảnh)."
    },
    {
        question: "Câu 33: Những điều lợi ích nào phần nhiều vì người ngoài đạo:",
        options: [
            "A. Điều phục người nhiều phiền não, người tàm quý được an lạc",
            "B. Đoạn hiện lậu hoặc, diệt hậu lậu hoặc.",
            "C. Khiến người chưa tin sanh tín tâm, người đã tin càng thâm tín.",
            "D. Khiến người chưa tin sanh thâm tín, người đã tin sang thâm tín."
        ],
        correctAnswer: 2,
        explanation: "Lợi ích hướng đến ngoại đạo là: Khiến người chưa tin thì sinh lòng tin, người đã tin thì lòng tin thêm tăng trưởng."
    },
    {
        question: "Câu 34: 10 loại lợi ích trong các bộ kinh luật dùng từ ngữ là:",
        options: [
            "A. Tăng kỳ luật: 10 việc lợi ích; Tứ phần luật: mười phúc lợi; Tạp a hàm: mười cú nghĩa...",
            "B. Tăng kỳ luật: 10 việc lợi ích, Tứ phần luật: mười có nghĩa, Tạp a hàm: mười phúc lợi...",
            "C. Tăng kỳ luật: 10 việc lợi ích; Tứ phần luật: mười cú nghĩa; Tạp a hàm: mười phúc lợi; Tăng nhất a hàm: mười việc công đức."
        ],
        correctAnswer: 2,
        explanation: "Tăng Kỳ gọi 10 việc lợi ích, Tứ phần gọi 10 cú nghĩa, Tạp A hàm gọi 10 phúc lợi, Tăng nhất A hàm gọi 10 việc công đức."
    },
    {
        question: "Câu 35: 10 lợi ích nếu phân theo đối tượng thì thành mấy nội dung:",
        options: [
            "A. 2",
            "B. 3",
            "C. 4",
            "D. 5"
        ],
        correctAnswer: 2,
        explanation: "Được chia thành 4 nhóm đối tượng: Vì Tăng đoàn, Vì người tu (cá nhân), Vì người ngoài đạo, Vì sự trường tồn của Chánh pháp."
    },
    {
        question: "Câu 36: Ba bộ kinh luật chỉ có 9 điều lợi ích là:",
        options: [
            "A. Tạp, Ngũ Phần, Nam Truyền",
            "B. Tạp, Thập Tụng, Nam Truyền",
            "C. Tạp, Tăng Kỳ, Nam Truyền",
            "D. Tạp, Tứ Phần, Nam Truyền"
        ],
        correctAnswer: 2,
        explanation: "Các bộ luật ghi nhận 9 điều lợi ích (thay vì 10) là: Tạp A-hàm, Tăng Kỳ luật và Nam Truyền."
    },
    {
        question: "Câu 37: Các quả vị có thể chứng đắc khi giới luật thanh tịnh:",
        options: [
            "A. Từ Tu-đà-hoàn đến A-la-hán",
            "B. Tu-đà-hoàn, Tư-đà hàm, A-la-hán",
            "C. Sơ quả Tu-đà-hoàn, nhị quả Tư-đà hàm",
            "D. Tu-đà-hoàn, Tư-đà-hàm, A-na-hàm"
        ],
        correctAnswer: 0,
        explanation: "Nhờ giới sinh định, định phát tuệ, người tu có thể chứng cả 4 quả vị từ Sơ quả (Tu-đà-hoàn) đến Tứ quả (A-la-hán)."
    },
    {
        question: "Câu 38: “Mười” lợi ích là con số:",
        options: [
            "A. Chính xác",
            "B. Cố định",
            "C. Viên mãn",
            "D. Tượng trưng"
        ],
        correctAnswer: 3,
        explanation: "Trong kinh Phật, con số 10 không phải là số cố định tuyệt đối mà mang ý nghĩa tượng trưng cho sự đầy đủ, trọn vẹn."
    },
    {
        question: "Câu 39: Câu kinh trong kinh Lăng Nghiêm nói về giới luật:",
        options: [
            "A. Nhiếp tâm làm giới, nhân giới sinh định, nhân định phát tuệ.",
            "B. Giới thị nhất thiết thiện pháp chỉ thể tranh.",
            "C. Giới do nhân chi đầu thủ.",
            "D. Sa môn giới hành, như thủy như ngọc"
        ],
        correctAnswer: 0,
        explanation: "Đây là câu kinh nổi tiếng chỉ rõ con đường Giới – Định – Tuệ nền tảng của Phật giáo."
    },
    {
        question: "Câu 40: Đắc sơ quả tu-đà-hoàn, ngoài giới luật thanh tịnh cần:",
        options: [
            "A. Có ít định, ít tuệ, giới sự tồn tại",
            "B. Có ít định, ít tuệ, giới thường tùy thuận mà sanh",
            "C. Có ít định, ít tuệ, đoạn trừ thân kiến",
            "D. Có ít định, ít tuệ, đoạn trừ ba kết"
        ],
        correctAnswer: 3,
        explanation: "Sơ quả Tu-đà-hoàn đòi hỏi hành giả phải đoạn tận 3 kiết sử (ba kết): Thân kiến, Giới cấm thủ, và Nghi."
    },
    {
        question: "Câu 41: Bố tát trong Phật giáo có nghĩa là:",
        options: [
            "A. Giảng giới",
            "B. Thuyết giới",
            "C. Tăng thượng giới",
            "D. Học giới"
        ],
        correctAnswer: 1,
        explanation: "Bố tát chính là hoạt động tụng giới / thuyết giới và thanh tịnh hóa Tăng đoàn diễn ra mỗi nửa tháng."
    },
    {
        question: "Câu 42: Chọn câu đúng:",
        options: [
            "A. Không làm các điều ác, thiện hộ các căn.",
            "B. Không làm các điều ác, làm mọi điều thiện lành.",
            "C. Không làm các điều ác, làm điều thiện có thể.",
            "D. Không làm các điều ác, làm việc thiện lành."
        ],
        correctAnswer: 1,
        explanation: "Khớp với tinh thần bài kệ 'Chư ác mạc tác, chúng thiện phụng hành' (Không làm các điều ác, làm mọi điều thiện lành)."
    },
    {
        question: "Câu 43: Chánh pháp cửu trụ là:",
        options: [
            "A. lợi ích của cá nhân hành giả",
            "B. Lợi ích người ngoài đạo",
            "C. Lợi ích cao nhất của việc chế giới.",
            "D. Lợi ích của Tăng đoàn."
        ],
        correctAnswer: 2,
        explanation: "Chánh pháp cửu trụ (sự tồn tại lâu dài của Chánh pháp) là mục đích và lợi ích cao nhất của việc Đức Phật chế định giới luật."
    },
    {
        question: "Câu 44: “Ác” trong tinh thần giới luật được hiểu là những hành động, lời nói làm ô nhiễm điều gì?",
        options: [
            "a. Thân nghiệp",
            "b. Khẩu nghiệp",
            "c. Ba nghiệp (6 căn)"
        ],
        correctAnswer: 2,
        explanation: "Mục đích của giới là thanh tịnh cả ba nghiệp: Thân nghiệp, Khẩu nghiệp và Ý nghiệp."
    },
    {
        question: "Câu 45: Trong Kinh A Hàm, những nghĩa nào sau đây được đề cập đến như là giới?",
        options: [
            "a. Sìla, Học xứ, Giới luật",
            "b. Luật nghi, Oai nghi, Tâm sở",
            "c. Tư niệm, Luật nghi/Oai nghi, Tâm sở"
        ],
        correctAnswer: 2,
        explanation: "Kinh A-hàm giải thích giới qua 3 góc độ: Tư niệm là giới, Luật nghi/Oai nghi là giới, và Tâm sở là giới."
    },
    {
        question: "Câu 46: “Tịnh lư luật nghi” là loại giới phát sinh trong hoàn cảnh nào?",
        options: [
            "a. Trong đời sống hàng ngày của người tại gia",
            "b. Trong các nghi lễ xuất gia",
            "c. Trong lúc hành thiền"
        ],
        correctAnswer: 2,
        explanation: "Tịnh lự (Dhyāna) nghĩa là thiền định. Tịnh lự luật nghi là loại giới tự nhiên phát sinh khi tâm an định trong lúc hành thiền."
    },
    {
        question: "Câu 47: Mối quan hệ giữa tâm và giới có thể được hiểu như thế nào?",
        options: [
            "a. Giới hoàn toàn độc lập với tâm.",
            "b. Giới phát sinh từ tâm, và ở một góc độ nào đó, tâm có thể được xem là giới.",
            "c. Tâm là kết quả của việc giữ giới một cách nghiêm túc."
        ],
        correctAnswer: 1,
        explanation: "Giới không tách rời tâm. Hành vi thân khẩu đều từ tâm, do đó 'tâm sở cũng là giới'."
    },
    {
        question: "Câu 48: Tinh thần cốt lõi của giới luật trong Phật giáo được tóm tắt như thế nào?",
        options: [
            "a. Kiềm chế mọi ham muốn và dục vọng.",
            "b. Tuân thủ nghiêm ngặt các giới điều đã được Đức Phật chế định.",
            "c. Không làm các điều ác, siêng năng làm các việc lành, giữ cho ba nghiệp (thân, khẩu, ý) thanh tịnh."
        ],
        correctAnswer: 2,
        explanation: "Tóm gọn qua bài kệ: Chư ác mạc tác, chúng thiện phụng hành, tự tịnh kỳ ý."
    },
    {
        question: "Câu 49: Khi Tôn giả Xá Lợi Phất hỏi về phạm hạnh cửu trụ, Đức Phật có đồng ý ngay không?",
        options: [
            "A. Có, Đức Phật đồng ý ngay lập tức",
            "B. Không, Ngài nói \"Thế Tôn tự biết thời\"",
            "C. Không, Ngài từ chối hoàn toàn",
            "D. Có, nhưng chỉ áp dụng cho một số đệ tử"
        ],
        correctAnswer: 1,
        explanation: "Ngài trả lời 'Thế Tôn tự biết thời', nghĩa là khi nhân duyên chưa đủ, chưa có người vi phạm thì chưa chế giới."
    },
    {
        question: "Câu 50: Hệ thống giới điều trong Tăng đoàn có ưu điểm gì?",
        options: [
            "A. Giúp hành giả dễ học, dễ thực hành",
            "B. Làm tăng uy tín của Tăng đoàn",
            "C. Tạo ra sự công bằng giữa các Tỳ-kheo",
            "D. Giúp thu hút thêm nhiều người xuất gia"
        ],
        correctAnswer: 0,
        explanation: "Khi giới học được cụ thể hóa thành các học xứ (giới điều khoản) thì ưu điểm lớn nhất là rõ ràng, dễ học và dễ thực hành."
    },
    {
        question: "Câu 51: Giới luật giúp hành giả đạt được Ba môn vô lậu học gồm những gì?",
        options: [
            "A. Giới – Định – Tuệ",
            "B. Bố thí – Nhẫn nhục – Trí tuệ",
            "C. Thiền định – Tinh tấn – Chánh niệm",
            "D. Từ bi – Hỷ xả – Trí tuệ"
        ],
        correctAnswer: 0,
        explanation: "Tam vô lậu học căn bản của Phật giáo là lộ trình: Giới -> Định -> Tuệ."
    },
    {
        question: "Câu 52: Trong các thời kỳ của chư Phật quá khứ, nhóm nào có phạm hạnh cửu trụ?",
        options: [
            "a) Tỳ Bà Thi Phật, Thi Khí Phật, Tỳ Xá Phù Phật",
            "b) Câu Lưu Tôn Phật, Câu Na Hàm Mâu Ni Phật, Ca Diếp Phật",
            "c) Cả hai nhóm đều có phạm hạnh cửu trụ",
            "d) Không có vị Phật nào có phạm hạnh cửu trụ"
        ],
        correctAnswer: 1,
        explanation: "Nhóm Phật Câu Lưu Tôn, Câu Na Hàm và Ca Diếp có chế định giới luật, thuyết Ba-la-đề-mộc-xoa nên phạm hạnh được cửu trụ."
    },
    {
        question: "Câu 53: Một hạn chế của việc chế định giới luật là gì?",
        options: [
            "A. Hành giả dễ chấp vào hình thức giới điều mà dần dần bỏ qua tinh thần của giới",
            "B. Giới luật quá ít",
            "C. Giới luật không có tác dụng",
            "D. Hành giả không thể thực hành"
        ],
        correctAnswer: 0,
        explanation: "Khuyết điểm của việc cụ thể hóa giới điều là người tu dễ dính mắc vào hình thức bề ngoài mà đánh mất đi tinh thần thanh tịnh cốt lõi của giới."
    },
    {
        question: "Câu 54: Mục đích sau cùng của giới luật là gì?",
        options: [
            "A. Chánh pháp cửu trụ",
            "B. Kiểm soát đệ tử",
            "C. Giúp đệ tử có nhiều quyền lực",
            "D. Giúp đệ tử trở nên nổi tiếng"
        ],
        correctAnswer: 0,
        explanation: "Lợi ích cao nhất trong 10 lợi ích chế giới chính là làm cho Chánh pháp được tồn tại lâu dài ở thế gian."
    },
    {
        question: "Câu 55: Khi giới thanh tịnh, hành giả có thể đắc quả vị gì?",
        options: [
            "A. Chỉ đạt được thiền định",
            "B. Chỉ đạt được trí tuệ",
            "C. Đạt định và tuệ",
            "D. Không đắc được gì cả"
        ],
        correctAnswer: 2,
        explanation: "Giữ giới thanh tịnh sẽ sinh ra định, có định thì sẽ phát sinh trí tuệ (Tam vô lậu học)."
    },
    {
        question: "Câu 56: Đặc điểm của nguyên tắc “tùy phạm mà chế” trong việc chế định giới là:",
        options: [
            "A. Giới luật cố định và không thay đổi theo thời gian",
            "B. Giới luật thay đổi, linh hoạt theo hoàn cảnh, từng hạng người và địa phương",
            "C. Giới luật chỉ áp dụng cho tỳ kheo và tỳ kheo ni",
            "D. Giới luật chỉ là những quy định cứng nhắc, không có ngoại lệ"
        ],
        correctAnswer: 1,
        explanation: "Tùy phạm mà chế đảm bảo giới luật phải phù hợp với 4 yếu tố: hợp cơ, hợp nhân duyên, hợp thời và hợp xứ."
    },
    {
        question: "Câu 57: Nghĩa thứ hai “Học xứ” ám chỉ là",
        options: [
            "A. Những điều cần tu tập và rèn luyện",
            "B. Các quy định pháp lý cứng nhắc",
            "C. Phương pháp giữ gìn giới",
            "D. Đạo đức của gia đình"
        ],
        correctAnswer: 0,
        explanation: "Học xứ (Śikṣāpada) nghĩa là những điều cần học và thực hành rèn luyện trong đời sống tu tập."
    },
    {
        question: "Câu 58: Theo Kinh A Hàm, “Tư niệm” liên quan đến giới được hiểu là",
        options: [
            "A. Sự quên lãng tu tập",
            "B. Chuyên niệm không quên tu hành tam vô lậu học",
            "C. Học xứ về giới",
            "D. Giới của tăng ni"
        ],
        correctAnswer: 1,
        explanation: "Tư niệm là sự ghi nhớ chuyên tâm, không xao lãng việc tu hành Tam vô lậu học (Giới - Định - Tuệ)."
    },
    {
        question: "Câu 59: Phân loại theo hành trì, giới được chia thành",
        options: [
            "A. Giới cấm và giới cho phép",
            "B. Giới xuất gia và giới tại gia",
            "C. Giới trong nhà và ngoài xã hội",
            "D. Giới thanh tịnh và giới vi phạm (Giữ đúng / vi phạm / Chỉ trì và Tác trì)"
        ],
        correctAnswer: 3,
        explanation: "Khi nói về hành trì thực tiễn, giới chú trọng việc giữ giới đúng (Chỉ trì/Tác trì) hay là phạm giới."
    },
    {
        question: "Câu 60: Trong khái niệm “Hữu lậu giới”, có hai loại chính là",
        options: [
            "A. Giới dạy và giới tu",
            "B. Tịnh lư luật nghi và Giải thoát luật nghi",
            "C. Giới nội tâm và giới ngoại hình",
            "D. Giới truyền thống và giới hiện đại"
        ],
        correctAnswer: 1,
        explanation: "Hữu lậu giới (giới chưa đoạn tận mọi phiền não) bao gồm Giải thoát luật nghi (thọ giới để hướng giải thoát) và Tịnh lự luật nghi (giới sinh ra từ thiền định)."
    },
    {
        question: "Câu 61: Khuyết điểm của giới điều theo văn bản là",
        options: [
            "A. Không giúp người tu hành đạt được an lạc",
            "B. Chuyên về giới điều mà dần dần bỏ qua tinh thần của giới",
            "C. Quá linh hoạt theo từng hoàn cảnh",
            "D. Không có quy định cụ thể"
        ],
        correctAnswer: 1,
        explanation: "Dễ rơi vào hình thức, chú trọng giữ điều khoản bề ngoài mà quên đi mục tiêu thanh tịnh cốt lõi của giới."
    },
    {
        question: "Câu 62: Trước 12 năm đầu, việc chưa có các quy định về giới được gọi là:",
        options: [
            "A. Học xứ",
            "B. Y pháp nhiếp Tăng",
            "C. Luật nghi",
            "D. Giới tự thành"
        ],
        correctAnswer: 1,
        explanation: "12 năm đầu Tăng đoàn sống thanh tịnh bằng cách nghe pháp rồi tự điều phục thân tâm, gọi là Y pháp nhiếp Tăng."
    },
    {
        question: "Câu 63: Khuyết điểm của giới khi chế định dần dần là:",
        options: [
            "A. Không chú ý đến tinh thần của giới",
            "B. Quá phức tạp trong việc thực hành",
            "C. Không phù hợp với từng hạng người",
            "D. Quá nhẹ nhàng, không răn đe"
        ],
        correctAnswer: 0,
        explanation: "Tương tự như câu 53/61, khuyết điểm là hành giả dễ mắc vào giới điều cụ thể mà lơ là tinh thần giải thoát chung."
    },
    {
        question: "Câu 64: Nguyên lý “liên quan đến tinh thần nhiều hơn” trong giới luật dựa trên:",
        options: [
            "A. Luật trừng phạt",
            "B. Lý duyên khởi",
            "C. Quy định ngoại đạo",
            "D. Học xứ của pháp"
        ],
        correctAnswer: 1,
        explanation: "Giới không phải luật trừng phạt cứng nhắc, mà dựa trên lý duyên khởi (có nhân có duyên thì sinh quả)."
    },
    {
        question: "Câu 65: “Duyên sanh pháp” được hiểu là:",
        options: [
            "A. Quy tắc cố định không thay đổi",
            "B. Mối quan hệ nhân quả tương ưng",
            "C. Sự phân biệt giữa thiện và ác",
            "D. Học xứ chỉ dành cho tăng ni"
        ],
        correctAnswer: 1,
        explanation: "Duyên sanh pháp chỉ ra rằng mọi sự vật hiện tượng đều sinh khởi dựa trên mối quan hệ nhân-duyên-quả."
    },
    {
        question: "Câu 66: “Thập nhị nhân duyên” là minh chứng cho:",
        options: [
            "A. Sự phát sinh của các quy định giới",
            "B. Quy luật nhân quả trong mọi hiện tượng",
            "C. Cách thức hành trì giới tại gia",
            "D. Phương pháp thiền định của Đức Phật"
        ],
        correctAnswer: 1,
        explanation: "12 nhân duyên cho thấy mọi hiện tượng sinh diệt đều tuân theo quy luật nhân quả, duyên sinh."
    },
    {
        question: "Câu 67: Nguyên tắc chế giới cơ bản của Đức Phật là gì?",
        options: [
            "a. Chế giới dựa trên kinh điển",
            "b. Chế giới một cách hệ thống và đầy đủ ngay từ đầu",
            "c. Tùy phạm mà chế"
        ],
        correctAnswer: 2,
        explanation: "Đức Phật không thiết lập giới điều trước, mà đợi khi có đệ tử vi phạm mới căn cứ vào đó để chế giới (tùy phạm mà chế)."
    },
    {
        question: "Câu 68: Theo Kinh Tạp A Hàm Q33, thánh đệ tử trụ phải:",
        options: [
            "A. Chỉ giữ giới mà không cần học hỏi",
            "B. Thực hành giữ giới, luật nghi, oai nghi và hành xứ một cách cụ túc",
            "C. Chỉ quan tâm đến hình thức bên ngoài",
            "D. Tự ý thay đổi giới theo ý thích"
        ],
        correctAnswer: 1,
        explanation: "Kinh mô tả thánh đệ tử an trụ Ba-la-đề-mộc-xoa luật nghi, đầy đủ oai nghi, hành xứ và thọ trì học giới."
    },
    {
        question: "Câu 69: Theo “Kinh Trung bộ, kinh Trạm xe”, 7 trạm xe của người tu tập bắt đầu từ:",
        options: [
            "A. Chánh pháp cửu trụ",
            "B. Giới (tuân giữ nghiêm túc các học xứ đã học)",
            "C. Đoạn nghi",
            "D. Tri kiến thanh tịnh"
        ],
        correctAnswer: 1,
        explanation: "Tiến trình 7 trạm xe (Thanh tịnh) luôn phải bắt đầu từ trạm nền tảng đầu tiên là Giới thanh tịnh."
    },
    {
        question: "Câu 70: Đoạn tận thân kiến, giới cấm thủ và nghi đạt được gì?",
        options: [
            "A. Tư Đà Hàm",
            "B. A Na Hàm",
            "C. Tu Đà Hoàn",
            "D. A La Hán"
        ],
        correctAnswer: 2,
        explanation: "Khi đoạn tận 3 kiết sử đầu tiên (Thân kiến, Giới cấm thủ, Nghi), hành giả sẽ chứng đắc Sơ quả Tu-đà-hoàn."
    }
];

// Quiz State
let currentQuestion = 0;
let userAnswers = [];
let answered = false;

function initQuiz() {
    document.getElementById('totalQuestions').textContent = quizData.length;
    showQuestion(0);
}

// Show Question
function showQuestion(index) {
    const question = quizData[index];
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const resultSection = document.getElementById('resultSection');
    const buttonGroup = document.querySelector('.button-group');

    // Reset
    answered = false;
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';
    resultSection.style.display = 'none';
    buttonGroup.style.display = 'flex';

    // Generate options
    question.options.forEach((option, idx) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
            <span>${option}</span>
        `;
        optionDiv.onclick = () => selectAnswer(idx);
        optionsContainer.appendChild(optionDiv);
    });

    updateProgress();
    updateButtons();

    window.scrollTo(0, 0);
}

function selectAnswer(index) {
    if (answered) return;

    answered = true;
    userAnswers[currentQuestion] = index;

    const options = document.querySelectorAll('.option');
    const correctAnswer = quizData[currentQuestion].correctAnswer;

    options.forEach((option, idx) => {
        option.classList.add('disabled');
        if (idx === correctAnswer) {
            option.classList.add('correct');
        }
        if (idx === index && idx !== correctAnswer) {
            option.classList.add('incorrect');
        }
    });

    showResultMessage(index === correctAnswer);
    showCorrectAnswer();
    updateButtons();
}

function showResultMessage(isCorrect) {
    const resultSection = document.getElementById('resultSection');
    const resultMessage = document.getElementById('resultMessage');

    resultSection.style.display = 'block';

    if (isCorrect) {
        resultMessage.textContent = '✅ Chính xác!';
        resultMessage.className = 'result-message correct';
    } else {
        resultMessage.textContent = '❌ Huhu, sai rồi !';
        resultMessage.className = 'result-message incorrect';
    }
}
function showCorrectAnswer() {
    const question = quizData[currentQuestion];
    const correctAnswerDisplay = document.getElementById('correctAnswerDisplay');
    const correctAnswerLetter = String.fromCharCode(65 + question.correctAnswer);
    const correctAnswerText = question.options[question.correctAnswer];

    let displayHTML = `
        <strong>Đáp án đúng:</strong> <strong>${correctAnswerLetter}. ${correctAnswerText}</strong>
    `;

    // Nếu câu hỏi có trường 'explanation'
    if (question.explanation) {
        displayHTML += `
            <div class="explanation-box" style="margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-left: 4px solid #17a2b8; border-radius: 4px;">
                <strong>Giải thích:</strong> ${question.explanation}
            </div>
        `;
    }

    correctAnswerDisplay.innerHTML = displayHTML;
}

// Update Progress Bar
function updateProgress() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = currentQuestion + 1;
}

// Update Buttons
function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const finishBtn = document.getElementById('finishBtn');

    // Show/hide prev button
    prevBtn.style.display = currentQuestion > 0 ? 'block' : 'none';

    // Show/hide next and finish buttons
    if (answered) {
        if (currentQuestion < quizData.length - 1) {
            nextBtn.style.display = 'block';
            finishBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'none';
            finishBtn.style.display = 'block';
        }
    } else {
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'none';
    }
}

// Next Question
function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    }
}

// Previous Question
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

// Finish Quiz
function finishQuiz() {
    const quizContainer = document.querySelector('.quiz-container');
    const finalScore = document.getElementById('finalScore');

    quizContainer.style.display = 'none';
    finalScore.style.display = 'block';

    calculateScore();
}

function calculateScore() {
    let correctCount = 0;

    quizData.forEach((question, idx) => {
        if (userAnswers[idx] === question.correctAnswer) {
            correctCount++;
        }
    });

    const percentage = Math.round((correctCount / quizData.length) * 100);

    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('totalCount').textContent = quizData.length;
    document.getElementById('scorePercentage').textContent = percentage + '%';

    displayAnswerReview(correctCount);
}

function displayAnswerReview(correctCount) {
    const answerReview = document.getElementById('answerReview');
    answerReview.innerHTML = '';

    quizData.forEach((question, idx) => {
        const userAnswer = userAnswers[idx];
        const isCorrect = userAnswer === question.correctAnswer;

        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;

        const questionLetter = String.fromCharCode(65 + userAnswer);
        const userAnswerText = question.options[userAnswer];
        const correctAnswerLetter = String.fromCharCode(65 + question.correctAnswer);
        const correctAnswerText = question.options[question.correctAnswer];

        reviewItem.innerHTML = `
            <div class="review-question">${idx + 1}. ${question.question}</div>
            <div class="review-answer">
                <strong>Trả lời của bạn:</strong> ${questionLetter}. ${userAnswerText}<br>
                ${isCorrect ? '<strong style="color: var(--success-color);">✅ Đúng!</strong>' : `<strong style="color: var(--error-color);">❌ Sai!</strong><br><strong>Đáp án đúng:</strong> ${correctAnswerLetter}. ${correctAnswerText}`}
            </div>
        `;

        answerReview.appendChild(reviewItem);
    });
}

// Restart Quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = [];
    answered = false;

    document.querySelector('.quiz-container').style.display = 'block';
    document.getElementById('finalScore').style.display = 'none';

    showQuestion(0);
}

// Event Listeners
document.getElementById('nextBtn').addEventListener('click', nextQuestion);
document.getElementById('prevBtn').addEventListener('click', previousQuestion);
document.getElementById('finishBtn').addEventListener('click', finishQuiz);
document.getElementById('restartBtn').addEventListener('click', restartQuiz);

// Initialize Quiz on Load
window.addEventListener('load', initQuiz);
