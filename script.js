const quizData = [
    {
        question: "Câu 1: Định nghĩa “phòng phi chỉ ác” được dùng để chỉ ý nghĩa của khái niệm nào sau đây?",
        options: [
            "Học xứ",
            "Giới luật",
            "Sìla"
        ],
        correctAnswer: 1,
        explanation: "“Phòng phi chỉ ác” nghĩa là: Phòng → ngăn ngừa, Phi → điều sai trái, Chỉ → dừng lại, Ác → điều xấu. Tức là: ngăn ngừa điều sai và dừng các điều ác. Đây chính là ý nghĩa của “Giới” (Sīla) trong Phật giáo."
    },
    {
        question: "Câu 2: Theo Kinh Hoa Nghiêm, giới được ví như là gì?",
        options: [
            "Con đường tu tập",
            "Gốc vô thượng Bồ đề",
            "Pháp điều chỉnh thân tâm"
        ],
        correctAnswer: 1,
        explanation: "Trong Kinh Hoa Nghiêm có câu nổi tiếng: “Giới thị vô thượng Bồ-đề bổn.” Nghĩa là Giới là gốc của Vô thượng Bồ-đề."
    },
    {
        question: "Câu 3: Trong Kinh A Hàm, “Tư niệm là giới” được nhắc đến trong kinh nào?",
        options: [
            "Kinh Giới",
            "Kinh Chủng Đức",
            "Kinh Ngũ chi vật chủ"
        ],
        correctAnswer: 1,
        explanation: "Trong Kinh A-hàm, nội dung nói: Tư niệm là giới, Luật nghi / Oai nghi là giới, Tâm sở là giới được đề cập trong Kinh Chủng Đức."
    },
    {
        question: "Câu 4: Theo Tạp A hàm, “Tăng thượng giới học” được mô tả như thế nào?",
        options: [
            "Chuyên niệm không quên tu hành tam vô lậu học.",
            "Giới phát sanh từ tâm.",
            "An trụ giới, luật nghi Ba - la - đề - mộc – xoa, đầy đủ oai nghi, thấy tội nhỏ nhặt sanh lòng sợ hãi."
        ],
        correctAnswer: 2,
        explanation: "Trong Tạp A-hàm, khi nói về tăng thượng giới học, kinh mô tả người tu: an trụ giới luật, giữ Ba-la-đề-mộc-xoa luật nghi, đầy đủ oai nghi, đối với tội nhỏ nhặt cũng sinh tâm sợ hãi."
    },
    {
        question: "Câu 6: Hai loại giới theo ý nghĩa là gì?",
        options: [
            "Giới tại gia và giới xuất gia",
            "Hữu lậu giới và vô lậu giới",
            "Chỉ ác giới và Tác thiện giới (Chỉ trì giới và Tác trì giới)"
        ],
        correctAnswer: 2,
        explanation: "Phân loại giới theo ý nghĩa có 2 loại: Chỉ trì giới (ngăn không làm điều ác) và Tác trì giới (siêng làm điều thiện)."
    },
    {
        question: "Câu 7: Trước khi có các quy định về giới, Tăng đoàn được nhiếp bằng phương pháp nào?",
        options: [
            "Bát chánh đạo",
            "Lục hòa",
            "Y pháp nhiếp Tăng"
        ],
        correctAnswer: 2,
        explanation: "12 năm đầu sau khi thành đạo, Tăng đoàn chưa có giới điều cụ thể. Các đệ tử nghe pháp rồi tự sống đúng theo chánh pháp, gọi là “Y pháp nhiếp Tăng”."
    },
    {
        question: "Câu 8: Đức Phật bắt đầu chế giới sau bao nhiêu năm thành đạo?",
        options: [
            "5 năm",
            "10 năm",
            "12 năm"
        ],
        correctAnswer: 2,
        explanation: "12 năm đầu Tăng đoàn chưa có giới điều. Khi bắt đầu có những trường hợp vi phạm, Đức Phật mới tùy phạm mà chế giới."
    },
    {
        question: "Câu 9: Theo các vị Phật Tỳ Bà Thi, Thi Khí và Tỳ Xá Phù, phạm hạnh không cửu trụ là do thiếu yếu tố nào?",
        options: [
            "Không có đệ tử",
            "Không quảng thuyết khế kinh, không kết giới và không thuyết giới",
            "Không tu tập thiền định"
        ],
        correctAnswer: 1,
        explanation: "Ba vị Phật này phạm hạnh không cửu trụ vì không quảng thuyết khế kinh, không kết giới và không thuyết Ba-la-đề-mộc-xoa."
    },
    {
        question: "Câu 10: Trong ba nghĩa của “Giới luật”, nghĩa thứ nhất liên quan đến",
        options: [
            "Học xứ – những điều cần học tập",
            "Giới điều – quy định hành vi của người tu",
            "Sìla – hành vi, tập quán, tính cách, đạo đức",
            "Sự tu tập và thiền định"
        ],
        correctAnswer: 2,
        explanation: "Ba nghĩa của giới luật: 1. Sīla (hành vi, đạo đức); 2. Học xứ (những điều cần học và thực hành); 3. Giới điều."
    },
    {
        question: "Câu 11: Theo Phạn Anh từ điển của M. Monier–Williams “giới” có nghĩa:",
        options: [
            "Conduct, dicposition, nature",
            "Morality, custom, a moral precept",
            "Conduct, hebit, usage",
            "Cả A, B, C"
        ],
        correctAnswer: 3,
        explanation: "Trong từ điển của Monier–Williams, Śīla được giải thích với nhiều nghĩa như: hành vi, tính cách, bản tính, đạo đức, thói quen, giới điều."
    },
    {
        question: "Câu 12: “Giới” ngôn ngữ Pali là:",
        options: [
            "Śīla",
            "Sīlā",
            "Śila",
            "Sīla"
        ],
        correctAnswer: 3,
        explanation: "Trong Phật học: ngôn ngữ Pāli là Sīla, Sanskrit là Śīla."
    },
    {
        question: "Câu 13: “Học xứ” trong giới luật có nghĩa:",
        options: [
            "Những điều, đối tượng cần phải học tập",
            "Nơi học tập",
            "Các điều đã được quy định thành văn trong luật",
            "A và C"
        ],
        correctAnswer: 3,
        explanation: "Trong Phật học: Học xứ (Sanskrit: Śikṣāpada) nghĩa là: những điều cần học và thực hành trong đời sống tu tập.Đây là các điều giới được quy định cụ thể để hành giả học và hành trì.."
    },
    {
        question: "Câu 14: “Giới” mang nghĩa:",
        options: [
            "Quy định những điều bất thiện trong phạm vi tôn giáo",
            "Quy định đức xấu nơi đạo đức thế gian",
            "Phòng phi chỉ ác",
            "Quy chuẩn kinh doanh, pháp luật, kể cả việc điều dưỡng sức khỏe"
        ],
        correctAnswer: 2,
        explanation: "Trong Phật giáo, giới (Sīla) được định nghĩa là phòng phi chỉ ác, nghĩa là phòng ngừa điều sai trái và ngăn dừng các điều ác."
    },
    {
        question: "Câu 15: “Tư niệm là giới\" nghĩa này trong kinh:",
        options: [
            "Kinh Tạp A Hàm",
            "Kinh Trường A Hàm",
            "Kinh Tăng nhất A Hàm",
            "Kinh Trung A Hàm"
        ],
        correctAnswer: 3,
        explanation: "Ba nghĩa của giới (Tư niệm, Luật nghi/Oai nghi, Tâm sở) được nói trong Kinh Trung A-hàm (Kinh Chủng Đức)."
    },
    {
        question: "Câu 16: Nội dung “Tâm sở cũng là giới” trong kinh nào:",
        options: [
            "Tạp A-hàm",
            "Trung A-hàm",
            "Trường A-hàm",
            "Tăng nhất A-hàm"
        ],
        correctAnswer: 1,
        explanation: "Tâm sở cũng là giới được đề cập trong Kinh Trung A-hàm."
    },
    {
        question: "Câu 17: Chọn câu phù hợp nhất:",
        options: [
            "Giới và luật dùng song song, tùy văn cảnh mà hiểu cho đúng.",
            "Khái niệm giới và luật hoàn toàn đồng nhất.",
            "Giới và luật dùng song song.",
            "Từ 'giới luật' xuất hiện trong Phật giáo thời kỳ đầu."
        ],
        correctAnswer: 0,
        explanation: "Giới thiên về đạo đức cá nhân, Luật thiên về kỷ cương Tăng đoàn. Hai từ thường dùng song song nhưng không đồng nhất."
    },
    {
        question: "Câu 18: Cụ túc giới là chỉ:",
        options: [
            "Tỳ Kheo, tỳ kheo ni giới",
            "5 giới, 10 giới, Bồ tát giới",
            "Tinh thần của giới luật",
            "Cả A, B, C"
        ],
        correctAnswer: 0,
        explanation: "Cụ túc giới (Upasampadā) là giới đầy đủ của người xuất gia (Tỳ-kheo có 250 giới, Tỳ-kheo-ni có 348 giới)."
    },
    {
        question: "Câu 19: Thế nào là tăng thượng giới học?",
        options: [
            "Tỷ-kheo an trụ giới, luật nghi... thấy tội nhỏ nhặt chưa sanh lòng sợ hãi.",
            "Giữ gìn giới luật nghiêm túc từng phần... giúp hành giả luôn hưởng thượng.",
            "Tỷ-kheo an trụ Giới Ba-la-đề-mộc-xoa, đầy đủ oai nghi hành xử, thấy tội vi tế (nhỏ nhặt) sanh lòng sợ hãi, thọ trì học giới."
        ],
        correctAnswer: 2,
        explanation: "Người tu phải an trụ luật nghi Ba-la-đề-mộc-xoa, đầy đủ oai nghi, và đối với những lỗi nhỏ nhặt cũng sinh lòng sợ hãi cẩn trọng."
    },
    {
        question: "Câu 20: 5 giới, bát quan trai giới thuộc:",
        options: [
            "Giải thoát luật nghi",
            "Tịnh lự luật nghi",
            "Vô lậu giới",
            "Xuất gia giới"
        ],
        correctAnswer: 0,
        explanation: "Giải thoát luật nghi là những giới giữ để hướng đến giải thoát, bao gồm: 5 giới, Bát quan trai, và giới của Tỳ-kheo/Tỳ-kheo-ni."
    },
    {
        question: "Câu 21: Chọn câu CHƯA phù hợp:",
        options: [
            "Nếu Tỳ-kheo nào phạm giới thì làm tổn hại gìn giữ các căn.",
            "Nếu Tỳ-kheo giữ giới thì không có sự hối hận, hân hoan, hý...",
            "Nếu đã giải thoát thì liền đắc Niết-bàn.",
            "Giữ giới thì hối hận, hân hoan, hỷ, tĩnh chỉ, lạc, định..."
        ],
        correctAnswer: 3,
        explanation: "Câu D sai vì giữ giới thanh tịnh thì phải là 'KHÔNG hối hận' chứ không phải sinh ra hối hận."
    },
    {
        question: "Câu 22: Chọn câu phù hợp nhất:",
        options: [
            "Giới có nghĩa là chỉ ác (chỉ hành giới/luật nghi giới); hành thiện (tác trì giới/tác thiện giới).",
            "Giới có nghĩa là chỉ ác (chỉ trì giới/luật nghi giới); hành thiện (tác giới/tác thiện giới).",
            "Giới có nghĩa là chỉ ác (chỉ trì giới/luật nghi giới); hành thiện (tác trì giới/tác thiện giới)."
        ],
        correctAnswer: 2,
        explanation: "Theo hành trì có hai ý nghĩa: Chỉ trì giới (ngăn ác) và Tác trì giới (siêng làm thiện)."
    },
    {
        question: "Câu 23: Chọn câu mang nghĩa đúng nhất:",
        options: [
            "Bồ tát giới là đại thừa giới, hàng thanh văn không được thọ.",
            "Thông giới là thông tam giới.",
            "Thông giữa nam truyền và đại thừa.",
            "Bắc truyền Phật giáo có Bồ tát giới là thông giới."
        ],
        correctAnswer: 3,
        explanation: "Bồ-tát giới được xem là 'thông giới' vì cả hàng xuất gia và tại gia đều có thể thọ trì."
    },
    {
        question: "Câu 24: Trong hàng đệ tử xuất gia của Đức Phật có người sanh hữu lậu pháp khi:",
        options: [
            "Phật chế giới",
            "Người căn tánh thấp xuất gia",
            "Số người xuất gia đông",
            "Hàng đệ tử xuất gia thiên về lợi dưỡng."
        ],
        correctAnswer: 3,
        explanation: "Khi một số người xuất gia vì danh lợi, lợi dưỡng, từ đó phát sinh hữu lậu pháp, buộc Đức Phật phải bắt đầu chế giới."
    },
    {
        question: "Câu 25: Chọn câu mang nghĩa đúng nhất:",
        options: [
            "Những tỳ kheo căn tính thông lợi khó tự điều phục, sanh hữu lậu pháp.",
            "Từ thực hành giới đến giữ giới đã quy định thành từng điểm cụ thể là ưu điểm lớn nhất.",
            "Đức Phật cụ thể hóa giới học bằng các học xứ (giới điều), để hàng căn tánh thấp dễ học và hành trì.",
            "Tất cả đều sai."
        ],
        correctAnswer: 2,
        explanation: "Giới điều ra đời vì khi Tăng đoàn đông, người căn cơ thấp khó tự điều phục, cần quy định cụ thể để dễ học, dễ hành."
    },
    {
        question: "Câu 26: Bố Tát (posadha) bắt nguồn từ:",
        options: [
            "Đức Phật định ra",
            "Văn hóa Ấn Độ cổ",
            "Nghi lễ tôn giáo cổ Ấn Độ",
            "Veda của Ấn Độ"
        ],
        correctAnswer: 3,
        explanation: "Bố Tát (Uposatha) có nguồn gốc từ nghi lễ Vệ-đà (Veda), sau đó Đức Phật chuyển hóa thành nghi thức tụng giới thanh tịnh của Tăng đoàn."
    },
    {
        question: "Câu 27: Ba đời chư Phật phạm hạnh không cửu trụ là:",
        options: [
            "Tỳ Bà Thi Phật, Thi Khí Phật, Tỳ Xá Phù Phật.",
            "Tỳ Bà Thi Phật, Câu Lưu Tôn Phật, Ca Diếp Phật.",
            "Tỳ Xá Phù Phật, Thi Khí Phật, Ca Diếp Phật."
        ],
        correctAnswer: 0,
        explanation: "Vì 3 vị Phật này không kết giới và không thuyết giới (Ba-la-đề-mộc-xoa) nên sau khi Phật diệt độ, phạm hạnh không tồn tại lâu dài."
    },
    {
        question: "Câu 28: Kệ bố tát Đức Phật Thích Ca thuyết là:",
        options: [
            "Cũng như người mắt sáng, tránh khỏi lối hiểm nghèo...",
            "Hết thảy ác chớ làm, hãy vắng hành các thiện...",
            "Khéo phòng hộ lời nói, tâm chí tự lắng trong, thân không làm các ác...",
            "Chớ làm các điều ác, vâng làm các điều lành..."
        ],
        correctAnswer: 2,
        explanation: "Bài kệ: 'Khéo phòng hộ lời nói, tâm chí tự lắng trong, thân không làm các ác, thực hành được như thế...' là bài kệ Bố Tát đặc thù của Phật Thích Ca."
    },
    {
        question: "Câu 29: Nguyên lý chế định giới luật là:",
        options: [
            "Duyên sanh pháp",
            "Duyên khởi",
            "Duyên khởi pháp",
            "12 nhân duyên"
        ],
        correctAnswer: 2,
        explanation: "Giới luật được chế định dựa trên Duyên khởi pháp (có nhân duyên vi phạm xảy ra thì mới chế định điều giới)."
    },
    {
        question: "Câu 30: Chọn câu KHÔNG đúng:",
        options: [
            "Ba đời chư Phật quảng thuyết kinh pháp, vì đệ tử chế định giới luật...",
            "Ba đời chư Phật quảng thuyết kinh pháp, đệ tử chế định giới luật...",
            "Ba đời chư Phật quảng thuyết kinh pháp, vì đệ tử chế định giới luật, thuyết ba la đề mộc xoa..."
        ],
        correctAnswer: 1,
        explanation: "Câu B sai vì chủ thể chế giới phải là Đức Phật, đệ tử không có quyền chế định giới luật."
    },
    {
        question: "Câu 31: Chọn câu đúng:",
        options: [
            "Tùy phạm mà chế vì tránh ngoại đạo cười chê, đệ tử sanh lòng bất mãn.",
            "Tùy phạm mà chế vì tránh ngoại đạo cười chê, đệ tử sanh lòng bị mẫn.",
            "Tùy phạm mà chế vì tránh ngoại đạo cười chê, đệ tử không muốn."
        ],
        correctAnswer: 0,
        explanation: "Đức Phật không chế giới trước, mà khi có lỗi mới chế giới, nhằm tránh ngoại đạo cười chê và tránh đệ tử sinh tâm bất mãn."
    },
    {
        question: "Câu 32: Tùy phạm tùy chế là vì:",
        options: [
            "Nhân duyên chưa đủ",
            "Thời cơ chưa đến",
            "Vì đệ tử phòng hộ các căn",
            "Chế giới phải hợp cơ, hợp nhân, hợp thời, hợp xứ."
        ],
        correctAnswer: 3,
        explanation: "Đức Phật chế giới không tùy tiện mà phải đầy đủ các yếu tố: hợp cơ (căn cơ), hợp nhân (nhân duyên), hợp thời (thời điểm) và hợp xứ (hoàn cảnh)."
    },
    {
        question: "Câu 33: Những điều lợi ích nào phần nhiều vì người ngoài đạo:",
        options: [
            "Điều phục người nhiều phiền não, người tàm quý được an lạc",
            "Đoạn hiện lậu hoặc, diệt hậu lậu hoặc.",
            "Khiến người chưa tin sanh tín tâm, người đã tin càng thâm tín.",
            "Khiến người chưa tin sanh thâm tín, người đã tin sang thâm tín."
        ],
        correctAnswer: 2,
        explanation: "Lợi ích hướng đến ngoại đạo là: Khiến người chưa tin thì sinh lòng tin, người đã tin thì lòng tin thêm tăng trưởng."
    },
    {
        question: "Câu 34: 10 loại lợi ích trong các bộ kinh luật dùng từ ngữ là:",
        options: [
            "Tăng kỳ luật: 10 việc lợi ích; Tứ phần luật: mười phúc lợi; Tạp a hàm: mười cú nghĩa; Tăng nhất a hàm: mười việc công đức,",
            "Tăng kỳ luật: 10 việc lợi ích, Tứ phần luật: mười cú nghĩa, Tạp a hàm: mười phúc lợi. Tăng nhất a hàm: mười việc công đức.",
            "Tăng kỳ luật: 10 việc lợi ích. Tứ phần luật: mười có nghĩa, Tạp a hàm: mười việc công đức, Tăng nhất a hàm: mười phúc lợi."
        ],
        correctAnswer: 1,
        explanation: "Theo nội dung bài giảng: Tăng Kỳ luật -> 10 việc lợi ích, Tứ phần -> 10 cú nghĩa, Tạp A hàm -> 10 phúc lợi, Tăng nhất A hàm -> 10 việc công đức."
    },
    {
        question: "Câu 35: 10 lợi ích nếu phân theo đối tượng thì thành mấy nội dung:",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correctAnswer: 2,
        explanation: "Được chia thành 4 nhóm đối tượng: Vì Tăng đoàn, Vì người tu trong Tăng đoàn, Vì người ngoài đạo, Vì chánh pháp. Tăng đoàn – Người tu – Ngoại đạo – Chánh pháp "
    },
    {
        question: "Câu 36: Ba bộ kinh luật chỉ có 9 điều lợi ích là:",
        options: [
            "Tạp, Ngũ Phần, Nam Truyền",
            "Tạp, Thập Tụng, Nam Truyền",
            "Tạp, Tăng Kỳ, Nam Truyền",
            "Tạp, Tứ Phần, Nam Truyền"
        ],
        correctAnswer: 2,
        explanation: "Một số bộ kinh luật ghi 10 lợi ích. Nhưng có ba bộ chỉ ghi 9 điều lợi ích là: Tạp A-hàm, Tăng Kỳ luật và Nam Truyền."
    },
    {
        question: "Câu 37: Các quả vị có thể chứng đắc khi giới luật thanh tịnh:",
        options: [
            "Từ Tu-đà-hoàn đến A-la-hán",
            "Tu-đà-hoàn, Tư-đà hàm, A-la-hán",
            "Sơ quả Tu-đà-hoàn, nhị quả Tư-đà hàm",
            "Tu-đà-hoàn, Tư-đà-hàm, A-na-hàm"
        ],
        correctAnswer: 0,
        explanation: "Khi giới thanh tịnh → sinh định → phát tuệ, người tu có thể chứng bốn quả Thánh: Tu-đà-hoàn (Sơ quả), Tư-đà-hàm (Nhị quả), A-na-hàm (Tam quả), A-la-hán (Tứ quả)."
    },
    {
        question: "Câu 38: “Mười” lợi ích là con số:",
        options: [
            "Chính xác",
            "Cố định",
            "Viên mãn",
            "Tượng trưng"
        ],
        correctAnswer: 3,
        explanation: "Trong kinh Phật, con số 10 không phải là số cố định tuyệt đối mà mang ý nghĩa tượng trưng cho sự đầy đủ, trọn vẹn."
    },
    {
        question: "Câu 39: Câu kinh trong kinh Lăng Nghiêm nói về giới luật:",
        options: [
            "Nhiếp tâm làm giới, nhân giới sinh định, nhân định phát tuệ.",
            "Giới thị nhất thiết thiện pháp chỉ thể tranh.",
            "Giới do nhân chi đầu thủ.",
            "Sa môn giới hành, như thủy như ngọc"
        ],
        correctAnswer: 0,
        explanation: "Đây là câu kinh nổi tiếng chỉ rõ con đường Giới – Định – Tuệ nền tảng của Phật giáo. Nhiếp tâm → đó chính là giới, Từ giới → sinh định, Từ định → phát tuệ"
    },
    {
        question: "Câu 40: Đắc sơ quả tu-đà-hoàn, ngoài giới luật thanh tịnh cần:",
        options: [
            "Có ít định, ít tuệ, giới sự tồn tại",
            "Có ít định, ít tuệ, giới thường tùy thuận mà sanh",
            "Có ít định, ít tuệ, đoạn trừ thân kiến",
            "Có ít định, ít tuệ, đoạn trừ ba kết"
        ],
        correctAnswer: 3,
        explanation: "Sơ quả Tu-đà-hoàn đòi hỏi hành giả phải đoạn tận 3 kiết sử (ba kết): Thân kiến, Giới cấm thủ, và Nghi."
    },
    {
        question: "Câu 41: Bố tát trong Phật giáo có nghĩa là:",
        options: [
            "Giảng giới",
            "Thuyết giới",
            "Tăng thượng giới",
            "Học giới"
        ],
        correctAnswer: 1,
        explanation: "Bố tát (Pāli: Uposatha, Sanskrit: Poṣadha) là nghi thức của Tăng đoàn: tụng Ba-la-đề-mộc-xoa, THUYẾT GIỚI, sám hối và thanh tịnh Tăng đoàn, diễn ra mỗi nửa tháng "
    },
    {
        question: "Câu 42: Chọn câu đúng:",
        options: [
            "Không làm các điều ác, thiện hộ các căn.",
            "Không làm các điều ác, làm mọi điều thiện lành.",
            "Không làm các điều ác, làm điều thiện có thể.",
            "Không làm các điều ác, làm việc thiện lành."
        ],
        correctAnswer: 1,
        explanation: " Câu này nói về tinh thần chung của giới luật Phật giáo, xuất phát từ bài kệ nổi tiếng:“Chư ác mạc tác, Chúng thiện phụng hành, Tự tịnh kỳ ý. Nghĩa là: Không làm các điều ác, Làm mọi điều thiện lành, Giữ tâm ý thanh tịnh."
    },
    {
        question: "Câu 43: Chánh pháp cửu trụ là:",
        options: [
            "lợi ích của cá nhân hành giả",
            "Lợi ích người ngoài đạo",
            "Lợi ích cao nhất của việc chế giới.",
            "Lợi ích của Tăng đoàn."
        ],
        correctAnswer: 2,
        explanation: "Trong 10 lợi ích chế giới, hai lợi ích cuối cùng là:Chánh pháp cửu trụ, Phạm hạnh cửu trụ, Đây là mục đích cao nhất của việc chế giới, tức là: nhờ giới luật mà chánh pháp tồn tại lâu dài trong thế gian."
    },
    {
        question: "Câu 44: “Ác” trong tinh thần giới luật được hiểu là những hành động, lời nói làm ô nhiễm điều gì?",
        options: [
            "Thân nghiệp",
            "Khẩu nghiệp",
            "Ba nghiệp (6 căn)"
        ],
        correctAnswer: 2,
        explanation: "Câu này dựa vào tinh thần giới luật trong bài giảng: giới nhằm thanh tịnh ba nghiệp. Trong Phật giáo: Thân nghiệp → hành động của thân, Khẩu nghiệp → lời nói, Ý nghiệp → ý nghĩ. Các hành động ác là những hành động làm ô nhiễm ba nghiệp này."
    },
    {
        question: "Câu 45: Trong Kinh A Hàm, những nghĩa nào sau đây được đề cập đến như là giới?",
        options: [
            "Sìla, Học xứ, Giới luật",
            "Luật nghi, Oai nghi, Tâm sở",
            "Tư niệm, Luật nghi/Oai nghi, Tâm sở"
        ],
        correctAnswer: 2,
        explanation: "Kinh A-hàm giải thích giới qua 3 góc độ: Tư niệm là giới, Luật nghi/Oai nghi là giới, và Tâm sở là giới. Mẹo nhớ nhanh: 3 nghĩa của giới trong A-hàm: Tư niệm – Luật nghi/Oai nghi – Tâm sở."
    },
    {
        question: "Câu 46: “Tịnh lư luật nghi” là loại giới phát sinh trong hoàn cảnh nào?",
        options: [
            "Trong đời sống hàng ngày của người tại gia",
            "Trong các nghi lễ xuất gia",
            "Trong lúc hành thiền"
        ],
        correctAnswer: 2,
        explanation: "Tịnh lự (Dhyāna) nghĩa là thiền định. Tịnh lự luật nghi là loại giới tự nhiên phát sinh khi tâm an định, thanh tịnh, không khởi các hành vi bất thiện ."
    },
    {
        question: "Câu 47: Mối quan hệ giữa tâm và giới có thể được hiểu như thế nào?",
        options: [
            "Giới hoàn toàn độc lập với tâm.",
            "Giới phát sinh từ tâm, và ở một góc độ nào đó, tâm có thể được xem là giới.",
            "Tâm là kết quả của việc giữ giới một cách nghiêm túc."
        ],
        correctAnswer: 1,
        explanation: "Giới không tách rời tâm. Hành vi thân khẩu đều từ tâm, do đó 'tâm sở cũng là giới'."
    },
    {
        question: "Câu 48: Tinh thần cốt lõi của giới luật trong Phật giáo được tóm tắt như thế nào?",
        options: [
            "Kiềm chế mọi ham muốn và dục vọng.",
            "Tuân thủ nghiêm ngặt các giới điều đã được Đức Phật chế định.",
            "Không làm các điều ác, siêng năng làm các việc lành, giữ cho ba nghiệp (thân, khẩu, ý) thanh tịnh."
        ],
        correctAnswer: 2,
        explanation: "Tóm tắt qua bài kệ: Chư ác mạc tác, chúng thiện phụng hành, tự tịnh kỳ ý."
    },
    {
        question: "Câu 49: Khi Tôn giả Xá Lợi Phất hỏi về phạm hạnh cửu trụ, Đức Phật có đồng ý ngay không?",
        options: [
            "Có, Đức Phật đồng ý ngay lập tức",
            "Không, Ngài nói \"Thế Tôn tự biết thời\"",
            "Không, Ngài từ chối hoàn toàn",
            "Có, nhưng chỉ áp dụng cho một số đệ tử"
        ],
        correctAnswer: 1,
        explanation: "Ngài trả lời 'Thế Tôn tự biết thời', nghĩa là Khi nhân duyên chưa đủ thì chưa chế giới, Khi có vi phạm xảy ra, Đức Phật mới tùy phạm mà chế.."
    },
    {
        question: "Câu 50: Hệ thống giới điều trong Tăng đoàn có ưu điểm gì?",
        options: [
            "Giúp hành giả dễ học, dễ thực hành",
            "Làm tăng uy tín của Tăng đoàn",
            "Tạo ra sự công bằng giữa các Tỳ-kheo",
            "Giúp thu hút thêm nhiều người xuất gia"
        ],
        correctAnswer: 0,
        explanation: "KKhi giới học được cụ thể hóa thành các học xứ (giới điều) thì ưu điểm lớn là: giúp người tu dễ học và dễ thực hành."
    },
    {
        question: "Câu 51: Giới luật giúp hành giả đạt được Ba môn vô lậu học gồm những gì?",
        options: [
            "Giới – Định – Tuệ",
            "Bố thí – Nhẫn nhục – Trí tuệ",
            "Thiền định – Tinh tấn – Chánh niệm",
            "Từ bi – Hỷ xả – Trí tuệ"
        ],
        correctAnswer: 0,
        explanation: "Trong Phật giáo, Tam vô lậu học là con đường tu tập căn bản:Giới (Sīla) - Định (Samādhi) - Tuệ (Paññā / Prajñā). Ý nghĩa: Giới → giúp tâm không hối hận, Định → tâm an trú, không tán loạn, Tuệ → thấy rõ chân lý, đoạn trừ phiền não"
    },
    {
        question: "Câu 52: Trong các thời kỳ của chư Phật quá khứ, nhóm nào có phạm hạnh cửu trụ?",
        options: [
            "Tỳ Bà Thi Phật, Thi Khí Phật, Tỳ Xá Phù Phật",
            "Câu Lưu Tôn Phật, Câu Na Hàm Mâu Ni Phật, Ca Diếp Phật",
            "Cả hai nhóm đều có phạm hạnh cửu trụ",
            "Không có vị Phật nào có phạm hạnh cửu trụ"
        ],
        correctAnswer: 1,
        explanation: "Không cửu trụ: Tỳ Bà Thi – Thi Khí – Tỳ Xá Phù. Cửu trụ: Câu Lưu Tôn – Câu Na Hàm – Ca Diếp."
    },
    {
        question: "Câu 53: Một hạn chế của việc chế định giới luật là gì?",
        options: [
            "Hành giả dễ chấp vào hình thức giới điều mà dần dần bỏ qua tinh thần của giới",
            "Giới luật quá ít",
            "Giới luật không có tác dụng",
            "Hành giả không thể thực hành"
        ],
        correctAnswer: 0,
        explanation: " ƯU ĐIỂM của giới điều: dễ học, dễ hành. HẠN CHẾ: người tu dễ chấp vào hình thức giới điều, chỉ giữ bề ngoài mà quên tinh thần của giới."
    },
    {
        question: "Câu 54: Mục đích sau cùng của giới luật là gì?",
        options: [
            "Chánh pháp cửu trụ",
            "Kiểm soát đệ tử",
            "Giúp đệ tử có nhiều quyền lực",
            "Giúp đệ tử trở nên nổi tiếng"
        ],
        correctAnswer: 0,
        explanation: "Trong bài giảng và trong 10 lợi ích chế giới, mục đích cao nhất là: Chánh pháp cửu trụ (tức là chánh pháp tồn tại lâu dài trong thế gian).."
    },
    {
        question: "Câu 55: Khi giới thanh tịnh, hành giả có thể đắc quả vị gì?",
        options: [
            "Chỉ đạt được thiền định",
            "Chỉ đạt được trí tuệ",
            "Đạt định và tuệ",
            "Không đắc được gì cả"
        ],
        correctAnswer: 2,
        explanation: "giới thanh tịnh -> sinh định, định -> phát tuệ (Tam vô lậu học). Đây chính là tiến trình của Tam vô lậu học: Giới – Định – Tuệ."
    },
    {
        question: "Câu 56: Đặc điểm của nguyên tắc “tùy phạm mà chế” trong việc chế định giới là:",
        options: [
            "Giới luật cố định và không thay đổi theo thời gian",
            "Giới luật thay đổi, linh hoạt theo hoàn cảnh, từng hạng người và địa phương",
            "Giới luật chỉ áp dụng cho tỳ kheo và tỳ kheo ni",
            "Giới luật chỉ là những quy định cứng nhắc, không có ngoại lệ"
        ],
        correctAnswer: 1,
        explanation: "Tùy phạm mà chế đảm bảo giới luật phải phù hợp với 4 yếu tố: hợp cơ, hợp nhân duyên, hợp thời và hợp xứ."
    },
    {
        question: "Câu 57: Nghĩa thứ hai “Học xứ” ám chỉ là",
        options: [
            "Những điều cần tu tập và rèn luyện",
            "Các quy định pháp lý cứng nhắc",
            "Phương pháp giữ gìn giới",
            "Đạo đức của gia đình"
        ],
        correctAnswer: 0,
        explanation: "Học xứ (Śikṣāpada) nghĩa là những điều cần học và thực hành rèn luyện trong đời sống tu tập. Tức là các điều giới được quy định cụ thể để hành giả học và rèn luyện."
    },
    {
        question: "Câu 58: Theo Kinh A Hàm, “Tư niệm” liên quan đến giới được hiểu là",
        options: [
            "Sự quên lãng tu tập",
            "Chuyên niệm không quên tu hành tam vô lậu học",
            "Học xứ về giới",
            "Giới của tăng ni"
        ],
        correctAnswer: 1,
        explanation: "Ba nghĩa của giới trong A-hàm: Tư niệm – Luật nghi/Oai nghi – Tâm sở. Ở đây “Tư niệm” nghĩa là: sự chuyên tâm ghi nhớ, không quên việc tu tập, đặc biệt là tam vô lậu học (Giới – Định – Tuệ)."
    },
    {
        question: "Câu 59: Phân loại theo hành trì, giới được chia thành",
        options: [
            "Giới cấm và giới cho phép",
            "Giới xuất gia và giới tại gia",
            "Giới trong nhà và ngoài xã hội",
            "Giới thanh tịnh và giới vi phạm (Giữ đúng / vi phạm / Chỉ trì và Tác trì)"
        ],
        correctAnswer: 3,
        explanation: "Khi nói về hành trì thực tiễn, giới chú trọng việc giữ giới đúng (Chỉ trì/Tác trì) hay là phạm giới."
    },
    {
        question: "Câu 60: Trong khái niệm “Hữu lậu giới”, có hai loại chính là",
        options: [
            "Giới dạy và giới tu",
            "Tịnh lư luật nghi và Giải thoát luật nghi",
            "Giới nội tâm và giới ngoại hình",
            "Giới truyền thống và giới hiện đại"
        ],
        correctAnswer: 1,
        explanation: "HHữu lậu giới gồm: Giải thoát luật nghi + Tịnh lự luật nghi."
    },
    {
        question: "Câu 61: Khuyết điểm của giới điều theo văn bản là",
        options: [
            "Không giúp người tu hành đạt được an lạc",
            "Chuyên về giới điều mà dần dần bỏ qua tinh thần của giới",
            "Quá linh hoạt theo từng hoàn cảnh",
            "Không có quy định cụ thể"
        ],
        correctAnswer: 1,
        explanation: "ƯU ĐIỂM của giới điều: dễ học, dễ hành. KHUYẾT ĐIỂM: nếu chỉ chú trọng giữ từng điều khoản thì hành giả dễ chấp vào hình thức, quên mất tinh thần của giới."
    },
    {
        question: "Câu 62: Trước 12 năm đầu, việc chưa có các quy định về giới được gọi là:",
        options: [
            "Học xứ",
            "Y pháp nhiếp Tăng",
            "Luật nghi",
            "Giới tự thành"
        ],
        correctAnswer: 1,
        explanation: "Thời kỳ đầu Tăng đoàn chưa có giới điều cụ thể. Các đệ tử nghe pháp rồi tự sống đúng theo chánh pháp. Trạng thái này được gọi là:  “Y pháp nhiếp Tăng”."
    },
    {
        question: "Câu 63: Khuyết điểm của giới khi chế định dần dần là:",
        options: [
            "Không chú ý đến tinh thần của giới",
            "Quá phức tạp trong việc thực hành",
            "Không phù hợp với từng hạng người",
            "Quá nhẹ nhàng, không răn đe"
        ],
        correctAnswer: 0,
        explanation: "Tương tự như câu 53/61, khuyết điểm là hành giả dễ mắc vào giới điều cụ thể mà lơ là tinh thần giải thoát chung."
    },
    {
        question: "Câu 64: Nguyên lý “liên quan đến tinh thần nhiều hơn” trong giới luật dựa trên:",
        options: [
            "Luật trừng phạt",
            "Lý duyên khởi",
            "Quy định ngoại đạo",
            "Học xứ của pháp"
        ],
        correctAnswer: 1,
        explanation: "giới luật nhấn mạnh tinh thần hơn hình thức. mọi pháp y duyên mà sinh.."
    },
    {
        question: "Câu 65: “Duyên sanh pháp” được hiểu là:",
        options: [
            "Quy tắc cố định không thay đổi",
            "Mối quan hệ nhân quả tương ưng",
            "Sự phân biệt giữa thiện và ác",
            "Học xứ chỉ dành cho tăng ni"
        ],
        correctAnswer: 1,
        explanation: " Nghĩa là mọi pháp sinh khởi do các nhân duyên. Tức là: có nhân, có duyên, thì quả tương ứng phát sinh. Đây chính là mối quan hệ nhân – duyên – quả.."
    },
    {
        question: "Câu 66: “Thập nhị nhân duyên” là minh chứng cho:",
        options: [
            "Sự phát sinh của các quy định giới",
            "Quy luật nhân quả trong mọi hiện tượng",
            "Cách thức hành trì giới tại gia",
            "Phương pháp thiền định của Đức Phật"
        ],
        correctAnswer: 1,
        explanation: "12 nhân duyên cho thấy mọi hiện tượng đều sinh khởi theo quan hệ nhân – duyên – quả. Đây chính là nguyên lý duyên khởi trong Phật giáo."
    },
    {
        question: "Câu 67: Nguyên tắc chế giới cơ bản của Đức Phật là gì?",
        options: [
            "Chế giới dựa trên kinh điển",
            "Chế giới một cách hệ thống và đầy đủ ngay từ đầu",
            "Tùy phạm mà chế"
        ],
        correctAnswer: 2,
        explanation: "Đức Phật không thiết lập giới điều trước, mà đợi khi có đệ tử vi phạm mới căn cứ vào đó để chế giới (tùy phạm mà chế)."
    },
    {
        question: "Câu 68: Theo Kinh Tạp A Hàm Q33, thánh đệ tử trụ phải:",
        options: [
            "Chỉ giữ giới mà không cần học hỏi",
            "Thực hành giữ giới, luật nghi, oai nghi và hành xứ một cách cụ túc",
            "Chỉ quan tâm đến hình thức bên ngoài",
            "Tự ý thay đổi giới theo ý thích"
        ],
        correctAnswer: 1,
        explanation: "Kinh mô tả thánh đệ tử an trụ Ba-la-đề-mộc-xoa luật nghi, đầy đủ oai nghi, hành xứ và thọ trì học giới."
    },
    {
        question: "Câu 69: Theo “Kinh Trung bộ, kinh Trạm xe”, 7 trạm xe của người tu tập bắt đầu từ:",
        options: [
            "Chánh pháp cửu trụ",
            "Giới (tuân giữ nghiêm túc các học xứ đã học)",
            "Đoạn nghi",
            "Tri kiến thanh tịnh"
        ],
        correctAnswer: 1,
        explanation: "Trong Kinh Trạm Xe (Rathavinīta Sutta), tiến trình tu tập được ví như 7 trạm xe dẫn đến Niết-bàn.Trạm đầu tiên là: ➡ Giới thanh tịnh (giữ gìn nghiêm túc các học xứ). Sau đó mới tiến tới các mức thanh tịnh cao hơn như tâm, tri kiến, đoạn nghi…"
    },
    {
        question: "Câu 70: Đoạn tận thân kiến, giới cấm thủ và nghi đạt được gì?",
        options: [
            "Tư Đà Hàm",
            "A Na Hàm",
            "Tu Đà Hoàn",
            "A La Hán"
        ],
        correctAnswer: 2,
        explanation: "Khi đoạn tận 3 kiết sử đầu tiên (Thân kiến, Giới cấm thủ, Nghi), hành giả sẽ chứng đắc Sơ quả Tu-đà-hoàn."
    }
];

