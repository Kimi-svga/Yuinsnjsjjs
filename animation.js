/**
 * Pit Wall Pulse 7.0 — ULTIMATE
 * ПОЛНАЯ РАБОЧАЯ ВЕРСИЯ
 * Гонка, квалификация, чемпионат, гараж, симулятор
 */

// ============================================================
// ДАННЫЕ F1 2026
// ============================================================
const F1 = {
    teams: [
        { id: 'mclaren', name: 'McLaren', color: '#FF8000', engine: 'Mercedes' },
        { id: 'mercedes', name: 'Mercedes', color: '#00D2BE', engine: 'Mercedes' },
        { id: 'ferrari', name: 'Ferrari', color: '#DC0000', engine: 'Ferrari' },
        { id: 'redbull', name: 'Red Bull', color: '#1E41FF', engine: 'Red Bull Ford' },
        { id: 'astonmartin', name: 'Aston Martin', color: '#006F62', engine: 'Honda' },
        { id: 'alpine', name: 'Alpine', color: '#0090FF', engine: 'Mercedes' },
        { id: 'williams', name: 'Williams', color: '#1868D8', engine: 'Mercedes' },
        { id: 'racingbulls', name: 'Racing Bulls', color: '#4B69FF', engine: 'Red Bull Ford' },
        { id: 'haas', name: 'Haas', color: '#B6B6B6', engine: 'Ferrari' },
        { id: 'audi', name: 'Audi', color: '#FF0000', engine: 'Audi' },
        { id: 'cadillac', name: 'Cadillac', color: '#0066B3', engine: 'Ferrari' }
    ],
    drivers: [
        { name: 'L. Norris', team: 'McLaren', number: 4 },
        { name: 'O. Piastri', team: 'McLaren', number: 81 },
        { name: 'G. Russell', team: 'Mercedes', number: 63 },
        { name: 'K. Antonelli', team: 'Mercedes', number: 12 },
        { name: 'C. Leclerc', team: 'Ferrari', number: 16 },
        { name: 'L. Hamilton', team: 'Ferrari', number: 44 },
        { name: 'M. Verstappen', team: 'Red Bull', number: 1 },
        { name: 'I. Hadjar', team: 'Red Bull', number: 30 },
        { name: 'F. Alonso', team: 'Aston Martin', number: 14 },
        { name: 'L. Stroll', team: 'Aston Martin', number: 18 },
        { name: 'P. Gasly', team: 'Alpine', number: 10 },
        { name: 'F. Colapinto', team: 'Alpine', number: 43 },
        { name: 'A. Albon', team: 'Williams', number: 23 },
        { name: 'C. Sainz', team: 'Williams', number: 55 },
        { name: 'L. Lawson', team: 'Racing Bulls', number: 38 },
        { name: 'A. Lindblad', team: 'Racing Bulls', number: 11 },
        { name: 'E. Ocon', team: 'Haas', number: 31 },
        { name: 'O. Bearman', team: 'Haas', number: 87 },
        { name: 'N. Hülkenberg', team: 'Audi', number: 27 },
        { name: 'G. Bortoleto', team: 'Audi', number: 5 },
        { name: 'V. Bottas', team: 'Cadillac', number: 77 },
        { name: 'S. Perez', team: 'Cadillac', number: 11 }
    ],
    tracks: [
        { id: 'australia', name: 'Альберт-Парк', country: 'Австралия', laps: 40, speed: 1.0, tyreWear: 0.9, fuelCons: 0.9 },
        { id: 'china', name: 'Шанхай', country: 'Китай', laps: 38, speed: 1.1, tyreWear: 1.0, fuelCons: 1.0 },
        { id: 'japan', name: 'Судзука', country: 'Япония', laps: 39, speed: 1.3, tyreWear: 0.8, fuelCons: 1.1 },
        { id: 'miami', name: 'Майами', country: 'США', laps: 39, speed: 0.9, tyreWear: 0.9, fuelCons: 0.8 },
        { id: 'canada', name: 'Монреаль', country: 'Канада', laps: 40, speed: 1.0, tyreWear: 1.1, fuelCons: 0.9 },
        { id: 'monaco', name: 'Монако', country: 'Монако', laps: 42, speed: 0.5, tyreWear: 1.6, fuelCons: 0.6 },
        { id: 'spain', name: 'Барселона', country: 'Испания', laps: 38, speed: 1.1, tyreWear: 1.0, fuelCons: 1.0 },
        { id: 'austria', name: 'Ред Булл Ринг', country: 'Австрия', laps: 39, speed: 1.2, tyreWear: 0.9, fuelCons: 1.1 },
        { id: 'uk', name: 'Сильверстоун', country: 'Великобритания', laps: 40, speed: 1.2, tyreWear: 0.9, fuelCons: 1.0 },
        { id: 'belgium', name: 'Спа', country: 'Бельгия', laps: 44, speed: 1.4, tyreWear: 0.6, fuelCons: 1.3 },
        { id: 'hungary', name: 'Хунгароринг', country: 'Венгрия', laps: 40, speed: 0.9, tyreWear: 1.1, fuelCons: 0.9 },
        { id: 'netherlands', name: 'Зандворт', country: 'Нидерланды', laps: 40, speed: 1.0, tyreWear: 1.0, fuelCons: 0.9 },
        { id: 'italy', name: 'Монца', country: 'Италия', laps: 40, speed: 1.3, tyreWear: 0.7, fuelCons: 1.2 },
        { id: 'madrid', name: 'Мадрид', country: 'Испания', laps: 38, speed: 1.0, tyreWear: 0.9, fuelCons: 0.9 },
        { id: 'azerbaijan', name: 'Баку', country: 'Азербайджан', laps: 40, speed: 1.2, tyreWear: 0.8, fuelCons: 1.1 },
        { id: 'singapore', name: 'Сингапур', country: 'Сингапур', laps: 42, speed: 0.5, tyreWear: 1.5, fuelCons: 0.7 },
        { id: 'usa', name: 'Остин', country: 'США', laps: 39, speed: 1.1, tyreWear: 0.9, fuelCons: 1.0 },
        { id: 'mexico', name: 'Мехико', country: 'Мексика', laps: 38, speed: 0.9, tyreWear: 1.2, fuelCons: 0.8 },
        { id: 'brazil', name: 'Сан-Паулу', country: 'Бразилия', laps: 39, speed: 1.2, tyreWear: 0.8, fuelCons: 1.1 },
        { id: 'vegas', name: 'Лас-Вегас', country: 'США', laps: 40, speed: 1.1, tyreWear: 0.8, fuelCons: 1.0 },
        { id: 'qatar', name: 'Лусаил', country: 'Катар', laps: 37, speed: 1.2, tyreWear: 0.9, fuelCons: 1.2 },
        { id: 'abudhabi', name: 'Яс-Марина', country: 'ОАЭ', laps: 40, speed: 1.0, tyreWear: 0.9, fuelCons: 1.1 }
    ],
    calendar: [
        { round: 1, trackId: 'australia', sprint: false },
        { round: 2, trackId: 'china', sprint: true },
        { round: 3, trackId: 'japan', sprint: false },
        { round: 4, trackId: 'miami', sprint: true },
        { round: 5, trackId: 'canada', sprint: true },
        { round: 6, trackId: 'monaco', sprint: false },
        { round: 7, trackId: 'spain', sprint: false },
        { round: 8, trackId: 'austria', sprint: false },
        { round: 9, trackId: 'uk', sprint: true },
        { round: 10, trackId: 'belgium', sprint: false },
        { round: 11, trackId: 'hungary', sprint: false },
        { round: 12, trackId: 'netherlands', sprint: true },
        { round: 13, trackId: 'italy', sprint: false },
        { round: 14, trackId: 'madrid', sprint: false },
        { round: 15, trackId: 'azerbaijan', sprint: false },
        { round: 16, trackId: 'singapore', sprint: true },
        { round: 17, trackId: 'usa', sprint: false },
        { round: 18, trackId: 'mexico', sprint: false },
        { round: 19, trackId: 'brazil', sprint: false },
        { round: 20, trackId: 'vegas', sprint: false },
        { round: 21, trackId: 'qatar', sprint: true },
        { round: 22, trackId: 'abudhabi', sprint: false }
    ],
    weathers: [
        { id: 'sunny', icon: '☀️', label: 'Сухо', temp: 28, grip: 1.0, rain: 0 },
        { id: 'cloudy', icon: '⛅', label: 'Облачно', temp: 22, grip: 0.9, rain: 0 },
        { id: 'rainy', icon: '🌧️', label: 'Дождь', temp: 16, grip: 0.6, rain: 0.6 },
        { id: 'storm', icon: '⛈️', label: 'Ливень', temp: 12, grip: 0.4, rain: 1.0 }
    ]
};

