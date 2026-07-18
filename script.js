/* TopLead Website - JavaScript */

var currentLang = "vi";

var translations = {
  vi: {
    "nav.home": "Trang chủ",
    "nav.about": "Về chúng tôi",
    "nav.services": "Dịch vụ",
    "nav.approach": "Cách tiếp cận",
    "nav.jobs": "Việc làm",
    "nav.tools": "Tools & Content",
    "nav.contact": "Liên hệ",
    "nav.ourStory": "Câu chuyện",
    "nav.ourTeam": "Đội ngũ",
    "nav.whyChoose": "Tại sao chọn TopLead",
    "nav.clients": "Khách hàng & Đối tác",
    "nav.milestones": "Cột mốc",
    "nav.compare": "So sánh",
    "nav.guardian": "Guardian Screen",
    "nav.trustcare": "Trustcare Framework",
    "nav.guarantee": "Guarantee Framework",
    "nav.howItWorks": "Quy trình",
    "nav.workflow": "Cách làm việc",
    "nav.exclusive": "Độc quyền",
    "hero.badge": "TopLead Recruitment",
    "hero.slide1.line1": "Người Cũ Vừa Nghỉ.",
    "hero.slide1.line2": "Người Mới Vẫn Chưa Thấy Đâu?",
    "hero.slide1.desc": "TopLead gửi hồ sơ trong 48 giờ. Đã lọc sẵn theo đúng ngành bạn cần.",
    "hero.slide1.cta": "Tuyển ngay →",
    "hero.slide2.line1": "3 Hồ Sơ Đã Lọc Kỹ.",
    "hero.slide2.line2": "Bạn Chỉ Cần Chọn 1.",
    "hero.slide2.desc": "Không đọc hàng chục CV nữa. Chúng tôi lọc, bạn chọn, có người làm việc trong tuần.",
    "hero.slide2.cta": "Gửi yêu cầu →",
    "hero.slide3.line1": "Đang Thiếu Người Làm?",
    "hero.slide3.line2": "Đừng Để Ngày Mai Vẫn Vậy.",
    "hero.slide3.desc": "Mỗi ngày thiếu nhân sự là mỗi ngày doanh thu bị ảnh hưởng. Liên hệ hôm nay, có hồ sơ ngay ngày mai.",
    "hero.slide3.cta": "Liên hệ ngay →",
    "hero.slide4.line1": "Không Hợp Thì Đổi.",
    "hero.slide4.line2": "Không Hỏi Nhiều, Không Tốn Thêm.",
    "hero.slide4.desc": "Người TopLead giới thiệu đều có bảo hành thay thế. Vì chúng tôi chỉ gửi người mình tin.",
    "hero.slide4.cta": "Tìm hiểu thêm →",
    "founders.tag": "Đội ngũ sáng lập",
    "founders.title": "Những người sáng lập",
    "founders.f1.name": "Tạ Vinh An",
    "founders.f1.role": "CEO & Founder",
    "founders.f1.quote": "“Tôi tin rằng: mỗi người nên xứng đáng thuộc về đúng nơi họ cần.”",
    "founders.f1.exp1": "7+ năm kinh nghiệm HR & tuyển dụng cấp cao (IT, CS, FMCG, F&B, Hospitality, HR)",
    "founders.f1.exp2": "Chứng chỉ SHRM-CP (2026)",
    "founders.f2.name": "Nguyễn Trần Nhật Hưng",
    "founders.f2.role": "CFO & Co-Founder",
    "founders.f2.quote": "“Việc làm HR cũng giống như đối diện một vấn đề mà không có lời giải nào là hoàn toàn chính xác.”",
    "founders.f2.exp1": "5 năm kinh nghiệm tuyển dụng cho SMEs (Finance, Kế toán, Xây dựng, Cơ điện)",
    "founders.f3.name": "Vũ Quang Bình",
    "founders.f3.role": "CCO & Co-Founder",
    "founders.f3.quote": "“Không phải ai cũng là một cá nhân thiên tài - nhân sự giỏi cần được bồi đắp bởi đúng môi trường.”",
    "founders.f3.exp1": "Hơn 4 năm tuyển dụng chuyên nghiệp mảng sales B2C/B2B & phát triển kinh doanh (Bảo hiểm, Bất động sản, Xây dựng)",
    "logos.label": "Đối tác tin cậy của các công ty hàng đầu",
    "value.title": "Những nhân sự giỏi luôn đến từ người bạn tin tưởng",
    "value.card1.title": "Mạng lưới chuyên gia",
    "value.card1.desc": "Kết nối với hơn 10,000 ứng viên chất lượng cao từ nhiều ngành nghề khác nhau.",
    "value.card2.title": "Tìm kiếm chủ động",
    "value.card2.desc": "Không chờ ứng viên ứng tuyển, chúng tôi chủ động tìm kiếm và tiếp cận nhân tài phù hợp.",
    "services.tag": "Dịch vụ",
    "services.title": "Giải pháp tuyển dụng toàn diện",
    "services.subtitle": "Phục vụ mọi nhu cầu nhân sự của doanh nghiệp",
    "services.s1.title": "Tìm kiếm nhân sự cấp cao",
    "services.s1.desc": "Tuyển dụng CEO, CFO, Director và các vị trí quản lý cao cấp với quy trình kín đáo và hiệu quả.",
    "services.s2.title": "Xây dựng đội ngũ",
    "services.s2.desc": "Giúp startup và doanh nghiệp đang phát triển xây dựng đội ngũ từ giai đoạn foundation.",
    "services.s3.title": "Tuyển dụng công nghệ",
    "services.s3.desc": "Chuyên tuyển Developer, Data Scientist, Product Manager cho các công ty công nghệ.",
    "pain.tag": "Thách thức",
    "pain.title": "Bạn đang gặp vấn đề nào?",
    "pain.word1": "tuyển sai người",
    "pain.word2": "mất thời gian",
    "pain.word3": "tốn chi phí",
    "pain.word4": "thiếu nhân sự",
    "pain.p1.title": "Cần nhân sự gấp nhưng tuyển hoài không được",
    "pain.p1.desc": "Chúng tôi giúp bạn tiếp cận ứng viên phù hợp trong thời gian ngắn nhất.",
    "pain.p2.title": "Founder giỏi kỹ thuật nhưng không biết tuyển người",
    "pain.p2.desc": "Đội ngũ của chúng tôi hỗ trợ bạn xây dựng đội ngũ chuyên nghiệp.",
    "pain.p3.title": "Nhân sự cũ nghỉ, công việc bị đình trệ",
    "pain.p3.desc": "Quy trình handover nhanh chóng, giảm thiểu gián đoạn công việc.",
    "stats.title": "Bạn đang có đối tác tốt",
    "stats.s1.role": "Nhân sự cấp cao",
    "stats.s1.company": "cho TechCorp trong 12 tháng",
    "stats.s2.role": "Vị trí tuyển",
    "stats.s2.company": "cho VietRetail từ đầu năm",
    "stats.s3.role": "Nhân sự",
    "stats.s3.company": "cho BuildPro tại 14 chi nhánh",
    "stats.s4.role": "Vị trí Tech",
    "stats.s4.company": "cho LogiGroup trong 6 tháng",
    "jobs.tag": "Việc làm",
    "jobs.title": "Vị trí đang tuyển dụng",
    "jobs.subtitle": "Cơ hội nghề nghiệp hấp dẫn từ các doanh nghiệp hàng đầu",
    "jobs.apply": "Ứng tuyển ngay",
    "cta.title": "Sẵn sàng xây dựng đội ngũ xuất sắc?",
    "cta.subtitle": "Hãy để TopLead giúp bạn tìm ra nhân tài phù hợp",
    "cta.start": "Bắt đầu ngay",
    "testimonials.tag": "Đánh giá",
    "testimonials.title": "Khách hàng nói gì về chúng tôi",
    "tst.google": "Đánh giá 5★ trên Google",
    "testimonials.t1.text": "“Agency hỗ trợ tuyển rất nhanh — chỉ sau 5 ngày đã có 3 ứng viên phù hợp để phỏng vấn. Tiết kiệm rất nhiều thời gian cho đội ngũ HR nội bộ.”",
    "testimonials.t2.text": "“For real, TopLead hiểu rõ nhu cầu doanh nghiệp — không gửi hồ sơ đại trà mà chọn lọc rất kỹ. Rất recommend!”",
    "testimonials.t3.text": "“Dịch vụ tốt, rất recommend vì cam kết thực tế của họ.”",
    "contact.tag": "Liên hệ",
    "contact.title": "Bắt đầu hợp tác",
    "contact.subtitle": "Để lại thông tin, chúng tôi sẽ liên hệ lại trong 24 giờ.",
    "contact.phone": "Điện thoại",
    "contact.address": "Địa chỉ",
    "contact.addressValue": "791/92F Trần Xuân Soạn, phường Tân Hưng, TP. HCM",
    "contact.tab1": "Ứng viên",
    "contact.tab2": "Nhà tuyển dụng",
    "footer.tagline": "Kết nối đúng người với đúng doanh nghiệp — đối tác tuyển dụng có trách nhiệm.",
    "footer.follow": "Theo dõi chúng tôi",
    "footer.services": "Dịch vụ",
    "footer.s1": "Tìm kiếm nhân sự cấp cao",
    "footer.s2": "Xây dựng đội ngũ",
    "footer.s3": "Tuyển dụng công nghệ",
    "footer.s4": "Đánh giá năng lực",
    "footer.company": "Công ty",
    "footer.about": "Về chúng tôi",
    "footer.approach": "Cách tiếp cận",
    "footer.jobs": "Việc làm",
    "footer.tools": "Công cụ",
    "footer.contact": "Liên hệ",
    "footer.emailsTitle": "Email liên hệ",
    "footer.officeTitle": "Văn phòng TopLead",
    "footer.addressLabel": "Địa chỉ",
    "footer.address": "791/92F Trần Xuân Soạn, phường Tân Hưng, TP. HCM",
    "footer.phoneLabel": "Điện thoại",
    "footer.emailLabel": "Email",
    "footer.directions": "Xem chỉ đường",
    "footer.rights": "Tất cả quyền được bảo lưu.",
    "form.name": "Họ và tên",
    "form.email": "Email",
    "form.phone": "Số điện thoại",
    "form.optional": "(Tùy chọn)",
    "form.cv": "Đính kèm CV/Resume",
    "form.drag": "Kéo thả file hoặc",
    "form.choose": "chọn file",
    "form.maxSize": "tối đa 5MB",
    "form.company": "Tên công ty",
    "form.position": "Vị trí cần tuyển",
    "form.quantity": "Số lượng",
    "form.message": "Nội dung",
    "form.optional2": "(Tùy chọn)",
    "form.submit": "Gửi thông tin",
    "form.success": "Cảm ơn bạn!",
    "form.successMsg": "Đội ngũ TopLead sẽ liên hệ với bạn trong 24 giờ làm việc.",
    "page.hero.title": "Liên hệ",
    "page.hero.subtitle": "Kết nối với TopLead để tìm kiếm cơ hội hoặc tư vấn dịch vụ",
    "contact.tab.employer": "Nhà tuyển dụng",
    "contact.tab.candidate": "Ứng viên",
    "contact.form.name": "Họ và tên *",
    "contact.form.namePlaceholder": "Nhập họ và tên",
    "contact.form.email": "Email công ty *",
    "contact.form.emailPlaceholder": "email@company.com",
    "contact.form.phone": "Số điện thoại *",
    "contact.form.phonePlaceholder": "+84 xxx xxx xxx",
    "contact.form.company": "Tên công ty *",
    "contact.form.companyPlaceholder": "Tên công ty",
    "contact.form.service": "Dịch vụ quan tâm",
    "contact.form.serviceSelect": "Chọn dịch vụ...",
    "contact.form.quantity": "Số lượng tuyển dụng",
    "contact.form.quantitySelect": "Chọn số lượng...",
    "contact.form.demand": "Nhu cầu tuyển dụng",
    "contact.form.demandPlaceholder": "Mô tả ngắn về nhu cầu tuyển dụng...",
    "contact.form.position": "Vị trí quan tâm",
    "contact.form.positionPlaceholder": "Vị trí mong muốn",
    "contact.form.experience": "Kinh nghiệm",
    "contact.form.experienceSelect": "Chọn mức kinh nghiệm...",
    "contact.form.linkedin": "Link LinkedIn / Portfolio",
    "contact.form.linkedinPlaceholder": "https://linkedin.com/in/...",
    "contact.form.note": "Ghi chú thêm",
    "contact.form.notePlaceholder": "Giới thiệu ngắn về bản thân...",
    "contact.form.uploadCV": "Upload CV",
    "contact.form.uploadCVLabel": "Tải lên CV (PDF, DOC)",
    "contact.form.submit": "Gửi yêu cầu",
    "contact.form.submitCandidate": "Gửi hồ sơ",
    "contact.info.address": "Địa chỉ",
    "contact.info.addressValue": "Tầng 8, Tòa nhà ABC<br>123 Nguyễn Trãi, Quận 1<br>TP. Hồ Chí Minh, Việt Nam",
    "contact.info.phone": "Điện thoại",
    "contact.info.email": "Email",
    "contact.info.hours": "Giờ làm việc",
    "contact.info.hoursValue": "Thứ 2 - Thứ 6: 8:30 - 18:00<br>Thứ 7: 8:30 - 12:00",
    "contact.social.title": "Kết nối với TopLead",
    "contact.social.subtitle": "Theo dõi chúng tôi để cập nhật tin tức và cơ hội việc làm mới nhất",
    "contact.faq.title": "Câu hỏi thường gặp",
    "contact.faq.q1": "TopLead có phí cho ứng viên không?",
    "contact.faq.a1": "Không. TopLead cung cấp dịch vụ hoàn toàn miễn phí cho ứng viên.",
    "contact.faq.q2": "Thời gian tuyển dụng mất bao lâu?",
    "contact.faq.a2": "Với quy trình TopLead, trung bình chỉ 14 ngày để fill một vị trí.",
    "contact.faq.q3": "Có bảo hành không?",
    "contact.faq.a3": "TopLead cam kết 3 tháng bảo hành thay thế miễn phí.",
    "contact.faq.q4": "Làm sao để theo dõi tiến trình?",
    "contact.faq.a4": "Bạn sẽ được cập nhật thường xuyên qua email và phone.",
    "jobs.hero.title": "Việc làm",
    "jobs.hero.subtitle": "Cơ hội nghề nghiệp hấp dẫn từ các doanh nghiệp hàng đầu",
    "jobs.filter.search": "Tìm kiếm",
    "jobs.filter.searchPlaceholder": "Tên vị trí, từ khóa...",
    "jobs.filter.industry": "Ngành nghề",
    "jobs.filter.location": "Địa điểm",
    "jobs.filter.level": "Cấp bậc",
    "jobs.filter.all": "Tất cả",
    "jobs.count": "Hiển thị 12 vị trí tuyển dụng",
    "jobs.apply": "Ứng tuyển ngay",
    "jobs.cta.title": "Không tìm thấy vị trí phù hợp?",
    "jobs.cta.subtitle": "Để lại CV, chúng tôi sẽ liên hệ khi có cơ hội phù hợp",
    "jobs.cta.button": "Gửi CV ngay",
    "tools.hero.title": "Tools & Content",
    "tools.hero.subtitle": "Tài nguyên hữu ích cho nhà tuyển dụng và ứng viên",
    "tools.blog.tag": "Blog",
    "tools.blog.title": "Bài viết mới nhất",
    "tools.blog.subtitle": "Cập nhật xu hướng và kinh nghiệm tuyển dụng",
    "tools.resources.tag": "Resources",
    "tools.resources.title": "Công cụ & Tài nguyên",
    "tools.resources.subtitle": "Tải miễn phí các tài liệu hữu ích",
    "tools.resources.download": "Tải xuống ↓",
    "tools.newsletter.title": "Đăng ký nhận bản tin",
    "tools.newsletter.subtitle": "Nhận cập nhật xu hướng tuyển dụng và mẹo hữu ích mỗi tuần",
    "tools.newsletter.placeholder": "Nhập email của bạn",
    "tools.newsletter.button": "Đăng ký",
    "tools.cta.title": "Cần tư vấn về nhân sự?",
    "tools.cta.subtitle": "Liên hệ đội ngũ TopLead để được hỗ trợ",
    "tools.cta.button": "Liên hệ ngay",
    "services.option": "Chọn dịch vụ...",
    "services.optionExec": "Executive Search",
    "services.optionStaff": "Staffing",
    "services.optionRPO": "RPO",
    "services.optionHead": "Headhunting",
    "services.optionConsult": "HR Consulting",
    "services.optionOther": "Khác",
    "experience.none": "Chưa có kinh nghiệm",
    "experience.1to2": "1-2 năm",
    "experience.3to5": "3-5 năm",
    "experience.5to10": "5-10 năm",
    "experience.10plus": "10+ năm",
    "about.hero.title": "Về chúng tôi",
    "about.hero.subtitle": "Đối tác tuyển dụng có trách nhiệm cho doanh nghiệp Việt Nam",
    "approach.hero.title": "Cách tiếp cận",
    "approach.hero.subtitle": "Phương pháp tuyển dụng độc đáo của TopLead",
    "approach.compare.tag": "So sánh",
    "approach.compare.title": "Traditional Recruitment vs TopLead",
    "approach.compare.subtitle": "Sự khác biệt rõ rệt trong cách tiếp cận tuyển dụng",
    "approach.exclusive.tag": "Độc quyền",
    "approach.exclusive.title": "3 Đặc trưng của TopLead",
    "approach.exclusive.subtitle": "Những quy trình và cam kết riêng có của TopLead",
    "approach.guardian.title": "Guardian Screen",
    "approach.guardian.desc": "Quy trình sàng lọc 5 bước đảm bảo chất lượng ứng viên",
    "approach.trustcare.title": "Trustcare",
    "approach.trustcare.desc": "Cam kết chất lượng dựa trên 3 trụ cột minh bạch",
    "approach.guarantee.title": "Guarantee",
    "approach.guarantee.desc": "3 tháng bảo hành thay thế miễn phí",
    "approach.howitworks.tag": "Process",
    "approach.howitworks.title": "How It Works",
    "approach.howitworks.subtitle": "Quy trình 6 bước để tìm đúng người cho đúng vị trí",
    "approach.workflow.tag": "Workflow",
    "approach.workflow.title": "Quy trình làm việc",
    "approach.workflow.subtitle": "Công khai - Minh bạch - Hiệu quả",
    "approach.research.tag": "Research",
    "approach.research.title": "Số liệu nói lên sự khác biệt",
    "approach.cta.title": "Sẵn sàng xây dựng đội ngũ xuất sắc?",
    "approach.cta.subtitle": "Hãy để TopLead giúp bạn tìm ra nhân tài phù hợp",
    "approach.cta.button": "Bắt đầu ngay",
    "approach.testimonials.tag": "Đánh giá",
    "approach.testimonials.title": "Đối tác nói gì về TopLead",
    "services.hero.title": "Dịch vụ",
    "services.hero.subtitle": "Giải pháp tuyển dụng toàn diện cho doanh nghiệp",
    "post.readUnit": "phút đọc",
    "post.cta.title": "Cần một đối tác tuyển dụng có trách nhiệm?",
    "post.cta.sub": "TopLead chỉ thu phí khi ứng viên vượt qua thử việc. Hãy bắt đầu cuộc trò chuyện.",
    "post.cta.contact": "Liên hệ TopLead",
    "post.cta.all": "← Tất cả bài viết",
    "b1.cat": "Nghề HR",
    "b1.title": "Nghề HR? Tại sao không?",
    "b1.teaser": "Nghề nghiệp tình cờ trở nên có chủ đích ngay khi bạn xem con người là đòn bẩy, không phải chi phí.",
    "b2.cat": "Bền vững",
    "b2.title": "Không chỉ là một dự án — Đó là một tư duy",
    "b2.teaser": "Vì sao TopLead không thu phí cho đến khi ứng viên vượt qua thử việc — và cái giá thật sự của sự bền vững.",
    "b3.cat": "Mô hình tuyển dụng",
    "b3.title": "Thử việc mới là buổi phỏng vấn thật sự",
    "b3.teaser": "Ai cũng có thể tỏa sáng trong 30 phút. Buổi phỏng vấn thật sự bắt đầu từ ngày thứ 60.",
    "b4.cat": "Cơ chế",
    "b4.title": "Tuyển dụng không thiếu nhân tài. Vấn đề nằm ở cơ chế.",
    "b4.teaser": "Mọi hệ thống đều tạo ra hành vi mà nó tưởng thưởng. Vấn đề thật sự của tuyển dụng không phải là nhân tài.",
    "b5.cat": "Ứng viên",
    "b5.title": "Sự do dự khiến bạn trả giá nhiều hơn bạn nghĩ",
    "b5.teaser": "Người được nhận không phải là người giỏi nhất trên giấy — mà là người hành động trước.",
    "b6.cat": "Doanh nghiệp SME",
    "b6.title": "Vì sao SME liên tục mất ứng viên giỏi vào tay tập đoàn",
    "b6.teaser": "SME không thể trả lương cao hơn tập đoàn. Họ thua ở quy trình — và điều đó có thể khắc phục.",
    "b7.cat": "Giữ chân nhân sự",
    "b7.title": "Nghỉ việc thầm lặng — Trường hợp trăm năm",
    "b7.teaser": "Kiểu nghỉ việc tốn kém nhất là kiểu không bao giờ nộp đơn xin nghỉ.",
    "sig.b1": "Nghề nghiệp tình cờ trở nên có chủ đích ngay khi con người nhận ra: tầm ảnh hưởng vượt trên quyền lực.",
    "body.b1": "<p class=\"post-lead\">Không ai lớn lên mà mơ ước được làm nghề HR.</p>\n      <p>Trẻ con nói bác sĩ, phi công, cầu thủ. Không ai nói “người xây dựng đội ngũ”. Vậy mà nghiên cứu cho thấy phần lớn người làm HR chưa từng dự định đi con đường này — họ tình cờ bước vào, rồi không nỡ rời đi (SHRM 2025).</p>\n      <p>Vì sao? Điều gì phân biệt người chọn công việc này với người xem thường nó? Người bỏ đi chỉ thấy chi phí. Giấy tờ, quy định, những cuộc trò chuyện chẳng ai muốn nhận. Họ muốn một nấc thang rõ ràng và một chức danh dễ đoán. Cũng dễ hiểu thôi — nhưng họ nhầm lẫn giữa khó khăn và sự vô nghĩa.</p>\n      <p>Người ở lại thì thấy đòn bẩy. Họ biết rằng 40% người làm HR bước vào ngành vì muốn phát triển tổ chức, không phải vì nghĩa vụ, và chỉ 7% xem đó là công việc lấy lương (BambooHR 2026). Họ hiểu rằng một quyết định duy nhất — tuyển ai, phát triển ai, giữ ai — sẽ lan tỏa khắp cả một công ty. Văn hóa là tài sản duy nhất đối thủ không thể sao chép, và 97% lãnh đạo HR ngày nay xem đó là ưu tiên hàng đầu (Gartner 2025).</p>\n      <p>Đó mới là ranh giới thật sự. Không phải mềm hay cứng. Không phải an toàn hay rủi ro. Mà là bạn xem con người là chi phí phải quản lý, hay là động cơ của mọi thứ theo sau.</p>\n      <p>Vậy nên hãy lựa chọn một cách có chủ đích. Đội ngũ bạn xây dựng sẽ nhớ bạn đã chọn điều gì.</p>\n      <div class=\"post-refs\"><span class=\"post-refs-label\">Nguồn tham khảo</span><p>BambooHR (2026) The Definitive Guide to HR Career Growth. &middot; Gartner (2025), trích trong Compono (2025) Full Research: Latest HR &amp; Talent Statistics (2025). &middot; SHRM (2025) Breaking into HR Without Official Experience.</p></div>",
    "sig.b2": "Sự bền vững chỉ thật sự có ý nghĩa khi việc giữ gìn nó khiến bạn phải trả giá.",
    "body.b2": "<p class=\"post-lead\">Tôi từng nghĩ sự bền vững là thứ có thể chứng minh được. Một dự án. Một tấm chứng nhận. Một cái bắt tay từ người có tầm ảnh hưởng. Rồi tôi nhận ra mình đã sai ngay từ đầu.</p>\n      <p>Bền vững không phải thứ bạn giành được trong một cuộc thi. Đó là điều bạn lựa chọn — một cách lặng lẽ, nhất quán — trong mỗi quyết định không có khán giả và không ai chấm điểm. Và chính nhận thức đó đã định hình cách tôi xây dựng công ty của mình. Không phí trả trước. Không thu phí cho đến khi ứng viên vượt qua thử việc. Chỉ thanh toán khi kết quả là thật — khi người được tuyển thật sự phù hợp, thật sự gắn bó, thật sự đóng góp. Phần lớn trong ngành né tránh mô hình này vì nó không thoải mái. Bạn phải gánh rủi ro. Bạn phải hấp thụ sự bất định. Nhưng chính sự khó chịu đó mới là mấu chốt — bởi bền vững chỉ có ý nghĩa khi việc giữ gìn nó khiến bạn phải trả giá.</p>\n      <p>Chiến thắng cuộc thi ấy không dạy tôi bền vững trông ra sao trên một tấm chứng nhận. Nó dạy tôi bền vững phải trông ra sao trong thực tế: mỗi lần tuyển, mỗi khách hàng, mỗi quyết định mà không ai chấm điểm ngoài chính bạn. Tiêu chuẩn không nằm trên tường. Nó nằm trong cách bạn vận hành khi không ai nhìn.</p>",
    "sig.b3": "<div class=\"post-stat\"><b>46%</b><span>nhân sự mới thất bại trong 18 tháng đầu</span></div><div class=\"post-stat\"><b>82%</b><span>quản lý tuyển dụng đã nhận ra dấu hiệu từ trước (TriNet 2026)</span></div>",
    "body.b3": "<p class=\"post-lead\">Ai cũng có thể tỏa sáng trong 30 phút bên bàn phỏng vấn. Câu hỏi là họ là ai vào ngày thứ 60.</p>\n      <p>Đây chính là khoảng trống đã tạo nên mô hình của TopLead ngay từ đầu. Không phí khi tuyển. Chỉ thanh toán sau khi ứng viên vượt qua thử việc — vì đó mới là lúc việc tuyển dụng thật sự được chứng minh. Chúng tôi gánh rủi ro cho đến khi kết quả là thật.</p>\n      <p>Phần lớn công ty tuyển dụng sẽ không đưa ra cam kết này. Không phải vì bất khả thi, mà vì nó đòi hỏi một điều không thoải mái: cùng đặt cược, rất lâu sau cái bắt tay. Trách nhiệm trong tuyển dụng không phải một chính sách. Đó là một lập trường. Nó có nghĩa là thành công của bạn gắn liền về mặt cấu trúc với thành công của khách hàng — chứ không tách rời ngay khi hợp đồng được ký.</p>\n      <p>Doanh nghiệp mất 20% nhân sự mới trong 45 ngày đầu (Reworked 2026). Con số đó sẽ không thay đổi cho đến khi những người chịu trách nhiệm tuyển họ vẫn còn chịu trách nhiệm sau khi tuyển.</p>\n      <p>Giai đoạn thử việc phơi bày mọi thứ mà buổi phỏng vấn không bao giờ làm được. Câu hỏi duy nhất là: đối tác tuyển dụng của bạn có còn dõi theo khi điều đó xảy ra hay không.</p>\n      <div class=\"post-refs\"><span class=\"post-refs-label\">Nguồn tham khảo</span><p>TriNet (2026) &middot; Reworked (2026) — 20% nhân sự mới rời đi trong 45 ngày đầu.</p></div>",
    "sig.b4": "Đó không phải vấn đề tuyển dụng. Đó là vấn đề cơ chế.",
    "body.b4": "<p class=\"post-lead\">Tuyển dụng chưa bao giờ rẻ. Chi phí trung bình cho mỗi lần tuyển nay đã vượt 5.400 USD, và lấp đầy một vị trí không thuộc cấp điều hành mất trung bình 44 ngày (SHRM 2025).</p>\n      <p>Vậy mà trong nhiều mô hình tuyển dụng, một bên được thưởng ngay khoảnh khắc thư mời được ký. Bên còn lại phải nhiều tuần — hoặc nhiều tháng — sau mới biết quyết định tuyển dụng có thật sự hiệu quả hay không.</p>\n      <p>Suy cho cùng, mọi hệ thống đều tạo ra hành vi mà nó tưởng thưởng. Nếu thành công được đo bằng số lần tuyển, hãy chờ đợi nhiều lần tuyển hơn. Nếu thành công được đo bằng số lần tuyển thành công, thì mọi quyết định — từ tìm nguồn, sàng lọc đến theo dõi sau tuyển — sẽ trông hoàn toàn khác.</p>\n      <p>Những mô hình tuyển dụng tốt nhất không chỉ tìm ra ứng viên. Chúng khiến trách nhiệm kéo dài đúng bằng chính quyết định tuyển dụng.</p>",
    "sig.b5": "Chần chừ không phải là thận trọng. Trong thị trường hôm nay, đó là đánh mất cơ hội.",
    "body.b5": "<p class=\"post-lead\">Lý do phổ biến nhất khiến người tài bỏ lỡ cơ hội không phải là thiếu năng lực — mà là sự do dự.</p>\n      <ul>\n        <li>Chờ đợi “thời điểm hoàn hảo”.</li>\n        <li>Bản năng im lặng cho đến khi cảm thấy sẵn sàng 100%.</li>\n        <li>Quyết định lịch sự rằng sẽ “theo dõi sau”.</li>\n      </ul>\n      <p>Trong thị trường cạnh tranh ngày nay, chần chừ không chỉ là thận trọng, mà còn là đánh mất cơ hội. Người được nhận không phải lúc nào cũng giỏi nhất trên giấy. Nhưng chắc chắn, họ là người hành động trước — người ứng tuyển trước khi cảm thấy hoàn toàn sẵn sàng, người lên tiếng trong phỏng vấn thay vì chờ được hỏi, người theo đuổi đến cùng thay vì chờ được chọn.</p>\n      <p>Nhà tuyển dụng đọc được sự quyết đoán đó rất rõ — họ thấy tinh thần làm chủ, sự chủ động và động lực ở con người: chính là những phẩm chất phân biệt một ứng viên tốt với một ứng viên dễ bị lãng quên. Nếu bạn là ứng viên, lời khuyên của tôi rất đơn giản: đừng chờ thời điểm hoàn hảo vì nó không tồn tại. Hãy tiến lên, đặt câu hỏi táo bạo, và để sự chủ động lên tiếng trước cả CV của bạn.</p>\n      <p>Tại TopLead, chúng tôi không tưởng thưởng cho những hồ sơ ồn ào nhất — chúng tôi ghép nối thái độ và năng lực với đúng nhà tuyển dụng. Nhưng chúng tôi chỉ có thể mở cánh cửa khi bạn sẵn sàng bước qua.</p>",
    "sig.b6": "<div class=\"post-split-col\"><b>SME</b><span>89% không thể trả lương ngang tập đoàn (Employment Hero 2024)</span></div><div class=\"post-split-vs\">vs</div><div class=\"post-split-col\"><b>Tập đoàn</b><span>Thắng nhờ cấu trúc, không phải bản chất</span></div>",
    "body.b6": "<p class=\"post-lead\">89% doanh nghiệp SME không thể trả lương ngang tập đoàn (Employment Hero 2024), nhưng lương không phải lý do khiến họ thua.</p>\n      <p>Khoảng cách thật sự nằm ở quy trình. Thời gian trung bình từ khi đăng tin đến khi tuyển được đã lên tới 48 ngày — tăng 65% chỉ trong ba năm (BambooHR 2026). Trong khi đó, ứng viên hàng đầu rời khỏi thị trường trong vòng 10 ngày (Movement Search &amp; Delivery 2026).</p>\n      <p>Và ứng viên nhận ra điều đó: 42% rút khỏi quá trình tuyển dụng chỉ vì việc sắp lịch quá lâu (iHire 2023). 93% quản lý tuyển dụng cũng thừa nhận quy trình chậm hơn so với hai năm trước (Robert Half 2025).</p>\n      <p>Điều trớ trêu là: SME vốn đã có thứ mà ứng viên ngày nay mong muốn:</p>\n      <ul>\n        <li>71% người lao động nói rằng cơ hội phát triển quyết định sự hài lòng trong công việc (Gallup, trích trong COSE 2025).</li>\n        <li>39% xếp tiềm năng thăng tiến là yếu tố quan trọng nhất (Yoh 2025). Công ty nhỏ mang lại cả hai — thăng tiến nhanh hơn, va chạm rộng hơn, tiếp cận lãnh đạo trực tiếp hơn.</li>\n      </ul>\n      <p>Nhưng phần lớn SME không bao giờ nói rõ điều này. Họ đăng những bản mô tả công việc chung chung, vận hành quy trình chậm chạp, và mất ứng viên vào tay những công ty đơn giản là ra tay trước.</p>\n      <h2>Ba cách khắc phục cho SME</h2>\n      <ul>\n        <li><strong>Bán vị trí.</strong> Người này sẽ đảm nhận chính xác điều gì? Họ sẽ xây dựng gì? Đóng góp gì? Tất cả nên rõ ràng trong JD.</li>\n        <li><strong>Rút ngắn tiến độ.</strong> Hai vòng phỏng vấn. Một tuần. Một lời mời dứt khoát. Cho thấy lộ trình phát triển — chỉ cần một câu trả lời rõ ràng cho “12 tháng nữa vị trí này dẫn đến đâu?”.</li>\n        <li><strong>Cạnh tranh bằng cấu trúc.</strong> Tập đoàn không thắng nhờ bản chất. Họ thắng nhờ cấu trúc.</li>\n      </ul>\n      <p>Tại TopLead, chúng tôi giúp các SME Việt Nam thu hẹp khoảng cách đó — ghép đúng ứng viên vào các vị trí chuyên môn trong Sales, Marketing, Tài chính, HR và Vận hành. Chúng tôi không chỉ gửi CV. Chúng tôi đảm bảo nhân tài nhìn thấy điều khiến công ty bạn đáng để gia nhập.</p>",
    "sig.b7": "<div class=\"post-stat\"><b>24%</b><span>tỷ lệ nghỉ việc tại Việt Nam, so với mức lý tưởng ~10% (Anphabe 2023)</span></div><div class=\"post-stat\"><b>$228&ndash;355M</b><span>thất thoát mỗi năm do mất gắn kết tại một công ty S&amp;P 500 cỡ trung (McKinsey 2023)</span></div>",
    "body.b7": "<p class=\"post-lead\">Phần lớn chủ doanh nghiệp SME chỉ ghi nhận việc nghỉ việc vào thời điểm nộp đơn. Nhưng khi đó, tổn thất đã cũ.</p>\n      <p>Chi phí thật sự bắt đầu từ nhiều tháng trước, khi một nhân viên vẫn còn hiện diện, vẫn làm ở mức tối thiểu, nhưng đã mất gắn kết. Đó gọi là nghỉ việc thầm lặng, và nó không xuất hiện trên bất kỳ báo cáo nào cho đến khi quá muộn để ngăn chặn.</p>\n      <h2>Dữ liệu và theo dõi</h2>\n      <p>Tỷ lệ nghỉ việc tại Việt Nam đã lên tới 24%, so với mức “lý tưởng” khoảng 10% cho một tổ chức ổn định. Tỷ lệ nghỉ cao nhất lại rơi vào đúng những bộ phận mà SME phụ thuộc nhiều nhất: Marketing, Sales, IT và Tài chính (Anphabe 2023). Sự mất gắn kết đi trước đó thậm chí còn tốn kém hơn cả việc rời đi. McKinsey ước tính một công ty S&amp;P 500 cỡ trung mất từ 228 đến 355 triệu USD mỗi năm do mất gắn kết và nghỉ việc, với hơn một nửa lực lượng lao động điển hình mất gắn kết tại bất kỳ thời điểm nào (McKinsey &amp; Company 2023). Quy luật này đúng bất kể quy mô công ty: sự rút lui diễn ra âm thầm, năng suất hao hụt liên tục, và chi phí tích tụ từ rất lâu trước khi lá đơn xin nghỉ xuất hiện.</p>\n      <h2>Nguyên nhân gốc rễ</h2>\n      <p>Những lần ra đi này hiếm khi vì lương. Chúng bắt nguồn từ sự lệch pha ngay tại thời điểm tuyển — sai người, sai kỳ vọng, hoặc sai văn hóa. Khi một doanh nghiệp tuyển vội để lấp chỗ trống, họ không giải quyết được vấn đề. Họ khởi động lại đúng vòng lặp đó, và gánh chi phí mất gắn kết thêm một lần nữa.</p>\n      <h2>Ý nghĩa đối với SME</h2>\n      <p>Tất cả nằm ở độ chính xác của lần tuyển đầu tiên. Đó là lý do TopLead sàng lọc cả hai phía của sự phù hợp, đánh giá ứng viên cho doanh nghiệp và đánh giá doanh nghiệp cho ứng viên. Khi sự phù hợp là thật ở cả hai đầu, mức gắn kết bắt đầu cao và được duy trì, thu hẹp khoảng trống nơi nghỉ việc thầm lặng bén rễ.</p>\n      <p><strong>Ngừng tuyển lại. Bắt đầu phát triển.</strong></p>\n      <div class=\"post-refs\"><span class=\"post-refs-label\">Nguồn tham khảo</span><p>Anphabe (2023), qua Vietnam News / Staffing Industry Analysts — tỷ lệ nghỉ việc tại Việt Nam ở mức 24% so với 10% tối ưu; nghỉ nhiều nhất ở marketing, sales, IT, tài chính. &middot; McKinsey &amp; Company (2023), “Some employees are destroying value. Others are building it.”</p></div>",
    "about.story.title": "Câu chuyện TopLead",
    "about.story.p1": "TopLead ra đời từ một niềm tin đơn giản nhưng khó thực hiện: mỗi người xứng đáng thuộc về đúng nơi họ cần, và mỗi doanh nghiệp xứng đáng có đúng người.",
    "about.story.p2": "Trong một thị trường nơi tuyển dụng thường được đo bằng số lượng hồ sơ, chúng tôi chọn đo bằng kết quả thật sự. Đó là lý do TopLead chỉ thu phí khi ứng viên vượt qua thử việc — cùng gánh rủi ro với khách hàng, và sàng lọc hai chiều để sự phù hợp bền vững ngay từ ngày đầu.",
    "about.story.p3": "Với kinh nghiệm trải rộng nhiều ngành (IT, Tài chính, FMCG, F&B, Bất động sản, Xây dựng…), đội ngũ TopLead không chỉ lấp đầy vị trí trống. Chúng tôi kết nối con người với đúng môi trường để phát triển, và giúp doanh nghiệp giữ được người giỏi lâu hơn.",
    "about.stat1": "Năm kinh nghiệm cộng dồn",
    "about.stat2": "Doanh nghiệp đối tác",
    "about.stat3": "Ứng viên được kết nối",
    "about.stat4": "Vượt qua thử việc",
    "partner.tag": "Đối tác của bạn",
    "partner.title": "Bạn đang có một đối tác tốt",
    "partner.subtitle": "Không phải lời hứa — mà là cách chúng tôi đặt cược cùng bạn.",
    "partner.s1": "năm kinh nghiệm cộng dồn của đội ngũ sáng lập",
    "partner.s2": "nhóm ngành chuyên sâu: IT, Tài chính, FMCG, F&B, BĐS, Xây dựng",
    "partner.s3": "để gửi hồ sơ đầu tiên đã được sàng lọc",
    "partner.s4": "phí trả trước — bạn chỉ thanh toán sau khi ứng viên vượt qua thử việc",
    "partner.v1.title": "Mạng lưới chuyên gia",
    "partner.v1.desc": "Kết nối với ứng viên chất lượng cao trên nhiều nhóm ngành khác nhau.",
    "partner.v2.title": "Tìm kiếm chủ động",
    "partner.v2.desc": "Không chờ ứng viên ứng tuyển — chúng tôi chủ động tìm và tiếp cận đúng người.",
    "cta.services": "Tìm giải pháp phù hợp cho bạn",
    "cta.pain": "Để TopLead giải quyết cho bạn",
    "services.lead": "Chúng tôi không chỉ lấp đầy vị trí trống — chúng tôi ghép đúng người với đúng doanh nghiệp.",
    "services.leadsub": "Và chỉ tính phí khi ứng viên ở lại sau thử việc. Rủi ro thuộc về chúng tôi, kết quả thuộc về bạn.",
    "pain.lead": "Hàng trăm CV, deadline gấp, và nỗi lo tuyển sai người.",
    "pain.leadsub": "TopLead giúp bạn thoát khỏi mớ hỗn độn đó — sàng lọc kỹ và gửi đúng hồ sơ trong 48 giờ.",
    "serve.tag": "Đối tượng phục vụ",
    "serve.title": "Chuyên sâu cho doanh nghiệp SME",
    "serve.desc": "TopLead đồng hành cùng các doanh nghiệp vừa và nhỏ tại Việt Nam — nơi mỗi lần tuyển đúng người tạo ra khác biệt lớn nhất.",
    "philosophy.quote": "Nhân sự không phải là chi phí — đó là động cơ của mọi thứ theo sau.",
    "svc.o.title": "Giải pháp tuyển dụng toàn diện",
    "svc.o.sub": "TopLead cung cấp đa dạng dịch vụ phù hợp với mọi nhu cầu nhân sự",
    "svc.s1": "Tìm kiếm và tiếp cận nhân sự cấp cao (C-level, VP, Director) với quy trình kín đáo và chuyên nghiệp.",
    "svc.s2": "Cung cấp nhân sự theo yêu cầu - từ nhân viên đến quản lý, phù hợp cho các dự án hoặc nhu cầu ngắn hạn.",
    "svc.s3": "Recruitment Process Outsourcing — thuê ngoài toàn bộ hoặc một phần quy trình tuyển dụng cho TopLead.",
    "svc.m1": "Chủ động tiếp cận và thuyết phục ứng viên tiềm năng từ đối thủ cạnh tranh.",
    "svc.m2": "Tư vấn chiến lược nhân sự, xây dựng quy trình tuyển dụng nội bộ.",
    "svc.m3": "Sàng lọc ứng viên theo tiêu chuẩn của doanh nghiệp, tiết kiệm thời gian.",
    "svc.m4": "Đánh giá năng lực ứng viên qua các bài test chuyên môn và tâm lý.",
    "svc.ind": "Ngành nghề chúng tôi phục vụ",
    "svc.why": "Tại sao chọn dịch vụ TopLead?",
    "svc.why1": "Gửi hồ sơ đầu tiên trong 48 giờ",
    "svc.why2": "Bước sàng lọc nghiêm ngặt",
    "svc.why3": "Tháng bảo hành thay thế",
    "svc.why4": "phí trả trước",
    "svc.cta.title": "Cần tư vấn dịch vụ?",
    "svc.cta.sub": "Liên hệ ngay để được tư vấn miễn phí",
    "svc.cta.btn": "Liên hệ ngay",
    "svc.b1": "Staffing ngắn hạn",
    "svc.b2": "Staffing dự án",
    "svc.learn": "Tìm hiểu thêm →",
    "ab.team.title": "Đội ngũ sáng lập",
    "ab.team.sub": "Những con người đặt nền móng cho TopLead",
    "ab.why.title": "Tại sao chọn TopLead?",
    "ab.why.sub": "Chúng tôi hiểu rằng tuyển dụng không chỉ là điền vào một vị trí trống",
    "ab.c1.t": "Chất lượng đầu tiên",
    "ab.c1.d": "Mỗi ứng viên đều trải qua quy trình sàng lọc nghiêm ngặt với 5 bước kiểm tra.",
    "ab.c2.t": "Tốc độ nhanh",
    "ab.c2.d": "Gửi hồ sơ trong vòng 48 giờ. Ứng viên sẵn sàng phỏng vấn trong tuần đầu tiên.",
    "ab.c3.t": "Bảo hành thay thế",
    "ab.c3.d": "Miễn phí thay thế trong 3 tháng nếu ứng viên không phù hợp.",
    "ab.c4.t": "Mạng lưới rộng",
    "ab.c4.d": "Kết nối với ứng viên chất lượng cao từ nhiều nhóm ngành khác nhau.",
    "ab.c5.t": "Hỗ trợ 24/7",
    "ab.c5.d": "Đội ngũ tư vấn luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi.",
    "ab.c6.t": "Minh bạch giá",
    "ab.c6.d": "Chi phí rõ ràng, không phí ẩn. Chỉ thanh toán khi ứng viên vượt qua thử việc.",
    "ab.cl.title": "Khách hàng & Đối tác",
    "ab.cl.sub": "Đồng hành cùng 120+ doanh nghiệp trên khắp Việt Nam",
    "tl.r1": "Checklist toàn diện để đánh giá ứng viên trong phỏng vấn",
    "tl.r2": "Báo cáo mức lương thị trường theo ngành và vị trí",
    "tl.r3": "Mẫu mô tả công việc chuẩn để thu hút ứng viên chất lượng",
    "tl.r4": "Hướng dẫn onboarding hiệu quả cho nhân viên mới",
    "tl.r5": "Hướng dẫn xây dựng thương hiệu nhà tuyển dụng hấp dẫn",
    "tl.r6": "Chiến lược giữ chân nhân tài trong thị trường cạnh tranh",
    "ct.name": "Họ và tên *",
    "ct.emailco": "Email công ty *",
    "ct.phone": "Số điện thoại *",
    "ct.company": "Tên công ty *",
    "ct.qty": "Số lượng tuyển dụng",
    "ct.need": "Nhu cầu tuyển dụng",
    "ct.email": "Email *",
    "ct.qtysel": "Chọn số lượng...",
    "ct.q1": "1-5 người",
    "ct.q2": "5-10 người",
    "ct.q3": "10-20 người",
    "ct.q4": "20+ người",
    "ct.i.addr": "Địa chỉ",
    "ct.i.phone": "Điện thoại",
    "ct.i.hours": "Giờ làm việc",
    "ct.h1": "Thứ 2 - Thứ 6: 8:30 - 18:00",
    "ct.h2": "Thứ 7: 8:30 - 12:00",
    "ap.t1": "Đăng tin chờ ứng viên",
    "ap.t1d": "Chờ ứng viên nộp CV, không chủ động tìm kiếm",
    "ap.t2": "Lọc sơ bộ",
    "ap.t2d": "CV được lọc qua keyword, không đánh giá sâu",
    "ap.t3": "Không check reference",
    "ap.t3d": "Ít khi kiểm tra background thực tế",
    "ap.t4": "Không bảo hành",
    "ap.t4d": "Không hỗ trợ nếu ứng viên nghỉ sớm",
    "ap.t5": "Thời gian dài",
    "ap.t5d": "Mất 2-3 tháng để fill một vị trí",
    "ap.l1": "Chủ động tìm kiếm",
    "ap.l1d": "Proactive search, tiếp cận ứng viên tiềm năng",
    "ap.l2": "Sàng lọc 5 bước",
    "ap.l2d": "Guardian Screen Process với 5 vòng kiểm tra",
    "ap.l3": "Deep Reference Check",
    "ap.l3d": "Kiểm tra 3+ references trước khi giới thiệu",
    "ap.l4": "Clear Guarantee",
    "ap.l4d": "Miễn phí thay thế trong 3 tháng",
    "ap.l5": "Nhanh 48h",
    "ap.l5d": "Gửi hồ sơ trong 48 giờ, interview trong tuần đầu",
    "ap.s1": "Tìm hiểu nhu cầu, văn hóa công ty và yêu cầu chi tiết",
    "ap.s2": "Chủ động tìm kiếm và tiếp cận ứng viên phù hợp",
    "ap.s3": "Áp dụng Guardian Screen Process - sàng lọc 5 bước",
    "ap.s4": "Gửi top 3-5 hồ sơ đã lọc trong 48 giờ",
    "ap.s5": "Hỗ trợ sắp xếp interview và feedback",
    "ap.s6": "Onboarding support và bảo hành 3 tháng",
    "ap.w1": "Bước 1: Brief",
    "ap.w1d": "Call với khách hàng để hiểu JD, budget, timeline, văn hóa công ty",
    "ap.w2": "Bước 2: Search",
    "ap.w2d": "Database + Proactive search + Headhunting",
    "ap.w3": "Bước 3: Screen",
    "ap.w3d": "Guardian Screen - lọc 5 bước",
    "ap.w4": "Bước 4: Present",
    "ap.w4d": "Gửi CV + interview notes trong 48h",
    "ap.w5": "Bước 5: Interview",
    "ap.w5d": "Coordinate + feedback loop",
    "ap.w6": "Bước 6: Close",
    "ap.w6d": "Offer + onboarding + guarantee",
    "ap.q1": "“Mình rất hài lòng với dịch vụ tư vấn của TopLead. Đội ngũ rất chuyên nghiệp, hỗ trợ tận tâm và đưa ra những lời khuyên hữu ích cho lộ trình nghề nghiệp của mình. Rất đáng tin cậy!”",
    "ap.q2": "“Sau khi nhận việc, agency vẫn hỏi thăm và hỗ trợ trong suốt thời gian thử việc.”",
    "ap.q3": "“Em đã có job thông qua TopLead, bạn Cường cũng vậy, bạn Quân cũng thế. Bạn Hiếu rồi cũng sẽ qua!”",
    "chip.fin": "Tài chính",
    "chip.re": "Bất động sản",
    "chip.con": "Xây dựng",
    "pain.ticker": "Bạn đang...",
    "ct.submitEmp": "Gửi yêu cầu",
    "post.readmore": "Đọc tiếp →"
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.approach": "Our Approach",
    "nav.jobs": "Jobs",
    "nav.tools": "Tools & Content",
    "nav.contact": "Contact",
    "nav.ourStory": "Our Story",
    "nav.ourTeam": "Our Team",
    "nav.whyChoose": "Why Choose TopLead",
    "nav.clients": "Clients & Partners",
    "nav.milestones": "Milestones",
    "nav.compare": "Comparison",
    "nav.guardian": "Guardian Screen",
    "nav.trustcare": "Trustcare Framework",
    "nav.guarantee": "Guarantee Framework",
    "nav.howItWorks": "How It Works",
    "nav.workflow": "Workflow",
    "nav.exclusive": "Exclusive",
    "hero.badge": "TopLead Recruitment",
    "hero.slide1.line1": "Your Star Employee Just Quit.",
    "hero.slide1.line2": "But There's No Replacement in Sight?",
    "hero.slide1.desc": "TopLead sends pre-screened candidates within 48 hours. Already filtered for your industry.",
    "hero.slide1.cta": "Hire Now →",
    "hero.slide2.line1": "3 Carefully Screened Resumes.",
    "hero.slide2.line2": "You Just Pick the Best One.",
    "hero.slide2.desc": "No more reading dozens of CVs. We filter, you choose, you get someone working this week.",
    "hero.slide2.cta": "Send Request →",
    "hero.slide3.line1": "Short on Staff?",
    "hero.slide3.line2": "Don't Let It Drag On Until Tomorrow.",
    "hero.slide3.desc": "Every day without staff is a day of lost revenue. Contact today, get candidates tomorrow.",
    "hero.slide3.cta": "Contact Now →",
    "hero.slide4.line1": "If It Doesn't Work, We Replace.",
    "hero.slide4.line2": "No Questions Asked, No Extra Cost.",
    "hero.slide4.desc": "All TopLead candidates come with replacement warranty. Because we only recommend people we believe in.",
    "hero.slide4.cta": "Learn More →",
    "founders.tag": "Founding Team",
    "founders.title": "Our Founders",
    "founders.f1.name": "Tạ Vinh An",
    "founders.f1.role": "CEO & Founder",
    "founders.f1.quote": "“I believe everyone deserves to belong exactly where they are meant to be.”",
    "founders.f1.exp1": "7+ years in HR & executive search (IT, CS, FMCG, F&B, Hospitality, HR)",
    "founders.f1.exp2": "SHRM-CP certified (2026)",
    "founders.f2.name": "Nguyễn Trần Nhật Hưng",
    "founders.f2.role": "CFO & Co-Founder",
    "founders.f2.quote": "“HR work is like facing a problem where no single answer is ever fully right.”",
    "founders.f2.exp1": "5 years recruiting for SMEs (Finance, Accounting, Construction, M&E)",
    "founders.f3.name": "Vũ Quang Bình",
    "founders.f3.role": "CCO & Co-Founder",
    "founders.f3.quote": "“Not everyone is born a genius — great talent needs the right environment to grow.”",
    "founders.f3.exp1": "4+ years in professional B2C/B2B sales recruitment & business development (Insurance, Real Estate, Construction)",
    "logos.label": "Trusted by leading companies",
    "value.title": "Great hires always come from people you trust",
    "value.card1.title": "Expert Network",
    "value.card1.desc": "Connect with over 10,000 quality candidates from various industries.",
    "value.card2.title": "Proactive Search",
    "value.card2.desc": "We actively search and approach suitable talent.",
    "services.tag": "Services",
    "services.title": "Comprehensive Recruitment Solutions",
    "services.subtitle": "Serving all staffing needs of businesses",
    "services.s1.title": "Executive Search",
    "services.s1.desc": "Recruit CEO, CFO, Directors and senior management with confidential process.",
    "services.s2.title": "Team Buildout",
    "services.s2.desc": "Help startups build teams from foundation stage.",
    "services.s3.title": "Tech Hiring",
    "services.s3.desc": "Specialized recruitment for Developers, Data Scientists, Product Managers.",
    "pain.tag": "Challenges",
    "pain.title": "What challenge are you facing?",
    "pain.word1": "hiring wrong person",
    "pain.word2": "wasting time",
    "pain.word3": "losing money",
    "pain.word4": "lacking talent",
    "pain.p1.title": "Need staff urgently but cannot hire anyone",
    "pain.p1.desc": "We help you reach suitable candidates in the shortest time.",
    "pain.p2.title": "Founder good at tech but does not know how to hire",
    "pain.p2.desc": "Our team supports you in building a professional team.",
    "pain.p3.title": "Old staff left, work got delayed",
    "pain.p3.desc": "Quick handover process, minimizing disruption.",
    "stats.title": "You have a good partner",
    "stats.s1.role": "Senior Positions",
    "stats.s1.company": "for TechCorp in 12 months",
    "stats.s2.role": "Positions Filled",
    "stats.s2.company": "for VietRetail this year",
    "stats.s3.role": "Staff",
    "stats.s3.company": "for BuildPro at 14 branches",
    "stats.s4.role": "Tech Positions",
    "stats.s4.company": "for LogiGroup in 6 months",
    "jobs.tag": "Jobs",
    "jobs.title": "Open Positions",
    "jobs.subtitle": "Exciting career opportunities from leading companies",
    "jobs.apply": "Apply Now",
    "cta.title": "Ready to build an exceptional team?",
    "cta.subtitle": "Let TopLead help you find the perfect talent",
    "cta.start": "Get Started",
    "testimonials.tag": "Reviews",
    "testimonials.title": "What Our Clients Say",
    "testimonials.t1.text": "“Super-fast support — within 5 days we had 3 suitable candidates to interview. It saved our internal HR team a lot of time.”",
    "testimonials.t2.text": "“For real — TopLead truly understands what a business needs. No mass CV dumps, just carefully selected candidates. Highly recommend!”",
    "testimonials.t3.text": "“Good services — highly recommend for their realistic commitment.”",
    "contact.tag": "Contact",
    "contact.title": "Start Your Partnership",
    "contact.subtitle": "Leave your info and we will get back to you within 24 hours.",
    "contact.phone": "Phone",
    "contact.address": "Address",
    "contact.addressValue": "791/92F Tran Xuan Soan St., Tan Hung Ward, HCMC",
    "contact.tab1": "Candidate",
    "contact.tab2": "Employer",
    "footer.tagline": "Connecting the right people with the right companies — recruitment you can hold accountable.",
    "footer.follow": "Follow Us",
    "footer.services": "Services",
    "footer.s1": "Executive Search",
    "footer.s2": "Team Buildout",
    "footer.s3": "Tech Hiring",
    "footer.s4": "Talent Assessment",
    "footer.company": "Company",
    "footer.about": "About Us",
    "footer.approach": "Our Approach",
    "footer.jobs": "Jobs",
    "footer.tools": "Tools",
    "footer.contact": "Contact",
    "footer.emailsTitle": "Contact Emails",
    "footer.officeTitle": "TopLead Office",
    "footer.addressLabel": "Address",
    "footer.address": "791/92F Trần Xuân Soạn, phường Tân Hưng, TP. HCM",
    "footer.phoneLabel": "Phone",
    "footer.emailLabel": "Email",
    "footer.directions": "Get Directions",
    "footer.rights": "All rights reserved.",
    "form.name": "Full Name",
    "form.email": "Email",
    "form.phone": "Phone Number",
    "form.optional": "(Optional)",
    "form.cv": "Attach CV/Resume",
    "form.drag": "Drag and drop or",
    "form.choose": "choose file",
    "form.maxSize": "max 5MB",
    "form.company": "Company Name",
    "form.position": "Position",
    "form.quantity": "Quantity",
    "form.message": "Message",
    "form.optional2": "(Optional)",
    "form.submit": "Submit",
    "form.success": "Thank you!",
    "form.successMsg": "TopLead team will contact you within 24 hours.",
    "page.hero.title": "Contact",
    "page.hero.subtitle": "Connect with TopLead to explore opportunities or get recruitment consulting",
    "contact.tab.employer": "Employer",
    "contact.tab.candidate": "Candidate",
    "contact.form.name": "Full Name *",
    "contact.form.namePlaceholder": "Enter your full name",
    "contact.form.email": "Company Email *",
    "contact.form.emailPlaceholder": "email@company.com",
    "contact.form.phone": "Phone Number *",
    "contact.form.phonePlaceholder": "+84 xxx xxx xxx",
    "contact.form.company": "Company Name *",
    "contact.form.companyPlaceholder": "Company name",
    "contact.form.service": "Interested Service",
    "contact.form.serviceSelect": "Select a service...",
    "contact.form.quantity": "Hiring Quantity",
    "contact.form.quantitySelect": "Select quantity...",
    "contact.form.demand": "Hiring Needs",
    "contact.form.demandPlaceholder": "Brief description of your hiring needs...",
    "contact.form.position": "Position of Interest",
    "contact.form.positionPlaceholder": "Desired position",
    "contact.form.experience": "Experience",
    "contact.form.experienceSelect": "Select experience level...",
    "contact.form.linkedin": "LinkedIn / Portfolio Link",
    "contact.form.linkedinPlaceholder": "https://linkedin.com/in/...",
    "contact.form.note": "Additional Notes",
    "contact.form.notePlaceholder": "Brief introduction about yourself...",
    "contact.form.uploadCV": "Upload CV",
    "contact.form.uploadCVLabel": "Upload CV (PDF, DOC)",
    "contact.form.submit": "Send Request",
    "contact.form.submitCandidate": "Submit Profile",
    "contact.info.address": "Address",
    "contact.info.addressValue": "Floor 8, ABC Building<br>123 Nguyen Trai, District 1<br>Ho Chi Minh City, Vietnam",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.hours": "Business Hours",
    "contact.info.hoursValue": "Mon - Fri: 8:30 - 18:00<br>Saturday: 8:30 - 12:00",
    "contact.social.title": "Connect with TopLead",
    "contact.social.subtitle": "Follow us for the latest news and job opportunities",
    "contact.faq.title": "Frequently Asked Questions",
    "contact.faq.q1": "Does TopLead charge candidates?",
    "contact.faq.a1": "No. TopLead provides completely free services for candidates.",
    "contact.faq.q2": "How long does the recruitment process take?",
    "contact.faq.a2": "With TopLead's process, it takes an average of 14 days to fill a position.",
    "contact.faq.q3": "Is there a warranty?",
    "contact.faq.a3": "TopLead offers 3-month free replacement warranty.",
    "contact.faq.q4": "How to track progress?",
    "contact.faq.a4": "You will receive regular updates via email and phone.",
    "jobs.hero.title": "Jobs",
    "jobs.hero.subtitle": "Exciting career opportunities from leading companies",
    "jobs.filter.search": "Search",
    "jobs.filter.searchPlaceholder": "Position name, keywords...",
    "jobs.filter.industry": "Industry",
    "jobs.filter.location": "Location",
    "jobs.filter.level": "Level",
    "jobs.filter.all": "All",
    "jobs.count": "Showing 12 open positions",
    "jobs.apply": "Apply Now",
    "jobs.cta.title": "Can't find a suitable position?",
    "jobs.cta.subtitle": "Leave your CV, we will contact you when there's a matching opportunity",
    "jobs.cta.button": "Submit CV Now",
    "tools.hero.title": "Tools & Content",
    "tools.hero.subtitle": "Useful resources for employers and candidates",
    "tools.blog.tag": "Blog",
    "tools.blog.title": "Latest Articles",
    "tools.blog.subtitle": "Recruitment trends and insights",
    "tools.resources.tag": "Resources",
    "tools.resources.title": "Tools & Resources",
    "tools.resources.subtitle": "Download free useful documents",
    "tools.resources.download": "Download ↓",
    "tools.newsletter.title": "Subscribe to Newsletter",
    "tools.newsletter.subtitle": "Get recruitment trends and tips weekly",
    "tools.newsletter.placeholder": "Enter your email",
    "tools.newsletter.button": "Subscribe",
    "tools.cta.title": "Need HR consulting?",
    "tools.cta.subtitle": "Contact TopLead team for support",
    "tools.cta.button": "Contact Now",
    "services.option": "Select a service...",
    "services.optionExec": "Executive Search",
    "services.optionStaff": "Staffing",
    "services.optionRPO": "RPO",
    "services.optionHead": "Headhunting",
    "services.optionConsult": "HR Consulting",
    "services.optionOther": "Other",
    "experience.none": "No experience",
    "experience.1to2": "1-2 years",
    "experience.3to5": "3-5 years",
    "experience.5to10": "5-10 years",
    "experience.10plus": "10+ years",
    "about.hero.title": "About Us",
    "about.hero.subtitle": "Accountable recruitment for Vietnamese businesses",
    "approach.hero.title": "Our Approach",
    "approach.hero.subtitle": "TopLead's unique recruitment methodology",
    "approach.compare.tag": "Comparison",
    "approach.compare.title": "Traditional Recruitment vs TopLead",
    "approach.compare.subtitle": "Clear differences in recruitment approach",
    "approach.exclusive.tag": "Exclusive",
    "approach.exclusive.title": "3 Key Features of TopLead",
    "approach.exclusive.subtitle": "Proprietary processes and commitments unique to TopLead",
    "approach.guardian.title": "Guardian Screen",
    "approach.guardian.desc": "5-step screening process ensuring candidate quality",
    "approach.trustcare.title": "Trustcare",
    "approach.trustcare.desc": "Quality commitment based on 3 transparent pillars",
    "approach.guarantee.title": "Guarantee",
    "approach.guarantee.desc": "3-month free replacement warranty",
    "approach.howitworks.tag": "Process",
    "approach.howitworks.title": "How It Works",
    "approach.howitworks.subtitle": "6-step process to find the right person for the right position",
    "approach.workflow.tag": "Workflow",
    "approach.workflow.title": "Working Process",
    "approach.workflow.subtitle": "Transparent - Clear - Effective",
    "approach.research.tag": "Research",
    "approach.research.title": "Numbers That Show The Difference",
    "approach.cta.title": "Ready to build an exceptional team?",
    "approach.cta.subtitle": "Let TopLead help you find the perfect talent",
    "approach.cta.button": "Get Started",
    "approach.testimonials.tag": "Reviews",
    "approach.testimonials.title": "What Partners Say About TopLead",
    "services.hero.title": "Services",
    "services.hero.subtitle": "Comprehensive recruitment solutions for businesses",
    "post.readUnit": "min read",
    "post.cta.title": "Looking for a recruitment partner that's accountable?",
    "post.cta.sub": "TopLead only charges once your hire passes probation. Let's start the conversation.",
    "post.cta.contact": "Contact TopLead",
    "post.cta.all": "← All posts",
    "b1.cat": "HR Career",
    "b1.title": "HR Pathway? Why Not?",
    "b1.teaser": "The accidental profession that turns intentional the moment you see people as leverage, not cost.",
    "b2.cat": "Sustainability",
    "b2.title": "It's Not Only a Project — It Is a Mindset",
    "b2.teaser": "Why TopLead charges nothing until a candidate passes probation — and what sustainability really costs.",
    "b3.cat": "Recruitment Model",
    "b3.title": "The Probation Period Is The Real Interview",
    "b3.teaser": "Anyone can perform for 30 minutes. The real interview starts on day 60.",
    "b4.cat": "Incentives",
    "b4.title": "Recruitment Doesn't Have a Talent Problem. It Has an Incentive Problem.",
    "b4.teaser": "Every system produces the behaviour it rewards. Recruitment's real problem isn't talent.",
    "b5.cat": "Candidates",
    "b5.title": "Hesitation Costs More Than You Think",
    "b5.teaser": "The candidates who get placed aren't the strongest on paper — they're the ones who move first.",
    "b6.cat": "SMEs",
    "b6.title": "Why SMEs Keep Losing Good Candidates to Corporations",
    "b6.teaser": "SMEs can't out-pay corporations. They lose on process — and that's fixable.",
    "b7.cat": "Retention",
    "b7.title": "Silent Turnover — The Centurial Case",
    "b7.teaser": "The most expensive turnover is the kind that never files a resignation letter.",
    "sig.b1": "The accidental profession becomes intentional the moment its people realise influence beats authority.",
    "body.b1": "      <p class=\"post-lead\">Nobody grows up wanting to work in HR.</p>\n      <p>Children say doctor, pilot, footballer. Nobody says \"the person who builds the team.\" Yet research shows most HR professionals never planned this path — they fell into it, then refused to leave (SHRM 2025).</p>\n      <p>Why? What separates those who choose this work from those who dismiss it? The ones who walk away see cost. Paperwork, policies, the conversations nobody volunteers for. They want a clean ladder and a predictable title. Fair enough — but they mistake difficulty for insignificance.</p>\n      <p>The ones who stay see leverage. They know that 40% of HR professionals enter the field driven by organisational development, not obligation, and only 7% treat it as a paycheck (BambooHR 2026). They understand a single decision — who you hire, who you develop, who you keep — compounds across an entire company. Culture is the one asset competitors cannot copy, and 97% of HR leaders now treat it as their top priority (Gartner 2025).</p>\n      <p>That is the real divide. Not soft versus hard. Not safe versus risky. It is whether you see people as a cost to manage, or the engine of everything that follows.</p>\n      <p>So decide deliberately. The team you build will remember what you chose.</p>\n      <div class=\"post-refs\"><span class=\"post-refs-label\">References</span><p>BambooHR (2026) The Definitive Guide to HR Career Growth. &middot; Gartner (2025), cited in Compono (2025) Full Research: Latest HR &amp; Talent Statistics (2025). &middot; SHRM (2025) Breaking into HR Without Official Experience.</p></div>\n    ",
    "sig.b2": "Sustainability only means something when it costs you something to keep it.",
    "body.b2": "      <p class=\"post-lead\">I used to think sustainability was something you could prove. A project. A certificate. A handshake from someone who mattered. Then I realised I had it wrong from the start.</p>\n      <p>Sustainability isn't something you win in a competition. It's something you choose — quietly, consistently — in every decision that has no audience and no scorecard. And that realisation is exactly what shaped how I built my company. No upfront fee. No charge until the candidate passes probation. Payment only when the result is real — when the person placed actually fits, actually stays, actually contributes. Most in the industry avoid this model because it's uncomfortable. You carry the risk. You absorb the uncertainty. But that discomfort is precisely the point — because sustainability only means something when it costs you something to keep it.</p>\n      <p>Winning that contest didn't teach me what sustainability looks like on a certificate. It taught me what it has to look like in practice: every hire, every client, every decision that no one grades but you. The standard doesn't live on the wall. It lives in how you operate when no one is watching.</p>\n    ",
    "sig.b3": "<div class=\"post-stat\"><b>46%</b><span>of new hires fail within their first 18 months</span></div><div class=\"post-stat\"><b>82%</b><span>of hiring managers had already seen the signs (TriNet 2026)</span></div>",
    "body.b3": "      <p class=\"post-lead\">Anyone can perform for 30 minutes across a table. The question is who they are on day 60.</p>\n      <p>This is the gap that built TopLead's model from the ground up. No fee at placement. Payment only after the candidate clears probation — because that's when the hire is actually proven. The agency carries the risk until the result is real.</p>\n      <p>Most agencies won't offer this. Not because it's impossible, but because it demands something uncomfortable: skin in the game, long after the handshake. Accountability in recruitment isn't a policy. It's a position. It means your success is structurally tied to your client's — not separated from it the moment the contract is signed.</p>\n      <p>Companies lose 20% of new hires within the first 45 days (Reworked 2026). That number doesn't move until the people responsible for placing them are still responsible after the placement.</p>\n      <p>The probation period reveals everything the interview never could. The only question is whether your recruitment partner is still watching when it does.</p>\n      <div class=\"post-refs\"><span class=\"post-refs-label\">References</span><p>TriNet (2026) &middot; Reworked (2026) &mdash; 20% of new hires lost within the first 45 days.</p></div>\n    ",
    "sig.b4": "That's not a hiring problem. It's an incentive problem.",
    "body.b4": "      <p class=\"post-lead\">Hiring has never been cheap. The average cost per hire now exceeds $5,400, and filling a single non-executive role takes a median of 44 days (SHRM 2025).</p>\n      <p>Yet in many recruitment models, one side is rewarded the moment an offer is signed. The other only finds out weeks — or months — later whether the hiring decision actually paid off.</p>\n      <p>At the end of the day, every system produces the behaviour it rewards. If success is measured by placements, then expect more placements. If success is measured by successful hires, then every decision — from sourcing to screening to follow-up — will start looking completely different.</p>\n      <p>The best recruitment models don't just find candidates. They make accountability last as long as the hiring decision itself.</p>\n    ",
    "sig.b5": "Delay isn't caution. In today's market, it's forfeiture.",
    "body.b5": "      <p class=\"post-lead\">The most common reason talented people miss opportunities isn't a lack of skill — it's hesitation.</p>\n      <ul>\n        <li>The wait for the \"right moment.\"</li>\n        <li>The instinct to stay silent until they feel 100% ready.</li>\n        <li>The polite decision to follow up \"later.\"</li>\n      </ul>\n      <p>In today's competitive market, delay isn't just caution, it's even forfeiture. The candidates who get placed aren't always the strongest on paper. But definitely, they're the ones making the first move — who apply before they feel fully prepared, who speak up in interviews instead of waiting to be asked, who follow through instead of waiting to be chosen.</p>\n      <p>Employers can actually read that decisiveness clearly — they can see ownership, initiative, and drive in the person: the exact qualities that separate a good hire from a forgettable one. If you're a candidate, my advice is simple: stop waiting for the perfect moment because it doesn't exist. Put yourself forward, ask the bold question, and let your proactivity speak before your CV does.</p>\n      <p>At TopLead, we don't reward the loudest applications — we match attitude and skill with the right employer. However, we can only open the door when you are willing to walk through it.</p>\n    ",
    "sig.b6": "<div class=\"post-split-col\"><b>SME</b><span>89% can't match corporate salaries (Employment Hero 2024)</span></div><div class=\"post-split-vs\">vs</div><div class=\"post-split-col\"><b>Corporation</b><span>Winning on structure, not substance</span></div>",
    "body.b6": "      <p class=\"post-lead\">89% of SMEs cannot match corporate salaries (Employment Hero 2024), but salary isn't why they lose.</p>\n      <p>The real gap is process. The average time from posting to hire has reached 48 days — a 65% increase in just three years (BambooHR 2026). Meanwhile, top candidates are off the market within 10 days (Movement Search &amp; Delivery 2026).</p>\n      <p>And candidates notice: 42% withdraw from hiring processes simply because scheduling takes too long (iHire 2023). Another 93% of hiring managers themselves admit the process is slower than two years ago (Robert Half 2025).</p>\n      <p>Here's the irony: SMEs already have what today's candidates want:</p>\n      <ul>\n        <li>71% of workers say development opportunities drive job satisfaction (Gallup, cited in COSE 2025).</li>\n        <li>39% rank growth potential as their top factor (Yoh 2025). Smaller companies deliver both — faster promotions, broader exposure, direct leadership access.</li>\n      </ul>\n      <p>But most SMEs never articulate this. They post generic JDs, run slow pipelines, and lose candidates to companies that simply moved first.</p>\n      <h2>Three fixes for SMEs</h2>\n      <ul>\n        <li><strong>Sell the role.</strong> What exactly will the hire own? What will they build? What will they contribute? All of it should be clear in the JD.</li>\n        <li><strong>Compress your timeline.</strong> Two interview rounds. One week. A decisive offer. Show the growth path — just a clear answer to \"Where does this lead in 12 months?\"</li>\n        <li><strong>Compete on structure.</strong> Corporations aren't winning on substance. They're winning on structure.</li>\n      </ul>\n      <p>At TopLead, we help Vietnamese SMEs close that gap — matching the right candidates to professional roles in Sales, Marketing, Finance, HR, and Operations. We don't just send CVs. We make sure talent sees what makes your company worth joining.</p>\n    ",
    "sig.b7": "<div class=\"post-stat\"><b>24%</b><span>employee turnover in Vietnam, vs a ~10% ideal (Anphabe 2023)</span></div><div class=\"post-stat\"><b>$228&ndash;355M</b><span>lost each year to disengagement at a median S&amp;P 500 firm (McKinsey 2023)</span></div>",
    "body.b7": "      <p class=\"post-lead\">Most SME owners register turnover only at the point of resignation. By then, the loss is already old.</p>\n      <p>The real cost begins months earlier, when an employee is still present, still delivering the minimum, but has already disengaged. It is called silent turnover, and it does not appear on any attrition report until it is too late to prevent.</p>\n      <h2>Data and tracking</h2>\n      <p>Employee turnover in Vietnam has reached 24%, against an \"ideal\" rate of roughly 10% for a stable organization. The attrition runs highest in the exact functions SMEs rely on most: Marketing, Sales, IT, and Finance (Anphabe 2023). The disengagement that precedes it is even more costly than the exit itself. McKinsey estimates that a median-size S&amp;P 500 company loses between $228 million and $355 million annually to disengagement and attrition, with more than half of a typical workforce disengaged at any given time (McKinsey &amp; Company 2023).</p>\n      <h2>The root cause</h2>\n      <p>These exits are rarely about salary. They trace back to a mismatch at the point of hire — wrong person, wrong expectations, or wrong cultural fit. When a business hires in a rush to fill a vacancy, it does not solve the problem. It restarts the same loop, absorbing the cost of disengagement a second time.</p>\n      <h2>The implication for SMEs</h2>\n      <p>It is all about hiring accuracy at the first attempt. This is why TopLead screens both sides of the match, assessing candidates for the business and assessing the business for the candidate. When alignment is genuine on both ends, engagement starts high and holds, closing the gap where silent turnover takes root.</p>\n      <p><strong>Stop rehiring. Start growing.</strong></p>\n      <div class=\"post-refs\"><span class=\"post-refs-label\">References</span><p>Anphabe (2023), via Vietnam News / Staffing Industry Analysts &mdash; Vietnam turnover at 24% vs. 10% optimal; highest attrition in marketing, sales, IT, finance. &middot; McKinsey &amp; Company (2023), \"Some employees are destroying value. Others are building it.\"</p></div>\n    ",
    "about.story.title": "The TopLead Story",
    "about.story.p1": "TopLead began with a simple but difficult conviction: everyone deserves to belong exactly where they are needed, and every company deserves the right people.",
    "about.story.p2": "In a market where recruitment is usually measured by the number of CVs, we chose to measure real outcomes instead. That is why TopLead only charges once a candidate passes probation — carrying the risk alongside our clients, and screening both ways so the fit holds from day one.",
    "about.story.p3": "With experience across many industries (IT, Finance, FMCG, F&B, Real Estate, Construction…), the TopLead team does not just fill empty seats. We connect people to the right environment to grow, and help companies keep their best people longer.",
    "about.stat1": "Combined years of experience",
    "about.stat2": "Partner businesses",
    "about.stat3": "Candidates connected",
    "about.stat4": "Pass probation",
    "partner.tag": "Your partner",
    "partner.title": "You have a good partner",
    "partner.subtitle": "Not a promise — the way we put skin in the game with you.",
    "partner.s1": "combined years of experience across our founding team",
    "partner.s2": "specialised industries: IT, Finance, FMCG, F&B, Real Estate, Construction",
    "partner.s3": "to send the first, pre-screened shortlist",
    "partner.s4": "upfront fee — you only pay after the candidate passes probation",
    "partner.v1.title": "Expert network",
    "partner.v1.desc": "Access to high-quality candidates across many industries.",
    "partner.v2.title": "Proactive search",
    "partner.v2.desc": "We don't wait for applications — we actively find and reach the right people.",
    "cta.services": "Find the right solution for you",
    "cta.pain": "Let TopLead solve it for you",
    "services.lead": "We don't just fill open roles — we match the right person to the right company.",
    "services.leadsub": "And we only charge once the hire stays past probation. The risk is ours; the result is yours.",
    "pain.lead": "Hundreds of CVs, tight deadlines, and the fear of hiring the wrong person.",
    "pain.leadsub": "TopLead gets you out of that mess — carefully screened, the right shortlist in 48 hours.",
    "serve.tag": "Who we serve",
    "serve.title": "Specialised in SMEs",
    "serve.desc": "TopLead partners with small and mid-sized businesses across Vietnam — where getting each hire right makes the biggest difference.",
    "philosophy.quote": "People aren't a cost — they're the engine of everything that follows.",
    "svc.o.title": "Comprehensive recruitment solutions",
    "svc.o.sub": "TopLead offers a range of services for every hiring need",
    "svc.s1": "Find and engage senior talent (C-level, VP, Director) through a discreet, professional process.",
    "svc.s2": "On-demand staffing — from staff to managers, ideal for projects or short-term needs.",
    "svc.s3": "Recruitment Process Outsourcing — outsource all or part of your hiring process to TopLead.",
    "svc.m1": "Proactively reach and win over high-potential candidates, including from competitors.",
    "svc.m2": "Advise on HR strategy and build your internal recruitment process.",
    "svc.m3": "Screen candidates against your standards and save your team time.",
    "svc.m4": "Assess candidates through professional and psychometric tests.",
    "svc.ind": "Industries we serve",
    "svc.why": "Why choose TopLead's services?",
    "svc.why1": "First shortlist within 48 hours",
    "svc.why2": "Rigorous screening steps",
    "svc.why3": "Months of free replacement",
    "svc.why4": "upfront fee",
    "svc.cta.title": "Need help choosing a service?",
    "svc.cta.sub": "Get in touch for a free consultation",
    "svc.cta.btn": "Contact us",
    "svc.b1": "Short-term staffing",
    "svc.b2": "Project staffing",
    "svc.learn": "Learn more →",
    "ab.team.title": "Our founding team",
    "ab.team.sub": "The people who laid TopLead's foundation",
    "ab.why.title": "Why choose TopLead?",
    "ab.why.sub": "We understand recruitment is more than filling an empty seat",
    "ab.c1.t": "Quality first",
    "ab.c1.d": "Every candidate goes through a rigorous 5-step screening process.",
    "ab.c2.t": "Fast turnaround",
    "ab.c2.d": "A shortlist within 48 hours. Candidates ready to interview in the first week.",
    "ab.c3.t": "Replacement guarantee",
    "ab.c3.d": "Free replacement within 3 months if a hire isn't the right fit.",
    "ab.c4.t": "Broad network",
    "ab.c4.d": "Access to high-quality candidates across many industries.",
    "ab.c5.t": "24/7 support",
    "ab.c5.d": "Our advisory team is always ready to support you, anytime, anywhere.",
    "ab.c6.t": "Transparent pricing",
    "ab.c6.d": "Clear costs, no hidden fees. You only pay once the hire passes probation.",
    "ab.cl.title": "Clients & Partners",
    "ab.cl.sub": "Partnering with 120+ businesses across Vietnam",
    "tl.r1": "A complete checklist to evaluate candidates in interviews",
    "tl.r2": "Market salary report by industry and role",
    "tl.r3": "A standard job-description template to attract quality candidates",
    "tl.r4": "A guide to onboarding new hires effectively",
    "tl.r5": "A guide to building an attractive employer brand",
    "tl.r6": "Strategies to retain talent in a competitive market",
    "ct.name": "Full name *",
    "ct.emailco": "Company email *",
    "ct.phone": "Phone *",
    "ct.company": "Company name *",
    "ct.qty": "Number of hires",
    "ct.need": "Hiring needs",
    "ct.email": "Email *",
    "ct.qtysel": "Select a number...",
    "ct.q1": "1-5 people",
    "ct.q2": "5-10 people",
    "ct.q3": "10-20 people",
    "ct.q4": "20+ people",
    "ct.i.addr": "Address",
    "ct.i.phone": "Phone",
    "ct.i.hours": "Working hours",
    "ct.h1": "Mon–Fri: 8:30 – 18:00",
    "ct.h2": "Sat: 8:30 – 12:00",
    "ap.t1": "Post and wait for applicants",
    "ap.t1d": "Wait for CVs to arrive; no proactive search",
    "ap.t2": "Surface-level filtering",
    "ap.t2d": "CVs filtered by keywords, with no deep assessment",
    "ap.t3": "No reference checks",
    "ap.t3d": "Rarely verifies real background",
    "ap.t4": "No guarantee",
    "ap.t4d": "No support if the hire leaves early",
    "ap.t5": "Slow",
    "ap.t5d": "Takes 2–3 months to fill a role",
    "ap.l1": "Proactive search",
    "ap.l1d": "Actively reach high-potential candidates",
    "ap.l2": "5-step screening",
    "ap.l2d": "Guardian Screen Process with 5 rounds of checks",
    "ap.l3": "Deep reference check",
    "ap.l3d": "Check 3+ references before presenting",
    "ap.l4": "Clear guarantee",
    "ap.l4d": "Free replacement within 3 months",
    "ap.l5": "Fast — 48h",
    "ap.l5d": "Shortlist in 48 hours; interviews in the first week",
    "ap.s1": "Understand your needs, culture, and detailed requirements",
    "ap.s2": "Proactively find and reach suitable candidates",
    "ap.s3": "Apply the Guardian Screen Process — 5-step screening",
    "ap.s4": "Send the top 3–5 screened profiles within 48 hours",
    "ap.s5": "Help coordinate interviews and feedback",
    "ap.s6": "Onboarding support and a 3-month guarantee",
    "ap.w1": "Step 1: Brief",
    "ap.w1d": "A call to understand the JD, budget, timeline, and company culture",
    "ap.w2": "Step 2: Search",
    "ap.w2d": "Database + proactive search + headhunting",
    "ap.w3": "Step 3: Screen",
    "ap.w3d": "Guardian Screen — 5-step filtering",
    "ap.w4": "Step 4: Present",
    "ap.w4d": "Send CVs + interview notes within 48h",
    "ap.w5": "Step 5: Interview",
    "ap.w5d": "Coordinate + feedback loop",
    "ap.w6": "Step 6: Close",
    "ap.w6d": "Offer + onboarding + guarantee",
    "ap.q1": "“I'm really happy with TopLead's advisory service. The team is professional and dedicated, with genuinely useful advice for my career path. Truly trustworthy!”",
    "ap.q2": "“Even after I started the job, the agency kept checking in and supporting me throughout probation.”",
    "ap.q3": "“I landed a job through TopLead — so did Cường and Quân. Hiếu will get there too!”",
    "chip.fin": "Finance",
    "chip.re": "Real Estate",
    "chip.con": "Construction",
    "pain.ticker": "You're...",
    "ct.submitEmp": "Send request",
    "post.readmore": "Read more →"
  }
};

