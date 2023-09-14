let resData = [];
let renderData = [];
const Calendar = tui.Calendar;
const calendar = new Calendar("#calendar", {
  defaultView: "week",
  useDetailPopup: true,
  isReadOnly: true,
  week: {
    taskView: false,
    hourStart: 7,
    hourEnd: 19,
  },
  template: {
    popupDetailBody: function (schedule) {
      let start = new Date(schedule.start.d);
      let end = new Date(schedule.end.d);
      return `
        <div class="toastui-calendar-popup-top-line" style="background-color: ${schedule.backgroundColor}; left: 0; height: 10px;"></div>
        <div class="toastui-calendar-popup-body">
          <div class="toastui-calendar-popup-body-left">
            <div class="toastui-calendar-popup-body-left-location">
              <span>${start.toLocaleString()} - ${end.toLocaleString()}</span>
            </div>
            <div class="toastui-calendar-popup-body-left-title">
              <span><b>Patient self-checks for symptoms:</b></span>
            </div>
            <div class="toastui-calendar-popup-body-left-location">
              <span>${schedule.body}</span>
            </div>
          </div>
        </div>
      `;
    },
    popupDelete: function () {
      return "";
    },
    popupEdit: function (e) {
      return ``;
    }
  }
});

$(document).ready(function () {
  if (!sessionStorage.getItem("token")) {
    window.location.href = "/admin/logout";
  } else {

    $.ajax({
      url: "/api/doctor-schedule-calendar",
      type: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          JSON.parse(sessionStorage.getItem("token")).access_token,
      },
      success: function (data) {
        resData = data;
        renderData = data;
        calendar.clear();
        renderCalendar();
      }
    });
  }
});

$(document).ready(function () {
  if (!sessionStorage.getItem("token")) {
    window.location.href = "/admin/logout";
  } else {

    $.ajax({
      url: "/api/checkbox-data",
      type: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          JSON.parse(sessionStorage.getItem("token")).access_token,
      },
      success: function (data) {
        createCheckbox(data);
      }
    });
  }
});

function renderCalendar() {
  let view = calendar.getViewName();
  if (view == 'month') {
    let monthview = renderData.map((event) => {
      event.category = "allday";
      return event;
    });
    calendar.clear();
    calendar.createEvents(monthview);
  } else {
    let weekday = renderData.map((event) => {
      event.category = "time";
      return event;
    });
    calendar.clear();
    calendar.createEvents(weekday);
  }
  changeRange();
}

$("#c-today").click(function () {
  calendar.today();
  changeRange();
});
$("#c-prev").click(function () {
  calendar.prev();
  changeRange();
});

$("#c-next").click(function () {
  calendar.next();
  changeRange();
});

$("#c-day").click(function () {
  calendar.changeView("day");
  renderCalendar();
});

$("#c-week").click(function () {
  calendar.changeView("week");
  renderCalendar();
});

$("#c-month").click(function () {
  calendar.changeView("month");
  renderCalendar();
});

function changeRange() {
  let view = calendar.getViewName();
  let start = new Date(calendar.getDateRangeStart().d.d);
  let end = new Date(calendar.getDateRangeEnd().d.d);
  let month = calendar.getDate().getMonth() + 1;
  let year = calendar.getDate().getFullYear();
  switch (view) {
    case "day":
      $("#rangeView").html(start.toDateString());
      break;
    case "week":
      $("#rangeView").html(
        start.toDateString() + " - " + end.toDateString()
      );
      break;
    case "month":
      $("#rangeView").html(month + " - " + year);
      break;

    default:
      break;
  }
}

function createCheckbox(data) {
  let hospital_color = {
    1: 'red',
    2: 'purple',
    3: 'blue',
    4: 'cyan',
    5: 'green',
    6: 'yellow',
    7: 'orange',
    8: 'brown',
    9: 'pink',
    10: 'grey',
  };
  let hospitals = data.hospitals;
  let departments = data.departments;
  let doctors = data.doctors;

  let cb_hospital = $("#cb-hospital");
  let cb_department = $("#cb-department");
  let cb_doctor = $("#cb-doctor");

  for (let i = 0; i < hospitals.length; i++) {
    const element = hospitals[i];
    cb_hospital.append(
      `<div class="event-name"  style="border-color: ${hospital_color[element.id]};"> 
          <input class="form-check-input hospital-cb" type="checkbox" value="${element.id}" id="hospital-${element.id}" checked disabled>
        <label class="form-check-label" for="hospital-${element.id}">
            ${element.name}
          </label>
      </div>`
    );
  }

  for (let i = 0; i < departments.length; i++) {
    const element = departments[i];
    cb_department.append(
      `<div class="event-name"  style="border-color: ${element.color};"> 
          <input class="form-check-input department-cb" type="checkbox" value="${element.id}" id="department-${element.id}" checked disabled>
        <label class="form-check-label" for="department-${element.id}">
            ${element.name}
          </label>
      </div>`
    );
  }

  for (let i = 0; i < doctors.length; i++) {
    const element = doctors[i];
    cb_doctor.append(
      `<div class="event-name"  style="border-color: ${element.color};"> 
          <input class="form-check-input doctor-cb" type="checkbox" value="${element.id}" id="doctor-${element.id}" checked disabled>
        <label class="form-check-label" for="doctor-${element.id}">
            ${element.first_name} ${element.last_name}
          </label>
      </div>`
    );
  }
}