// ============================================================
// КЛАСС ИГРЫ
// ============================================================
class PitWallPulse {
    constructor() {
        // Состояние сезона
        this.currentRound = 0;
        this.totalRounds = F1.calendar.length;
        this.playerPilot = null;
        this.playerTeam = null;
        this.selectedTire = 'medium';
        this.championship = {};
        this.constructorsChamp = {};
        this.stats = { races: 0, wins: 0, podiums: 0, points: 0, fastestLaps: 0 };
        this.raceHistory = [];

        // Состояние гонки
        this.lap = 0;
        this.maxLaps = 40;
        this.done = false;
        this.positions = [];
        this.playerPos = 1;
        this.overtakes = [];
        this.penalties = 0;
        this.points = 0;
        this.ers = 85;
        this.tyre = 70;
        this.fuel = 90;
        this.energy = 100;
        this.waiting = false;
        this.track = null;
        this.weather = null;
        this.penaltyHistory = [];
        this.fastestLap = false;
        this.fastestLapTime = 999;
        this.racePhase = 'qualy';
        this.raceStarted = false;
        this.pitStops = 0;
        this.dotd = null;
        this.raceRunning = false;
        this.raceTimer = null;

        // Квалификация
        this.qualyClicks = 0;
        this.qualyTime = 10;
        this.qualyActive = false;
        this.qualyTimer = null;
        this.qualyDone = false;

        // Прогноз погоды
        this.weatherForecast = 0;
        this.weatherChange = false;

        // DOM элементы
        this.els = {};

        this.init();
    }