document.addEventListener("DOMContentLoaded", function() {
  // Hero Particles Animation
  initHeroParticles();

  // Hero Slider - runs automatically (IIFE)

  // Hero Text Reveal Animation
  initHeroTextReveal();

  // Pain Point Ticker Animation
  initPainTicker();

  // Stats Counter Animation
  initStatsCounter();

  // Testimonials Parallax
  initTestimonialsParallax();

  // Magnetic Button
  initMagneticButton();
  // Language Switcher
  var langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      var lang = this.getAttribute("data-lang");
      if (lang === currentLang) return;
      currentLang = lang;
      langBtns.forEach(function(b) { b.classList.remove("active"); });
      this.classList.add("active");
      updateLanguage(lang);
      localStorage.setItem("toplead-lang", lang);
    });
  });

  var savedLang = localStorage.getItem("toplead-lang");
  if (savedLang) {
    currentLang = savedLang;
    langBtns.forEach(function(b) {
      if (b.getAttribute("data-lang") === savedLang) b.classList.add("active");
      else b.classList.remove("active");
    });
    updateLanguage(savedLang);
  }

  function updateLanguage(lang) {
    var t = translations[lang];
    // Translate text content
    var els = document.querySelectorAll("[data-i18n]");
    els.forEach(function(el) {
      var key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });
    // Translate placeholders
    var placeholderEls = document.querySelectorAll("[data-i18n-placeholder]");
    placeholderEls.forEach(function(el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (t[key] !== undefined) {
        el.placeholder = t[key];
      }
    });
    // Translate select options
    var optionEls = document.querySelectorAll("option[data-i18n]");
    optionEls.forEach(function(el) {
      var key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });
    document.documentElement.lang = lang;
    document.title = lang === "vi"
      ? "TopLead Recruitment - Tuyển dụng uy tín hàng đầu"
      : "TopLead Recruitment - Premier Executive Search";
  }

  // Navbar scroll
  var navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function() {
    if (window.scrollY > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  });

  // Mobile menu
  var mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  var navLinks = document.querySelector(".nav-links");
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function() {
      navLinks.classList.toggle("active");
      this.classList.toggle("active");
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener("click", function(e) {
      var href = this.getAttribute("href");
      // Only prevent default for same-page anchors
      if (href && href.startsWith("#")) {
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) {
          window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
          navLinks.classList.remove("active");
          if (mobileMenuBtn) mobileMenuBtn.classList.remove("active");
        }
      }
    });
  });

  // Handle anchor links from other pages (e.g., about.html#story)
  if (window.location.hash) {
    setTimeout(function() {
      var target = document.querySelector(window.location.hash);
      if (target) {
        window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
      }
    }, 100);
  }

  // Scroll animations
  var scrollObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Elements to animate với stagger classes
  var animateSelectors = [
    { selector: '.section-header', stagger: 0 },
    { selector: '.value-card', stagger: true },
    { selector: '.service-card', stagger: true },
    { selector: '.job-card', stagger: true },
    { selector: '.founder-card', stagger: true },
    { selector: '.stats-card', stagger: true },
    { selector: '.pain-card', stagger: true },
    { selector: '.logo-item', stagger: true }
  ];

  animateSelectors.forEach(function(item) {
    var elements = document.querySelectorAll(item.selector);
    elements.forEach(function(el, index) {
      el.classList.add('animate-on-scroll');
      if (item.stagger && index < 4) {
        el.classList.add('stagger-' + (index + 1));
      }
      scrollObserver.observe(el);
    });
  });

  // Smooth reveal for sections
  var sections = document.querySelectorAll('section');
  var sectionObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(function(section) {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    sectionObserver.observe(section);
  });

  console.log("TopLead Website loaded với animations");

  // Form tabs
  var tabBtns = document.querySelectorAll(".tab-btn");
  var employerFields = document.querySelector(".employer-fields");
  var candidateFields = document.querySelector(".candidate-fields");

  tabBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      tabBtns.forEach(function(b) { b.classList.remove("active"); });
      this.classList.add("active");
      var tab = this.getAttribute("data-tab");
      if (tab === "employer") {
        if (employerFields) employerFields.style.display = "block";
        if (candidateFields) candidateFields.style.display = "none";
      } else {
        if (employerFields) employerFields.style.display = "none";
        if (candidateFields) candidateFields.style.display = "block";
      }
    });
  });

  // File upload
  var cvUpload = document.getElementById("cvUpload");
  var cvFileInput = document.getElementById("cvFile");
  var cvPreview = document.getElementById("cvPreview");
  var cvFileNameEl = document.getElementById("cvFileName");
  var removeCvBtn = document.getElementById("removeCv");

  if (cvUpload && cvFileInput) {
    cvUpload.addEventListener("click", function() { cvFileInput.click(); });
    cvFileInput.addEventListener("change", function() { handleFile(this.files); });

    cvUpload.addEventListener("dragover", function(e) { e.preventDefault(); this.classList.add("dragover"); });
    cvUpload.addEventListener("dragleave", function(e) { e.preventDefault(); this.classList.remove("dragover"); });
    cvUpload.addEventListener("drop", function(e) {
      e.preventDefault();
      this.classList.remove("dragover");
      handleFile(e.dataTransfer.files);
    });

    if (removeCvBtn) {
      removeCvBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        cvFileInput.value = "";
        cvPreview.style.display = "none";
        cvUpload.style.display = "block";
      });
    }
  }

  function handleFile(files) {
    if (files.length > 0) {
      var file = files[0];
      var allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (allowedTypes.indexOf(file.type) === -1) {
        alert(currentLang === "vi" ? "Vui lòng chọn file PDF, DOC, hoặc DOCX" : "Please select PDF, DOC, or DOCX file");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert(currentLang === "vi" ? "File quá lớn. Tối đa 5MB" : "File too large. Max 5MB");
        return;
      }
      cvFileNameEl.textContent = file.name;
      cvPreview.style.display = "flex";
      cvUpload.style.display = "none";
    }
  }

  // Contact form
  var contactForm = document.getElementById("contactForm");
  var formSuccess = document.getElementById("formSuccess");

  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      var data = {};
      new FormData(this).forEach(function(v, k) { data[k] = v; });
      var activeTab = document.querySelector(".tab-btn.active");
      data.type = activeTab ? activeTab.getAttribute("data-tab") : "candidate";

      if (!validateForm(data)) return;

      var submitBtn = this.querySelector(".btn-submit");
      var origText = submitBtn.innerHTML;
      submitBtn.innerHTML = "<span>" + (currentLang === "vi" ? "Đang gửi..." : "Submitting...") + "</span>";
      submitBtn.disabled = true;

      setTimeout(function() {
        contactForm.style.display = "none";
        formSuccess.style.display = "block";
        contactForm.reset();
        if (cvPreview) cvPreview.style.display = "none";
        if (cvUpload) cvUpload.style.display = "block";
        submitBtn.innerHTML = origText;
        submitBtn.disabled = false;
        setTimeout(function() {
          formSuccess.style.display = "none";
          contactForm.style.display = "block";
        }, 5000);
      }, 1500);
    });
  }

  function validateForm(data) {
    if (!data.name || data.name.trim().length < 2) {
      showError("name", currentLang === "vi" ? "Nhập họ tên (ít nhất 2 ký tự)" : "Enter name (at least 2 chars)");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      showError("email", currentLang === "vi" ? "Email không hợp lệ" : "Invalid email");
      return false;
    }
    if (!data.phone || data.phone.trim().length < 10) {
      showError("phone", currentLang === "vi" ? "Nhập số điện thoại" : "Enter phone number");
      return false;
    }
    if (data.type === "employer") {
      if (!data.company || !data.company.trim()) {
        showError("company", currentLang === "vi" ? "Nhập tên công ty" : "Enter company name");
        return false;
      }
      if (!data.position || !data.position.trim()) {
        showError("position", currentLang === "vi" ? "Nhập vị trí cần tuyển" : "Enter position to hire");
        return false;
      }
      if (!data.quantity || data.quantity < 1) {
        showError("quantity", currentLang === "vi" ? "Nhập số lượng" : "Enter quantity");
        return false;
      }
    }
    return true;
  }

  function showError(fieldId, msg) {
    var field = document.getElementById(fieldId);
    if (!field) return;
    field.classList.add("error");
    var parent = field.parentNode;
    var err = parent.querySelector(".error-msg");
    if (!err) {
      err = document.createElement("div");
      err.className = "error-msg";
      err.style.cssText = "color:#ff6b6b;font-size:0.8rem;margin-top:4px;";
      parent.appendChild(err);
    }
    err.textContent = msg;
    field.addEventListener("input", function handler() {
      field.classList.remove("error");
      if (err.parentNode) err.remove();
      field.removeEventListener("input", handler);
    });
    field.focus();
  }

  // Carousel dots
  var dots = document.querySelectorAll(".carousel-dots .dot");
  var slide = 0;
  setInterval(function() {
    slide = (slide + 1) % 3;
    dots.forEach(function(d, i) {
      if (i === slide) d.classList.add("active");
      else d.classList.remove("active");
    });
  }, 5000);

  console.log("TopLead Website loaded");
});

