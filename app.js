const app = Vue.createApp({
    data() {
        return {
            menuActive: 'Home',
            toggle: false,
            menu: [
                { url: '#header', name: 'Home' },
                { url: '#about', name: 'About' },
                { url: '#experience', name: 'Experience' },
                { url: '#certificate', name: 'Certificate' },
                { url: '#autobiography', name: 'Autobiography' },
            ],
            headerInfo: {
                contentA: "具有「領導力、企劃力、溝通力、執行力」",
                contentB: "積極熱情、善於溝通，是我的特色"
            },
            obj: {
                output: "",
                isEnd: false,
                speed: 120,
                singleBack: false,
                sleep: 120,
                type: 'custom',
                backSpeed: 40,
                sentencePause: false
            },
            aboutInfo: [
                { title: '生日', content: '1997/12/16' },
                { title: '學校', content: '臺中科技大學' },
                { title: '科系', content: '財務金融系' },
                { title: '電話', content: '0903058559' },
                { title: '信箱', content: 'ton12161216@gmail.com' },
            ],
            skill: [
                { name: 'Word', percent: 90 },
                { name: 'Excel', percent: 80 },
                { name: 'Powerpoint', percent: 70 },
            ],
            lang: [
                { name: '中文', percent: 90 },
                { name: '台語', percent: 80 },
                { name: '英文', percent: 60 },
            ],
            exp: [
                {
                    title: '國立台中科技大學',
                    subTitle: '科系 : 財務金融系',
                    exp: [
                        {title: '社團經歷', content: ['財金系學會']},
                        {title: '競賽紀錄', content: ['第四屆創業種子團隊競賽']},
                        {title: '幹部經歷', content: ['學藝股長','班代表']},
                    ],
                    url: './image/exp01.png',
                    background: './image/exp-bg01.jpg'
                },
                {
                    title: '台灣銀行',
                    subTitle: '銀行業務助理',
                    exp: [
                        {title: '文書處理', content: ['勞工紓困貸款資料處理']},
                        {title: '資料裝訂', content: ['將各式資料裝訂及編號']},
                        {title: '接待客戶', content: ['接待來訪客戶，包含總機接聽']},
                    ],
                    url: './image/exp02.png',
                    background: './image/exp-bg02.jpg'
                },
                {
                    title: '國立草屯商工',
                    subTitle: '會計事務科',
                    exp: [
                        {title: '排球社社長', content: ['參加社團評鑑比賽獲得第二名佳績']},
                        {title: '樂活志工社', content: ['曾到南投特殊教育學校，陪伴小朋友們參與活動']},
                    ],
                    url: './image/exp03.png',
                    background: './image/exp-bg03.jpg'
                }
            ],
            certificate: [
                '證券商高級業務員',
                '證券商普通業務員',
                '會計事務(人工記帳)-丙級',
                '會計事務(資訊)-丙級',
                '理財規劃人員',
                '信託業業務人員',
                '產物保險業務人員',
                '金融常識與職業道德'
            ],
            certificateContent: [
                { url: './image/certificate01.jpg' },
                { url: './image/certificate02.jpg' },
                { url: './image/certificate03.jpg' },
                { url: './image/certificate04.jpg' },
                { url: './image/certificate05.jpg' },
                { url: './image/certificate06.jpg' },
                { url: '' },
                { url: './image/certificate05.jpg' },
            ],
            currentIndex: 0,
            autobiography: [
                { 
                    title: '【自我介紹與個人特質】', 
                    content: '我叫黃小菁，畢業於台中科技大學財務金融系。樂於溝通、細心、高效率都是我的特質。我的名字意涵著做事機靈及豁達大度，這也相當符合我待人處事的原則',
                    img: './image/rwd-bg01.png'
                },
                { 
                    title: '【校內社團經驗：培養專長、拓展人脈】', 
                    content: '我熱愛參與活動、挑戰自我，無論在課業或是工作中，對於眼前的任務我一定會盡全力達成。為了充實學校生活，我選擇加入系學會，並擔任多個活動的工作人員。',
                    exp: '七系聯合迎新活動: 主要負責各系交流、策畫活動以及廣告宣傳等。',
                    img: './image/rwd-bg02.png'
                },
                {
                    title: '【幹部經驗】', 
                    content: '我善於溝通、協調，能夠穩定且高效率的處理老師以及主管交辦給我的任務。班級幹部代表著責任及義務，很多事情都必須在當下進行判斷並解決，這也使我加強了處理緊急事物的能力。',
                    exp: '幹部經驗: 班代表、學藝股長',
                    img: './image/rwd-bg03.png'
                },
                {
                    title: '【工作經驗】', 
                    content: '除了在校社團經歷外，我也因成績在系上每學期都保持第一名，受老師引薦進入銀行業',
                    exp: '台灣銀行工讀生: 主要負責各類客戶資料整理、蒐集產業以及市場資料、了解金融商品及各項業務等',
                    img: './image/rwd-bg04.png'
                },
                {
                    title: '【生涯規劃與期許】', 
                    content: '於上述的經驗中，我建立起優良的工作習慣，知道如何有效率、有規劃的將代辦事項完成。我擁有證券商高級營業員、信託業務員、理財規劃人員等多個金融證照，也常參加不同講座來增進專業能力。我渴望在工作中挑戰自我，我也期許自己能在未來2~5年間成為專業金融人員。',
                    img: './image/rwd-bg05.png'
                }
            ],
            menuFix: false,
            toggleCert: false,
        }
    },
    methods: {
        changeIndex(index) {
            this.currentIndex = index;
            this.toggleCert   = true;
        },
        toggleRotate() {
            this.toggleCert = false;
        },
        changeMenu(item) {
            this.menuActive = item;
        },
        showSlideBar() {
            this.toggle = !this.toggle;
        },
        stepBack() {
            console.log(this.currentIndex);
            this.currentIndex--;
            if (this.currentIndex <= 0) {
                this.currentIndex = this.certificateContent.length;
            }
        },
        goAhead() {
            this.currentIndex++;
            if (this.currentIndex > this.certificateContent.length) {
                this.currentIndex = 0;
            }
        }
    },
    mounted() {
        const typed = new EasyTyper(this.obj, "Hello I'm Vivian");
        const that = this;
        window.onscroll = () => {
            if (window.scrollY > 0) {
                that.menuFix = true;
                if (window.scrollY < 800) {
                    that.menuActive = 'Home';
                } else if(window.scrollY > 800 && window.scrollY < 1200) {
                    that.menuActive = 'About';
                } else if(window.scrollY > 1200 && window.scrollY < 2800) {
                    that.menuActive = 'Experience';
                } else if(window.scrollY > 2800 && window.scrollY < 3500) {
                    that.menuActive = 'Certificate';
                } else if(window.scrollY > 3500) {
                    that.menuActive = 'Autobiography';
                }
            } else {
                that.menuFix = false;
            }
        }
    }
})
app.use(ElementPlus).mount('#app');