    // ============================================================
    // ИНИЦИАЛИЗАЦИЯ
    // ============================================================
    init() {
        F1.drivers.forEach(d => this.championship[d.name] = 0);
        F1.teams.forEach(t => this.constructorsChamp[t.name] = 0);

        this.els = {
            gameRound: document.getElementById('gameRound'),
            gameTrack: document.getElementById('gameTrack'),
            gameLap: document.getElementById('gameLap'),
            lapTrack: document.getElementById('lapTrack'),
            raceGrid: document.getElementById('raceGrid'),
            chatMessages: document.getElementById('chatMessages'),
            qualyGrid: document.getElementById('qualyGrid'),
            qualyTimer: document.getElementById('qualyTimer'),
            qualyClicks: document.getElementById('qualyClicks'),
            qualyPosition: document.getElementById('qualyPosition'),
            btnGas: document.getElementById('btnGas'),
            btnAttack: document.getElementById('btnAttack'),
            btnConserve: document.getElementById('btnConserve'),
            btnBox: document.getElementById('btnBox'),
            btnStewards: document.getElementById('btnStewards'),
            btnTires: document.getElementById('btnTires'),
            btnStartRace: document.getElementById('btnStartRace'),
            tireSelect: document.getElementById('tireSelect'),
            ersBar: document.getElementById('ersBar'),
            tyreBar: document.getElementById('tyreBar'),
            fuelBar: document.getElementById('fuelBar'),
            energyBar: document.getElementById('energyBar'),
            ersValue: document.getElementById('ersValue'),
            tyreValue: document.getElementById('tyreValue'),
            fuelValue: document.getElementById('fuelValue'),
            energyValue: document.getElementById('energyValue'),
            pFinish: document.getElementById('pFinish'),
            pPoints: document.getElementById('pPoints'),
            pPenalties: document.getElementById('pPenalties'),
            pOvertakes: document.getElementById('pOvertakes'),
            pFastest: document.getElementById('pFastest'),
            pDotd: document.getElementById('pDotd'),
            pResult: document.getElementById('pResult'),
            btnNext: document.getElementById('btnNext'),
            qualyView: document.getElementById('qualyView'),
            raceView: document.getElementById('raceView'),
            protocolView: document.getElementById('protocolView'),
            gameReset: document.getElementById('gameReset'),
            pilotList: document.getElementById('pilotList'),
            teamList: document.getElementById('teamList'),
            garageChat: document.getElementById('garageChat'),
            garageInput: document.getElementById('garageInput'),
            garageSend: document.getElementById('garageSend'),
            simDisplay: document.getElementById('simDisplay'),
            simStart: document.getElementById('simStart'),
            simStop: document.getElementById('simStop'),
            statRaces: document.getElementById('statRaces'),
            statWins: document.getElementById('statWins'),
            statPodiums: document.getElementById('statPodiums'),
            statPoints: document.getElementById('statPoints'),
            statFastest: document.getElementById('statFastest'),
            driversStandings: document.getElementById('driversStandings'),
            constructorsStandings: document.getElementById('constructorsStandings'),
            startGameBtn: document.getElementById('startGameBtn')
        };

        // Выбор пилота по умолчанию
        this.playerPilot = F1.drivers[Math.floor(Math.random() * F1.drivers.length)];
        this.playerTeam = F1.teams.find(t => t.name === this.playerPilot.team);

        this.renderGarage();
        this.setupNavigation();
        this.setupFAQ();
        this.renderStandings();
        this.setupSimulator();
        this.setupGarageChat();
        this.setupGame();
        this.updateStats();

        console.log('🏎️ Pit Wall Pulse 7.0 ULTIMATE загружен!');
        console.log(`👤 Пилот: ${this.playerPilot.name} (${this.playerTeam.name})`);
        console.log(`🏁 Всего Гран-при: ${this.totalRounds}`);
    }