let userAnswers = [];
let answeredQuestions = [];

function initQuiz() {
    const totalQuestionsEl = document.getElementById('totalQuestions');
    if (totalQuestionsEl) {
        totalQuestionsEl.textContent = quizData.length;
    }
    
    userAnswers = new Array(quizData.length).fill(null);
    answeredQuestions = new Array(quizData.length).fill(false);

    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) progressBar.parentElement.style.display = 'none';
    
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';

    renderAllQuestions();
    
    const finishBtn = document.getElementById('finishBtn');
    if (finishBtn) finishBtn.style.display = 'block';
}

function renderAllQuestions() {
    const quizContainer = document.querySelector('.quiz-container');
    const buttonGroup = document.querySelector('.button-group');

    const oldQuestionText = document.getElementById('questionText');
    const oldOptionsContainer = document.getElementById('optionsContainer');
    const oldResultSection = document.getElementById('resultSection');
    
    if (oldQuestionText) oldQuestionText.style.display = 'none';
    if (oldOptionsContainer) oldOptionsContainer.style.display = 'none';
    if (oldResultSection) oldResultSection.style.display = 'none';

    let allQuestionsContainer = document.getElementById('all-questions-container');
    if (!allQuestionsContainer) {
        allQuestionsContainer = document.createElement('div');
        allQuestionsContainer.id = 'all-questions-container';
        // Chèn danh sách câu hỏi vào trước cụm nút bấm
        quizContainer.insertBefore(allQuestionsContainer, buttonGroup);
    } else {
        allQuestionsContainer.innerHTML = ''; // Làm sạch khi nhấn "Làm lại"
    }

    let questionsHTML = '';
    // Vòng lặp duyệt qua tất cả các câu hỏi để tạo HTML
    quizData.forEach((question, qIndex) => {
        questionsHTML += `
            <div class="question-block" id="question-block-${qIndex}" style="margin-bottom: 40px; padding-bottom: 20px; border-bottom: 2px dashed #ddd;">
                <div class="question-text" style="color: var(--primary-color); font-size: 1.2em; margin-bottom: 20px; font-weight: bold;">
                    ${question.question}
                </div>
                <div class="options-container" id="options-${qIndex}" style="display: flex; flex-direction: column; gap: 12px;">
        `;
        
        question.options.forEach((option, oIndex) => {
            questionsHTML += `
                    <div class="option" id="option-${qIndex}-${oIndex}" onclick="selectAnswer(${qIndex}, ${oIndex})">
                        <span class="option-letter">${String.fromCharCode(65 + oIndex)}</span>
                        <span>${option}</span>
                    </div>
            `;
        });

        questionsHTML += `
                </div>
                <div class="result-section" id="result-${qIndex}" style="display: none; margin-top: 20px; padding: 15px; border-radius: 8px;">
                    <div id="result-message-${qIndex}" class="result-message" style="font-weight: bold; margin-bottom: 10px;"></div>
                    <div id="correct-answer-${qIndex}" class="correct-answer" style="background-color: #e8f4f8; border-left: 4px solid var(--primary-color); padding: 15px; border-radius: 5px;"></div>
                </div>
            </div>
        `;
    });

    allQuestionsContainer.innerHTML = questionsHTML;
}

