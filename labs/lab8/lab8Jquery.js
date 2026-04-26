$(document).ready(function () {

    // Inject keyframe animations (cannot be set via .css())
    $('<style>').text(
        '@keyframes myAnimation {' +
        '  from { background-color: white; }' +
        '  to { background-color: 7b93f1; }' +
        '}' +
        '@keyframes fall {' +
        '  0%   { transform: translateY(0); }' +
        '  100% { transform: translateY(100vh); }' +
        '}' +
        '@keyframes float {' +
        '  0%, 100% { transform: translateY(0); }' +
        '  50%       { transform: translateY(-20px); }' +
        '}'
    ).appendTo('head');

    // body
    $('body').css({
        'font-family':  "'Lato', sans-serif",
        'background-color': '#f0f0f0',
        'margin':       '0',
        'padding':      '0',
        'color':        '#333',
        'position':     'relative',
        'overflow-x':   'hidden',
        'overflow-y':   'auto'
    });

    // .home-container
    $('.home-container').css({
        'background-color':      '#ffffff',
        'max-width':             '700px',
        'margin':                '30px auto',
        'padding':               '30px',
        'border-radius':         '8px',
        'box-shadow':            '0 2px 8px rgba(0, 0, 0, 0.1)',
        'animation-name':        'myAnimation',
        'animation-duration':    '5s',
        'animation-fill-mode':   'forwards'
    });

    // h1
    $('h1').css({
        'color':         '#007acc',
        'margin-bottom': '5px'
    });

    // h2
    $('h2').css({
        'color':          '#007acc',
        'border-bottom':  '1px solid #ddd',
        'padding-bottom': '5px',
        'margin-top':     '30px'
    });

    // ul
    $('ul').css({
        'list-style-type': 'disc',
        'margin-left':     '20px'
    });

    // .item
    $('.item').css('margin-bottom', '15px');

    // .secret
    $('.secret').css('color', 'white');

    // .picture
    $('.picture').css({
        'display':   'block',
        'margin':    '20px auto',
        'max-width': '700px',
        'height':    'auto'
    });

    // .hero
    $('.hero').css({
        'background':  'linear-gradient(135deg, #007acc, #005b99)',
        'color':       'white',
        'text-align':  'center',
        'padding':     '100px 20px'
    });

    // .hero-content h1
    $('.hero-content h1').css({
        'font-size':     '2.5rem',
        'margin-bottom': '10px'
    });

    // .hero-content p
    $('.hero-content p').css({
        'font-size':     '1.2rem',
        'margin-bottom': '20px'
    });

    // a
    $('a').css({
        'display':         'inline-block',
        'padding':         '10px 20px',
        'background-color':'#007bff',
        'color':           'white',
        'text-decoration': 'none',
        'border-radius':   '5px',
        'transition':      'transform 0.3s ease'
    });

    // a:hover
    $('a').hover(
        function () { $(this).css('transform', 'scale(1.1)'); },
        function () { $(this).css('transform', 'scale(1)'); }
    );


    // .cta-button
    $('.cta-button').css({
        'background-color': '#005b99',
        'color':            'white',
        'padding':          '10px 20px',
        'text-decoration':  'none',
        'border-radius':    '5px',
        'transition':       'background-color 0.3s'
    });

    // .cta-button:hover
    $('.cta-button').hover(
        function () { $(this).css('background-color', '#003f73'); },
        function () { $(this).css('background-color', '#005b99'); }
    );

    // .about, .labs-list, .item
    $('.about, .labs-list, .item').css({
        'background':   '#f0f8ff',
        'border-radius':'8px',
        'box-shadow':   '0 2px 8px rgba(0, 0, 0, 0.1)'
    });

    // .confetti
    $('.confetti').css({
        'position':     'absolute',
        'width':        '10px',
        'height':       '10px',
        'border-radius':'50%',
        'animation':    'fall 5s infinite'
    });

    // .confetti:nth-child(n)
    $('.confetti:nth-child(1)').css({ 'top': '0', 'left': '10%', 'animation-delay': '0s',   'background-color': '#007acc' });
    $('.confetti:nth-child(2)').css({ 'top': '0', 'left': '30%', 'animation-delay': '0.5s', 'background-color': '#005b99' });
    $('.confetti:nth-child(3)').css({ 'top': '0', 'left': '50%', 'animation-delay': '1s',   'background-color': '#003f73' });
    $('.confetti:nth-child(4)').css({ 'top': '0', 'left': '70%', 'animation-delay': '1.5s', 'background-color': '#007acc' });
    $('.confetti:nth-child(5)').css({ 'top': '0', 'left': '90%', 'animation-delay': '2s',   'background-color': '#005b99' });

    // .background-shapes
    $('.background-shapes').css({
        'position':       'absolute',
        'top':            '0',
        'left':           '0',
        'width':          '100%',
        'height':         '100%',
        'z-index':        '-1',
        'pointer-events': 'none'
    });

    // .shape
    $('.shape').css({
        'position':  'absolute',
        'width':     '100px',
        'height':    '100px',
        'opacity':   '0.8',
        'animation': 'float 10s infinite ease-in-out'
    });

    // .shape.gem / .shape.sword / .shape.jet  (background-image + position)
    $('.shape.gem').css({
        'background': "url('../../images/gem.svg') no-repeat center/contain",
        'top':  '20%',
        'left': '5%'
    });

    $('.shape.sword').css({
        'background': "url('../../images/sword.svg') no-repeat center/contain",
        'top':   '50%',
        'right': '5%'
    });

    $('.shape.jet').css({
        'background': "url('../../images/jet.svg') no-repeat center/contain",
        'bottom': '20%',
        'left':   '10%'
    });

    // .shape.left / .shape.right
    $('.shape.left').css('left',  '-50px');
    $('.shape.right').css('right', '-50px');

});