    // ============================================================
    // НАВИГАЦИЯ
    // ============================================================
    setupNavigation() {
        const links = document.querySelectorAll('.nav-links a');
        const sections = document.querySelectorAll('.section');
        const toggle = document.getElementById('navToggle');
        const navLinks = document.getElementById('navLinks');

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href').substring(1);
                links.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                sections.forEach(s => s.classList.remove('active'));
                document.getElementById(target).classList.add('active');
                if (window.innerWidth <= 768) navLinks.classList.remove('show');
            });
        });

        toggle.addEventListener('click', () => navLinks.classList.toggle('show'));

        // Кнопка "Начать гонку" на главной
        this.els.startGameBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.nav-links a[href="#game"]').click();
        });

        // Табы зачёта
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                const tabName = this.dataset.tab;
                document.getElementById('driversStandings').style.display = tabName === 'drivers' ? 'block' : 'none';
                document.getElementById('constructorsStandings').style.display = tabName === 'constructors' ? 'block' : 'none';
            });
        });
    }

    // ============================================================
    // FAQ
    // ============================================================
    setupFAQ() {
        document.querySelectorAll('.faq-q').forEach(q => {
            q.addEventListener('click', function() {
                this.nextElementSibling.classList.toggle('show');
                this.classList.toggle('open');
            });
        });
    }

    // ============================================================
    // ГАРАЖ
    // ============================================================
    renderGarage() {
        // Пилоты
        const pilotContainer = this.els.pilotList;
        pilotContainer.innerHTML = '';
        F1.drivers.forEach(d => {
            const btn = document.createElement('button');
            btn.className = `pilot-opt ${d.name === this.playerPilot.name ? 'active' : ''}`;
            btn.textContent = `#${d.number} ${d.name}`;
            btn.dataset.pilot = d.name;
            btn.addEventListener('click', () => {
                pilotContainer.querySelectorAll('.pilot-opt').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.playerPilot = d;
                this.playerTeam = F1.teams.find(t => t.name === d.team);
                this.addGarageMessage('Инженер', `Выбран пилот ${d.name} (${this.playerTeam.name})`);
                this.updateStats();
            });
            pilotContainer.appendChild(btn);
        });

        // Команды
        const teamContainer = this.els.teamList;
        teamContainer.innerHTML = '';
        F1.teams.forEach(t => {
            const btn = document.createElement('button');
            btn.className = `team-opt ${t.name === this.playerTeam.name ? 'active' : ''}`;
            btn.textContent = t.name;
            btn.style.borderLeftColor = t.color;
            btn.dataset.team = t.name;
            btn.addEventListener('click', () => {
                teamContainer.querySelectorAll('.team-opt').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const team = F1.teams.find(te => te.name === t.name);
                if (team) {
                    this.playerTeam = team;
                    const driver = F1.drivers.find(d => d.team === team.name);
                    if (driver) {
                        this.playerPilot = driver;
                        pilotContainer.querySelectorAll('.pilot-opt').forEach(b => {
                            b.classList.toggle('active', b.dataset.pilot === driver.name);
                        });
                    }
                    this.addGarageMessage('Инженер', `Выбрана команда ${team.name}`);
                    this.updateStats();
                }
            });
            teamContainer.appendChild(btn);
        });

        // Шины
        document.querySelectorAll('.tire-opt').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tire-opt').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.selectedTire = btn.dataset.tire;
                const info = document.getElementById('tireInfo');
                const tireData = {
                    soft: 'Софт: +15% скорость, быстрый износ',
                    medium: 'Медиум: баланс скорости и износа',
                    hard: 'Хард: -10% скорость, долгий износ'
                };
                info.textContent = tireData[this.selectedTire] || tireData.medium;
                this.addGarageMessage('Инженер', `Выбрана стратегия: ${tireData[this.selectedTire]}`);
            });
        });
    }

    addGarageMessage(who, text) {
        const chat = this.els.garageChat;
        const msg = document.createElement('div');
        msg.className = 'msg';
        msg.innerHTML = `<span class="name">${who}:</span> ${text}`;
        chat.appendChild(msg);
        chat.scrollTop = chat.scrollHeight;
        if (chat.children.length > 20) chat.removeChild(chat.firstChild);
    }

    setupGarageChat() {
        this.els.garageSend.addEventListener('click', () => {
            const input = this.els.garageInput;
            const text = input.value.trim();
            if (text) {
                this.addGarageMessage('Вы', text);
                input.value = '';
                setTimeout(() => {
                    const responses = ['Понял, учту!', 'Отличная идея!', 'Так и сделаем.', 'Хороший вопрос!', 'Данные приняты.'];
                    this.addGarageMessage('Инженер', responses[Math.floor(Math.random() * responses.length)]);
                }, 500 + Math.random() * 500);
            }
        });
        this.els.garageInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this.els.garageSend.click();
        });
    }

    // ============================================================
    // СИМУЛЯТОР
    // ============================================================
    setupSimulator() {
        let simInterval = null;
        let simScore = 0;
        const display = this.els.simDisplay;
        const startBtn = this.els.simStart;
        const stopBtn = this.els.simStop;

        startBtn.addEventListener('click', () => {
            simScore = 0;
            display.textContent = '🏁 ГАЗ! Жми быстрее! 0';
            display.style.color = '#4FC3F7';
            if (simInterval) clearInterval(simInterval);
            simInterval = setInterval(() => {
                simScore += Math.floor(Math.random() * 5) + 1;
                display.textContent = `🏁 ГАЗ! Жми быстрее! ${simScore}`;
            }, 150);
            startBtn.disabled = true;
            stopBtn.disabled = false;
            this.addGarageMessage('Инженер', '🏎️ Тренировка началась!');
        });

        stopBtn.addEventListener('click', () => {
            if (simInterval) clearInterval(simInterval);
            const total = simScore;
            display.textContent = `🏁 Тренировка завершена! Результат: ${total} кликов`;
            display.style.color = '#FFD700';
            startBtn.disabled = false;
            stopBtn.disabled = true;
            let grade = 'Нужно тренироваться!';
            if (total > 80) grade = '🔥 Отлично! Ты готов к квалификации!';
            else if (total > 50) grade = '💪 Хорошо! Почти как профессионал!';
            else if (total > 30) grade = '👍 Неплохо, но можно лучше!';
            this.addGarageMessage('Инженер', `📊 Результат: ${total} кликов — ${grade}`);
        });
        stopBtn.disabled = true;
    }

    // ============================================================
    // СТАТИСТИКА
    // ============================================================
    updateStats() {
        this.els.statRaces.textContent = this.stats.races;
        this.els.statWins.textContent = this.stats.wins;
        this.els.statPodiums.textContent = this.stats.podiums;
        this.els.statPoints.textContent = this.stats.points;
        this.els.statFastest.textContent = this.stats.fastestLaps;
    }

    // ============================================================
    // ЗАЧЁТ
    // ============================================================
    renderStandings() {
        // Пилоты
        const sorted = Object.entries(this.championship).sort((a, b) => b[1] - a[1]).slice(0, 20);
        let html = `<div class="standings-table"><div class="st-header"><span>POS</span><span>DRIVER</span><span>TEAM</span><span>PTS</span></div>`;
        sorted.forEach(([name, pts], i) => {
            const driver = F1.drivers.find(d => d.name === name);
            const isPlayer = name === this.playerPilot?.name;
            html += `<div class="st-row ${i === 0 ? 'leader' : ''} ${isPlayer ? 'player' : ''}">
                <span class="st-pos ${i < 3 ? 'top3' : ''} ${i === 0 ? 'p1' : ''}">${i + 1}</span>
                <span class="st-name">${isPlayer ? '★ ' : ''}${name}</span>
                <span class="st-team">${driver ? driver.team : '—'}</span>
                <span class="st-pts">${pts}</span>
            </div>`;
        });
        html += '</div>';
        this.els.driversStandings.innerHTML = html;

        // Команды
        const cSorted = Object.entries(this.constructorsChamp).sort((a, b) => b[1] - a[1]).slice(0, 11);
        let cHtml = `<div class="standings-table"><div class="st-header"><span>POS</span><span>TEAM</span><span>PTS</span></div>`;
        cSorted.forEach(([name, pts], i) => {
            const isPlayer = name === this.playerTeam?.name;
            cHtml += `<div class="st-row ${i === 0 ? 'leader' : ''} ${isPlayer ? 'player' : ''}">
                <span class="st-pos ${i < 3 ? 'top3' : ''} ${i === 0 ? 'p1' : ''}">${i + 1}</span>
                <span class="st-name">${isPlayer ? '★ ' : ''}${name}</span>
                <span class="st-pts">${pts}</span>
            </div>`;
        });
        cHtml += '</div>';
        this.els.constructorsStandings.innerHTML = cHtml;
    }

    // ============================================================
    // ИГРА
    // ============================================================
    setupGame() {
        this.els.btnGas.addEventListener('click', () => this.handleGas());
        this.els.btnAttack.addEventListener('click', () => this.handleAction('attack'));
        this.els.btnConserve.addEventListener('click', () => this.handleAction('conserve'));
        this.els.btnBox.addEventListener('click', () => this.handleAction('box'));
        this.els.btnStewards.addEventListener('click', () => this.handleAction('penalty'));
        this.els.btnTires.addEventListener('click', () => {
            this.els.tireSelect.style.display = this.els.tireSelect.style.display === 'none' ? 'grid' : 'none';
        });
        this.els.btnStartRace.addEventListener('click', () => this.startRace());

        this.els.tireSelect.querySelectorAll('.tire-opt').forEach(btn => {
            btn.addEventListener('click', () => {
                this.els.tireSelect.querySelectorAll('.tire-opt').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.selectedTire = btn.dataset.tire;
                this.addChat('Стратегия', `Переход на ${this.selectedTire}`, 'team');
            });
        });

        this.els.btnNext.addEventListener('click', () => this.nextRound());
        this.els.gameReset.addEventListener('click', () => this.resetGame());

        this.startSeason();
    }

    // ============================================================
    // СЕЗОН
    // ============================================================
    startSeason() {
        this.currentRound = 0;
        this.championship = {};
        this.constructorsChamp = {};
        F1.drivers.forEach(d => this.championship[d.name] = 0);
        F1.teams.forEach(t => this.constructorsChamp[t.name] = 0);
        this.stats = { races: 0, wins: 0, podiums: 0, points: 0, fastestLaps: 0 };
        this.raceHistory = [];
        this.updateStats();
        this.renderStandings();
        this.startRound();
    }

    startRound() {
        const calendar = F1.calendar[this.currentRound];
        if (!calendar) return;

        const track = F1.tracks.find(t => t.id === calendar.trackId);
        this.track = track;
        this.maxLaps = track.laps || 40;
        this.weather = F1.weathers[Math.floor(Math.random() * F1.weathers.length)];
        this.weatherForecast = 3 + Math.floor(Math.random() * 4);
        this.weatherChange = false;

        this.els.gameRound.textContent = `ЭТАП ${this.currentRound + 1}/${this.totalRounds}`;
        this.els.gameTrack.textContent = track.name;
        this.els.gameLap.textContent = `0 / ${this.maxLaps}`;

        this.lap = 0;
        this.done = false;
        this.overtakes = [];
        this.penalties = 0;
        this.points = 0;
        this.ers = 85 + Math.random() * 10;
        this.tyre = 70 + Math.random() * 15;
        this.fuel = 90 + Math.random() * 8;
        this.energy = 100;
        this.fastestLap = false;
        this.fastestLapTime = 999;
        this.pitStops = 0;
        this.dotd = null;
        this.penaltyHistory = [];
        this.raceRunning = false;

        this.generateGrid();

        this.racePhase = 'qualy';
        this.qualyClicks = 0;
        this.qualyTime = 10;
        this.qualyActive = true;
        this.qualyDone = false;

        this.els.qualyView.style.display = 'block';
        this.els.raceView.style.display = 'none';
        this.els.protocolView.style.display = 'none';
        this.els.btnGas.disabled = false;
        this.els.btnStartRace.disabled = true;
        this.els.qualyTimer.textContent = '10.0с';
        this.els.qualyClicks.textContent = '0 кликов';

        this.renderQualyGrid();

        if (this.qualyTimer) clearInterval(this.qualyTimer);
        this.qualyTimer = setInterval(() => {
            this.qualyTime -= 0.1;
            this.els.qualyTimer.textContent = `${this.qualyTime.toFixed(1)}с`;
            if (this.qualyTime <= 0) {
                clearInterval(this.qualyTimer);
                this.finishQualifying();
            }
        }, 100);

        this.els.chatMessages.innerHTML = '';
        this.addChat('КВАЛИФИКАЦИЯ', `Начинается квалификация на Гран-при ${track.name}! Жми ГАЗ!`, 'qualy');
    }

    generateGrid() {
        const drivers = [...F1.drivers];
        for (let i = drivers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [drivers[i], drivers[j]] = [drivers[j], drivers[i]];
        }
        this.positions = drivers;
        this.playerPos = drivers.indexOf(this.playerPilot) + 1;
    }

    renderQualyGrid() {
        const container = this.els.qualyGrid;
        container.innerHTML = '';
        this.positions.forEach((d, i) => {
            const isPlayer = d.name === this.playerPilot.name;
            const row = document.createElement('div');
            row.className = `qualy-row ${isPlayer ? 'player' : ''}`;
            const pos = i + 1;
            const posClass = pos === 1 ? 'p1' : pos <= 3 ? 'top3' : '';
            row.innerHTML = `<span class="qpos ${posClass}">P${pos}</span><span>${isPlayer ? '★ ' : ''}${d.name}</span><span>${F1.teams.find(t => t.name === d.team)?.name || ''}</span>`;
            container.appendChild(row);
        });
    }

    handleGas() {
        if (!this.qualyActive || this.qualyDone) return;
        this.qualyClicks++;
        this.els.qualyClicks.textContent = `${this.qualyClicks} кликов`;
        const btn = this.els.btnGas;
        btn.style.transform = 'scale(0.92)';
        setTimeout(() => btn.style.transform = 'scale(1)', 50);
        btn.innerHTML = `<span class="gas-icon">⏱️</span><span class="gas-label">ГАЗ</span><span class="gas-sub">${this.qualyClicks} кликов!</span>`;
        const estimatedPos = Math.max(1, 20 - Math.floor(this.qualyClicks / 4));
        this.els.qualyPosition.textContent = `Старт: P${estimatedPos}`;
    }

    finishQualifying() {
        this.qualyActive = false;
        this.qualyDone = true;
        this.els.btnGas.disabled = true;

        const allPilots = [...F1.drivers];
        const playerClicks = this.qualyClicks;
        const aiClicks = allPilots.map(p => {
            if (p.name === this.playerPilot.name) return playerClicks;
            return Math.floor(Math.random() * 60) + 10 + Math.random() * 30;
        });

        const sorted = allPilots.map((p, i) => ({ pilot: p, clicks: aiClicks[i] }));
        sorted.sort((a, b) => b.clicks - a.clicks);
        this.positions = sorted.map(x => x.pilot);
        this.playerPos = this.positions.indexOf(this.playerPilot) + 1;

        this.addChat('КВАЛИФИКАЦИЯ', `${this.playerPilot.name} стартует P${this.playerPos}! (${this.qualyClicks} кликов)`, 'qualy');

        this.els.qualyView.style.display = 'none';
        this.els.raceView.style.display = 'block';
        this.els.btnStartRace.disabled = false;
        this.els.chatMessages.innerHTML = '';
        this.addChat('СИСТЕМА', `Квалификация завершена! Нажмите «Старт» для начала гонки.`, 'system');

        this.renderLapTrack();
        this.renderRaceGrid();
        this.updateStatusBars();
    }

    // ============================================================
    // ЗАПУСК ГОНКИ
    // ============================================================
    startRace() {
        if (this.raceRunning || this.done) return;
        this.raceRunning = true;
        this.els.btnStartRace.disabled = true;

        // Применяем шины
        const tireMap = { soft: 15, medium: 0, hard: -15 };
        this.tyre = Math.min(100, this.tyre + tireMap[this.selectedTire] || 0);

        this.addChat('СТАРТ', `Гонка началась! ${this.maxLaps} кругов. ${this.selectedTire.toUpperCase()} шины.`, 'system');
        this.addChat('ИНЖЕНЕР', 'Хороший старт! Действуй по плану.', 'engineer');

        document.querySelectorAll('.btn-race').forEach(b => b.disabled = false);

        // Таймер гонки — каждый круг автоматически
        if (this.raceTimer) clearInterval(this.raceTimer);
        this.raceTimer = setInterval(() => {
            if (!this.done && this.raceRunning) {
                this.autoProgress();
            }
        }, 1200);
    }

    autoProgress() {
        if (this.done || this.waiting || this.lap >= this.maxLaps) return;

        // Имитация движения AI
        this.simulateAI();

        // Обновляем UI
        this.renderLapTrack();
        this.renderRaceGrid();
        this.updateStatusBars();

        // Инженерные сообщения
        if (this.lap > 0 && this.lap % 5 === 0 && !this.done) {
            this.sendEngineerMessage();
        }

        // Проверка погоды
        if (this.weatherForecast > 0 && !this.weatherChange) {
            this.weatherForecast--;
            if (this.weatherForecast === 0) {
                const newWeather = F1.weathers.find(w => w.rain > this.weather.rain + 0.1) || this.weather;
                if (newWeather !== this.weather) {
                    this.weather = newWeather;
                    this.addChat('ПОГОДА', `Начался ${this.weather.label.toLowerCase()}!`, 'weather');
                    this.weatherChange = true;
                }
            }
        }

        // Проверка финиша
        if (this.lap >= this.maxLaps) {
            clearInterval(this.raceTimer);
            this.finishRace();
        }
    }

    simulateAI() {
        this.lap++;

        // AI двигается
        for (let i = 0; i < this.positions.length - 1; i++) {
            if (Math.random() < 0.15) {
                const swapIdx = i + 1;
                [this.positions[i], this.positions[swapIdx]] = [this.positions[swapIdx], this.positions[i]];
            }
        }

        // Игрок может потерять позицию если не атакует
        const playerIdx = this.positions.indexOf(this.playerPilot);
        if (playerIdx > 0 && Math.random() < 0.05) {
            const front = this.positions[playerIdx - 1];
            this.positions[playerIdx] = front;
            this.positions[playerIdx - 1] = this.playerPilot;
            this.addChat('ПРОПУСТИЛ', `${this.playerPilot.name} пропустил ${front.name}!`, 'system');
        }

        this.playerPos = this.positions.indexOf(this.playerPilot) + 1;
        this.els.gameLap.textContent = `${this.lap} / ${this.maxLaps}`;

        // Расход ресурсов
        this.tyre = Math.max(0, this.tyre - 1 - Math.random() * 2);
        this.fuel = Math.max(0, this.fuel - 0.5 - Math.random() * 1);
        this.energy = Math.max(0, this.energy - 0.3 - Math.random() * 0.7);

        // Восстановление ERS
        this.ers = Math.min(100, this.ers + 0.5 + Math.random() * 0.5);
    }

    // ============================================================
    // ДЕЙСТВИЯ ИГРОКА
    // ============================================================
    handleAction(action) {
        if (this.done || this.waiting || !this.raceRunning) return;
        this.waiting = true;
        document.querySelectorAll('.btn-race').forEach(b => b.disabled = true);

        const trackFactor = this.track?.speed || 1.0;
        const weatherFactor = this.weather?.rain > 0.5 ? 1.5 : 1.0;
        const tireMap = { soft: 1.0, medium: 0.7, hard: 0.4 };
        const tireWear = tireMap[this.selectedTire] || 0.7;

        let overtakeSuccess = false;

        if (action === 'attack') {
            this.ers = Math.max(0, this.ers - (7 + Math.random() * 5) * trackFactor * weatherFactor);
            this.tyre = Math.max(0, this.tyre - (4 + Math.random() * 4) * (1 + tireWear * 0.5));
            this.fuel = Math.max(0, this.fuel - (3 + Math.random() * 3) * (this.track?.fuelCons || 1));
            this.energy = Math.max(0, this.energy - 5 - Math.random() * 5);

            // Попытка обгона
            const playerIdx = this.positions.indexOf(this.playerPilot);
            if (playerIdx > 0) {
                const baseChance = 0.3 + (this.ers > 70 ? 0.2 : 0) + (this.tyre > 50 ? 0.1 : 0);
                if (Math.random() < baseChance * trackFactor * (this.weather?.grip || 1)) {
                    const front = this.positions[playerIdx - 1];
                    this.positions[playerIdx] = front;
                    this.positions[playerIdx - 1] = this.playerPilot;
                    this.overtakes.push(front);
                    this.addChat('ОБГОН', `${this.playerPilot.name} обошёл ${front.name}!`, 'pilot');
                    overtakeSuccess = true;
                } else if (Math.random() < 0.04) {
                    this.penalties += 5;
                    this.penaltyHistory.push(this.lap);
                    this.addChat('ШТРАФ', `${this.playerPilot.name} +5 секунд за вытеснение!`, 'penalty');
                }
            }
        } else if (action === 'conserve') {
            this.ers = Math.min(100, this.ers + (3 + Math.random() * 3) * trackFactor);
            this.tyre = Math.min(100, this.tyre + (2 + Math.random() * 2));
            this.fuel = Math.max(0, this.fuel - (1 + Math.random() * 1.5));
            this.energy = Math.min(100, this.energy + 3 + Math.random() * 4);
            this.addChat('ЭКОНОМ', 'Экономия ресурсов.', 'system');
        } else if (action === 'box') {
            this.pitStops++;
            this.tyre = Math.min(100, this.tyre + 25 + Math.random() * 20);
            this.ers = Math.min(100, this.ers + 3 + Math.random() * 6);
            this.fuel = Math.max(0, this.fuel - (4 + Math.random() * 3));
            this.energy = Math.min(100, this.energy + 10);
            this.addChat('ПИТ-СТОП', `Пит-стоп #${this.pitStops} выполнен.`, 'team');
        } else if (action === 'penalty') {
            if (this.penalties > 0) {
                const remove = Math.floor(Math.random() * 3) + 1;
                this.penalties = Math.max(0, this.penalties - remove);
                this.addChat('СТЮАРДЫ', `Снято ${remove} секунд штрафа. Осталось: ${this.penalties}с`, 'penalty');
            } else if (Math.random() < 0.15) {
                const idx = this.positions.indexOf(this.playerPilot);
                if (idx > 0) {
                    const front = this.positions[idx - 1];
                    this.positions[idx] = front;
                    this.positions[idx - 1] = this.playerPilot;
                    this.addChat('СТЮАРДЫ', `Протест принят! ${front.name} наказан!`, 'penalty');
                }
            } else {
                this.addChat('СТЮАРДЫ', 'Стюарды не нашли нарушений.', 'system');
            }
        }

        // Быстрый круг
        if (action === 'attack' && this.ers > 60 && Math.random() < 0.2) {
            const lapTime = 60 + Math.random() * 5 - (this.ers / 100) * 2;
            if (lapTime < this.fastestLapTime) {
                this.fastestLapTime = lapTime;
                this.fastestLap = true;
                this.addChat('БЫСТРЫЙ КРУГ', `${this.playerPilot.name} показал лучшее время!`, 'pilot');
            }
        }

        // Прокол
        if (this.tyre < 10 && Math.random() < 0.1) {
            this.addChat('ПРОКОЛ', `${this.playerPilot.name} проколол шину! Срочно в боксы!`, 'penalty');
            this.tyre = 5;
            this.energy = Math.max(0, this.energy - 20);
        }

        this.updateStatusBars();
        this.renderRaceGrid();

        this.waiting = false;
        document.querySelectorAll('.btn-race').forEach(b => b.disabled = false);
    }

    // ============================================================
    // ИНЖЕНЕР
    // ============================================================
    sendEngineerMessage() {
        const msgs = [
            'Окей, давим, соперник на 0.8с',
            'Береги резину, нам нужно 5 кругов',
            'Ты быстрее всех в середине пелотона!',
            'Соперник сзади на 0.5с, защищайся',
            'Отличный темп, так держать!',
            'Сейчас окно для атаки, действуй!',
            'Экономь топливо, до финиша 10 кругов',
            'Впереди трафик, будь осторожен',
            'Шины начинают сдавать, береги',
            'Отличный круг! Продолжай в том же духе!'
        ];
        this.addChat('ИНЖЕНЕР', msgs[Math.floor(Math.random() * msgs.length)], 'engineer');
    }

    // ============================================================
    // ЧАТ
    // ============================================================
    addChat(label, text, type = 'system') {
        const container = this.els.chatMessages;
        const msg = document.createElement('div');
        msg.className = `chat-msg ${type}`;
        msg.innerHTML = `<span class="label">${label}</span> ${text}`;
        container.appendChild(msg);
        container.scrollTop = container.scrollHeight;
        if (container.children.length > 30) container.removeChild(container.firstChild);
    }

    // ============================================================
    // RENDER
    // ============================================================
    renderLapTrack() {
        const container = this.els.lapTrack;
        container.innerHTML = '';
        const total = Math.min(this.maxLaps, 60);
        for (let i = 0; i < total; i++) {
            const dot = document.createElement('span');
            dot.className = 'lap-dot';
            if (i < this.lap) dot.classList.add('done');
            if (i === this.lap && !this.done) dot.classList.add('active');
            if (this.penaltyHistory.includes(i)) dot.classList.add('penalty');
            if (this.fastestLap && i === this.lap - 1) dot.classList.add('fastest');
            container.appendChild(dot);
        }
    }

    renderRaceGrid() {
        const container = this.els.raceGrid;
        const top = this.positions.slice(0, 20);
        let html = `<div class="race-grid-header"><span>POS</span><span>DRIVER</span><span>GAP</span><span>PTS</span></div>`;
        top.forEach((d, i) => {
            const pos = i + 1;
            const isPlayer = d.name === this.playerPilot.name;
            const posClass = pos === 1 ? 'p1' : pos <= 3 ? 'top3' : '';
            const gap = pos === 1 ? 'LEAD' : `+${((pos - 1) * 0.3 + Math.random() * 0.2).toFixed(1)}s`;
            const pts = this.championship[d.name] || 0;
            html += `<div class="race-row ${isPlayer ? 'player' : ''}">
                <span class="rpos ${posClass}">P${pos}</span>
                <span class="rname">${isPlayer ? '<span class="star">★</span> ' : ''}${d.name}${i === 1 ? ' <span class="invest">!</span>' : ''}${i === 2 ? ' <span class="fast">✦</span>' : ''}</span>
                <span class="rgap ${pos === 1 ? 'lead' : 'down'}">${gap}</span>
                <span class="rpts">${pts > 0 ? pts : ''}</span>
            </div>`;
        });
        container.innerHTML = html;
    }

    updateStatusBars() {
        this.els.ersBar.style.width = Math.min(100, Math.max(0, this.ers)) + '%';
        this.els.tyreBar.style.width = Math.min(100, Math.max(0, this.tyre)) + '%';
        this.els.fuelBar.style.width = Math.min(100, Math.max(0, this.fuel)) + '%';
        this.els.energyBar.style.width = Math.min(100, Math.max(0, this.energy)) + '%';
        this.els.ersValue.textContent = Math.round(Math.min(100, Math.max(0, this.ers))) + '%';
        this.els.tyreValue.textContent = Math.round(Math.min(100, Math.max(0, this.tyre))) + '%';
        this.els.fuelValue.textContent = Math.round(Math.min(100, Math.max(0, this.fuel))) + '%';
        this.els.energyValue.textContent = Math.round(Math.min(100, Math.max(0, this.energy))) + '%';
    }

    // ============================================================
    // ФИНИШ
    // ============================================================
    finishRace() {
        this.done = true;
        this.raceRunning = false;
        document.querySelectorAll('.btn-race').forEach(b => b.disabled = true);
        if (this.raceTimer) clearInterval(this.raceTimer);

        const finalPos = this.positions.indexOf(this.playerPilot) + 1;
        const pointsMap = {1:25,2:18,3:15,4:12,5:10,6:8,7:6,8:4,9:2,10:1};
        const earned = pointsMap[finalPos] || 0;
        const bonus = this.fastestLap ? 1 : 0;
        this.points = earned + bonus;

        // Начисление очков
        this.positions.forEach((d, i) => {
            const pos = i + 1;
            const pts = pointsMap[pos] || 0;
            this.championship[d.name] = (this.championship[d.name] || 0) + pts;
        });

        this.positions.forEach((d, i) => {
            const pos = i + 1;
            const pts = pointsMap[pos] || 0;
            const team = F1.teams.find(t => t.name === d.team);
            if (team) this.constructorsChamp[team.name] = (this.constructorsChamp[team.name] || 0) + pts;
        });

        // Гонщик дня
        const progress = this.positions.map((d, i) => {
            const startIdx = this.positions.indexOf(d);
            return { name: d.name, progress: startIdx - i };
        });
        progress.sort((a, b) => b.progress - a.progress);
        this.dotd = progress[0]?.name || this.playerPilot.name;

        // Статистика
        this.stats.races++;
        if (finalPos <= 3) this.stats.podiums++;
        if (finalPos === 1) this.stats.wins++;
        this.stats.points += this.points;
        if (this.fastestLap) this.stats.fastestLaps++;
        this.updateStats();

        // Протокол
        this.els.raceView.style.display = 'none';
        this.els.protocolView.style.display = 'block';

        this.els.pFinish.textContent = `P${finalPos}`;
        this.els.pPoints.textContent = this.points;
        this.els.pPenalties.textContent = this.penalties + 'с';
        this.els.pOvertakes.textContent = this.overtakes.length;
        this.els.pFastest.textContent = this.fastestLap ? '✅ +1 очко' : '—';
        this.els.pDotd.textContent = this.dotd;

        let verdict = '';
        if (finalPos <= 3) verdict = '🏆 Подиум! Отличная стратегия!';
        else if (finalPos <= 8) verdict = '👍 Очки есть. Хорошая работа!';
        else verdict = '😬 Тяжёлая гонка. Анализируй ошибки.';
        if (this.penalties > 10) verdict += ' ⚠️ Много штрафов!';
        this.els.pResult.textContent = verdict;

        this.addChat('ФИНИШ', `${this.playerPilot.name} финиширует P${finalPos}! +${this.points} очков`, 'system');

        this.renderStandings();

        this.els.btnNext.style.display = 'block';
        if (this.currentRound >= this.totalRounds - 1) {
            this.els.btnNext.textContent = '🏆 ЗАВЕРШИТЬ СЕЗОН';
        } else {
            this.els.btnNext.textContent = '▶ СЛЕДУЮЩИЙ ЭТАП';
        }

        // Уведомление в гараже
        this.addGarageMessage('📊 ИТОГО', `${this.playerPilot.name} — P${finalPos}, +${this.points} очков`);
    }

    // ============================================================
    // СЛЕДУЮЩИЙ ЭТАП
    // ============================================================
    nextRound() {
        this.currentRound++;
        if (this.currentRound >= this.totalRounds) {
            const winner = Object.entries(this.championship).sort((a, b) => b[1] - a[1])[0];
            const cWinner = Object.entries(this.constructorsChamp).sort((a, b) => b[1] - a[1])[0];
            this.addChat('ЧЕМПИОНАТ ЗАВЕРШЁН', `${winner[0]} — Чемпион мира! 🏆 ${cWinner[0]} — Кубок конструкторов!`, 'system');
            this.els.btnNext.style.display = 'none';
            this.renderStandings();
            this.addGarageMessage('🏆 ЧЕМПИОНАТ', `🏆 ${winner[0]} — Чемпион мира! 🏆 Кубок конструкторов — ${cWinner[0]}!`);
            return;
        }

        this.els.protocolView.style.display = 'none';
        this.els.btnNext.style.display = 'none';
        this.els.chatMessages.innerHTML = '';
        this.addChat('СИСТЕМА', `🏁 Этап ${this.currentRound + 1}: ${F1.tracks.find(t => t.id === F1.calendar[this.currentRound]?.trackId)?.name || '—'}`, 'system');
        this.startRound();
    }

    // ============================================================
    // СБРОС
    // ============================================================
    resetGame() {
        if (this.qualyTimer) clearInterval(this.qualyTimer);
        if (this.raceTimer) clearInterval(this.raceTimer);
        this.startSeason();
    }
}

// ============================================================
// ЗАПУСК
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    const game = new PitWallPulse();
    window.game = game;
}); q
