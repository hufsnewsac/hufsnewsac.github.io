const SHEETDB_API_URL = "https://sheetdb.io/api/v1/sbjsr2wkadvyc";

document.getElementById('sheetdb-form').addEventListener('submit', async function(e) {
  e.preventDefault();

  // 폼 데이터 수집
  const form = e.target;
  const formData = new FormData(form);

  // SheetDB의 컬럼명에 맞게 데이터 구조화
  const data = {
    data: {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      project: formData.get('project').text,
      message: formData.get('message'),
      date: new Date()
    }
  };

  try {
    const response = await fetch(SHEETDB_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("문의가 정상적으로 접수되었습니다!");
      form.reset();
    } else {
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    }
  } catch (err) {
    alert("네트워크 오류가 발생했습니다.");
  }
});