$('#hospital-all').change(function () {
  if ($("#hospital-all").is(":checked")) {
    renderData = resData;
    $('#department-all').prop('checked', true);
    $('#doctor-all').prop('checked', true);
    $(".hospital-cb").prop("checked", true);
    $(".department-cb").prop("checked", true);
    $(".doctor-cb").prop("checked", true);
    $(".hospital-cb").prop("disabled", true);
    $(".department-cb").prop("disabled", true);
    $(".doctor-cb").prop("disabled", true);
    renderCalendar();
  } else {
    renderData = [];
    $('#department-all').prop('checked', false);
    $('#doctor-all').prop('checked', false);
    $(".hospital-cb").prop("checked", false);
    $(".department-cb").prop("checked", false);
    $(".doctor-cb").prop("checked", false);
    $(".hospital-cb").prop("disabled", false);
    $(".department-cb").prop("disabled", false);
    $(".doctor-cb").prop("disabled", false);
    calendar.clear();
  }
});

$('#department-all').change(function () {
  if ($("#department-all").is(":checked")) {
    renderData = resData;
    $('#hospital-all').prop('checked', true);
    $('#doctor-all').prop('checked', true);
    $(".hospital-cb").prop("checked", true);
    $(".department-cb").prop("checked", true);
    $(".doctor-cb").prop("checked", true);
    $(".hospital-cb").prop("disabled", true);
    $(".department-cb").prop("disabled", true);
    $(".doctor-cb").prop("disabled", true);
    renderCalendar();
  } else {
    renderData = [];
    $('#hospital-all').prop('checked', false);
    $('#doctor-all').prop('checked', false);
    $(".hospital-cb").prop("checked", false);
    $(".department-cb").prop("checked", false);
    $(".doctor-cb").prop("checked", false);
    $(".hospital-cb").prop("disabled", false);
    $(".department-cb").prop("disabled", false);
    $(".doctor-cb").prop("disabled", false);
    calendar.clear();
  }
});

$('#doctor-all').change(function () {
  if ($("#doctor-all").is(":checked")) {
    renderData = resData;
    $('#hospital-all').prop('checked', true);
    $('#department-all').prop('checked', true);
    $(".hospital-cb").prop("checked", true);
    $(".department-cb").prop("checked", true);
    $(".doctor-cb").prop("checked", true);
    $(".hospital-cb").prop("disabled", true);
    $(".department-cb").prop("disabled", true);
    $(".doctor-cb").prop("disabled", true);
    renderCalendar();
  } else {
    renderData = [];
    $('#hospital-all').prop('checked', false);
    $('#department-all').prop('checked', false);
    $(".hospital-cb").prop("checked", false);
    $(".department-cb").prop("checked", false);
    $(".doctor-cb").prop("checked", false);
    $(".hospital-cb").prop("disabled", false);
    $(".department-cb").prop("disabled", false);
    $(".doctor-cb").prop("disabled", false);
    calendar.clear();
  }
});

function filterByHospital(id, isShow) {
  if (isShow) {
    resData.forEach(element => {
      if (element.hospital_id == id) {
        renderData.push(element);
      }
    });
  } else {
    let temp = [];
    renderData.forEach(element => {
      if (element.hospital_id != id) {
        temp.push(element);
      }
    });
    renderData = temp;
  }

  renderCalendar();
}

function filterByDepartment(id, isShow) {
  if (isShow) {
    resData.forEach(element => {
      if (element.department_id == id) {
        renderData.push(element);
      }
    });
  } else {
    let temp = [];
    renderData.forEach(element => {
      if (element.department_id != id) {
        temp.push(element);
      }
    });
    renderData = temp;
  }

  renderCalendar();
}

function filterByDoctor(id, isShow) {
  if (isShow) {
    resData.forEach(element => {
      if (element.doctor_id == id) {
        renderData.push(element);
      }
    });
  } else {
    let temp = [];
    renderData.forEach(element => {
      if (element.doctor_id != id) {
        temp.push(element);
      }
    });
    renderData = temp;
  }

  renderCalendar();
}

$('#filter-data').on('click', function (el) {
  if (el.target.matches("input")) {
    if (el.target.id != "hospital-all" && el.target.id != "department-all" && el.target.id != "doctor-all") {
      if (el.target.id.includes("hospital")) {
        filterByHospital(el.target.value, el.target.checked);
      }
      if (el.target.id.includes("department")) {
        filterByDepartment(el.target.value, el.target.checked);
      }
      if (el.target.id.includes("doctor")) {
        filterByDoctor(el.target.value, el.target.checked);
      }
    }
  }
});
