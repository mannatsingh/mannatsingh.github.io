/**
 * Content Data
 * Centralized data for publications, projects, media coverage, and blogs
 * Edit this file to add/update content without touching HTML
 */

const CONTENT = {
    // =========================================
    // Publications
    // =========================================
    publications: [
        // 2025
        {
            title: "Flowing from Words to Pixels: A Noise-Free Framework for Cross-Modality Evolution",
            authors: "Q Liu, X Yin, A Yuille, A Brown, <strong>M Singh</strong>",
            venue: "CVPR 2025",
            badge: { type: "highlight", text: "Highlight" },
            image: "assets/images/flowing-words-pixels.jpg",
            links: {
                paper: "https://arxiv.org/abs/2412.15213",
                project: "https://cross-flow.github.io/"
            }
        },
        // 2024
        {
            title: "Movie Gen: A Cast of Media Foundation Models",
            authors: "A Polyak, A Zohar, A Brown, A Tjandra, ..., <strong>M Singh</strong>, ...",
            venue: "arXiv 2024",
            image: "assets/images/moviegen.gif",
            links: {
                paper: "https://arxiv.org/abs/2410.13720",
                project: "https://ai.meta.com/research/movie-gen/"
            }
        },
        {
            title: "The Llama 3 Herd of Models",
            authors: "A Grattafiori, A Dubey, A Jauhri, A Pandey, ..., <strong>M Singh</strong>, ...",
            venue: "arXiv 2024",
            image: "assets/images/llama3.gif",
            links: {
                paper: "https://arxiv.org/abs/2407.21783",
                project: "https://llama.meta.com/"
            }
        },
        // 2023
        {
            title: "Emu Video: Factorizing Text-to-Video Generation by Explicit Image Conditioning",
            authors: "R Girdhar, <strong>M Singh</strong>, A Brown, Q Duval, S Azadi, SS Rambhatla, A Shah, X Yin, D Parikh, I Misra",
            venue: "arXiv 2023",
            image: "assets/images/emu-video.gif",
            links: {
                paper: "https://arxiv.org/abs/2311.10709",
                project: "https://emu-video.metademolab.com/"
            }
        },
        {
            title: "ImageBind: One Embedding Space to Bind Them All",
            authors: "R Girdhar, A El-Nouby, Z Liu, <strong>M Singh</strong>, KV Alwala, A Joulin, I Misra",
            venue: "CVPR 2023",
            badge: { type: "highlight", text: "Highlight" },
            image: "assets/images/imagebind.gif",
            links: {
                paper: "https://arxiv.org/abs/2305.05665",
                project: "https://imagebind.metademolab.com/",
                code: "https://github.com/facebookresearch/ImageBind"
            }
        },
        {
            title: "The Effectiveness of MAE Pre-Pretraining for Billion-Scale Pretraining",
            authors: "<strong>M Singh</strong>, Q Duval, KV Alwala, H Fan, V Aggarwal, A Adcock, A Joulin, P Dollár, C Feichtenhofer, R Girshick, R Girdhar, I Misra",
            venue: "ICCV 2023",
            image: "assets/images/mae-prepretraining.png",
            links: {
                paper: "https://arxiv.org/abs/2303.13496"
            }
        },
        {
            title: "OmniMAE: Single Model Masked Pretraining on Images and Videos",
            authors: "R Girdhar, A El-Nouby, <strong>M Singh</strong>, KV Alwala, A Joulin, I Misra",
            venue: "CVPR 2023",
            image: "assets/images/omnimae.png",
            links: {
                paper: "https://arxiv.org/abs/2206.08356",
                code: "https://github.com/facebookresearch/omnivore"
            }
        },
        // 2022
        {
            title: "Omnivore: A Single Model for Many Visual Modalities",
            authors: "R Girdhar, <strong>M Singh</strong>, N Ravi, L van der Maaten, A Joulin, I Misra",
            venue: "CVPR 2022",
            badge: { type: "oral", text: "Oral" },
            image: "assets/images/omnivore.jpg",
            links: {
                paper: "https://arxiv.org/abs/2201.08377",
                code: "https://github.com/facebookresearch/omnivore"
            }
        },
        {
            title: "Revisiting Weakly Supervised Pre-Training of Visual Perception Models",
            authors: "<strong>M Singh</strong>, L Gustafson, A Adcock, V Reis, B Gedik, RP Kosaraju, D Mahajan, R Girshick, P Dollár, L van der Maaten",
            venue: "CVPR 2022",
            image: "assets/images/weakly-supervised.png",
            links: {
                paper: "https://arxiv.org/abs/2201.08371"
            }
        },
        // 2021
        {
            title: "Early Convolutions Help Transformers See Better",
            authors: "T Xiao, <strong>M Singh</strong>, E Mintun, T Darrell, P Dollár, R Girshick",
            venue: "NeurIPS 2021",
            image: "assets/images/vitconv.png",
            links: {
                paper: "https://arxiv.org/abs/2106.14881"
            }
        },
        {
            title: "MDETR - Modulated Detection for End-to-End Multi-Modal Understanding",
            authors: "A Kamath, <strong>M Singh</strong>, Y LeCun, G Synnaeve, I Misra, N Carion",
            venue: "ICCV 2021",
            badge: { type: "oral", text: "Oral" },
            image: "assets/images/mdetr.png",
            links: {
                paper: "https://arxiv.org/abs/2104.12763",
                code: "https://github.com/ashkamath/mdetr"
            }
        },
        {
            title: "Fast and Accurate Model Scaling",
            authors: "P Dollár, <strong>M Singh</strong>, R Girshick",
            venue: "CVPR 2021",
            image: "assets/images/fast-model-scaling.png",
            links: {
                paper: "https://arxiv.org/abs/2103.06877"
            }
        },
        {
            title: "Self-supervised Pretraining of Visual Features in the Wild",
            authors: "P Goyal, M Caron, B Lefaudeux, M Xu, P Wang, V Pai, <strong>M Singh</strong>, V Liptchinsky, I Misra, A Joulin, P Bojanowski",
            venue: "arXiv 2021",
            image: "assets/images/seer.png",
            links: {
                paper: "https://arxiv.org/abs/2103.01988"
            }
        }
    ],

    // =========================================
    // Media Coverage
    // =========================================
    media: [
        {
            title: "Meta announces Movie Gen, an AI-powered video generator",
            source: "The Verge",
            favicon: "theverge.com",
            date: "Oct 2024",
            url: "https://www.theverge.com/2024/10/4/24261990/meta-movie-gen-ai-video-generator-openai-sora",
            image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25658085/ai_label__1_.png?quality=90&strip=all&crop=0,10.79,100,78.42&w=600"
        },
        {
            title: "Meta's Movie Gen model puts out realistic video with sound, so we can finally have infinite Moo Deng",
            source: "TechCrunch",
            favicon: "techcrunch.com",
            date: "Oct 2024",
            url: "https://techcrunch.com/2024/10/04/metas-movie-gen-model-puts-out-realistic-video-with-sound-so-we-can-finally-have-infinite-moo-deng/",
            image: "https://techcrunch.com/wp-content/uploads/2024/10/ai-moo.jpg?resize=600,338"
        },
        {
            title: "Meta's Open Source Llama 3 Is Already Nipping at OpenAI's Heels",
            source: "Wired",
            favicon: "wired.com",
            date: "Apr 2024",
            url: "https://www.wired.com/story/metas-open-source-llama-3-nipping-at-openais-heels/",
            image: "https://media.wired.com/photos/66299d1dc79850606ceb4921/191:100/w_600,c_limit/Meta-Llama-3-Fast-Forward-Business.jpg"
        },
        {
            title: "Meta brings us a step closer to AI-generated movies",
            source: "TechCrunch",
            favicon: "techcrunch.com",
            date: "Nov 2023",
            url: "https://techcrunch.com/2023/11/16/meta-brings-us-a-step-closer-to-ai-generated-movies/",
            image: "https://techcrunch.com/wp-content/uploads/2022/10/meta-distorted-glitched.jpg?resize=600,338"
        },
        {
            title: "Meta open-sources multisensory AI model that combines six types of data",
            source: "The Verge",
            favicon: "theverge.com",
            date: "May 2023",
            url: "https://www.theverge.com/2023/5/9/23716558/meta-imagebind-open-source-multisensory-modal-ai-model-research",
            image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22977155/acastro_211101_1777_meta_0001.jpg?quality=90&strip=all&crop=0,10.73,100,78.53&w=600"
        },
        {
            title: "Facebook's New AI Teaches Itself to See With Less Human Help",
            source: "Wired",
            favicon: "wired.com",
            date: "Mar 2021",
            url: "https://www.wired.com/story/facebook-new-ai-teaches-itself-see-less-human-help/",
            image: "https://media.wired.com/photos/60400f200fd1912b9163e1bf/191:100/w_600,c_limit/business_ai-vision_477260782.jpg"
        }
    ],

    // =========================================
    // Blog Posts
    // =========================================
    blogs: [
        {
            title: "How Meta Movie Gen could usher in a new AI-enabled era for content creators",
            source: "Meta AI Blog",
            date: "Oct 2024",
            url: "https://ai.meta.com/blog/movie-gen-media-foundation-models-generative-ai-video/",
            image: "assets/images/blog-moviegen.gif"
        },
        {
            title: "Llama 3.2: Revolutionizing edge AI and vision with open, customizable models",
            source: "Meta AI Blog",
            date: "Sep 2024",
            url: "https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/",
            image: "assets/images/blog-llama32.png"
        },
        {
            title: "Emu Video and Emu Edit: Our latest generative AI research milestones",
            source: "Meta AI Blog",
            date: "Nov 2023",
            url: "https://ai.meta.com/blog/emu-text-to-video-generation-image-editing-research/",
            image: "assets/images/blog-emu.gif"
        },
        {
            title: "ImageBind: Holistic AI learning across six modalities",
            source: "Meta AI Blog",
            date: "May 2023",
            url: "https://ai.meta.com/blog/imagebind-six-modalities-binding-ai/",
            image: "assets/images/blog-imagebind.gif"
        },
        {
            title: "SEER: The start of a more powerful, flexible, and accessible era for computer vision",
            source: "Meta AI Blog",
            date: "Mar 2021",
            url: "https://ai.meta.com/blog/seer-the-start-of-a-more-powerful-flexible-and-accessible-era-for-computer-vision/",
            image: "assets/images/blog-seer.jpg"
        }
    ],

    // =========================================
    // Open Source Projects
    // =========================================
    projects: [
        {
            name: "VISSL",
            description: "A library for state-of-the-art Self-Supervised Learning with PyTorch",
            repo: "facebookresearch/vissl",
            url: "https://github.com/facebookresearch/vissl"
        },
        {
            name: "pycls",
            description: "A flexible codebase for image classification with RegNet and model scaling",
            repo: "facebookresearch/pycls",
            url: "https://github.com/facebookresearch/pycls"
        },
        {
            name: "Classy Vision",
            description: "An end-to-end framework for image and video classification",
            repo: "facebookresearch/ClassyVision",
            url: "https://github.com/facebookresearch/ClassyVision"
        },
        {
            name: "NeuralCompression",
            description: "A collection of neural compression tools and methods",
            repo: "facebookresearch/NeuralCompression",
            url: "https://github.com/facebookresearch/NeuralCompression"
        }
    ],

    // =========================================
    // Research Areas
    // =========================================
    researchAreas: [
        {
            icon: "fas fa-video",
            title: "Video Generation",
            description: "Text-to-video and video-editing generative models"
        },
        {
            icon: "fas fa-circle-nodes",
            title: "Multimodal Learning",
            description: "Unified understanding and generation of language, vision, and other modalities"
        },
        {
            icon: "fas fa-database",
            title: "Large-Scale Learning",
            description: "Training and scaling models on billions of images and videos"
        },
        {
            icon: "fas fa-eye",
            title: "Computer Vision",
            description: "Visual perception models, representation learning, image classification"
        },
        {
            icon: "fas fa-brain",
            title: "Self-Supervised Learning",
            description: "Learning visual representations from unlabeled data"
        }
    ]
};

// Make available globally
if (typeof window !== 'undefined') {
    window.CONTENT = CONTENT;
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONTENT;
}