function selectAnswer(qIndex, oIndex) {
    if (answeredQuestions[qIndex]) return; // Nếu câu hỏi đã được chọn đáp án thì bỏ qua

    answeredQuestions[qIndex] = true;
    userAnswers[qIndex] = oIndex; // Lưu lại đáp án người dùng chọn

    const correctAnswer = quizData[qIndex].correctAnswer;
    const optionsContainer = document.getElementById(`options-${qIndex}`);
    const options = optionsContainer.querySelectorAll('.option');

    // Đổi màu đáp án
    options.forEach((option, idx) => {
        option.classList.add('disabled');
        if (idx === correctAnswer) {
            option.classList.add('correct');
        }
        if (idx === oIndex && idx !== correctAnswer) {
            option.classList.add('incorrect');
        }
    });

    showResultForQuestion(qIndex, oIndex === correctAnswer);
}

function showResultForQuestion(qIndex, isCorrect) {
    const resultSection = document.getElementById(`result-${qIndex}`);
    const resultMessage = document.getElementById(`result-message-${qIndex}`);
    const correctAnswerDisplay = document.getElementById(`correct-answer-${qIndex}`);
    const question = quizData[qIndex];

    resultSection.style.display = 'block';

    if (isCorrect) {
        resultMessage.textContent = '✅ Chính xác!';
        resultSection.style.backgroundColor = '#d5f4e6';
        resultMessage.style.color = 'var(--success-color)';
    } else {
        resultMessage.textContent = '❌ Sai rồi!';
        resultSection.style.backgroundColor = '#fadbd8';
        resultMessage.style.color = 'var(--error-color)';
    }

    const correctAnswerLetter = String.fromCharCode(65 + question.correctAnswer);
    const correctAnswerText = question.options[question.correctAnswer];

    let displayHTML = `
        <strong>Đáp án đúng:</strong> <strong>${correctAnswerLetter}. ${correctAnswerText}</strong>
    `;

    // Nếu có giải thích thì hiển thị thêm khung giải thích
    if (question.explanation) {
        displayHTML += `
            <div class="explanation-box" style="margin-top: 15px; padding: 10px; background-color: white; border-left: 4px solid var(--warning-color); border-radius: 4px;">
                <strong>Giải thích:</strong> ${question.explanation}
            </div>
        `;
    }

    correctAnswerDisplay.innerHTML = displayHTML;
}

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

    const correctCountEl = document.getElementById('correctCount');
    const totalCountEl = document.getElementById('totalCount');
    const scorePercentageEl = document.getElementById('scorePercentage');

    if(correctCountEl) correctCountEl.textContent = correctCount;
    if(totalCountEl) totalCountEl.textContent = quizData.length;
    if(scorePercentageEl) scorePercentageEl.textContent = percentage + '%';

    displayAnswerReview(correctCount);
}