// ========================================
// Hero Particles Animation
// ========================================
function initHeroParticles() {
  var canvas = document.getElementById("heroParticles");
  if (!canvas) return;

  var ctx = canvas.getContext("2d");
  var particles = [];
  var mouse = { x: null, y: null };
  var maxDistance = 150;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  window.addEventListener("mousemove", function(e) {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  window.addEventListener("mouseout", function() {
    mouse.x = null;
    mouse.y = null;
  });

  var particleCount = 50;
  for (var i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(function(p, i) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(200, 168, 75, " + p.alpha + ")";
      ctx.fill();

      // Draw connections
      particles.forEach(function(p2, j) {
        if (i >= j) return;
        var dx = p.x - p2.x;
        var dy = p.y - p2.y;
        var distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = "rgba(200, 168, 75, " + (0.15 * (1 - distance / maxDistance)) + ")";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Mouse connection
      if (mouse.x && mouse.y) {
        var mdx = p.x - mouse.x;
        var mdy = p.y - mouse.y;
        var mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDist < maxDistance) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = "rgba(200, 168, 75, " + (0.25 * (1 - mDist / maxDistance)) + ")";
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(animate);
  }
  animate();
}

// ========================================
// Stats Counter with Suffix
// ========================================
function initStatsCounter() {
  var statsSection = document.querySelector(".stats");
  if (!statsSection) return;

  var statsObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".stats-card").forEach(function(card) {
          var numEl = card.querySelector(".stats-number");
          if (!numEl) return;

          var text = numEl.textContent.trim();
          var match = text.match(/^(\d+)(.*)$/);
          if (match) {
            var target = parseInt(match[1]);
            var suffix = match[2] || "";
            var current = 0;
            var increment = target / 80;

            function update() {
              current += increment;
              if (current < target) {
                numEl.textContent = Math.floor(current) + suffix;
                requestAnimationFrame(update);
              } else {
                numEl.textContent = target + suffix;
              }
            }
            update();
          }
        });
        statsObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statsObs.observe(statsSection);
}

// ========================================
// HERO SLIDER - CINEMATIC FADE + BLUR TRANSITION
// ========================================
(function () {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');
  const DURATION  = 3500;   // 3.5 giây mỗi slide
  const FADE_TIME = 800;    // 0.8 giây transition

  let current   = 0;
  let timer     = null;
  let isAnimating = false;

  // --- CSS inject (không cần chỉnh styles.css) ---
  const style = document.createElement('style');
  style.textContent = `
    .hero-slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 0 1.5rem;
      box-sizing: border-box;

      opacity: 0;
      transform: translateY(30px);
      filter: blur(6px);
      pointer-events: none;
      transition:
        opacity   ${FADE_TIME}ms cubic-bezier(0.4, 0, 0.2, 1),
        transform ${FADE_TIME}ms cubic-bezier(0.4, 0, 0.2, 1),
        filter    ${FADE_TIME}ms cubic-bezier(0.4, 0, 0.2, 1);
      will-change: opacity, transform, filter;
    }

    .hero-slide.active {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0px);
      pointer-events: auto;
    }

    .hero-slide.leaving {
      opacity: 0;
      transform: translateY(-20px);
      filter: blur(4px);
    }

    /* Headline styles */
    .hero-headline {
      font-size: clamp(2rem, 4vw, 3.2rem);
      font-weight: 800;
      line-height: 1.2;
      margin-bottom: 16px;
    }

    .headline-line {
      display: block;
    }

    .hero-slide .hero-subtitle {
      font-size: 1.1rem;
      color: rgba(255,255,255,0.75);
      margin-bottom: 24px;
      max-width: 500px;
      opacity: 0;
      transform: translateY(16px);
      transition:
        opacity   0.6s cubic-bezier(0.4, 0, 0.2, 1),
        transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .hero-slide .cta-buttons {
      opacity: 0;
      transform: translateY(12px);
      transition:
        opacity   0.5s cubic-bezier(0.4, 0, 0.2, 1),
        transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .hero-slide.active .hero-subtitle {
      opacity: 1; transform: translateY(0);
      transition-delay: 0.3s;
    }
    .hero-slide.active .cta-buttons {
      opacity: 1; transform: translateY(0);
      transition-delay: 0.45s;
    }

    /* Dot indicator */
    .hero-dots {
      position: absolute;
      bottom: 48px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 12px;
      z-index: 10;
    }

    .hero-dot {
      position: relative;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(255,255,255,0.3);
      border: none;
      cursor: pointer;
      padding: 0;
      transition: background 0.3s, transform 0.3s;
    }

    .hero-dot:hover {
      background: rgba(255,255,255,0.6);
      transform: scale(1.2);
    }

    .hero-dot.active {
      background: #D9885F;
      transform: scale(1.25);
    }

    .hero-slider {
      position: relative;
      width: 100%;
      height: 60vh;
      min-height: 400px;
      max-height: 500px;
    }
  `;
  document.head.appendChild(style);

  // --- Hàm chuyển slide ---
  function goTo(next) {
    if (isAnimating || next === current) return;
    isAnimating = true;

    const outSlide = slides[current];
    const inSlide  = slides[next];

    // Slide cũ: thêm class leaving để bay lên + blur ra
    outSlide.classList.add('leaving');
    outSlide.classList.remove('active');

    // Sau khi transition xong, dọn class leaving
    setTimeout(() => {
      outSlide.classList.remove('leaving');
    }, FADE_TIME);

    // Slide mới: active ngay để trigger transition vào
    inSlide.classList.add('active');

    // Cập nhật dots
    dots[current].classList.remove('active');
    dots[next].classList.add('active');

    // Reset CSS animation trên dot (để vòng tròn restart)
    dots[next].style.animation = 'none';
    dots[next].offsetHeight;   // reflow trick
    dots[next].style.animation = '';

    current = next;

    setTimeout(() => {
      isAnimating = false;
    }, FADE_TIME);
  }

  // --- Auto play ---
  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, DURATION);
  }

  // --- Dot click ---
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      if (i === current) return;
      clearInterval(timer);
      goTo(i);
      startTimer();
    });
  });

  // --- Pause khi hover vào hero ---
  const heroSection = document.querySelector('.hero');
  heroSection.addEventListener('mouseenter', () => clearInterval(timer));
  heroSection.addEventListener('mouseleave', () => startTimer());

  // --- Init ---
  slides[0].classList.add('active');
  dots[0].classList.add('active');
  startTimer();
})();

