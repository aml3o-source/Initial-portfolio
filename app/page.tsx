<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abebaw Belay | DFS IT Manager & AI Researcher</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #f8fafd;
            --card-bg: #ffffff;
            --text-main: #1a1c20;
            --text-secondary: #505967;
            --accent: #4a6fa5; 
            --accent-light: #e8eef7;
            --border: #eaedf2;
            --transition: all 0.25s ease;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-main);
            line-height: 1.7;
        }

        /* Navigation */
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 10%;
            position: sticky;
            top: 0;
            background: rgba(248, 250, 253, 0.95);
            backdrop-filter: blur(8px);
            border-bottom: 1px solid var(--border);
            z-index: 1000;
        }

        .logo { font-weight: 600; font-size: 1.1rem; color: var(--accent); }

        nav ul { display: flex; list-style: none; }
        nav ul li { margin-left: 2rem; }
        nav ul li a { text-decoration: none; color: var(--text-secondary); font-size: 0.9rem; transition: var(--transition); }
        nav ul li a:hover { color: var(--accent); }

        /* Hero */
        .hero {
            padding: 8rem 10% 5rem;
            max-width: 1200px;
        }

        .hero h1 { font-size: 3.5rem; line-height: 1.2; margin-bottom: 1rem; }
        .hero .subtitle { 
            font-size: 1.2rem; 
            color: var(--accent); 
            font-weight: 600; 
            margin-bottom: 2rem;
            display: block;
        }
        .hero p { font-size: 1.1rem; color: var(--text-secondary); max-width: 700px; margin-bottom: 2.5rem; }

        /* Sections */
        .section { padding: 6rem 10%; }
        .container { max-width: 1100px; margin: 0 auto; }
        h2.section-title { font-size: 1.8rem; margin-bottom: 3rem; position: relative; }
        h2.section-title::after {
            content: '';
            position: absolute;
            left: 0; bottom: -10px;
            width: 40px; height: 3px;
            background: var(--accent);
        }

        /* Experience Cards */
        .exp-item {
            background: var(--card-bg);
            padding: 2.5rem;
            border-radius: 12px;
            border: 1px solid var(--border);
            margin-bottom: 2rem;
            transition: var(--transition);
        }

        .exp-item:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(74, 111, 165, 0.08); }

        .exp-header { display: flex; justify-content: space-between; margin-bottom: 1rem; }
        .exp-header h3 { font-size: 1.3rem; }
        .exp-date { font-size: 0.85rem; color: var(--accent); font-weight: 600; }
        .company { color: var(--text-secondary); font-weight: 400; font-size: 1rem; margin-bottom: 1rem; display: block;}

        /* Research/Thesis Box */
        .research-box {
            background: var(--accent-light);
            padding: 2rem;
            border-radius: 12px;
            border-left: 5px solid var(--accent);
        }

        /* Skill Pills */
        .skills-grid { display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 1rem; }
        .skill-tag {
            background: var(--accent-light);
            color: var(--accent);
            padding: 0.4rem 1rem;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 600;
        }

        footer {
            padding: 4rem 10%;
            border-top: 1px solid var(--border);
            text-align: center;
            color: var(--text-secondary);
            font-size: 0.9rem;
        }

        @media (max-width: 768px) {
            .hero h1 { font-size: 2.2rem; }
            .hero, .section { padding: 4rem 5%; }
            .exp-header { flex-direction: column; }
        }
    </style>
</head>
<body>

    <nav>
        <div class="logo">ABEBAW BELAY</div>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#research">Research</a></li>
            <li><a href="mailto:abebawb21@gmail.com">Contact</a></li>
        </ul>
    </nav>

    <header class="hero">
        <span class="subtitle">DFS IT Manager & MSc Computer Engineering</span>
        <h1>Driving Digital Transformation in Finance.</h1>
        <p>Expert in Digital Financial Services (DFS) infrastructure and AI-driven predictive modeling, specializing in the intersection of financial technology and machine learning.</p>
        <div class="skills-grid">
            <span class="skill-tag">Payment Infrastructure</span>
            <span class="skill-tag">Hybrid Deep Learning</span>
            <span class="skill-tag">System Administration</span>
            <span class="skill-tag">Fintech Innovation</span>
        </div>
    </header>

    <section id="experience" class="section">
        <div class="container">
            <h2 class="section-title">Professional Experience</h2>
            
            <div class="exp-item">
                <div class="exp-header">
                    <h3>DFS IT Manager</h3>
                    <span class="exp-date">01/2024 — Present</span>
                </div>
                <span class="company">Ethiopost | Addis Ababa</span>
                <p>Leading digital transformation efforts, overseeing secure digital banking solutions, and managing technical delivery for customer-centric financial products.</p>
            </div>

            <div class="exp-item">
                <div class="exp-header">
                    <h3>Senior System Administrator</h3>
                    <span class="exp-date">03/2017 — 01/2024</span>
                </div>
                <span class="company">EthSwitch S.C. (National Switch)</span>
                <p>Architected solutions for national payment interoperability. Managed Samrat Vista payment switch, Instant Payments, and payment gateways while ensuring PCI-DSS compliance.</p>
            </div>

            <div class="exp-item">
                <div class="exp-header">
                    <h3>System Engineer</h3>
                    <span class="exp-date">01/2013 — 02/2017</span>
                </div>
                <span class="company">Kifiya Financial Technology</span>
                <p>Responsible for the development, configuration, and administration of core computing systems supporting organizational financial functions.</p>
            </div>
        </div>
    </section>

    <section id="research" class="section" style="background: #fff;">
        <div class="container">
            <h2 class="section-title">Academic & Technical Research</h2>
            <div class="research-box">
                <h3>Thesis: Hybrid Deep Learning for Currency Prediction</h3>
                <p style="margin-top:1rem;">Developing a sophisticated predictive system for the Ethiopian Birr exchange rate. The model integrates <strong>MDRNN</strong>, <strong>DQN</strong>, and <strong>XGBoost</strong> to analyze 20 years of historical economic data, focusing on macroeconomic indicators like inflation and trade volumes.</p>
                <div class="skills-grid" style="margin-top:1.5rem;">
                    <span class="skill-tag" style="background:#fff;">TensorFlow</span>
                    <span class="skill-tag" style="background:#fff;">Keras</span>
                    <span class="skill-tag" style="background:#fff;">Time-Series Forecasting</span>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="section">
        <div class="container">
            <h2 class="section-title">Education & Certifications</h2>
            <ul style="list-style: none;">
                <li style="margin-bottom: 1.5rem;">
                    <strong>MSc in Computer Engineering (Current)</strong><br>
                    Addis Ababa University (AAiT)
                </li>
                <li style="margin-bottom: 1.5rem;">
                    <strong>Google Project Management Professional</strong><br>
                    Coursera/Google (Verified Cert)
                </li>
                <li style="margin-bottom: 1.5rem;">
                    <strong>Certified Digital Finance Practitioner (CDFP)</strong><br>
                    Digital Frontiers Institute
                </li>
            </ul>
        </div>
    </section>

    <footer>
        <p>&copy; 2026 Abebaw Belay Marye | Addis Ababa, Ethiopia</p>
        <p style="font-size: 0.75rem; margin-top: 10px;">Built with Python, Deep Learning, and Clean Code.</p>
    </footer>

</body>
</html>
