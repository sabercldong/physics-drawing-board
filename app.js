// app.js - v42.0
const canvas = new fabric.Canvas('c', {
    backgroundColor: 'transparent', 
    isDrawingMode: false,
    selection: true,
    preserveObjectStacking: true
});

canvas.freeDrawingBrush.width = 3;
canvas.freeDrawingBrush.color = 'black';
canvas.freeDrawingBrush.strokeLineCap = 'round';
canvas.freeDrawingBrush.strokeLineJoin = 'round';

const PROJECT_STORAGE_KEY = 'physics_drawing_board_project_v1';
const HISTORY_LIMIT = 40;
let history = [];
let historyIndex = -1;
let restoringHistory = false;
let saveTimer = null;

function getCanvasJson() {
    return JSON.stringify(canvas.toJSON());
}

function updateHistoryButtons() {
    var undoBtn = document.getElementById('btnUndo');
    var redoBtn = document.getElementById('btnRedo');
    if (undoBtn) undoBtn.style.opacity = historyIndex > 0 ? '1' : '.35';
    if (redoBtn) redoBtn.style.opacity = historyIndex < history.length - 1 ? '1' : '.35';
}

function persistProject() {
    try { localStorage.setItem(PROJECT_STORAGE_KEY, getCanvasJson()); } catch (e) {}
}

function recordHistory() {
    if (restoringHistory) return;
    var snapshot = getCanvasJson();
    if (history[historyIndex] === snapshot) return;
    history = history.slice(0, historyIndex + 1);
    history.push(snapshot);
    if (history.length > HISTORY_LIMIT) history.shift();
    historyIndex = history.length - 1;
    persistProject();
    updateHistoryButtons();
}

function queueHistory() {
    if (restoringHistory) return;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(recordHistory, 120);
}

function loadCanvasJson(json, callback) {
    restoringHistory = true;
    canvas.discardActiveObject();
    canvas.loadFromJSON(json, function() {
        canvas.setBackgroundColor('transparent', function() {
            canvas.requestRenderAll();
            restoringHistory = false;
            if (callback) callback();
        });
    });
}

function undo() {
    if (historyIndex <= 0) return;
    historyIndex--;
    loadCanvasJson(history[historyIndex], function() {
        persistProject();
        updateHistoryButtons();
    });
}

function redo() {
    if (historyIndex >= history.length - 1) return;
    historyIndex++;
    loadCanvasJson(history[historyIndex], function() {
        persistProject();
        updateHistoryButtons();
    });
}

function restoreAutoSavedProject() {
    var saved = '';
    try { saved = localStorage.getItem(PROJECT_STORAGE_KEY) || ''; } catch (e) {}
    if (!saved) { recordHistory(); return; }
    try {
        loadCanvasJson(saved, function() {
            history = [getCanvasJson()];
            historyIndex = 0;
            updateHistoryButtons();
        });
    } catch (e) {
        recordHistory();
    }
}