// ========================================
// Hero Text Reveal Animation
// ========================================
function initHeroTextReveal() {
  // Kept for fallback if needed
}

// ========================================
// Pain Point Ticker Animation
// ========================================
function initPainTicker() {
  var words = document.querySelectorAll(".pain-ticker-word");
  if (words.length === 0) return;

  var currentIndex = 0;

  setInterval(function() {
    words[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % words.length;
    words[currentIndex].classList.add("active");
  }, 2500);
}

// ========================================
// Testimonials Parallax Effect
// ========================================
function initTestimonialsParallax() {
  // Disabled - testimonials now fixed in place
}

// ========================================
// Magnetic Button Effect
// ========================================
function initMagneticButton() {
  var btn = document.querySelector(".btn-magnetic");
  if (!btn) return;

  btn.addEventListener("mousemove", function(e) {
    var rect = btn.getBoundingClientRect();
    var x = e.clientX - rect.left - rect.width / 2;
    var y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = "translate(" + (x * 0.3) + "px, " + (y * 0.3) + "px) scale(1.05)";
  });

  btn.addEventListener("mouseleave", function() {
    btn.style.transform = "translate(0px, 0px) scale(1)";
  });

  btn.addEventListener("click", function() {
    var contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({ top: contactSection.offsetTop - 80, behavior: "smooth" });
    }
  });
}