function displayAnswerReview(correctCount) {
    const answerReview = document.getElementById('answerReview');
    if(!answerReview) return;
    answerReview.innerHTML = '';

    quizData.forEach((question, idx) => {
        const userAnswer = userAnswers[idx];
        const isCorrect = userAnswer === question.correctAnswer;

        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;

        const correctAnswerLetter = String.fromCharCode(65 + question.correctAnswer);
        const correctAnswerText = question.options[question.correctAnswer];

        let userAnswerHTML = '';
        if (userAnswer !== null && userAnswer !== undefined) {
            const questionLetter = String.fromCharCode(65 + userAnswer);
            const userAnswerText = question.options[userAnswer];
            userAnswerHTML = `<strong>Trả lời của bạn:</strong> ${questionLetter}. ${userAnswerText}<br>`;
        } else {
             userAnswerHTML = `<strong>Trả lời của bạn:</strong> <span style="color: #999;">Chưa trả lời</span><br>`;
        }

        reviewItem.innerHTML = `
            <div class="review-question">${idx + 1}. ${question.question}</div>
            <div class="review-answer">
                ${userAnswerHTML}
                ${isCorrect ? '<strong style="color: var(--success-color);">✅ Đúng!</strong>' : `<strong style="color: var(--error-color);">❌ Sai!</strong><br><strong>Đáp án đúng:</strong> ${correctAnswerLetter}. ${correctAnswerText}`}
            </div>
        `;

        answerReview.appendChild(reviewItem);
    });
}

function restartQuiz() {
    document.querySelector('.quiz-container').style.display = 'block';
    const finalScore = document.getElementById('finalScore');
    if(finalScore) finalScore.style.display = 'none';

    initQuiz();
    window.scrollTo(0, 0);
}

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const finishBtn = document.getElementById('finishBtn');
const restartBtn = document.getElementById('restartBtn');

if(nextBtn) nextBtn.replaceWith(nextBtn.cloneNode(true));
if(prevBtn) prevBtn.replaceWith(prevBtn.cloneNode(true));

if(finishBtn) {
    const newFinishBtn = finishBtn.cloneNode(true);
    finishBtn.replaceWith(newFinishBtn);
    newFinishBtn.addEventListener('click', finishQuiz);
}
if(restartBtn) {
    const newRestartBtn = restartBtn.cloneNode(true);
    restartBtn.replaceWith(newRestartBtn);
    newRestartBtn.addEventListener('click', restartQuiz);
}

window.onload = initQuiz;