function saveProjectFile() {
    var blob = new Blob([getCanvasJson()], { type: 'application/json;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    triggerDownload(url, 'physics-board.json');
}

function loadProjectFile(event) {
    var file = event.target.files && event.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function() {
        try {
            var parsed = JSON.parse(reader.result);
            loadCanvasJson(parsed, function() {
                history = [getCanvasJson()];
                historyIndex = 0;
                persistProject();
                updateHistoryButtons();
            });
        } catch (e) {
            alert('无法打开工程文件：文件格式无效。');
        }
    };
    reader.readAsText(file, 'UTF-8');
    event.target.value = '';
}

canvas.on({
    'object:added': queueHistory,
    'object:modified': queueHistory,
    'object:removed': queueHistory,
    'path:created': queueHistory
});

// 强制重绘
function resizeCanvas() {
    const container = document.getElementById('mainCanvasContainer');
    if(container) {
        const w = container.clientWidth;
        const h = container.clientHeight;
        if(w > 0 && h > 0) {
            canvas.setWidth(w);
            canvas.setHeight(h);
            canvas.requestRenderAll();
        }
    }
}
window.addEventListener('resize', resizeCanvas);

// 登录
function doLogin() {
    const user = document.getElementById('loginUser').value.trim();
    const pass = document.getElementById('loginPass').value.trim();
    if (!user) return alert("请输入账号");
    
    if (typeof checkUser === 'function' && checkUser(user, pass)) {
        document.getElementById('loginLayer').style.display = 'none';
        document.getElementById('appLayer').style.display = 'flex';
        document.getElementById('currentUserDisplay').innerText = "用户: " + user;
        
        setTimeout(resizeCanvas, 50);
        setTimeout(resizeCanvas, 200);
        restoreAutoSavedProject();
    } else {
        alert("账号或密码错误");
    }
}

// 模式
function setMode(mode) {
    canvas.isDrawingMode = (mode === 'draw');
    document.getElementById('btnSelect').classList.toggle('active', mode === 'select');
    document.getElementById('btnDraw').classList.toggle('active', mode === 'draw');

    var propLabel = document.getElementById('propPanelLabel');
    var colorPicker = document.getElementById('colorPicker');
    var widthPicker = document.getElementById('widthPicker');
    var dashCheck = document.getElementById('dashCheck');
    var propSep = document.getElementById('propSep');
    var brushLabel = document.getElementById('brushPanelLabel');
    var brushColorPicker = document.getElementById('brushColorPicker');
    var brushWidthPicker = document.getElementById('brushWidthPicker');
    var brushEraserWrap = document.getElementById('brushEraserWrap');

    if (mode === 'draw') {
        if (propLabel) propLabel.style.display = 'none';
        if (colorPicker) colorPicker.style.display = 'none';
        if (widthPicker) widthPicker.style.display = 'none';
        if (dashCheck) dashCheck.closest('label').style.display = 'none';
        if (propSep) propSep.style.display = 'none';
        if (brushLabel) brushLabel.style.display = 'inline';
        if (brushColorPicker) { brushColorPicker.style.display = ''; brushColorPicker.value = document.getElementById('colorPicker').value || '#000000'; }
        if (brushWidthPicker) { brushWidthPicker.style.display = ''; brushWidthPicker.value = 3; }
        if (brushEraserWrap) brushEraserWrap.style.display = 'inline';
        applyBrushStyle();
    } else {
        if (propLabel) propLabel.style.display = 'inline';
        if (colorPicker) colorPicker.style.display = '';
        if (widthPicker) widthPicker.style.display = '';
        if (dashCheck) dashCheck.closest('label').style.display = 'flex';
        if (propSep) propSep.style.display = 'inline';
        if (brushLabel) brushLabel.style.display = 'none';
        if (brushColorPicker) brushColorPicker.style.display = 'none';
        if (brushWidthPicker) brushWidthPicker.style.display = 'none';
        if (brushEraserWrap) brushEraserWrap.style.display = 'none';
    }
}

// 手绘：应用画笔颜色、粗细与橡皮擦
function applyBrushStyle() {
    var brushColorPicker = document.getElementById('brushColorPicker');
    var brushWidthPicker = document.getElementById('brushWidthPicker');
    var brushEraserCheck = document.getElementById('brushEraserCheck');
    if (!canvas || !brushColorPicker) return;
    canvas.freeDrawingBrush.color = (brushEraserCheck && brushEraserCheck.checked) ? '#ffffff' : (brushColorPicker.value || '#000000');
    canvas.freeDrawingBrush.width = (brushWidthPicker && parseInt(brushWidthPicker.value, 10)) || 3;
}

// 基础图形
function addShape(type) {
    setMode('select');
    const center = canvas.getCenter();
    const cx = center.left || 400; 
    const cy = center.top || 300;
    
    const opts = { left: cx, top: cy, fill: 'transparent', stroke: 'black', strokeWidth: 2, originX:'center', originY:'center' };
    let obj;

    if (type === 'rect') obj = new fabric.Rect({ ...opts, width: 80, height: 50 });
    else if (type === 'circle') obj = new fabric.Circle({ ...opts, radius: 30 });
    else if (type === 'triangle') obj = new fabric.Triangle({ ...opts, width: 60, height: 60 });
    else if (type === 'line') obj = new fabric.Line([-50, 0, 50, 0], { ...opts, stroke: 'black' });
    else if (type === 'text') obj = new fabric.IText('Text', { left: cx, top: cy, fontSize: 24, fontFamily: 'Times New Roman' });
    else if (type === 'arrow') {
        const triangle = new fabric.Triangle({ width: 10, height: 15, fill: 'black', left: 50, top: 0, angle: 90, originX: 'center', originY: 'center' });
        const line = new fabric.Line([-50, 0, 50, 0], { stroke: 'black', strokeWidth: 2, originX: 'center', originY: 'center' });
        obj = new fabric.Group([line, triangle], { left: cx, top: cy });
    } else if (type === 'ellipse') {
        obj = new fabric.Ellipse({ ...opts, rx: 50, ry: 30 });
    }

    if (obj) {
        canvas.add(obj);
        canvas.setActiveObject(obj);
    }
}

// SVG 元件
function addSVG(name) {
    setMode('select');
    const svgStr = SVG_LIB[name];
    if (!svgStr) return;
    
    fabric.loadSVGFromString(svgStr, function(objects, options) {
        const obj = fabric.util.groupSVGElements(objects, options);
        const center = canvas.getCenter();
        obj.set({ 
            left: center.left || 400, 
            top: center.top || 300, 
            originX: 'center', 
            originY: 'center' 
        });

        if(name === 'point') obj.scaleToWidth(15);
        else if(name === 'battery' || name === 'resistor') obj.scaleToWidth(80);
        else if(name === 'efield_pos_pair') obj.scaleToWidth(300); // 电场线要大一点
        else obj.scaleToWidth(100);

        canvas.add(obj);
        canvas.setActiveObject(obj);
    });
}

// 公式
function addSym(s) { document.getElementById('formulaInput').value += s; }
function insertFormula() {
    const text = document.getElementById('formulaInput').value;
    if (!text) return;
    setMode('select');
    const center = canvas.getCenter();
    const color = document.getElementById('colorPicker').value;
    const textObj = new fabric.IText(text, {
        left: center.left, top: center.top, fontSize: 24,
        fontFamily: 'Times New Roman', fill: color, fontStyle: 'italic',
        originX: 'center', originY: 'center'
    });
    canvas.add(textObj);
    canvas.setActiveObject(textObj);
}

// 属性
function updateProp() {
    const obj = canvas.getActiveObject();
    if (!obj) return;
    const color = document.getElementById('colorPicker').value;
    const width = parseInt(document.getElementById('widthPicker').value);
    const dashed = document.getElementById('dashCheck').checked;
    
    if (obj.type === 'group' || obj.type === 'path-group') {
        obj.getObjects().forEach(sub => {
            if(sub.stroke) sub.set('stroke', color);
            if(sub.fill && sub.fill !== 'transparent' && sub.fill !== 'none') sub.set('fill', color);
        });
        obj.set({ strokeWidth: width }); 
    } else if (obj.type === 'i-text' || obj.type === 'text') {
        obj.set({ fill: color });
    } else {
        obj.set({ stroke: color, strokeWidth: width });
        obj.set({ strokeDashArray: dashed ? [10, 5] : null });
    }
    canvas.requestRenderAll();
}
canvas.on('selection:created', e => {
    const obj = e.selected[0];
    if(obj) document.getElementById('widthPicker').value = obj.strokeWidth || 2;
});

// 删除与清空
function deleteSelected() {
    const activeObjects = canvas.getActiveObjects();
    if (activeObjects.length) {
        canvas.discardActiveObject();
        activeObjects.forEach(obj => canvas.remove(obj));
    }
}
function clearCanvas() { if (confirm("确定清空画布吗？")) { canvas.clear(); canvas.setBackgroundColor('transparent'); queueHistory(); } }
document.addEventListener('keydown', e => { 
    var tag = (e.target && e.target.tagName || '').toLowerCase();
    var isTyping = tag === 'input' || tag === 'textarea' || (e.target && e.target.isContentEditable);
    if ((e.ctrlKey || e.metaKey) && !isTyping && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        if (e.shiftKey) redo(); else undo();
        return;
    }
    if ((e.ctrlKey || e.metaKey) && !isTyping && e.key.toLowerCase() === 'y') {
        e.preventDefault();
        redo();
        return;
    }
    if ((e.key === 'Delete' || e.key === 'Backspace') && canvas.getActiveObject() && !canvas.getActiveObject().isEditing) {
        e.preventDefault();
        deleteSelected(); 
    }
});

// 导出
function exportImage(fmt) {
    canvas.discardActiveObject();
    canvas.requestRenderAll();
    const oldBg = canvas.backgroundColor;
    canvas.setBackgroundColor('#ffffff'); // 导出时加白底
    
    if (fmt === 'svg') {
        const svg = canvas.toSVG();
        const blob = new Blob([svg], {type: 'image/svg+xml'});
        const url = URL.createObjectURL(blob);
        triggerDownload(url, 'svg');
    } else {
        const url = canvas.toDataURL({ format: 'png', quality: 1, multiplier: 2 });
        triggerDownload(url, 'png');
    }
    canvas.setBackgroundColor(oldBg);
    canvas.requestRenderAll();
}
function triggerDownload(url, ext) {
    const a = document.createElement('a');
    a.href = url;
    a.download = ext.indexOf('.') >= 0 ? ext : `physics_${Date.now()}.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    if (url && url.startsWith('blob:')) {
        setTimeout(function() { URL.revokeObjectURL(url); }, 100);
    }
}