// Reading progress bar (blog post pages)
(function() {
  var bar = document.querySelector(".post-progress span");
  if (!bar) return;
  function update() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    var pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
    bar.style.width = pct + "%";
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();


// Count-up animation (Good Partner section)
(function() {
  var counts = document.querySelectorAll(".count");
  if (!counts.length || !("IntersectionObserver" in window)) {
    counts.forEach(function(el){ el.textContent = (el.getAttribute("data-target")||"0") + (el.getAttribute("data-suffix")||""); });
    return;
  }
  function animate(el) {
    var target = parseFloat(el.getAttribute("data-target")) || 0;
    var start = el.getAttribute("data-start"); start = start === null ? 0 : parseFloat(start);
    var suffix = el.getAttribute("data-suffix") || "";
    var dur = 1700, t0 = null;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(start + (target - start) * ease) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.4 });
  counts.forEach(function(c) { io.observe(c); });
})();


// Contact-page forms — visible submit feedback (connect a backend/action later)
(function() {
  ["employer-form", "candidate-form"].forEach(function(id) {
    var f = document.getElementById(id);
    if (!f) return;
    f.addEventListener("submit", function(e) {
      e.preventDefault();
      if (!f.checkValidity()) { f.reportValidity(); return; }
      var btn = f.querySelector('button[type="submit"]');
      if (!btn) return;
      var old = btn.innerHTML;
      btn.disabled = true;
      btn.textContent = (typeof currentLang !== "undefined" && currentLang === "en") ? "Sent ✓" : "Đã gửi ✓";
      f.reset();
      setTimeout(function() { btn.disabled = false; btn.innerHTML = old; }, 3500);
    });
  });
})();
