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
    "hero.slide1.cta": "Tuyển Ngay →",
    "hero.slide2.line1": "3 Hồ Sơ Đã Lọc Kỹ.",
    "hero.slide2.line2": "Bạn Chỉ Cần Chọn 1.",
    "hero.slide2.desc": "Không đọc hàng chục CV nữa. Chúng tôi lọc, bạn chọn, có người làm việc trong tuần.",
    "hero.slide2.cta": "Gửi Yêu Cầu →",
    "hero.slide3.line1": "Đang Thiếu Người Làm?",
    "hero.slide3.line2": "Đừng Để Ngày Mai Vẫn Vậy.",
    "hero.slide3.desc": "Mỗi ngày thiếu nhân sự là mỗi ngày doanh thu bị ảnh hưởng. Liên hệ hôm nay, có hồ sơ ngay ngày mai.",
    "hero.slide3.cta": "Liên Hệ Ngay →",
    "hero.slide4.line1": "Không Hợp Thì Đổi.",
    "hero.slide4.line2": "Không Hỏi Nhiều, Không Tốn Thêm.",
    "hero.slide4.desc": "Người TopLead giới thiệu đều có bảo hành thay thế. Vì chúng tôi chỉ gửi người mình tin.",
    "hero.slide4.cta": "Tìm Hiểu Thêm →",
    "founders.tag": "Đội ngũ sáng lập",
    "founders.title": "Những người sáng lập",
    "founders.f1.name": "Nguyễn Văn A",
    "founders.f1.role": "CEO & Founder",
    "founders.f1.bio": "15+ năm kinh nghiệm trong ngành tuyển dụng cấp cao.",
    "founders.f1.quote": "Với hơn 15 năm trong ngành tuyển dụng, tôi hiểu rằng việc tìm đúng người không chỉ là điền vào một vị trí - đó là kiến tạo tương lai của doanh nghiệp. Mỗi ứng viên chúng tôi giới thiệu đều được sàng lọc kỹ lưỡng qua quy trình 5 bước nghiêm ngặt, đảm bảo sự phù hợp về năng lực, văn hóa và mục tiêu nghề nghiệp.",
    "founders.f2.name": "Trần Thị B",
    "founders.f2.role": "COO & Co-founder",
    "founders.f2.bio": "Chuyên gia về xây dựng đội ngũ và văn hóa công ty.",
    "founders.f2.quote": "Xây dựng một đội ngũ không chỉ tuyển người - đó là tạo ra một cộng đồng chia sẻ giá trị. Tôi tin rằng sự thành công của TopLead đến từ việc hiểu sâu văn hóa doanh nghiệp của khách hàng và match với ứng viên phù hợp nhất.",
    "founders.f3.name": "Lê Minh C",
    "founders.f3.role": "CTO & Co-founder",
    "founders.f3.bio": "Chuyên gia công nghệ với 10+ năm trong ngành IT.",
    "founders.f3.quote": "Trong thời đại số, công nghệ giúp chúng tôi tiếp cận và sàng lọc ứng viên nhanh hơn, chính xác hơn. Nhưng cuối cùng, quyết định tuyển dụng vẫn cần đến sự thấu hiểu và judgment của con người.",
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
    "testimonials.t1.text": "TopLead giúp chúng tôi tìm được Engineering Manager trong vòng 3 tuần - nhanh hơn bất kỳ công ty tuyển dụng nào khác từng làm việc.",
    "testimonials.t2.text": "Đội ngũ chuyên nghiệp, hiểu rõ nhu cầu của chúng tôi. Đã hợp tác 3 năm và luôn hài lòng với chất lượng ứng viên.",
    "testimonials.t3.text": "TopLead giúp chúng tôi xây dựng đội ngũ từ 5 người lên 50 người trong 18 tháng. Không thể tin được!",
    "contact.tag": "Liên hệ",
    "contact.title": "Bắt đầu hợp tác",
    "contact.subtitle": "Để lại thông tin, chúng tôi sẽ liên hệ lại trong 24 giờ.",
    "contact.phone": "Điện thoại",
    "contact.address": "Địa chỉ",
    "contact.addressValue": "Tầng 15, Bitexco Tower, Q.1, TP.HCM",
    "contact.tab1": "Ứng viên",
    "contact.tab2": "Nhà tuyển dụng",
    "footer.tagline": "Kết nối nhân tài với doanh nghiệp Việt Nam từ năm 2018.",
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
    "about.hero.subtitle": "Kết nối nhân tài với doanh nghiệp Việt Nam từ 2018",
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
    "approach.testimonials.title": "Đối tác nói gì về TopLead"
  },
  en: {
    "approach.hero.subtitle": "Phương pháp tuyển dụng độc đáo của TopLead",
    "services.hero.title": "Dịch vụ",
    "services.hero.subtitle": "Giải pháp tuyển dụng toàn diện cho doanh nghiệp"
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
    "founders.f1.name": "Nguyen Van A",
    "founders.f1.role": "CEO & Founder",
    "founders.f1.bio": "15+ years of experience in executive recruitment.",
    "founders.f1.quote": "With over 15 years in recruitment, I understand that finding the right person isn't just about filling a position - it's about building the future of your business. Every candidate we present is rigorously screened through our 5-step process, ensuring alignment in skills, culture, and career goals.",
    "founders.f2.name": "Tran Thi B",
    "founders.f2.role": "COO & Co-founder",
    "founders.f2.bio": "Expert in team building and company culture.",
    "founders.f2.quote": "Building a team isn't just about hiring people - it's about creating a community that shares values. I believe TopLead's success comes from deeply understanding our clients' culture and matching them with the most suitable candidates.",
    "founders.f3.name": "Le Minh C",
    "founders.f3.role": "CTO & Co-founder",
    "founders.f3.bio": "Tech expert with 10+ years in IT industry.",
    "founders.f3.quote": "In the digital age, technology helps us reach and screen candidates faster and more accurately. But ultimately, the hiring decision requires human understanding and judgment.",
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
    "testimonials.t1.text": "TopLead helped us find an Engineering Manager in just 3 weeks - faster than any other recruitment firm we've worked with.",
    "testimonials.t2.text": "Professional team, deeply understands our needs. We've partnered for 3 years and are always satisfied with candidate quality.",
    "testimonials.t3.text": "TopLead helped us grow our team from 5 to 50 people in 18 months. Unbelievable!",
    "contact.tag": "Contact",
    "contact.title": "Start Your Partnership",
    "contact.subtitle": "Leave your info and we will get back to you within 24 hours.",
    "contact.phone": "Phone",
    "contact.address": "Address",
    "contact.addressValue": "Floor 15, Bitexco Tower, District 1, HCMC",
    "contact.tab1": "Candidate",
    "contact.tab2": "Employer",
    "footer.tagline": "Connecting talent with Vietnamese businesses since 2018.",
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
    "about.hero.subtitle": "Connecting talent with Vietnamese businesses since 2018",
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
    "services.hero.subtitle": "Comprehensive recruitment solutions for businesses"
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
      if (t[key] !== undefined && el.children.length === 0) {
        el.textContent = t[key];
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
