
// Autotasker Gemini - script pequeno para Booktmarket
(async()=>{
	const apiKey = 'AIzaSyBrHZ9NWDx3V_lp3R91OlEAvJbNxAv2E0E'; // Coloque sua API Key Gemini
	const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
	const text = document.body.innerText;
	const body = {contents:[{parts:[{text}]}]};
	const r = await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
	const d = await r.json();
	alert(d.candidates?.[0]?.content?.parts?.[0]?.text||JSON.stringify(d));
})();
