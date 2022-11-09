if (typeof zs_loaded != "undefined") {
  logxxx = 0;
  console.log("loaded zsnote.js");
} else {
  zs_loaded = true;
  logxxx = 0;
  console.log("loading zsnote.js");
  function f_is_num(num) {
    if (typeof num === "number") {
      if (isNaN(num)) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  function f_before_e(e, e1) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          e.insertAdjacentElement("beforebegin", e1);
        }
      }
    }
  }
  function f_after_e(e, e1) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          e.insertAdjacentElement("afterend", e1);
        }
      }
    }
  }
  function f_append_e(e, e1) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          e.insertAdjacentElement("beforeend", e1);
        }
      }
    }
  }
  function f_prepend_e(e, e1) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          e.insertAdjacentElement("afterbegin", e1);
        }
      }
    }
  }
  function f_before_s(e, s) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          e.insertAdjacentHTML("beforebegin", s);
        }
      }
    }
  }
  function f_after_s(e, s) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          e.insertAdjacentHTML("afterend", s);
        }
      }
    }
  }
  function f_append_s(e, s) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          e.insertAdjacentHTML("beforeend", s);
        }
      }
    }
  }
  function f_prepend_s(e, s) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          e.insertAdjacentHTML("afterbegin", s);
        }
      }
    }
  }
  function f_prev(e) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          return e.previousElementSibling;
        }
      }
    }
  }
  function f_next(e) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          return e.nextElementSibling;
        }
      }
    }
  }
  function f_create(s) {
    return document.createElement(s);
  }
  function f_ccon(e, str_t) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          return e.classList.contains(str_t);
        }
      }
    }
  }
  function f_cadd(e, str_t) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          return e.classList.add(str_t);
        }
      }
    }
  }
  function f_crem(e, str_t) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          return e.classList.remove(str_t);
        }
      }
    }
  }
  function f_ctog(e, str_t) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          return e.classList.toggle(str_t);
        }
      }
    }
  }
  function f_ga(e, str_t) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          return e.getAttribute(str_t);
        }
      }
    }
  }
  function f_ha(e, s) {
    var r = f_ga(e, s);
    if (r === "" || !!r) {
      return true;
    } else {
      return false;
    }
  }
  function f_sa(e, str_t, str_t1) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          return e.setAttribute(str_t, str_t1);
        }
      }
    }
  }
  function f_atog(e, str_t) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          if (f_ha(e, str_t)) {
            return e.removeAttribute(str_t);
          } else {
            return e.setAttribute(str_t, "");
          }
        }
      }
    }
  }
  function f_ra(e, str_t) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          return e.removeAttribute(str_t);
        }
      }
    }
  }
  function f_sa_default(e, s_attr, s_val) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          if (!f_ga(e, s_attr)) {
            f_sa(e, s_attr, s_val);
          }
        }
      }
    }
  }
  function f_q_e(e, s) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          return e.querySelector(s);
        }
      }
    }
  }
  function f_q(str_t) {
    return document.querySelectorAll(str_t);
  }
  function f_gt(str_t) {
    return document.getElementsByTagName(str_t);
  }
  function f_gc(str_t) {
    return document.getElementsByClassName(str_t);
  }
  function f_gi(str_t) {
    return document.getElementById(str_t);
  }
  function f_gn(str_t) {
    return document.getElementsByName(str_t);
  }
  function f_test_time(desc) {
    if (!zs_.s_test_time) {
      zs_.s_test_time = "";
    }
    var t = new Date();
    var s_time_new = t.getSeconds() + "." + t.getMilliseconds();
    if (!desc) {
      desc = "";
    }
    zs_.s_test_time += `${s_time_new}(${desc});\n`;
  }
  function f_test_time_return(desc) {
    var t = new Date();
    var s_time_new = t.getSeconds() + "." + t.getMilliseconds();
    if (!desc) {
      desc = "";
    }
    return `${s_time_new}(${desc});\n`;
  }
  function f_test_time_print() {
    f_log_top(zs_.s_test_time);
  }
  function f_log(s_id) {
    var s = "";
    s += "\n------\n";
    var a1 = Array.from(arguments).slice(1);
    for (var i = 0; i < a1.length; i++) {
      if (typeof a1[i] != "object") {
        s += a1[i];
      } else {
        s += JSON.stringify(a1[i], null, 2);
      }
      s += ",";
      logxxx = 0;
    }
    s = s.replace(/,$/, "");
    s += "\n______\n";
    f_append_s(f_gi(s_id), s);
    return s;
  }
  function f_log_e() {
    var a1 = Array.from(arguments);
    f_log("i_log_e", ...a1);
  }
  function f_log_top() {
    var a1 = Array.from(arguments);
    f_log("i_log", ...a1);
  }
  function f_show_space(str) {
    if (!!str) {
      return str.replace(/\n/g, "\n[n]").replace(/ /g, "[s]");
    }
  }
  function f_a_next_search() {
    try {
      var ej_p = $(zs_.e_a_clicked).parent();
      var ej_pp = ej_p.parent();
      var e_na = ej_p.next().find("a,a1,a2")[0];
      if (ej_pp[0] === f_gi("i_search_res")) {
        e_na.click();
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_a_prev_search() {
    try {
      var ej_p = $(zs_.e_a_clicked).parent();
      var ej_pp = ej_p.parent();
      var e_na = ej_p.prev().find("a,a1,a2")[0];
      if (ej_pp[0] === f_gi("i_search_res")) {
        e_na.click();
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_cli_b__fixed_lg() {
    f_ctog(zs_.e_body, "c_fixed_lg");
    if (f_ccon(zs_.e_body, "c_fixed_lg")) {
      if (!f_ccon(zs_.e_body, "c_fixed_lg_add")) {
        f_cadd(zs_.e_body, "c_fixed_lg_add");
        f_append_s(f_gi("i_css"), "body.c_fixed_lg{margin:6vh 6vh}");
      }
      f_sa(f_q(".c_b_pin")[0], "s_ba_gra", "");
      f_ra(f_q(".c_b_pin")[0], "s_ba_blu");
      f_cadd(zs_.e_nav_left, "c_no_c_hide");
      f_crem(zs_.e_nav_left, "c_keep_c_hide");
      f_cadd(zs_.e_nav_right, "c_no_c_hide");
      f_crem(zs_.e_nav_right, "c_keep_c_hide");
    } else {
      f_ra(f_q(".c_b_pin")[0], "s_ba_gra");
      f_sa(f_q(".c_b_pin")[0], "s_ba_blu", "");
      f_crem(zs_.e_nav_left, "c_no_c_hide");
      f_cadd(zs_.e_nav_left, "c_keep_c_hide");
      f_crem(zs_.e_nav_right, "c_no_c_hide");
      f_cadd(zs_.e_nav_right, "c_keep_c_hide");
    }
  }
  function f_abc_conv_cli(e) {
    f_abc_conv_e(e);
  }
  function f_abc_conv_init() {
    var a = f_gt("abc");
    for (let i = 0; i < a.length; i++) {
      f_abc_conv_e(a[i]);
    }
  }
  function f_abc_conv_e(e) {
    try {
      if (!f_ccon(e, "c_init")) {
        f_cadd(e, "c_init");
        f_sa(e, "s_bl", "");
        f_sa(e, "s_p", "");
        f_sa(e, "s_ba_gra1", "");
        let s = e.textContent;
        ABCJS.renderAbc(e, s, {});
        e.style.width = "100%";
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_click(e) {
    var a,
      s,
      n,
      l,
      i,
      j,
      k = 0;
    clearTimeout(zs_.n_sc_hide_bot);
    zs_.n_sc_hide_bot = setTimeout(function () {
      f_hide(zs_.e_nav_bot);
      f_hide(zs_.e_nav_right);
      f_hide(zs_.e_nav_left);
    }, 3e3);
    var e_bak = e;
    if (f_w_in_s(e.tagName, "SON") || f_ccon(e, "c_son")) {
      e = $(e).children()[0];
      f_mark(e);
    }
    if (f_w_in_s(e.tagName, "A A1 A2")) {
      zs_.e_a_clicked = e;
    }
    if (!f_w_in_s(e.tagName, "B1 B2 BUTTON BH BH0 BH1 BH2 INPUT TEXTAREA")) {
      zs_.e_nb_clicked = e;
    }
    if (
      f_w_in_s(
        e.tagName,
        "Z Z0 Z1 Z2 ZZ ZZ0 ZZ1 ZZ2 D D0 D1 D2 DP DC DC0 DC1 DC2"
      )
    ) {
      zs_.e_zd_clicked = e;
    }
    if (f_w_in_s(e.tagName, "CC CC0 CC1 CC2")) {
      return "stoppar";
    }
    if (f_w_in_s(e.tagName, "TABLE IMG VIDEO IFRAME")) {
      zs_.e_wh_clicked = e;
    }
    if (f_w_in_s(e.tagName, "TD")) {
      zs_.e_wh1_clicked = e;
    }
    if (f_w_in_s(e.tagName, "IF")) {
      return "stoppar";
    }
    if (f_w_in_s(e.tagName, "CH")) {
      f_chart_e(e);
      return "stoppar";
    }
    if (f_w_in_s(e.tagName, "B1 B2 BUTTON BH BH0 BH1 BH2")) {
      if (f_ccon(e, "c_b_add_h")) {
        var e_t = zs_.e_nb_clicked;
        try {
          if (!f_w_in_s(f_prev(e_t).tagName, "H H0X H1X H2X HH")) {
            f_before_s(e_t, "<hh>+hh</hh>");
          }
        } catch (error) {
          console.log("error", error);
        }
      }
      if (f_ccon(e, "c_b_rem_h")) {
        var e_t = zs_.e_nb_clicked;
        try {
          if (f_w_in_s(f_prev(e_t).tagName, "H H0X H1X H2X HH")) {
            f_prev(e_t).remove();
          }
        } catch (error) {
          console.log("error", error);
        }
      }
      function f_attr_e(e, s) {
        var a = f_split_trim(s, " ");
        for (let i = 0; i < a.length; i++) {
          var a1 = f_split_trim(a[i], "=");
          if (a1.length === 2) {
            if (
              a1[1] === "zs_del" ||
              a1[1] === "'zs_del'" ||
              a1[1] === '"zs_del"'
            ) {
              f_ra(e, a1[0]);
            } else {
              f_sa(e, a1[0], a1[1]);
            }
          } else {
            f_sa(e, a[i], "");
          }
        }
      }
      if (f_ccon(e, "c_b_attr_e")) {
        var s_attr = f_prev(e).value;
        var e_attr = zs_.e_nb_clicked;
        f_attr_e(e_attr, s_attr);
      }
      if (f_w_in_s(e.tagName, "BH BH0 BH1 BH2")) {
        if (!f_w_in_s(f_next(e).tagName, "BH BH0 BH1 BH2")) {
          f_ctog(f_next(e), "c_hide");
        }
        if (f_ccon(f_next(e), "c_hide")) {
          f_cadd(e, "c_hide_n_but");
        } else {
          f_crem(e, "c_hide_n_but");
        }
        return "stoppar";
      }
      if (f_ccon(e, "c_b_play_audio")) {
        e_a = $(e).parent().find("audio")[0];
        if (e_a) {
          if (e_a.paused) {
            e_a.play();
            f_sa(e, "s_b_gre");
            f_ra(e, "s_b_red");
          } else {
            e_a.pause();
            f_sa(e, "s_b_red");
            f_ra(e, "s_b_gre");
          }
        }
      }
      if (f_ccon(e, "c_b_dwp")) {
        var e_t = zs_.e_wh_clicked;
        var ew = $(e_t).css("width");
        if (ew) {
          ew = ew.replace(/px/, "");
          $(e_t).css("width", ew * 1.2);
          $(e_t).css("max-width", "unset");
        }
      }
      if (f_ccon(e, "c_b_dwm")) {
        var e_t = zs_.e_wh_clicked;
        var ew = $(e_t).css("width");
        if (ew) {
          ew = ew.replace(/px/, "");
          $(e_t).css("width", ew / 1.2);
          $(e_t).css("max-width", "unset");
        }
      }
      if (f_ccon(e, "c_b_dwx")) {
        var e_t = zs_.e_nb_clicked;
        $(e_t).css("max-width", "auto");
        $(e_t).css("width", "auto");
        $(e_t).css("width", "unset");
      }
      if (f_ccon(e, "c_b_dhp")) {
        var e_t = zs_.e_nb_clicked;
        var ew = $(e_t).css("height");
        if (ew) {
          ew = ew.replace(/px/, "");
          $(e_t).css("height", ew * 1.2);
          $(e_t).css("max-height", "unset");
        }
      }
      if (f_ccon(e, "c_b_dhm")) {
        var e_t = zs_.e_nb_clicked;
        var ew = $(e_t).css("height");
        if (ew) {
          ew = ew.replace(/px/, "");
          $(e_t).css("height", ew / 1.2);
          $(e_t).css("max-height", "unset");
        }
      }
      if (f_ccon(e, "c_b_dhx")) {
        var e_t = zs_.e_nb_clicked;
        $(e_t).css("max-height", "auto");
        $(e_t).css("height", "auto");
      }
      if (f_ccon(e, "c_b_wrap")) {
        var e_t = zs_.e_nb_clicked;
        f_atog(e_t, "s_w");
      }
      if (f_ccon(e, "c_b_pre")) {
        var e_t = zs_.e_nb_clicked;
        f_atog(e_t, "s_p");
      }
      if (f_ccon(e, "c_b_normal")) {
        var e_t = zs_.e_nb_clicked;
        f_atog(e_t, "s_n");
      }
      if (f_ccon(e, "c_b_near_h")) {
        f_near_h(zs_.e_nb_clicked);
      }
      if (f_ccon(e, "c_b_chap_fixed")) {
        f_ctog(f_gi("i_chapter"), "c_hide");
        if (f_ccon(f_gi("i_chapter"), "c_hide")) {
          f_crem(f_gi("i_chapter_fixedpack"), "c_fixed");
        } else {
          f_cadd(f_gi("i_chapter_fixedpack"), "c_fixed");
        }
        f_cadd(f_gi("i_search"), "c_hide");
        f_crem(f_gi("i_search_fixedpack"), "c_fixed");
        f_media_set();
      } else if (f_ccon(e, "c_b_search_fixed")) {
        f_ctog(f_gi("i_search"), "c_hide");
        if (f_ccon(f_gi("i_search"), "c_hide")) {
          f_crem(f_gi("i_search_fixedpack"), "c_fixed");
        } else {
          f_cadd(f_gi("i_search_fixedpack"), "c_fixed");
          f_gi("i_search_in").focus();
        }
        f_cadd(f_gi("i_chapter"), "c_hide");
        f_crem(f_gi("i_chapter_fixedpack"), "c_fixed");
        f_media_set();
      }
      if (f_ccon(e, "c_b_fixed_lg")) {
        f_cli_b__fixed_lg();
      }
      if (f_ccon(e, "c_htb2mtb")) {
        f_html2md();
      } else if (f_ccon(e, "c_search_prev")) {
        f_a_prev_search();
      } else if (f_ccon(e, "c_search_next")) {
        f_a_next_search();
      } else if (f_ccon(e, "c_b_goto")) {
        f_goto_init();
      } else if (f_ccon(e, "c_b_nav_fixed_lg")) {
        f_ctog(e, "c_clicked");
        if (f_ccon(e, "c_clicked")) {
          f_a_css_e(zs_.e_body, "padding-right:30%;");
        } else {
          f_a_css_e(zs_.e_body, "padding-right:unset;");
        }
      } else if (f_ccon(e, "c_jump_top")) {
        location.href = location.href.replace(/#.*$/, "") + "#";
        f_scroll(0);
      } else if (f_ccon(e, "c_jump_bot")) {
        location.href = location.href.replace(/#.*$/, "") + "#";
        f_scroll(document.body.clientHeight);
      } else if (f_ccon(e, "c_b_cm_search")) {
        o_codemirror.execCommand("find");
      } else if (f_ccon(e, "c_b_zip")) {
        f_cli_b_zip(e);
      } else if (f_ccon(e, "c_b_pin")) {
        var st = 0;
        if (f_ha(e, "st")) {
          st = parseInt(f_ga(e, "st"));
          st++;
        } else {
          st = 2;
        }
        if (st > 2) {
          st = 0;
        }
        f_sa(e, "st", st);
        if (st === 1) {
          f_sa(e, "s_ba_gra", "");
          f_ra(e, "s_ba_blu");
          f_cadd(zs_.e_nav_left, "c_no_c_hide");
          f_crem(zs_.e_nav_left, "c_keep_c_hide");
          f_cadd(zs_.e_nav_right, "c_no_c_hide");
          f_crem(zs_.e_nav_right, "c_keep_c_hide");
        } else if (st === 2) {
          f_ra(e, "s_ba_gra");
          f_sa(e, "s_ba_blu", "");
          f_crem(zs_.e_nav_left, "c_no_c_hide");
          f_cadd(zs_.e_nav_left, "c_keep_c_hide");
          f_crem(zs_.e_nav_right, "c_no_c_hide");
          f_cadd(zs_.e_nav_right, "c_keep_c_hide");
        } else {
          f_ra(e, "s_ba_gra");
          f_ra(e, "s_ba_blu");
          f_crem(zs_.e_nav_left, "c_no_c_hide");
          f_crem(zs_.e_nav_left, "c_keep_c_hide");
          f_crem(zs_.e_nav_right, "c_no_c_hide");
          f_crem(zs_.e_nav_right, "c_keep_c_hide");
        }
      } else if (f_ccon(e, "c_b_fs_l")) {
        f_cli_b_fs_l(e);
      } else if (f_ccon(e, "c_b_fs")) {
        f_cli_b_fs(e);
      } else if (f_ccon(e, "c_b_fsm")) {
        f_cli_b_fsm(e);
      } else if (f_ccon(e, "c_b_parent")) {
        f_cli_b_parent(e);
      } else if (f_ccon(e, "c_b_child")) {
        f_cli_b_child(e);
      } else if (f_ccon(e, "c_b_mark")) {
        f_cli_b_mark(e);
      } else if (f_ccon(e, "c_b_mark_go")) {
        f_cli_b_mark_go(e);
      } else if (f_ccon(e, "c_b_whites")) {
        f_cli_b_whites(e);
      } else if (f_ccon(e, "c_b_h_length")) {
        f_cli_b_h_length(e);
      } else if (f_ccon(e, "c_b_log")) {
        f_ctog(f_gi("i_log"), "c_hide");
        if (!f_ccon(f_gi("i_log"), "c_hide")) {
          f_jump_e(f_gi("i_log"));
        }
      } else if (f_ccon(e, "c_p_wpp")) {
        var ej_t = $(e).parent().find("img");
        var s_width = ej_t.css("width");
        s_width = s_width.replace(/px/, "") * 1.3 + "px";
        ej_t.css("width", s_width);
        ej_t.css("max-width", "unset");
      } else if (f_ccon(e, "c_p_wmm")) {
        var ej_t = $(e).parent().find("img");
        var s_width = ej_t.css("width");
        s_width = s_width.replace(/px/, "") / 1.3 + "px";
        ej_t.css("width", s_width);
        ej_t.css("max-width", "unset");
      } else if (f_ccon(e, "c_v_wpp")) {
        var ej_t = $(e).parent().find("video");
        var s_width = ej_t.css("width");
        s_width = s_width.replace(/px/, "") * 1.3 + "px";
        ej_t.css("width", s_width);
        ej_t.css("max-width", "unset");
      } else if (f_ccon(e, "c_v_wmm")) {
        var ej_t = $(e).parent().find("video");
        var s_width = ej_t.css("width");
        s_width = s_width.replace(/px/, "") / 1.3 + "px";
        ej_t.css("width", s_width);
        ej_t.css("max-width", "unset");
      } else if (f_ccon(e, "c_m_wpp")) {
        var e_if = $(e).parent().find("svg");
        if (!e_if.attr("wpp")) {
          s_h = parseInt(e_if.css("max-width").replace("px", ""));
          e_if.attr("width", s_h * 1.2 + "px");
          e_if.attr("wpp", "true");
          e_if.css("max-width", "");
        } else {
          s_h = parseInt(e_if.css("width").replace("px", ""));
          e_if.attr("width", s_h * 1.2 + "px");
        }
      } else if (f_ccon(e, "c_m_wmm")) {
        var e_if = $(e).parent().find("svg");
        if (!e_if.attr("wpp")) {
          s_h = parseInt(e_if.css("max-width").replace("px", ""));
          e_if.attr("width", s_h / 1.2 + "px");
          e_if.attr("wpp", "true");
          e_if.css("max-width", "");
        } else {
          s_h = parseInt(e_if.css("width").replace("px", ""));
          e_if.attr("width", s_h / 1.2 + "px");
        }
      } else if (f_ccon(e, "c_if_reset")) {
        var e_if = $(e).parent()[0];
        f_crem(e_if, "c_conved");
        var e_d_ifr = $(e).parent().find(".c_d_iframe")[0];
        e_d_ifr.innerHTML = f_tz(f_hzz(e_d_ifr.innerHTML));
      } else if (f_ccon(e, "c_if_z2h_bg")) {
        $(e)
          .parent()
          .parent()
          .find(".c_d_iframe")
          .css("background-color", $(e).parent().find("input").val());
      } else if (f_ccon(e, "c_if_z2h")) {
        var e_if = $(e).parent()[0];
        if (!f_ccon(e_if, "c_conved")) {
          f_cadd(e_if, "c_conved");
          var e_d_ifr = $(e).parent().find(".c_d_iframe")[0];
          e_d_ifr.innerHTML = f_zzh(f_zh(e_d_ifr.innerHTML));
        }
      } else if (f_ccon(e, "c_if_wpp")) {
        var e_if = $(e).parent().find("iframe");
        var s_h = e_if.attr("width");
        if (!s_h) {
          s_h = 50;
        }
        e_if.attr("height", s_h * 1.2);
      } else if (f_ccon(e, "c_if_wmm")) {
        var e_if = $(e).parent().find("iframe");
        var s_h = e_if.attr("width");
        if (!s_h) {
          s_h = 50;
        }
        e_if.attr("height", s_h / 1.2);
      } else if (f_ccon(e, "c_if_hpp")) {
        var e_if = $(e).parent().find("iframe");
        var s_h = e_if.attr("height");
        if (!s_h) {
          s_h = 50;
        }
        e_if.attr("height", s_h * 1.5);
      } else if (f_ccon(e, "c_if_hmm")) {
        var e_if = $(e).parent().find("iframe");
        var s_h = e_if.attr("height");
        if (!s_h) {
          s_h = 50;
        }
        e_if.attr("height", s_h / 1.5);
      } else if (f_ccon(e, "c_b_tb_fat")) {
        var s_width = $(e).parent().parent().find("table").css("width");
        s_width = s_width.replace(/px/, "") * 1.3 + "px";
        $(e).parent().parent().find("table").css("width", s_width);
      } else if (f_ccon(e, "c_b_tb_thin")) {
        var s_width = $(e).parent().parent().find("table").css("width");
        s_width = s_width.replace(/px/, "") / 1.3 + "px";
        $(e).parent().parent().find("table").css("width", s_width);
        $(e)
          .parent()
          .parent()
          .find("table tr td:first-child")
          .css("width", "unset");
      } else if (f_ccon(e, "c_b_tb_p2x")) {
        var s_width = $(e)
          .parent()
          .parent()
          .parent()
          .find("table")
          .css("width");
        s_width = s_width.replace(/px/, "") * 2 + "px";
        $(e).parent().parent().parent().find("table").css("width", s_width);
      } else if (f_ccon(e, "c_b_tb_m2x")) {
        var s_width = $(e)
          .parent()
          .parent()
          .parent()
          .find("table")
          .css("width");
        s_width = s_width.replace(/px/, "") / 2 + "px";
        $(e).parent().parent().parent().find("table").css("width", s_width);
      } else if (f_ccon(e, "c_b_td0_p")) {
        var s_width = $(e)
          .parent()
          .parent()
          .parent()
          .find("table tr td:first-child")
          .css("width");
        s_width = s_width.replace(/px/, "") * 1.3 + "px";
        var s_tb_width = $(e)
          .parent()
          .parent()
          .parent()
          .find("table")
          .css("width");
        if (parseInt(s_width) > parseInt(s_tb_width) / 2) {
          s_width = s_tb_width / 2;
        }
        $(e)
          .parent()
          .parent()
          .parent()
          .find("table tr td:first-child")
          .css("width", s_width);
      } else if (f_ccon(e, "c_b_td0_m")) {
        var s_width = $(e)
          .parent()
          .parent()
          .parent()
          .find("table tr td:first-child")
          .css("width");
        s_width = s_width.replace(/px/, "") / 1.3 + "px";
        $(e)
          .parent()
          .parent()
          .parent()
          .find("table tr td:first-child")
          .css("width", s_width);
      } else if (f_ccon(e, "c_b_next")) {
        f_cli_b_next(e);
      } else if (f_ccon(e, "c_b_prev")) {
        f_cli_b_prev(e);
      } else if (f_ccon(e, "c_b_e_run")) {
        f_cli_b_e_run(e);
      } else if (f_ccon(e, "c_b_e_run_click")) {
        f_cli_b_e_run_click(e);
      } else if (f_ccon(e, "c_b_e_bg")) {
        $(e)
          .parent()
          .parent()
          .find(".c_e_run")
          .css("background-color", $(e).parent().find("input").val());
      }
      if (f_ccon(e, "c_b_e_if_url")) {
        var ej_text = $(e).parent();
        var s = ej_text.find(".c_e_in").val();
        var e_run = ej_text.find(".c_e_run")[0];
        var h = (document.body.clientWidth * 2) / 5;
        $(e_run).css("height", h);
        $(e_run).css("color", "#222");
        $(e_run).css("background-color", "#ddd");
        e_run.innerHTML = `<iframe width=100% height=100% src=${s}></iframe>`;
        f_show(e_run);
      } else if (f_ccon(e, "c_b_e_co")) {
        $(e)
          .parent()
          .parent()
          .find(".c_e_run")
          .css("color", $(e).parent().find("input").val());
      } else if (f_ccon(e, "c_b_e_if_run")) {
        f_cli_b_e_if_run(e);
      } else if (f_ccon(e, "c_b_e_reset")) {
        f_cli_b_e_reset(e);
      } else if (f_ccon(e, "c_b_e_ec_save")) {
        f_cli_b_ec_save(e);
      } else if (f_ccon(e, "c_b_e_del_run")) {
        f_cli_b_e_del_run(e);
      } else if (f_ccon(e, "c_b_e_del_ec")) {
        f_cli_b_e_del_ec(e);
      } else if (f_ccon(e, "c_b_ec_edit")) {
        f_cli_b_ec_edit(e);
      } else if (f_ccon(e, "c_b_e_run_wpp")) {
        var e_if = $(e).parent().find(".c_e_run");
        var s_h = $(e).parent().find(".c_e_run").css("width");
        s_h = s_h.replace(/px/, "");
        s_h = 1.2 * s_h;
        $(e).parent().find(".c_e_run").css("width", `${s_h}px`);
      } else if (f_ccon(e, "c_b_e_run_wmm")) {
        var e_if = $(e).parent().find(".c_e_run");
        var s_h = $(e).parent().find(".c_e_run").css("width");
        s_h = s_h.replace(/px/, "");
        s_h = s_h / 1.2;
        $(e).parent().find(".c_e_run").css("width", `${s_h}px`);
      } else if (f_ccon(e, "c_b_e_run_ctog")) {
        $(e).parent().find(".c_b__but_hide").toggleClass("c_hide");
      } else if (f_ccon(e, "c_b_e_run_wdel")) {
        $(e).parent().find(".c_e_run").css("width", ``);
      } else if (f_ccon(e, "c_b_e_run_hdel")) {
        $(e).parent().find(".c_e_run").css("height", ``);
      } else if (f_ccon(e, "c_b_e_run_wreset")) {
        $(e).parent().find(".c_e_run").css("width", `100%`);
      } else if (f_ccon(e, "c_b_e_run_hreset")) {
        $(e).parent().find(".c_e_run").css("height", `100%`);
      } else if (f_ccon(e, "c_b_e_run_hpp")) {
        var e_if = $(e).parent().find(".c_e_run");
        var s_h = $(e).parent().find(".c_e_run").css("height");
        s_h = s_h.replace(/px/, "");
        s_h = 1.2 * s_h;
        $(e).parent().find(".c_e_run").css("height", `${s_h}px`);
      } else if (f_ccon(e, "c_b_e_run_hmm")) {
        var e_if = $(e).parent().find(".c_e_run");
        var s_h = $(e).parent().find(".c_e_run").css("height");
        s_h = s_h.replace(/px/, "");
        s_h = s_h / 1.2;
        $(e).parent().find(".c_e_run").css("height", `${s_h}px`);
      } else if (f_ccon(e, "c_b_chap_level")) {
        f_cli_b_chap_level(e);
      } else if (f_ga(e, "id") === "i_search_cha") {
        f_cli_b_search_cha();
      } else if (f_ga(e, "id") === "i_search_all") {
        f_cli_b_search_all();
      } else if (f_ccon(e, "c_b_r_run")) {
        f_cli_b_r_run(e);
      } else if (f_ccon(e, "c_b_r_hljs")) {
        f_cli_b_r_hljs(e);
      }
      if (f_ccon(e, "c_b_play_audio1")) {
        e_a = $(e).find("audio")[0];
        if (e_a) {
          e_a.load();
          f_mark(e);
        }
      }
      return "stoppar";
    }
    if (f_w_in_s(e.tagName, "ABC")) {
      f_abc_conv_cli(e);
      return "stoppar";
    }
    if (f_w_in_s(e.tagName, "MIND")) {
      f_mind_conv_cli(e);
      return "stoppar";
    }
    if (f_w_in_s(e.tagName, "MER MER0 MER1 MER2")) {
      f_cli_m_e(e);
      return "stoppar";
    }
    if (f_w_in_s(e.tagName, "MD")) {
      f_md_cli_e(e);
      return "stoppar";
    }
    if (f_w_in_s(e.tagName, "HLJS")) {
      f_cli_hljs(e);
      return "stoppar";
    }
    if (f_w_in_s(e.tagName, "HL HL0")) {
      f_cli_hl(e);
      return "stoppar";
    }
    if (f_w_in_s(e.tagName, "TI")) {
      location.href = location.href.replace(/#.*$/, "") + "#";
      return "stoppar";
    }
    if (f_w_in_s(e.tagName, "H H0X H1X H2X HH H1 H2 H3 H4 H5 H6")) {
      f_cli_h(e);
      return "stoppar";
    }
    if (f_w_in_s(e.tagName, "C C0 C1 C2")) {
      f_cli_c(e);
      return "stoppar";
    }
    if (f_w_in_s(e.tagName, "L L1 L2")) {
      f_cli_l(e);
      return "stoppar";
    }
    if (f_w_in_s(e.tagName, "R R0 R1 R2")) {
      f_cli_r(e);
      return "stoppar";
    }
    if (e.tagName === "T") {
      s = f_cli_t(e);
      if (!!s) {
        return s;
      } else {
        return "stoppar";
      }
    }
    if (f_w_in_s(e.tagName, "Z Z0 MD")) {
      f_cli_z(e);
      return "stoppar";
    }
    if (e.tagName === "A" || e.tagName === "A1" || e.tagName === "A2") {
      f_cli_a(e);
      return "stoppar";
    }
    if (e.tagName === "BUTTON") {
      return "stoppar";
    }
    if (e.tagName === "INPUT") {
      return "stoppar";
    }
    if (f_w_in_s(e_bak.tagName, "SON") || f_ccon(e_bak, "c_son")) {
      return "stoppar";
    }
    var e_p = $(e).parent()[0];
    if (e_p && e_p != document) {
      var t = f_click(e_p);
      if (t === "stoppar") {
        return "stoppar";
      }
    }
  }
  function f_cli_h(e) {
    if (f_w_in_s(e.tagName, "H1 H2 H3 H4 H5 H6")) {
      if (!f_ha(e, "zh")) {
        return false;
      }
    }
    if (!f_w_in_s(e.tagName, "H1X H2X")) {
      zs_.e_cli0_h = e;
    }
    if (!f_w_in_s(f_next(e).tagName, "H H0X H1X H2X")) {
      f_ctog(e, "c_hide_n");
      f_ctog(f_next(e), "c_hide");
    }
    if (!f_w_in_s(e.tagName, "H0X H1X H2X HH")) {
      f_jump_e(e);
    }
  }
  function f_cli_z(e) {
    try {
      zs_.n_cli_t0 = new Date().getTime();
      if (zs_.n_cli_t0 - zs_.n_cli_t1 > 600) {
        zs_.n_cli_count = 1;
      } else {
        zs_.n_cli_count++;
      }
      if (zs_.n_cli_count >= 3) {
        zs_.n_cli_count = 0;
        if (f_prev(e)) {
          if (f_prev(e).nodeName === "H") {
            f_cadd(f_prev(e), "c_hide_n");
            f_scrollfix(f_prev(e));
            f_hide(e);
          }
        }
      }
      zs_.n_cli_t1 = zs_.n_cli_t0;
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_show_a_level(a, level) {
    for (var i = 0; i < a.length; i++) {
      var a_m = a[i].innerHTML.match(/\./g);
      if (a_m) {
        var n0 = a_m.length;
        if (n0 > level) {
          f_hide(a[i]);
        } else {
          f_show(a[i]);
        }
      }
    }
  }
  function f_cli_b_chap_level(e) {
    try {
      f_mark(e);
      var e_z = $(e).parent().parent()[0];
      var a = $(e_z).find("a2");
      var n = parseInt($(e).attr("a_chap_level"));
      f_show_a_level(a, n);
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_cli_b_mark(e) {
    f_mark(e);
    $(".i_mark_pos").removeClass("i_mark_pos");
    $(zs_.e_cli0_h).addClass("i_mark_pos");
  }
  function f_cli_b_mark_go(e) {
    f_mark(e);
    var e1 = f_gc("i_mark_pos")[0];
    if (e1) {
      $(e1).parents().removeClass("c_hide");
      $(e1).parents().prev().removeClass("c_hide_n");
      f_jump_e(e1);
    }
  }
  function f_cli_b_zip(e) {
    try {
      if (!!zs_.e_cli0_h) {
      } else {
        zs_.e_cli0_h = f_prev(zs_.e_body);
      }
      if (zs_.e_cli0_h === zs_.e_body) {
        zs_.e_cli0_h = f_prev(zs_.e_body);
      }
      var elej_h = $(zs_.e_cli0_h);
      var s_zip_level = f_ga(e, "a_zip_level");
      if (s_zip_level) {
        s_zip_level = parseInt(s_zip_level) + 1;
        if (s_zip_level > 2) {
          s_zip_level = 0;
        }
      } else {
        s_zip_level = 2;
      }
      f_sa(e, "a_zip_level", s_zip_level);
      if (s_zip_level === 0) {
        f_hide_ez(elej_h.next()[0]);
      }
      if (s_zip_level === 1) {
        f_show(elej_h.next()[0]);
        elej_h.removeClass("c_hide_n");
        elej_h.next().find("h").addClass("c_hide_n");
        elej_h.next().find("h").next().not("h,h0x,h1x,h2x").addClass("c_hide");
      }
      if (s_zip_level === 2) {
        f_show(elej_h.next()[0]);
        elej_h.removeClass("c_hide_n");
        elej_h.next().find("h").removeClass("c_hide_n");
        elej_h.next().find("h").next().removeClass("c_hide");
      }
      f_scrollfix(elej_h[0]);
      f_mark(e);
      if (zs_.e_cli0_h === f_prev(zs_.e_body)) {
        f_scrollfix(zs_.e_body);
        f_mark(zs_.e_body);
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_cli_b_parent(e) {
    try {
      f_mark(e);
      if (!!zs_.e_cli0_h) {
      } else {
        zs_.e_cli0_h = f_prev(zs_.e_body);
      }
      var elej_h = $(zs_.e_cli0_h);
      var ele_par_prev = elej_h.parent().prev()[0];
      if (ele_par_prev) {
        f_jump_e(ele_par_prev);
        zs_.e_cli0_h = ele_par_prev;
      } else {
        zs_.e_cli0_h = zs_.e_body;
        f_jump_e(zs_.e_body);
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_cli_b_next(e) {
    f_mark(e);
    var elej_h = $(zs_.e_cli0_h);
    var ele_nex = elej_h.next().next()[0];
    if (ele_nex) {
      zs_.e_cli0_h = ele_nex;
      ele_nex.click();
    }
  }
  function f_cli_b_prev(e) {
    f_mark(e);
    var elej_h = $(zs_.e_cli0_h);
    var ele_prev = elej_h.prev().prev()[0];
    if (ele_prev) {
      zs_.e_cli0_h = ele_prev;
      ele_prev.click();
    }
  }
  function f_cli_b_whites(e) {
    if (!f_ccon(e, "c_double_check")) {
      f_cadd(e, "c_double_check");
      setTimeout(function () {
        f_crem(e, "c_double_check");
      }, 2e3);
    } else {
      f_crem(e, "c_double_check");
      var elej_h = $(zs_.e_cli0_h);
      var ele_z = elej_h.next()[0];
      if (ele_z) {
        f_del_space_ele(ele_z);
        f_cadd(ele_z, "c_manual_del_space");
        var arr_ele = $(ele_z).find("*");
        for (var i = 0; i < arr_ele.length; i++) {
          f_del_space_ele(arr_ele[i]);
        }
      }
    }
  }
  function f_cli_a(e) {
    try {
      var str_t = f_ga(e, "href").replace(/#/, "");
      if (f_gi(str_t)) {
        var e_t = f_gi(str_t);
        f_jump_e(e_t);
        if (f_ha(e, "offset")) {
          var e_marksearch = $(e_t).find("marksearch ")[0];
          if (e_marksearch) {
            f_jump_e(e_marksearch);
          }
        }
        if (f_w_in_s(e_t.tagName, "H H1X H2X HH")) {
          if (f_ccon(f_next(e_t), "c_hide")) {
            e_t.click();
          }
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_text_init() {
    var arr_ele = f_q("z,z0,d,d0,dp,dc,zz,zz0");
    for (var i = 0; i < arr_ele.length; i++) {
      var e = arr_ele[i];
      for (var j = 0; j < e.childNodes.length; j++) {
        var ele_c = e.childNodes[j];
        if (ele_c.nodeName === "#text") {
          if (ele_c.nodeValue.match(/\S/)) {
            if (e.childNodes.length > 1) {
              var e_text = f_create("text");
              e_text.innerHTML = ele_c.nodeValue;
              e.replaceChild(e_text, e.childNodes[j]);
            }
          }
        }
      }
    }
  }
  function f_cli_b_search_all() {
    try {
      f_gi("i_search_res").innerHTML = "";
      var str_t = $(f_gi("i_search_in")).val();
      if (str_t) {
        var r_t = new RegExp(`(.){0,10}${str_t}(.){0,10}`, "ig");
        var arr_ele = f_q("*");
        var arr_ele_t = [];
        arr_ele_t.push(["<a2 class=c_hide> </a2>", ""]);
        for (var i = 0; i < arr_ele.length; i++) {
          var e = arr_ele[i];
          if (e.tagName === "style") {
            console.log("tagname sty????????", e);
          }
          if (e.tagName === "STYLE") {
            console.log("tagname STY????????", e);
          }
          if (
            f_ga(e, "id") != "i_log" &&
            !f_ga(e, "a_search_list") &&
            !f_ga(e, "a_chap_list") &&
            !(e.tagName === "STYLE") &&
            !(e.tagName === "style") &&
            !(e.tagName === "TEXTAREA22222")
          ) {
            for (var j = 0; j < e.childNodes.length; j++) {
              var ele_c = e.childNodes[j];
              if (ele_c.nodeName === "#text") {
                var s_ec = ele_c.nodeValue;
                if (s_ec.match(r_t)) {
                  var str_match = s_ec.match(r_t)[0];
                  var str_match_offset = s_ec.search(r_t);
                  if (f_ga(e, "id")) {
                    var s_id = f_ga(e, "id");
                  } else {
                    var s_id = "i_search" + ++zs_.n_id_auto;
                    f_sa(e, "id", s_id);
                  }
                  str_a = `<a2 a_search_list=1 href='#${s_id}' offset=${str_match_offset}>${f_ht(
                    str_match
                  )}</a2>`;
                  arr_ele_t.push([str_a, e.tagName]);
                }
              }
            }
          }
        }
        if (arr_ele_t.length < 1) {
          f_gi("i_search_res").innerHTML = "no match";
        }
        var e_search_r = f_gi("i_search_res");
        f_crem(f_prev(e_search_r), "c_hide_n");
        f_show(e_search_r);
        for (var i = 0; i < arr_ele_t.length; i++) {
          var s = "";
          s += "<d0>";
          s += arr_ele_t[i][1];
          s += ":";
          s += arr_ele_t[i][0];
          s += "</d0>";
          f_append_s(e_search_r, s);
        }
        if (arr_ele_t) {
          var a0 = $(f_gi("i_search_res")).find("a,a1,a2")[0];
          if (a0) {
            zs_.e_a_clicked = a0;
          }
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_cli_b_search_cha() {
    try {
      f_gi("i_search_res").innerHTML = "";
      var e_search_i = f_gi("i_search_in");
      var e_search_r = f_gi("i_search_res");
      var str_t = $(e_search_i).val();
      if (str_t) {
        var r_t = new RegExp(str_t, "ig");
        var arr_ele = f_gt("a2");
        var arr_ele_t = [];
        for (var i = 0; i < arr_ele.length; i++) {
          if (arr_ele[i].innerHTML.match(r_t)) {
            arr_ele_t.push(arr_ele[i].outerHTML);
          }
        }
        if (arr_ele_t.length < 1) {
          f_gi("i_search_res").innerHTML = "no match";
        }
        f_crem(f_prev(e_search_r), "c_hide_n");
        f_show(e_search_r);
        for (var i = 0; i < arr_ele_t.length; i++) {
          var s = "<d0>" + arr_ele_t[i] + "</d0>";
          f_append_s(e_search_r, s);
        }
        $("#i_search_res").find("*").removeClass("c_hide");
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_cli_b_child(e) {
    if (!!zs_.e_cli0_h) {
    } else {
      zs_.e_cli0_h = f_prev(zs_.e_body);
    }
    if (zs_.e_cli0_h.tagName === "BODY") {
      var elej_h = $(zs_.e_cli0_h);
      var ele_child_next = elej_h.children("h")[0];
      if (ele_child_next) {
        f_jump_e(ele_child_next);
        zs_.e_cli0_h = ele_child_next;
      }
    } else {
      var elej_h = $(zs_.e_cli0_h);
      var ele_child_next = elej_h.next().children("h")[0];
      if (ele_child_next) {
        f_jump_e(ele_child_next);
        zs_.e_cli0_h = ele_child_next;
      }
    }
  }
  function f_cli_b_fs(e) {
    var n_fs = parseInt($(zs_.e_html).css("font-size").replace(/px/, ""));
    var n_max = 65;
    var n_min = 8;
    var n_step = 5;
    n_fs += n_step;
    if (n_fs > n_max - n_step) {
      f_mark(zs_.e_nav_top);
    }
    if (n_fs > n_max) {
      n_fs = n_min;
    } else if (n_fs < n_min) {
      n_fs = n_max;
    }
    $(zs_.e_html).css("font-size", n_fs + "px");
  }
  function f_cli_b_fsm(e) {
    var n_fs = parseInt($(zs_.e_html).css("font-size").replace(/px/, ""));
    var n_max = 65;
    var n_min = 8;
    var n_step = 5;
    n_fs -= n_step;
    if (n_fs < n_min + n_step) {
      f_mark(zs_.e_nav_top);
    }
    if (n_fs < n_min) {
      n_fs = n_max;
    } else if (n_fs > n_max) {
      n_fs = n_min;
    }
    $(zs_.e_html).css("font-size", n_fs + "px");
  }
  function f_cli_b_fs_l(e) {
    var n_fs = parseInt($(zs_.e_html).css("font-size").replace(/px/, ""));
    var n_max = 650;
    var n_min = 10;
    var n_step = 20 * (1 + (n_fs / 1e3) * 4);
    n_fs += n_step;
    if (n_fs > n_max - n_step) {
      f_mark(zs_.e_nav_top);
    }
    if (n_fs > n_max) {
      n_fs = n_min;
    } else if (n_fs < n_min) {
      n_fs = n_max;
    }
    $(zs_.e_html).css("font-size", n_fs + "px");
  }
  function f_cli_b_h_length() {
    var a = f_q("h");
    for (var i = 0; i < a.length; i++) {
      if (f_next(a[i])) {
        var s_l = f_innertext(f_next(a[i])).replace(/\s*/g, "").length;
        var s = `<d2 class=c_h_len style='font-size:x-small;'>  ${s_l}</d2>`;
        var nl = $(a[i]).find(".c_h_len");
        if (!nl.length) {
          f_append_s(a[i], s);
        }
      }
    }
  }
  function f_jump_e(e) {
    $(e).parents().removeClass("c_hide");
    $(e).parents().prev().removeClass("c_hide_n");
    f_show(e);
    f_mark(e);
    var etop = $(e).offset().top;
    var top_offset = 80;
    f_scroll(etop - top_offset);
  }
  function f_jump_e_just_show_par(e) {
    $(e).parents().removeClass("c_hide");
    $(e).parents().prev().removeClass("c_hide_n");
    var show_temp = 0;
    if (f_ccon(e, "c_hide")) {
      show_temp = 1;
    }
    if (show_temp === 1) {
      f_show(e);
    }
    f_mark(e);
    var etop = $(e).offset().top;
    var top_offset = 50;
    f_scroll(etop - top_offset);
    if (show_temp === 1) {
      f_hide(e);
    }
  }
  function f_scrollfix(e) {
    try {
      $(e).parents().removeClass("c_hide");
      $(e).parents().prev().removeClass("c_hide_n");
      if (!f_ccon(e, "c_hide")) {
        var wh = window.innerHeight;
        var wtop = window.scrollY;
        var etop = $(e).offset().top;
        var eh = $(e).height();
        var top_offset = 50;
        if (e.tagName === "BODY") {
        } else {
          if (wtop + 20 > etop - top_offset) {
            f_scroll(etop - top_offset);
          } else {
            if (eh < wh) {
              if (wtop + wh - 20 < etop + eh + top_offset) {
                f_scroll(etop + eh + top_offset - wh + 120);
              }
            } else {
              f_scroll(etop - top_offset);
            }
          }
        }
        f_mark(e);
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_scroll(y, speed) {
    if (!speed) {
      speed = 300;
    }
    $("html").animate({ scrollTop: y }, speed);
  }
  function f_a_css_e_find(e) {
    var a = $(e).find("[a_css]");
    for (var i = 0; i < a.length; i++) {
      f_a_css_e(a[i], $(a[i]).attr("a_css"));
    }
  }
  function f_set2css_attr(o_set) {
    var s_css_attr = "";
    var o;
    for (o of o_set) {
      var a = o.split(":");
      var s_key = a[0];
      var s_val = a[1];
      s_css_attr +=
        "[" +
        "ac_" +
        s_key +
        "='" +
        s_val +
        "']" +
        "{" +
        s_key +
        ":" +
        s_val +
        ";" +
        "}";
    }
    return s_css_attr;
  }
  function f_a_css_split(s_css) {
    var a = s_css.split(";");
    if (!a[a.length - 1]) {
      a.pop();
    }
    s_css = " ";
    for (var i = 0; i < a.length; i++) {
      var a1 = [];
      a1 = a[i].split(":");
      s_css += "ac_" + a1[0] + "='" + a1[1] + "' ";
    }
    return s_css;
  }
  function f_a_css(s_css, s_pos) {
    var a = s_css.split(";");
    if (!a[a.length - 1]) {
      a.pop();
    }
    for (var i = 0; i < a.length; i++) {
      var a1 = [];
      a1 = a[i].split(":");
      if (s_pos === 1) {
        zs_.o_a_css1.add(a[i]);
      } else {
        zs_.o_a_css0.add(a[i]);
      }
    }
    if (s_pos === 1) {
      f_gi("i_a_css1").innerHTML = f_set2css_attr(zs_.o_a_css1);
    } else {
      f_gi("i_a_css0").innerHTML = f_set2css_attr(zs_.o_a_css0);
    }
  }
  function f_a_css_e(e, s_css, s_pos) {
    var a = s_css.split(";");
    if (!a[a.length - 1]) {
      a.pop();
    }
    for (var i = 0; i < a.length; i++) {
      var a1 = [];
      a1 = a[i].split(":");
      a1[0] = a1[0].replace(/^\s*/, "");
      a1[1] = a1[1].replace(/\s*$/, "");
      f_sa(e, "ac_" + a1[0], a1[1]);
      if (s_pos === 1) {
        zs_.o_a_css1.add(a[i]);
      } else {
        zs_.o_a_css0.add(a[i]);
      }
    }
    if (s_pos === 1) {
      f_gi("i_a_css1").innerHTML = f_set2css_attr(zs_.o_a_css1);
    }
    if (s_pos === 2) {
      var s = f_set2css_attr(zs_.o_a_css1);
      var t_flag = 0;
      if (f_next(e)) {
        if (f_ccon(f_next(e), "a_css_2")) {
          t_flag = 1;
        }
      }
      if (t_flag === 0) {
        s = "<style class=a_css_2>" + s + "</style>";
        f_after_s(e, s);
      } else {
        f_next(e).innerHTML = s;
      }
    } else {
      f_gi("i_a_css0").innerHTML = f_set2css_attr(zs_.o_a_css0);
    }
  }
  function f_mark(e) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          $(e).addClass("c_mark");
          setTimeout(function () {
            $(e).removeClass("c_mark");
          }, 500);
        }
      }
    }
  }
  function f_th(t) {
    t = t.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    return t;
  }
  function f_ht(t) {
    t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return t;
  }
  function f_zh(t) {
    t = t.replace(/‹/g, "<").replace(/›/g, ">");
    return t;
  }
  function f_zt(t) {
    t = t.replace(/‹/g, "&lt;").replace(/›/g, "&gt;");
    return t;
  }
  function f_tz(t) {
    t = t.replace(/&lt;/g, "‹").replace(/&gt;/g, "›");
    return t;
  }
  function f_hz(t) {
    t = t.replace(/</g, "‹").replace(/>/g, "›");
    return t;
  }
  function f_hzz(t) {
    t = t.replace(/</g, "〈").replace(/>/g, "〉");
    return t;
  }
  function f_tzz(t) {
    t = t.replace(/&lt;/g, "〈").replace(/&gt;/g, "〉");
    return t;
  }
  function f_zzh(t) {
    t = t.replace(/〈/g, "<").replace(/〉/g, ">");
    return t;
  }
  function f_zzt(t) {
    t = t.replace(/〈/g, "&lt;").replace(/〉/g, "&gt;");
    return t;
  }
  function f_hzzz(t) {
    t = t.replace(/</g, "＜").replace(/>/g, "＞");
    return t;
  }
  function f_tzzz(t) {
    t = t.replace(/&lt;/g, "＜").replace(/&gt;/g, "＞");
    return t;
  }
  function f_zzzh(t) {
    t = t.replace(/＜/g, "<").replace(/＞/g, ">");
    return t;
  }
  function f_zzzt(t) {
    t = t.replace(/＜/g, "&lt;").replace(/＞/g, "&gt;");
    return t;
  }
  function f_toggle_quiet(e) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          f_ctog(e, "c_hide");
        }
      }
    }
  }
  function f_toggle(e) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          f_ctog(e, "c_hide");
          if (!f_ccon(e, "c_hide")) {
            $(e).parents().removeClass("c_hide");
          }
        }
      }
    }
  }
  function f_show_quiet(e) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          f_crem(e, "c_hide");
        }
      }
    }
  }
  function f_show(e) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          f_crem(e, "c_hide");
          $(e).parents().removeClass("c_hide");
        }
      }
    }
  }
  function f_show_scroll(e) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          f_crem(e, "c_hide");
          $(e).parents().removeClass("c_hide");
          f_scrollfix(e);
        }
      }
    }
  }
  function f_hide_ez(e) {
    if (!f_w_in_s(e.tagName, "H H1X H2X")) {
      f_hide_next(f_prev(e));
      f_hide(e);
    }
  }
  function f_hide(e) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          f_cadd(e, "c_hide");
        }
      }
    }
  }
  function f_hide_next(e) {
    if (e) {
      if (e.nodeType) {
        if (e.nodeType === 1) {
          f_cadd(e, "c_hide_n");
        }
      }
    }
  }
  function f_w_in_s(t, s) {
    s = " " + s + " ";
    t = " " + t + " ";
    if (!!s.match(t)) {
      return true;
    }
    return false;
  }
  function f_load_zsnote() {
    f_g_val();
    f_test_time("load zsnote.js");
    f_import();
    f_event();
  }
  function f_g_val() {
    if (typeof zs_ != "object") {
      zs_ = {};
    }
    zs_.s_id_demo = "demo1";
    zs_.n_cli_count = 0;
    zs_.n_cli_t0 = 0;
    zs_.n_cli_t1 = 0;
    zs_.o_a_css0 = new Set();
    zs_.o_a_css1 = new Set();
    zs_.n_sc_hide_bot = 0;
    zs_.n_id_auto = 0;
  }
  function f_import(path) {
    f_test_time("import0 ");
    var s = "";
    s += `
          <meta name=viewport content='initial-scale=1.0'>                           
          <style> @font-face { font-family: "dej"; src: url("/zs/dej.woff"); } </style>
          <script src='/zs/t.js'></script>                                  
          <link  href='/zs/t.css' rel='stylesheet'>                         
          `;
    document.write(s);
    f_test_time("import0 end");
  }
  function f_event() {
    document.addEventListener("DOMContentLoaded", f_event_domload);
    window.addEventListener("load", f_event_load);
  }
  function f_event_domload() {
    f_test_time("event domloaded");
    zs_.e_html = f_gt("html")[0];
    zs_.e_head = f_gt("head")[0];
    zs_.e_body = f_gt("body")[0];
    f_init();
  }
  function f_event_load() {
    f_test_time("event load");
    document.addEventListener("click", f_event_click);
    document.addEventListener("keydown", f_event_keydown);
    document.addEventListener("scroll", f_event_throttle(f_event_scroll, 100));
    document.addEventListener("resize", f_event_throttle(f_event_resize, 100));
    setTimeout(function () {
      f_init1();
    }, 200);
    setTimeout(function () {
      f_goto_init();
    }, 500);
    f_test_time_print();
  }
  function f_event_click(event) {
    var e = event.target;
    f_click(e);
  }
  function f_event_scroll(event) {
    f_show(zs_.e_nav_bot);
    f_show(zs_.e_nav_right);
    f_show(zs_.e_nav_left);
    clearTimeout(zs_.n_sc_hide_bot);
    zs_.n_sc_hide_bot = setTimeout(function () {
      f_hide(zs_.e_nav_bot);
      f_hide(zs_.e_nav_right);
      f_hide(zs_.e_nav_left);
    }, 3e3);
  }
  function f_event_resize(event) {}
  function f_event_throttle(fn, wait) {
    var time = Date.now();
    return function () {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  }
  function f_event_keydown(event) {
    var e = event.target;
    if (event.keyCode == 13) {
      f_enter_keydown(e);
    }
  }
  function f_enter_keydown(e) {
    if (e.id === "i_search_in") {
      f_cli_b_search_all();
    }
    if (e.tagName === "TEXTAREA") {
      if (e.rows < 50) {
        e.rows += 1;
      }
    }
  }
  function f_init() {
    if (!zs_.f_init0ed) {
      zs_.f_init0ed = true;
      var n = 0;
      f_test_time("f_init  begin");
      f_add_basic();
      f_textarea_replace();
      f_c_cbak();
      f_k_init();
      f_hl_cbak();
      f_l_cbak();
      f_text_init();
      f_v_init();
      f_zip_init();
      f_css_var();
      f_css_zsnote();
      f_add_nav();
      setTimeout(function () {
        var n = 0;
        f_chapter_init();
        f_del_space_init();
        f_r_init();
        f_r_conv();
        f_t_conv();
        f_l_conv();
        f_textarea_init();
        f_add_init();
        f_todo_init();
        f_media_init();
        f_chart_init();
      }, 200);
      f_test_time("f_init  end");
    }
  }
  function f_init1() {
    if (!zs_.f_inited) {
      zs_.f_inited = true;
      f_l_render();
      hljs.initHighlightingOnLoad();
      f_hljs();
      f_mer_init();
      f_md_init();
    }
  }
  function f_md_init(e) {
    var a = f_q("md");
    for (let i = 0; i < a.length; i++) {
      if (f_ha(a[i], "auto")) {
        f_md_conv_e(a[i]);
      }
    }
    if (a.length === 1) {
      if (!f_ha(a[0], "man")) {
        f_md_conv_e(a[0]);
      }
    }
  }
  function f_md_conv_e(e) {
    try {
      var a,
        s,
        i,
        j = 0;
      if (!f_ccon(e, "c_inited")) {
        f_cadd(e, "c_inited");
        s = e.innerHTML;
        s = f_ht(f_zt(s));
        var r1 = new RegExp(/(?<=\n *)(\n&gt; [^]*?)(?=\n *\n)/, "g");
        s = s.replace(r1, function (mat, p1) {
          p1 = p1.replace(/^\n/, "");
          p1 = p1.replace(/^&gt; /gm, "");
          return `<blockquote>${p1}</blockquote>`;
        });
        var r_1 = new RegExp(/\n *\`\`\`\`(.*?)\n([\s\S]*?)\n *\`\`\`\`/, "g");
        if (f_ha(e, "mjs")) {
          s = s.replace(r_1, function (mat, p1, p2) {
            p1.replace(/smart header=/, "");
            p1.replace(/warn header=/, "!");
            return `<dc><hh s_fs_ler >${p1}</hh>\n${p2}</dc>`;
          });
        }
        var bakhl = [];
        var r_1 = new RegExp(
          /\n *\`\`\`([^\`\n]*?.*?)\n([\s\S]*?)\n *\`\`\`/,
          "g"
        );
        s = s.replace(r_1, function (mat, p1, p2) {
          p1 = p1.replace(/^\s*/, "").replace(/\s*$/, "");
          if (p1 === "mindmap") {
            bakhl.push(`<mind>\n${p2}</mind>`);
          } else if (p1 === "mermaid") {
            bakhl.push(`<mer>\n${p2}</mer>`);
          } else if (p1 === "echarts") {
            bakhl.push(`<ch t=3>\n${p2}</ch>`);
          } else if (p1 === "abc") {
            bakhl.push(`<abc>\n${p2}</abc>`);
          } else {
            if (f_ha(e, "mjs")) {
              if (p1.match(/smart head/)) {
                bakhl.push(`<cc>${p2}</cc>`);
              } else if (p1.match(/html run/)) {
                p2 = p2.replace(/\*!\*/g, "");
                p2 = p2.replace(/\*\/!\*/g, "");
                bakhl.push(`<textarea if>${p2}</textarea>`);
              } else if (p1.match(/js run/)) {
                p2 = p2.replace(/\*!\*/g, "");
                p2 = p2.replace(/\*\/!\*/g, "");
                bakhl.push(`<textarea if><script>${p2}</script></textarea>`);
              } else if (f_ha(e, "cc")) {
                bakhl.push(`<cc>${p2}</cc>`);
              } else {
                bakhl.push(`<hl a_ct='${p1}'>${p2}</hl>`);
              }
            } else {
              if (f_ha(e, "run")) {
                bakhl.push(`<textarea zstable>${p2}</textarea>`);
              } else if (f_ha(e, "runif")) {
                bakhl.push(`<textarea if>${p2}</textarea>`);
              } else if (f_ha(e, "cc")) {
                bakhl.push(`<cc>${p2}</cc>`);
              } else {
                bakhl.push(`<hl a_ct='${p1}'>${p2}</hl>`);
              }
            }
          }
          return `＜bakhl ${bakhl.length - 1}＞`;
        });
        var bakcc = [];
        if (f_ha(e, "hasind")) {
          var r1 = new RegExp(/(\n\S.*\n\s*?\n)(    \S[^]*?)(\n\s*?\n+\S.*)/);
          while (s.match(r1)) {
            s = s.replace(r1, function (mat, p1, p2, p3) {
              bakcc.push(`<cc>${p2}</cc>`);
              return `${p1}＜bakcc ${bakcc.length - 1}＞${p3}`;
            });
          }
        }
        var bakcc2 = [];
        var r_1 = new RegExp(/\`([^\`\n]+?)\`/, "g");
        s = s.replace(r_1, function (mat, p1) {
          bakcc2.push(`<cc2>${p1}</cc2>`);
          return `＜bakcc2 ${bakcc2.length - 1}＞`;
        });
        var r4 = new RegExp(/\n- [^]*?(?=(\s*\n[^\s\-])|$)/, "g");
        s = s.replace(r4, function (mat) {
          var s = mat;
          var len1 = 0;
          var i = 0;
          var sr = 0;
          var j = 1;
          s = s.replace(/(\n( *)- )/gm, function (mat, p1, p2) {
            if (i) {
              if (p2.length > len1) {
                j = (p2.length - len1) / 2;
                var sp = "<ul>".repeat(j);
                sr = `</li>\n${sp}\n${p2}<li>`;
              } else if (p2.length < len1) {
                j = (len1 - p2.length) / 2;
                var sp = "</ul>".repeat(j);
                sr = `</li>\n${sp}\n${p2}<li>`;
              } else {
                sr = `</li>\n${p2}<li>`;
              }
            } else {
              sr = `\n${p2}<li>`;
            }
            len1 = p2.length;
            i++;
            return sr;
          });
          var sp = "</ul>".repeat(len1 / 2);
          s = s + `</li>\n${sp}\n`;
          s = `<ul s_n s_bl s_b s_m2>${s}</ul>`;
          return s;
        });
        if (!f_ha(e, "noinl")) {
          s = s.replace(
            /&lt;(http.*?:\/\/.*?)&gt;/g,
            "〈r2 alt='$1'〉$1〈/r2〉"
          );
        }
        if (f_ha(e, "hashtml")) {
          s = s.replace(/&lt;([\/]{0,1}md)&gt;/g, "＜md＞");
          s = s.replace(/&lt;(.*?)&gt;/g, "〈$1〉");
        }
        if (!f_ha(e, "noinl")) {
          s = s.replace(
            /([^\*!\\)])(\*\*)([^\*\n!\\]+?)\2/gm,
            "$1〈b〉$3〈/b〉"
          );
          s = s.replace(
            /([^\~!\\)])(\~\~)([^\~\n!\\]+?)\2/gm,
            "$1〈s〉$3〈/s〉"
          );
          s = s.replace(/\n---+\s*\n/g, "\n〈hr〉\n");
          s = s.replace(/\n===+\s*\n/g, "\n〈hr〉\n");
          s = s.replace(/\n(\S.*)\n〈hr〉/g, "\n〈h1〉$1〈/h1〉\n");
        }
        s = s.replace(/\{#(\S*)\}/g, `〈a id='$1'〉〈/a〉`);
        s = s.replace(/\[#(\S*)\]/g, `〈a id='$1'〉〈/a〉`);
        s = s.replace(/^###### (.*)/gm, "〈h6〉$1〈/h6〉");
        s = s.replace(/^##### (.*)/gm, "〈h5〉$1〈/h5〉");
        s = s.replace(/^#### (.*)/gm, "〈h4〉$1〈/h4〉");
        s = s.replace(/^### (.*)/gm, "〈h3〉$1〈/h3〉");
        s = s.replace(/^## (.*)/gm, "〈h2〉$1〈/h2〉");
        s = s.replace(/^# (.*)/gm, "〈h1〉$1〈/h1〉");
        if (f_ha(e, "url")) {
          var url = f_ga(e, "url");
          url = url.replace(/([^\/\\])$/, "$1/");
          s = s.replace(
            /\!\[(.*?)\]\((.+?)\)/gm,
            `〈r1 class=c_lazy alt='$1'〉${url}$2〈/r1〉`
          );
        } else {
          s = s.replace(
            /\!\[(.*?)\]\((.+?)\)/gm,
            `〈r1 class=c_lazy alt='$1'〉$2〈/r1〉`
          );
        }
        s = s.replace(/\[(.*?)\]\((.+?)\)/gm, function (mat, s1, s2) {
          if (!s1) {
            s1 = s2;
          }
          s2 = s2.replace(/.*?\.md#/, "#");
          return `〈r2 alt='${s1}'〉${s2}〈/r2〉`;
        });
        s = s.replace(
          /(?<=\n *\n)( *\|.*\| *\n[^]*?)(?=\n *\n)/g,
          function (mat, p1) {
            p1 = p1.replace(/^ *\| *---+.*\| *$/gm, "");
            return `〈t〉${p1}〈/t〉`;
          }
        );
        s = s.replace(/\n *\$\$([^]+?)\n *\$\$ *(?=\n)/g, "\n〈l〉$1〈/l〉\n");
        if (!f_ha(e, "no_in_l")) {
          s = s.replace(/( |^)\$ (.+?) \$(?= |$)/gm, " 〈l1〉$2〈/l1〉 ");
        }
        if (f_ha(e, "bop")) {
          var s_url = f_ga(e, "url");
          if (!s_url) {
            s_url = "";
          }
          s_url = s_url.replace(/([^\/\\]$)/, "$1/");
          s = s.replace(
            /\{% include "\.\/(programs\/.*?)" %\}/g,
            `<iframe s_ba_gra src='${s_url}$1'></iframe>`
          );
        }
        if (!f_ha(e, "html")) {
          var level = 1;
          var i = 0;
          var sr = 0;
          var j = 1;
          s = s.replace(/\n〈h(\d+)〉.*/gm, function (mat, p1) {
            if (i) {
              if (p1 > level) {
                var sp0 = "〈z〉".repeat(p1 - level);
                sr = `${mat}${sp0}`;
              } else if (p1 < level) {
                var sp1 = "〈/z〉".repeat(level - p1 + 1);
                sr = `${sp1}${mat}〈z〉`;
              } else {
                sr = `〈/z〉${mat}〈z〉`;
              }
            } else {
              sr = `${mat}〈z〉`;
            }
            level = p1;
            i++;
            return sr;
          });
          var sp1 = "〈/z〉".repeat(level);
          s = s + `${sp1}`;
        }
        s = s.replace(/＜bakcc (\d*?)＞/g, function (mat, p1) {
          return bakcc[p1];
        });
        s = s.replace(/＜bakhl (\d*?)＞/g, function (mat, p1) {
          return bakhl[p1];
        });
        s = s.replace(/＜bakcc2 (\d*?)＞/g, function (mat, p1) {
          return bakcc2[p1];
        });
        e.innerHTML = f_zzh(s);
        if (!f_ha(e, "html")) {
          var arr_ele = $(e).children("h,h1,h2,h3,h4,h5,h6");
          if (arr_ele) {
            for (var i = 0, j = 0; i < arr_ele.length; i++) {
              f_sa(arr_ele[i], "a_chap", String(j++) + ".");
              f_num_md(arr_ele[i]);
            }
            var a = $(e).find("h,h1,h2,h3,h4,h5,h6");
            for (var i = 0; i < a.length; i++) {
              a[i].innerHTML =
                "<d2 s_c_blu>" +
                f_ga(a[i], "a_chap") +
                "</d2>" +
                a[i].innerHTML;
            }
          }
          a = $(e).find("h,h1,h2,h3,h4,h5,h6");
          for (let i = 0; i < a.length; i++) {
            f_sa(a[i], "id", f_text0(a[i]).toLowerCase().replace(/ /g, "-"));
          }
          a = $(e).find("h,h1,h2,h3,h4,h5,h6");
          for (let i = 0; i < a.length; i++) {
            f_sa(a[i], "zh", "");
            if (f_next(a[i])) {
              if (!f_w_in_s(f_next(a[i]).tagName, "H H1 H2 H3 H4 H5 H6")) {
              }
            }
          }
          e.innerHTML = e.innerHTML
            .replace(/<h\d/g, "<h")
            .replace(/<\/h\d>/g, "</h>");
        }
        if (!f_ha(e, "noarea")) {
          var e_text = f_create("textarea");
          e_text.textContent = e.innerHTML;
          f_sa(e_text, "rows", 2);
          f_cadd(e_text, "c_e_inited");
          f_append_e(e, e_text);
        }
        setInterval(function () {}, 2e3);
        if (!f_ha(e, "manclick")) {
          var a_t = $(e).find("t");
          if (a_t) {
            for (var i = 0; i < a_t.length; i++) {
              a_t[i].click();
            }
          }
          var a_t = $(e).find("r,r0,r1,r2");
          if (a_t) {
            for (var i = 0; i < a_t.length; i++) {
              a_t[i].click();
            }
          }
          var a_t = $(e).find("l,l0,l1,l2");
          if (a_t) {
            for (var i = 0; i < a_t.length; i++) {
              if (f_ha(e, "no_l_c_bak")) {
                f_cadd(a_t[i], "c_cbak");
              }
              if (!f_ccon(a_t[i], "c_render")) {
                a_t[i].click();
              }
            }
          }
          var a_t = $(e).find("mer,mind,ch,abc");
          if (a_t) {
            for (var i = 0; i < a_t.length; i++) {
              a_t[i].click();
            }
          }
          f_textarea_init(e);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_num_md(e) {
    try {
      var i = 0;
      var ele_next = e.nextElementSibling;
      var arr_ele = $(ele_next).children("h,h1,h2,h3,h4,h5,h6");
      if (arr_ele.length) {
        for (i = 0; i < arr_ele.length; i++) {
          var s = f_ga(e, "a_chap") + String(i) + ".";
          f_sa(arr_ele[i], "a_chap", s);
          f_num_md(arr_ele[i]);
        }
      } else {
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_md_cli_e(e) {
    f_md_conv_e(e);
  }
  function f_input_file_md(e) {
    var e1 = f_prev(e);
    var s_attr = "";
    if (e1) {
      if (f_ccon(e1, "c_file_attr")) {
        s_attr = e1.value;
      }
    }
    let file = e.files[0];
    let reader = new FileReader();
    zf = file;
    reader.readAsText(file);
    reader.onload = function () {
      var s = `<c s_p16><md ${s_attr}>${f_ht(reader.result)}</md></c>`;
      f_after_s(e, s);
    };
  }
  function f_zip_init() {
    try {
      var a = $("body").find("z,z0,z1,z2,zc,zc0,zc1,zc2");
      for (var i = 0; i < a.length; i++) {
        var e = a[i];
        f_hide(e);
        var t_flag_add = 0;
        if (f_prev(e)) {
          var s1 = " H H0X H1X H2X ";
          var s0 = f_prev(e).tagName;
          if (!s1.match(" " + s0 + " ")) {
            t_flag_add = 1;
          }
        } else {
          t_flag_add = 1;
        }
        if (t_flag_add === 1) {
          var s_tt = e.textContent;
          var s_slice = s_tt
            .replace(/^\s*/, "")
            .replace(/\n/g, "")
            .slice(0, 25)
            .replace(/\n/g, "");
          if (e.tagName === "Z") {
            f_before_s(
              e,
              "<h class=c_z_add_h>" + f_tz(f_hzz(s_slice) + "</h>")
            );
          } else if (e.tagName === "Z0") {
            f_before_s(e, "<h0x class=c_z_add_h>" + s_slice + "</h0x>");
          } else if (e.tagName === "Z1") {
            s_slice = s_slice.slice(0, 10);
            f_before_s(e, "<h1x class=c_z_add_h>" + s_slice + "</h1x>");
          } else if (e.tagName === "Z2") {
            s_slice = s_slice.slice(0, 3);
            f_before_s(e, "<h2x class=c_z_add_h>" + s_slice + "</h2x>");
          } else if (e.tagName === "ZC") {
            f_before_s(e, "<h class=c_z_add_h>" + s_slice + "</h>");
          } else if (e.tagName === "ZC0") {
            f_before_s(e, "<h0x class=c_z_add_h>" + s_slice + "</h0x>");
          } else if (e.tagName === "ZC1") {
            s_slice = s_slice.slice(0, 5);
            f_before_s(e, "<h1x class=c_z_add_h>" + s_slice + "</h1x>");
          } else if (e.tagName === "ZC2") {
            s_slice = s_slice.slice(0, 3);
            f_before_s(e, "<h2x class=c_z_add_h>" + s_slice + "</h2x>");
          }
        }
        f_hide_next(f_prev(e));
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_add_nav() {
    try {
      s = "";
      s += "<d0 id=i_nav_top class=c_no_c_hide>";
      s += "<bh1>✒zsnote</bh1>";
      s += "<d1 class=c_hide style='padding:2px;'>";
      s += "<b1 class=c_b_fixed_lg>╣</b1>";
      s += "<b1 class=c_b_pin >➼</b1>";
      s += "<b1 class=c_b_near_h>Z</b1>";
      s += "<b1 class=c_htb2mtb>h2m</b1>";
      if (f_ha(f_gt("ti")[0], "head")) {
        f_crem(f_gc("c_head")[0], "c_hide");
      }
      s += `<b1 class=c_b_c_head onclick="f_ctog(f_gc('c_head')[0],'c_hide');f_scroll(0);">head</b1>`;
      s += `<b1 class=c_b_c_foot onclick="f_ctog(f_gi('i_foot'),'c_hide');f_scroll(document.body.clientHeight);">foot</b1>`;
      s += "<input s_m0 s_w4>";
      s += `<b1 class=c_b_attr_e >attr_e</b1>`;
      s += "<b1 class=c_b_add_h >+h</b1>";
      s += "<b1 class=c_b_rem_h >-h</b1>";
      s += "<b1 class=c_b_goto >✈</b1>";
      s += "<b1 class=c_search_prev>‹</b1>";
      s += "<b1 class=c_search_next>›</b1>";
      s += "<b1 class=c_b_fs_l>A++</b1>";
      s += "<b1 class=c_b_dwp>w+</b1>";
      s += "<b1 class=c_b_dwm>w-</b1>";
      s += "<b1 class=c_b_dwx>wx</b1>";
      s += "<b1 class=c_b_dhp>h+</b1>";
      s += "<b1 class=c_b_dhm>h-</b1>";
      s += "<b1 class=c_b_dhx>hx</b1>";
      s += "<b1 class=c_b_wrap>wrap</b1>";
      s += "<b1 class=c_b_pre>pre</b1>";
      s += "<b1 class=c_b_normal>normal</b1>";
      s += "<b1 class=c_b_chap_fixed>▤</b1>";
      s += "<b1 class=c_b_search_fixed>?</b1>";
      s += "<b1 class=c_b_log>✐</b1>";
      s += "<b1 class=c_b_h_length>∑</b1>";
      s += "<b1 class=c_b_zip>⋐</b1>";
      s += "<b1 class=c_b_fs>+</b1>";
      s += "<b1 class=c_b_fsm>-</b1>";
      s += "<b1 class=c_b_parent>⍏</b1>";
      s += "<b1 class=c_b_child>⍖</b1>";
      s += "<b1 class=c_b_next>⇨</b1>";
      s += "<b1 class=c_b_prev>⇦</b1>";
      s += "<b1 class=c_b_mark>★</b1>";
      s += "<b1 class=c_b_mark_go>☈</b1>";
      s += "<b1 class=c_jump_top>▲</b1>";
      s += "<b1 class=c_jump_bot>▼</b1>";
      s += "<b1> </b1>";
      s += "<b1 class='c_b_whites'>⇤</b1>";
      s += "<b1> </b1>";
      s += "<d1>";
      s += "</d0>";
      s += "<d0 id=i_nav_bot>";
      s += "</d0>";
      s += "<d0 id=i_nav_left >";
      s += "<b1 class=c_b_fixed_lg>╣</b1>";
      s += "<d0>  </d0>";
      s += "<b1 class=c_b_chap_fixed>▤</b1>";
      s += "<d0>  </d0>";
      s += "<b1 class=c_b_search_fixed>?</b1>";
      s += "<d0>  </d0>";
      s += "<b1 class=c_b_log>✐</b1>";
      s += "<d0>  </d0>";
      s += "<b1 class=c_b_h_length>∑</b1>";
      s += "<d0>  </d0>";
      s += "<b1 class=c_b_zip>⋐</b1>";
      s += "<d0>  </d0>";
      s += "<b1 class=c_b_fs>+</b1>";
      s += "<d0>  </d0>";
      s += "<b1 class=c_b_fsm>-</b1>";
      s += "<d0>  </d0>";
      s += "<b1 class=c_b_dwp>W</b1>";
      s += "<d0>  </d0>";
      s += "<b1 class=c_b_dwm>w</b1>";
      s += "</d0>";
      s += "<d0 id=i_nav_right >";
      s += "<b1 class=c_b_parent>⍏</b1>";
      s += "<d0>  </d0>";
      s += "<b1 class=c_b_child>⍖</b1>";
      s += "<d0>  </d0>";
      s += "<b1 class=c_b_next>⇨</b1>";
      s += "<d0>  </d0>";
      s += "<b1 class=c_b_prev>⇦</b1>";
      s += "<d0>  </d0>";
      s += "<b1 class=c_b_mark>★</b1>";
      s += "<d0>  </d0>";
      s += "<b1 class=c_b_mark_go>☈</b1>";
      s += "<d0>  </d0>";
      s += "<b1 class=c_jump_top>▲</b1>";
      s += "<d0>  </d0>";
      s += "<b1 class=c_jump_bot>▼</b1>";
      s += "<d0>  </d0>";
      s += "<b1 class=c_b_dhp>H</b1>";
      s += "<d0>  </d0>";
      s += "<b1 class=c_b_dhm>h</b1>";
      s += "</d0>";
      f_append_s(f_gi("init_add_d0"), s);
      zs_.e_nav_top = f_gi("i_nav_top");
      zs_.e_nav_bot = f_gi("i_nav_bot");
      zs_.e_nav_left = f_gi("i_nav_left");
      zs_.e_nav_right = f_gi("i_nav_right");
      f_cadd(zs_.e_nav_left, "c_keep_c_hide");
      f_cadd(zs_.e_nav_right, "c_keep_c_hide");
      f_hide(f_gi("i_nav_left"));
      f_hide(f_gi("i_nav_right"));
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_add_basic() {
    try {
      var s = "";
      s = "<d0 id=init_add_d0></d0>";
      f_before_s(zs_.e_head, s);
      s = "<d0 id=init_add_d1></d0>";
      f_after_s(zs_.e_head, s);
      s = "<d0 id=init_add_d2></d0>";
      f_prepend_s(zs_.e_body, s);
      s = "<d0 id=init_add_d3></d0>";
      f_append_s(zs_.e_body, s);
      s = "";
      s += "<zz br id=i_foot style='margin:2rem 0 0 0;'>";
      s += "<d>";
      s += "<d1>";
      s +=
        "bg:<input class=hbg s_w4 value=ffe>;co:<input class=hco s_w4 value=444><b1 onclick=f_theme(event) >◑</b1>";
      s += "</d1>";
      s += "   ";
      s += "<d1>";
      s +=
        "bg:<input class=hbg s_w4 value=2b2b2b>;co:<input class=hco s_w4 value=ccc><b1 onclick=f_theme(event) >◑</b1>";
      s += "</d1>";
      s += "</d>";
      s +=
        "<d><textarea><script>\n</script>\n<style>\n</style>\n<b>\n</b></textarea></d>";
      s +=
        "Ultimate markup for note: simple edit, powerful use. \nWhy no one fix markdown/html like this? New way is the only way! \n---东俊";
      s += "<input class=c_file_attr>";
      s += "<input type=file onchange=f_input_file_md(this) >";
      s += "</zz>";
      f_append_s(zs_.e_body, s);
      s = "";
      s += "<d class='c_head c_hide'>";
      s += "<d>";
      s += "<input class=c_file_attr>";
      s += "<input type=file onchange=f_input_file_md(this) >";
      s += "</d>";
      s += "</d>";
      f_prepend_s(zs_.e_body, s);
      s = "<style id=i_a_css0></style>";
      f_append_s(f_gi("init_add_d0"), s);
      s = "<style id=i_a_css1></style>";
      f_append_s(f_gi("init_add_d1"), s);
      s = "<style id=i_css></style>";
      f_append_s(f_gi("init_add_d1"), s);
      s = "";
      s += "<d1 id=i_log class=c_hide></d1>";
      f_append_s(f_gi("init_add_d2"), s);
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_theme(event) {
    var e = event.target;
    var co = $(e).parent().find(".hco")[0].value;
    var bg = $(e).parent().find(".hbg")[0].value;
    $("html")
      .css("background-color", "#" + bg)
      .css("color", "#" + co);
  }
  function f_css_var() {
    s = "\n";
    s += `
pre,
code{
font-family:DejaVu Sans Mono, Consolas, Monaco，monospace;
}
pre{
overflow: auto;
}
blockquote{
  border-left:4px solid teal;
  padding: 2px 2px 2px 32px;
}
textarea{
white-space:pre;
display:block;
overflow:auto;
/*body内部的内容最好用相对单位*/
/*texteare默认字体太小*/
/*font-size:initial;*/
font-size:inherit;
width:93%;
background-color:#333333;
color:lightgrey;
margin:4px;
padding:4px;
border-radius:4px;
border-style:solid;
border-width:1px;
border-color:#c24a;
}
button{
font-family: DejaVu Sans Mono, Consolas, Monaco，monospace;
margin: 4px;
padding: 4px 8px;
font-weight: bold;
}
/*默认h1 2em, h2 1.5em, h3 1.17em，比例不流畅，2em又太大了*/
h1{
font-size:1.35em;
}
h2{
font-size:1.25em;
}
h1,h2,h3,h4,h5,h6{
border-bottom:1px solid;
}
input{
margin:4px;
/*1rem却有点过大了但是如果不是1rem却又显示缺漏*/
/*height:0.8em;*/
/*给2rem已经够4个小写字符了*/
/*width还是交给短属性设置吧*/
/*width:2.2em;*/
/*默认字体是固定的？当总体字体增大时太小连smaller都不如*/
font-size:smaller;
}
/*firefox的raido设置了0.8em会很多锯齿，没办法了，凑合吧*/
input[type=checkbox],
input[type=radio]{
height:0.8em;
width:0.8em;
}
/*input需要heigh和width都写了才生效*/
/*checkbox,raido margin padding之类的空间*/
/*过大和过小对齐方式很怪异*/
/*反正总体字体24px,和普通input的0.8rem时他们用0.6才是对齐的*/
/*但是如果总体字体设置到40px那么就会很小而且对齐普通字体又不对了，反而checkbox设置0.8em反而对齐了字体*/
/*坑firefox居然radio设置了0.8后就变难看了*/
/*checkbox对齐很奇怪，框下沿与字体下沿对齐。但是字体下沿还有突出部位。*/
/*zoom 150%这样也可以放大但是这如果没有设置heigh,width那么默认就是很小不与font-size互联的*/

iframe{
width:95%;
/*因为高度用来给padding点击了还是不要100%否则溢出或overflow*/
height:95%;
resize:auto;
}

/*------------*/
/*坑爹的windows上中英等宽的只有宋体楷体黑体*/
html{
font-family:simhei,simsun,kaiti; 
font-family:dej,DejaVu Sans Mono, Consolas, Monaco,monospace; 
white-space: pre-wrap;
/*[!]over防止某些奇怪元素突出宽度导致手机缩放异常*/
overflow-x:auto;
word-break:break-all;
/*line-height:1.6rem;*/
} 
text{
line-height:1.6rem;
}
body{
/*padding:0;*/
/*[!]左右2侧pad一个字宽度以预留空位给2侧按钮区域*/
margin:6vh 8px;
overflow-x:auto;
}
a{
text-decoration: none;
}
img,video
{
width:100%;
/*max-width: 100%;*/
}

/*------------------------*/
/*textarea 设置100%，当出现overflow-y的滚动条，滚动条不包含在width中，所以会突出，而滚动条宽度是不随父级越小越小的*/
/*但是除了textarea,其它的都是把滚动条包含了的，服了，用js有点麻烦，刚好其线性关系比较简单，只好用media*/
@media(min-width:100px){
textarea{
width:91%;
}
}
@media(min-width:200px){
textarea{
width:93%;
}
}
@media(min-width:400px){
textarea{
width:95%;
}
}
@media(min-width:600px){
textarea{
width:96%;
}
}

@media(min-width:800px){
textarea{
width:97%;
}
}
@media(min-width:1000px){
textarea{
width:98%;
}
}
@media(min-width:1200px){
textarea{
width:98%;
}
}

`;
    zs_.s_css_tag = s;
    s = `
/*h:标题*/
/*<z>*/
/*hh是不记入目录的纯折叠标题块功能，类似zz*/
/*当然h1x,h2x也是不计入的*/
h,h0x,hh{
display:block;
color:darkorange;
}
h1x{
display:inline-block;
}

h,h0x,h1x,h2x,hh{
font-weight: bold;
cursor:pointer;
border-bottom:1px solid;
}

h,h0x,hh{
padding: 2px;
margin:20px 0 8px 0px;
white-space: pre-wrap;
font-size:1.2rem;
}
h2x{
font-size: 0.6rem;
vertical-align: super;
}
/*</z>*/

/*z:折叠*/
/*<z>*/
z,z0{
display:block;
}
z1{
display:inline-block;
}
zp{
display:block;
white-space:pre;
overflow:auto;
}
/*z被自动加标题，所以还是弄一个zz隐藏吧*/
/*但是不能直接在这里设置display:none,还是要用c_hide,否则无法统一通过c_hide开关显示隐藏*/
/*所以css不能用了，用js自动添加*/
zz{
/*display:none;*/
}

/*</z>*/

/*d:div*/
/*<z>*/
d,d0,dc,dc0,dp,dpc{
display:block;
}
d1,dc1{
display:inline-block;
}
dc,dc1,dc2{
border-width: 1px;
border-style: solid;
border-radius: 4px;
}
dpc,dp{
white-space:pre;
overflow:auto;
}
dc,dc0,dpc{
margin: 2px;
padding:2px;
border-radius: 4px;
border-width: 1px;
border-style: solid;
}
/*</z>*/

/*q0:blockquote*/
/*坑爹的q用于短quote,而且效果只有自加双引号*/
q0{
  display:block;
  margin-left:2em;
  border-left:4px solid teal;
  padding: 2px 2px 2px 32px;
}

/*v:片段*/
/*<z>*/
vv{
display:none;
}
/*</z>*/

/*r:url*/
/*<z>*/
r,r0{
display:block;    
padding:1px;
}
r1{
display:inline-block;    
}
r,r0,r1,r2{
/*有些svg是透明的默认给白色底,需要是svg，jpg才如此*/
/*background-color:#ddd;*/
cursor:pointer;
/*靠这个fit来让调节w+时不那么突变,而且现在子元素100%,如果不设置就会总是缩放到100%，坑在神奇浏览器居然视频会出现及其小的问题*/
/*但是要配合子元素为100%，而且自己设置max 100%否则不出现overflow*/
width:fit-content;
max-width:100%;
/*height:fit-content;*/
/*给点颜色？边框就算了，iframe那种已经独立设置了*/
color:teal;
}
r,r0{
overflow:auto;
white-space:pre;
}
r1{
/*margin: 2px;*/
/*padding: 2px;*/
}

/*</z>*/

/*t:table*/
/*<z>*/
/*[✘]算了t设置默认inline-block*/
/*[!]不可以设置inline-block，否则表格大于屏幕产生问题*/
t{
display:block;    
white-space:pre;
overflow:auto;
/*设置width:fit,就必须搭配max-width*/
width:fit-content;
max-width:calc(100% - 18px);
}

t{
margin: 4px;
padding: 4px;
border-radius: 4px;
border-width: 1px;
border-style: solid;
}
/*</z>*/

/*c:code*/
/*<z>*/
c,c0,c1,c2{
cursor:pointer;
}
c,c0{
display:block;    
}
c1{
display:inline-block;    
}
/*cc才是显示，c只是包装,所以c不用默认pre了，除非手动加*/
/*为了能点击显示隐藏高亮只好把c的padding-top弄大点*/
c,
c0,
c1,
c2{
margin: 2px;
padding:16px 4px;
border-radius: 4px;
border-width: 1px;
border-style: solid;
}
.c_ctext{
border-style: unset;
}

cbak0{
display:block;
}
cbak1{
display:inline-block;
}
cbak0,
cbak1,
cbak2{
border:1px solid grey;
border-radius:4px;
margin:4px;
padding:4px;
}
/*还是需要这个cc,用于展示代码，但是高亮其中关键而不是按照语法高亮，其实有时候语法高亮根本是分散注意力，如果vim能对注释里面<hl>xxx<hl>标记，到下方段落搜索单词高亮而不是语法高亮就更好了*/
cc,cc0{
display:block;
white-space:pre;
overflow:auto;
margin:4px;
padding:4px;
border-radius:4px;
border-style:solid;
border-width:1px;
}

cc1{
display:inline-block;
margin:2px;
padding:2px;
border-radius:2px;
border-style:solid;
border-width:1px;
}
cc2{
display:inline;
/*cc2padding只会导致折行时重叠边框。而且越折叠多行越重叠，至少设置line-height:1.3em 才能在折叠3行时不重叠*/
}

cc,cc0,cc1,cc2{
/*这2个颜色从monokai减少刺眼，减少复杂，而改todo设为变量*/
/*tofix：cc2折行时锯齿突出很难看*/
background-color:#333;
color: #9b2;
}

k{
display:none;
}


/*</z>*/

/*hl:hljs pack*/
/*<z>*/
/*因为发现hljs只是好看，其实笔记更需要对关键信息点高亮，而不是语法高亮，编辑时才需要语法高亮，或人肉查看debug语法错误也许要语法高亮，但是如果查阅学习就应该用关键点信息高亮，可惜现在还没有这样的编辑器啊。不过有时候为了演示好看，还是额外一个标签特意调用hljs，等于以前的c，同时可以包围纯text和带html的*/
hl,hl0,hl1,hl2{
cursor:pointer;
}
hl,hl0{
display:block;    
}
hl1{
display:inline-block;    
}
hl,hl0{
overflow:auto;
white-space:pre;
}
hl,hl0,hl1,hl2{
margin:4px;
padding:4px;
border-radius:4px;
border-style:solid;
border-width:1px;

background-color:#333;
color: #9b2;
}
/*</z>*/

/*l:latex*/
/*<z>*/
l,l0,l1,l2{
cursor:pointer;
}
l,l0{
display:block;    
padding:1px;
}
l1{
display:inline-block;    
}

l,l0{
white-space:pre;
overflow:auto;
margin: 4px;
padding: 4px;
border-radius: 4px;
border-width: 1px;
border-style: solid;
}

l1{
margin: 4px;
padding: 4px;

border-width: 1px;
border-style: solid;
border-radius: 4px;
}

l2{
border-radius: 4px;
}

/*fix 突出窗口的mathml部分none即可*/
.katex-mathml{
display:none;
}
/*</z>*/

/*b:button*/
/*<z>*/
/*本来可以复用普通分区d1,但是还是独立一个专门用于按钮的吧*/
/*再加bh，类似标题折叠下方，但是用的是按钮样式*/
b1,bh1{ 
display: inline-block; 
cursor:pointer;
font-weight: bold;
margin: 4px;
padding: 2px 8px;
border-radius:4px;
border-width:1px;
border-style:solid;
font-family:dej,DejaVu Sans Mono, Consolas, Monaco,monospace; 
}

/*</z>*/

/*v:snipet片段*/
/*<z>*/
v,v0{
display:block;
}
v1{
display:inline-block;
}
vv,vv1,vv2{
display:none;
}
/*</z>*/

/*or:order list列表*/
/*<z>*/
or,ur{
display:block;
margin:1px;
border-style:solid;
border-color:#08a5;
/*注意列表还是只左侧有线框即可*/
border-width:0 0 0 1px;
}
/*</z>*/


/*if:iframe*/
/*<z>*/
/*如果包含了iframe那么默认颜色和字体需要改回白底黑字，但是万一黑暗中突然来一个白底真的很伤眼睛*/
/*但是超链接却不能改，烦啊，还是独立一个if标签吧*/
/*而且iframe的页面经常变化还是做成textarea吧*/
/*onerror时改为textarea？*/
if{
display:block;
border:1px solid orangered;
/*弄点padding方便点击*/
padding:4px;
}
/*</z>*/

/*mer:mermaid*/
/*<z>*/
.c_mer,mer,mer0{
display:block;
white-space:pre;
overflow:auto;
margin:6px;
border-radius:6px;
text-align:center;
background-color:#555;
}

mer1{
display:inline-block;
white-space:pre-wrap;

border-radius:3px;
margin:3px;
background-color:#555;
}
/*</z>*/

/*a2:fix a*/
/*<z>*/
a2,a1{
color:teal; 
}
/*</z>*/

/*title显示用*/
/*<z>*/
ti{
display:block;
font-size:36px;
text-align:center;
margin:16px 0;
font-weight:bolder;
border-radius:5px;
border:1px solid #08a5;
}
/*</z>*/

/*md:markdown*/
/*<z>*/
md{
display:block;
white-space:pre-wrap;
overflow:auto;
border:1px solid teal;
padding:8px;
margin:8px 4px;
}
/*</z>*/

/*mind:markmap,mindmap*/
/*<z>*/
mind,minds{
display:block;
border-radius:4px;
border:1px solid;
}
/*</z>*/

/*abc:乐谱*/
abc{
display:block;
white-space:pre;
overflow:auto;
border-radius:4px;
border:1px solid;
}

`;
    zs_.s_css_zsnote_tag = s;
    s = `
.c_pre{
white-space:pre !important;  
overflow    : auto !important;
}
.c_pre_wrap{
white-space:pre-wrap !important;
}
.c_normal{
white-space:normal !important;
}
.c_block{
display: block !important;
}

.c_ib{
display: inline-block !important;
}
.c_inline{
display: inline !important;
overflow    : unset !important;
margin      : unset !important;
padding     : unset !important;
white-space : unset !important;
}
.c_keep_c_hide{
display: none !important;
}
.c_hide:not(.c_no_c_hide) {
display: none !important;
}

.bold{
font-weight:bold;
}
.mark_text{
color:orangered;
}
`;
    zs_.s_css_zsnote_class = s;
    s = `
[s_w]{
white-space:pre-wrap;
}
[s_n]{
white-space:normal;
}
[s_p]{
white-space:pre;
overflow:auto;
}
[s_b]{
border-style:solid;
border-width:1px;
}
[s_c]{
color:orange;
font-weight:bold;
}

[s_bl]{
  display:block;
}
`;
    zs_.s_css_zsnote_attr_single = s;
    s = `
/*input通常太长了，一般4rem已经够了；*/
[s_h1]{
height:1rem;
}
[s_h2]{
height:2rem;
}
[s_h3]{
height:3rem;
}
[s_h4]{
height:4rem;
}
[s_h5]{
height:5rem;
}
[s_h6]{
height:6rem;
}
[s_h7]{
height:7rem;
}
[s_h8]{
height:8rem;
}
[s_h9]{
height:9rem;
}
[s_h10]{
height:10rem;
}
[s_h20]{
height:20rem;
}
[s_h50]{
height:50rem;
}
[s_w1]{
width:1rem;
}
[s_w2]{
width:2rem;
}
[s_w3]{
width:3rem;
}
[s_w4]{
width:4rem;
}
[s_w5]{
width:5rem;
}
[s_w6]{
width:6rem;
}
[s_w7]{
width:7rem;
}
[s_w8]{
width:8rem;
}
[s_w9]{
width:9rem;
}
[s_w10]{
width:10rem;
}
[s_w20]{
width:20rem;
}
[s_w50]{
width:50rem;
}
[s_m16r]{
margin-left:16px;
}
[s_m16l]{
margin-left:16px;
}
[s_m0]{
margin:0px;
}
[s_m2]{
margin:2px;
}
[s_m2l]{
margin-left:2px;
}
[s_m2r]{
margin-right:2px;
}
[s_m2t]{
margin-top:2px;
}
[s_m2b]{
margin-bottom:2px;
}
[s_m8]{
margin:8px;
}
[s_p8]{
padding:8px;
}
[s_p16]{
padding:16px;
}
[s_p_t16]{
padding-top:16px;
}
[s_p_b16]{
padding-bottom:16px;
}
/*主要是给那些占满了空间又没点击捕获的，如手机端video，son包裹，16都不够大*/
[s_p_b24]{
padding-bottom:24px;
}
/*border-radius*/
[s_br]{
border-radius:4px;
border-style:solid;
border-width:1px;
}
[s_b_red]{
border-color:orangered;
border-style:solid;
border-width:1px;
}
[s_b_gra]{
border-color:gray;
border-style:solid;
border-width:1px;
}
[s_b_blu]{
border-color:teal;
border-style:solid;
border-width:1px;
}
[s_b_gre]{
border-color:#a6e22e;
border-style:solid;
border-width:1px;
}
[s_b_ora]{
border-color:orange;
border-style:solid;
border-width:1px;
}
[s_b_bla]{
border-color:#222;
border-style:solid;
border-width:1px;
}
[s_c_red]{
color:orangered;
}
[s_c_gra]{
color:gray;
}
[s_c_blu]{
color:#08a8;
}
[s_c_gre]{
color:#a6e22e;
}
[s_c_ora]{
color:orange;
}
[s_c_bla]{
color:#222;
}
[s_fs_12]{
  font-size:12px;
}
[s_fs_8]{
  font-size:8px;
}
[s_fs_ler]{
  font-size:larger;
}
[s_fs_ser]{
  font-size:smaller;
}
[s_fs_16]{
  font-size:16px;
}
[s_ba_red]{
background-color:orangered;
}
[s_ba_gra]{
background-color:#ddd;
}
[s_ba_gra1]{
background-color:#aaa;
}
[s_ba_gra2]{
background-color:#777;
}
[s_ba_whi]{
background-color:white;
}
[s_ba_blu]{
background-color:teal;
}
[s_ba_gre]{
background-color:#a6e22e;
}
[s_ba_ora]{
background-color:orange;
}
[s_ba_bla]{
background-color:#222;
}
[s_ba_yel]{
background-color:rgb(233, 216, 33); 
}
`;
    zs_.s_css_zsnote_attr_num = s;
    s = `
[s_dib]{
display:inline-block;
}
[s_db]{
display:block;
}
[s_di]{
display:inline;
}

[s_oa]{
overflow:auto;
}

[s_wn]{
withe-space:normal;
}
[s_wpw]{
white-space:pre-wrap;
}
[s_wp]{
white-space:pre;
overflow:auto;
}

`;
    zs_.s_css_zsnote_attr_name = s;
    s = `
/*code highlihgt，用于代码展示但是需要对其中关键点标记，所以不能按语法高亮，另外有一样的标签*/
[s_cc]{
display:block;
white-space:pre;
overflow:auto;
margin:4px;
padding:4px;
border-radius:4px;
border-style:solid;
border-width:1px;
border-color:darkgreen;
color:darkgreen;
background-color:#111;
box-shadow:1px 3px grey;
}
[s_cc1]{
display:inline-block;
margin:2px;
padding:2px;
border-radius:2px;
border-style:solid;
border-width:1px;
border-color:darkgreen;
color:darkgreen;
background-color:#111;
box-shadow:1px 3px grey;
}
[s_cc2]{
display:inline;
margin:2px;
padding:2px;
border-radius:2px;
border-style:solid;
border-width:1px;
border-color:darkgreen;
color:darkgreen;
background-color:#111;
}
/*border margin padding,主要用于demo的提示变化*/
/*加了这个后mind的转换中katex部分在手机模式chorme内核显示不全*/
[s_chb]{
margin:4px;
padding:4px;
border-radius:4px;
border-style:solid;
border-width:1px;
border-color:grey;
}
`;
    zs_.s_css_zsnote_attr_combine = s;
    s = `
/*隐藏滚动条,仅webkit，还是加上用hidden,然后hover再auto吧*/
/*仅仅对top,bot导航即可，其它就算了*/
/*[?]其它地方都能用overflow:overlay简单隐藏滚动条为什么这个不行*/
#i_nav_top::-webkit-scrollbar {
width:1px;
height:1px;
}

#i_nav_top{
position:fixed;
top:0;
width:100%;

z-index:7;
/*想隐藏删除空白按钮可以通过overflow+ 占位元素width 99%实现*/
/*但是如果设置了display:flex则不行*/
white-space:pre;
overflow:auto;
/*这种希望固定在屏幕上不随整体字体变化而变化的，用px，但推荐直接用vh，方便计算后续其它元素高度也能避开这个nav_top*/
/*其实更需要的是和设备大小相关的vw,vh,现在这个是窗口大小，在pc上经常排列变化，vw更是频繁所以尽量不要用vw设置字体大小*/
/*3vh有点小但4vh又大了很多，1vh在14寸电脑上8px*/
/*尽量用vh因为pc上vw经常变化*/
/*算了还是使用px更安全*/
/*font-size:3.3vh;*/
font-size:22px;
/*为了防止被line-height修改这里也固定*/
line-height:1em;
display:flex;

}
#i_nav_top{
background-color:#18a;
color:#bbb;
box-shadow:0 0 5px 1px #222;
}
#i_nav_top b1,bh1{
border-color:#079;
box-shadow:0 1px 2px #2225 ;
margin:auto 4px ; 
}
/*第一个logo的b1左侧不mar那么多*/
#i_nav_top bh1:nth-child(1){
margin:2px 16px 2px 2px; 
}
#i_nav_left{
position:fixed;
z-index:7;
opacity:0.8;
/*[?]不知为何0却又边界且挺大的和对面的right相反*/
left:-3px;
width:1px;
line-height:1em;

top:60px;
font-size:16px;

/*top:8vh;*/
/*其实zhewidth默认是100%所以为了不覆盖主内容尽量小即可可以比实际小*/
/*font-size:2.8vh;*/
}
#i_nav_right{
position:fixed;
z-index:7;
opacity:0.8;
width:1px;
line-height:1em;

right:15px;
top:60px;
width:20px;
font-size:16px;

/*[?]不知为何直接3vh不行要多0.8vh*/
/*这个right不会是以中线为基准的吧*/
/*right:5vh;*/
/*top:8vh;*/
/*其实zhewidth默认是100%所以为了不覆盖主内容尽量小即可可以比实际小*/
/*也影响right,反正尽量小点好*/
/*font-size:3vh;*/
}


/*其实都应该做成fixed的目录和搜索，这样不用在顶部弄个奇怪的空白区域。在顶部的目录只是打印用的，那也不能用overflow了，基本要大改，但是纸质化，这与我要电子化笔记相悖，最多是及其罕见的时候才需要，特意弄个print_css字符串那时候加载就好了。
* 自己使用只是3种状态，0宽度=内容，适应复杂结果查看。1：宽度=30vw,不影响内容查看；2：宽度=30vw,同时把body 的marin-right:32vw，不过在手机上这样不如1模式，因为宽度实在太少了，除非fixed为top+height:30vh;
* 不过对zsnote常驻侧边目录没那么重要，因为我每个标题都是折叠的这种和那些文档完全依赖目录区域来索引是不能比的。
* 所以目前没时间就暂时不改进了todo
* */

/*其实单单吧它变成fixed有点不好，就是会导致滚动条变化*/
/*但是如果用复制又会导致id冲突*/
/*纯粹复制结果又导致操作不方便*/
/*js复杂操作勉强可以但是远比现在弄个class开关复杂*/
/*只能勉强这样了*/
/*max-height而不是直接指定height则可以临时fixed隐藏*/
/*width需要根据屏幕大小设置，手机至少40%,PC则25%*/
.c_fixed{
position:fixed;
/*目前nav_top固定了48px,之后改3vh,这样更好计算高度*/
top:60px;
/*top:8vh;*/
/*目前nav_right固定了36px*/
right:40px;
/*right:6vh;*/
/*目前目录高度应该和屏幕高度高度相关*/
/*不指定height而是max*/
max-height:85vh;
overflow:auto;
/*background-color:#222d;*/
z-index:9;
border:1px solid orange;
}

/*目前希望屏幕大的时候宽度更大比例点，小时小点，用@media但非常繁琐还是直接固定%或vw算了*/
/*虽然设置max-widhth可以限制宽度，width有max但是margin没有吧*/
/*默认设置是参考而已*/
/*其实屏幕越宽这margin-right40vw，和width比例就应该越小，但是这样计算会难很多*/
/*@media其实很不方便用于计算其它fixed的大小,*/
/*手机一般width 300px左右*/
/*这种带id的选择真的除了继续使用类似的或者用inline否则没法做*/
/*step300px做一个变化吧太细不好做*/
/*草这css的机制真的不适合做动态变化的，居然直接计算加减都不能在Style内部指定。算了我直接用js setInterval 代替@media*/
/*我服了这overflow滚动条居然不算入width那里，那为什么不隐藏。。。*/
/*原来设置overlay即可*/

/*默认的不带media都是优先设配最小屏幕设备*/



`;
    zs_.s_css_zsnote_temp = s;
    s = `
html{
/*字体模糊边缘*/
text-shadow:0.5px 0 #0008;
/*老了默认字体大点反正已经做了减少按钮*/
font-size:20px;
}
/*monokai*/
算了还是别设置pre颜色，有时候仅仅是想用pre的保持不被编辑器排版删缩进而已
/*pre,*/
code{
background-color:#373832;
color: #a6e22e;
}
/*blue*/
a{
color:#0388a6;
}
b{
color: darkorange;
}

/*------------------------*/
h,h0x,h1x,h2x,hh{
border-bottom: 1px solid #08a4;
}

hljs,
b1{
border-color:#08a8;
}

c,c0,c1,c2{
border-color: #e849;
}

cc,cc0,cc1,cc2{
border-color: #4d48;
}
r,r0,r1,r2,
r,r0,r1,r2,
l,l0,l1,l2,
mer,mer0,mer1,mer2,
t,t0,t1,t2,
if,if0,if1,if2
{
border-color: #08a8;
}

c,l,t,m{
box-shadow:0 1px 4px #1115;
}

.c_mark#i_nav_top,
.c_mark {
box-shadow:0px 0px 0.1rem 0.1rem  #d24;
border-color:#d42;
}

.c_hide_n{
border-bottom: 1px solid #e449;
}
/*按钮用标题的样式不好看*/
.c_hide_n_but{
/*算了按钮的样式和具体位置高度相关，就不提示了*/
/*box-shadow:1px 2px #d245;*/
}

table[a_tb="t1"] {
border-collapse: collapse;
}
table[a_tb="t1"] th {
padding: 4px;
vertical-align: top;
text-align: left;
border-width: 1px;
border-style:solid;
}
table[a_tb="t1"] td {
padding: 4px;
border-width: 1px;
border-style:solid;
}
.c_keep{
background-color:#f07178e0;
}
`;
    zs_.s_css_zsnote_theme_basic = s;
    s = `
/*浅色主题*/
/*<z>*/
html.light{
background-color:#ffe;
color: #222;
}

/*<z>*/
table[a_tb="t1"] th {
color:#ebecf0;
background-color: grey;
border-color:lightgrey;
}
table[a_tb="t1"] tr:nth-child(2n + 1) {
color:darkblue;
background-color: #eadec9;
}
table[a_tb="t1"] tr:nth-child(2n) {
color:darkblue;
background-color:#e8e4dc;
}
table[a_tb="t1"] td {
border: 1px solid lightgrey;
}
/*</z>*/

/*</z>*/
`;
    zs_.s_css_zsnote_theme_light = s;
    s = `
/*深色主题*/
/*现在基本只用深色*/
html{
background-color:#2b2b2b;
color: #ccc;
/*background-color:#ffe;*/
/*color: #444;*/
}


table[a_tb="t1"] tr:nth-child(2n)
{
background-color: #3a3a3a;
border-color:#555;
color:#bbb;
}
table[a_tb="t1"] tr:nth-child(2n+1)
{
background-color: #444;
border-color:#555;
color:#bbb;
}
table[a_tb="t1"] th{
background-color: #2b2b2b;
border-color:#555;
color:#bbb;
}
table[a_tb="t1"] td{
border-color:#555;
color:#bbb;
}

`;
    zs_.s_css_zsnote_theme_dark = s;
    s = `
/* highligh.js monokai dark */
hljs {
background-color: #2f2f2f;
color: lightgrey;
margin:2px 0;
padding:2px 0;
border-radius: 5px;
/*在pre中使用时要设置width:fit; 其它时候去掉*/
/*width:fit-content;*/
/*ib时去掉overflow，用在inline时还要去掉shadow,white-space*/
white-space:pre;
overflow:auto;
display:block;
border-style:solid;
border-width:1px;
}
.hljs-keyword,
.hljs-literal,
.hljs-name,
.hljs-selector-tag,
.hljs-strong,
.hljs-tag {
/*color: #f92672;*/
color: #c24;
}
.hljs-code {
color: #66d9ef;
}
.hljs-class .hljs-title {
color: #fff;
}
.hljs-attribute,
.hljs-link,
.hljs-regexp,
.hljs-symbol {
color: #bf79db;
}
.hljs-addition,
.hljs-built_in,
.hljs-builtin-name,
.hljs-bullet,
.hljs-emphasis,
.hljs-section,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-string,
.hljs-subst,
.hljs-template-tag,
.hljs-template-variable,
.hljs-title,
.hljs-type,
.hljs-variable {
/*color: #a6e22e;*/
color: #9b2;
}
.hljs-comment,
.hljs-deletion,
.hljs-meta,
.hljs-quote {
color: #75715e;
}
.hljs-doctag,
.hljs-section,
.hljs-selector-id,
.hljs-selector-tag,
.hljs-title {
color: orange;
}
`;
    zs_.s_css_hljs = s;
    s = `
@keyframes k_demo_wmm00 {
0% { width: 100%; }
100% { width: 0%; }
}
.c_demo_wmm00{
animation: k_demo_wmm00 5s infinite;
}


@keyframes k_demo_wmm30 {
0% { width: 100%; }
100% { width: 30%; }
}
.c_demo_wmm30{
animation: k_demo_wmm30 5s infinite;
}


@keyframes k_demo_wmm50 {
0% { width: 100%; }
100% { width: 50%; }
}
.c_demo_wmm50{
animation: k_demo_wmm50 5s infinite;
}


@keyframes k_demo_wmm80 {
0% { width: 100%; }
100% { width: 80%; }
}
.c_demo_wmm80{
animation: k_demo_wmm80 5s infinite;
}
`;
    zs_.s_css_animation = s;
  }
  function f_css_zsnote() {
    try {
      $("zz").addClass("c_hide");
      s = "";
      s += zs_.s_css_tag;
      s += zs_.s_css_hljs;
      s += zs_.s_css_zsnote_tag;
      s += zs_.s_css_zsnote_class;
      s += zs_.s_css_zsnote_attr_single;
      s += zs_.s_css_zsnote_attr_combine;
      s += zs_.s_css_zsnote_attr_name;
      s += zs_.s_css_zsnote_attr_num;
      s += zs_.s_css_zsnote_theme_basic;
      s += zs_.s_css_zsnote_theme_dark;
      s += zs_.s_css_zsnote_temp;
      s += zs_.s_css_animation;
      f_append_s(f_gi("i_css"), s);
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_y(x, a, b) {
    return a * x + b;
  }
  function f_yaxb_ab(x1, y1, x2, y2) {
    var a, b;
    a = (y1 - y2) / (x1 - x2);
    b = y1 - a * x1;
    return [a, b];
  }
  function f_yaxb_y(x1, y1, x2, y2, x) {
    var a, b;
    a = (y1 - y2) / (x1 - x2);
    b = y1 - a * x1;
    return a * x + b;
  }
  function f_yaxb_f_y(x1, y1, x2, y2) {
    var a, b;
    a = (y1 - y2) / (x1 - x2);
    b = y1 - a * x1;
    var f_y = function (x) {
      return a * x + b;
    };
    return f_y;
  }
  function f_fuzz(n_old, n_new, zone) {
    var abs = n_new - n_old;
    if (abs < 0) {
      abs = abs * -1;
    }
    if (abs > zone) {
      return n_new;
    } else {
      return n_old;
    }
  }
  function f_media_set() {
    var f_cha_width = f_yaxb_f_y(1100, 300, 360, 120);
    var x = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    var y1 = $(".c_fixed").css("width");
    if (y1) {
      var y = f_cha_width(x);
      $(".c_fixed").css("width", y);
      $(".c_fixed").css("max-height", h - 90);
      $("body.c_fixed_lg")
        .css("margin-right", y + 46)
        .css("margin-left", 36);
    }
    var y3 = $("body.c_fixed_lg").css("margin-right");
    if (!y1 || !y3) {
      $("body").attr("style", "");
    }
    var a = f_q("iframe");
    for (var i = 0; i < a.length; i++) {}
  }
  function f_media_init() {
    setInterval(f_media_set, 500);
  }
  function f_chapter_init(ele_rh, str_init) {
    try {
      if (typeof g_root != "undefined") {
        ele_rh = f_prev(g_root);
      } else {
        ele_rh = f_prev(document.body);
        zs_.e_cli0_h = f_prev(zs_.e_body);
      }
      if (str_init === undefined) {
        str_init = "";
      }
      if (!f_ga(ele_rh, "a_chap")) {
        f_sa(ele_rh, "a_chap", "1");
        var arr_ele = $(ele_rh).next().children("h");
        if (arr_ele) {
          for (var i = 0, j = 0; i < arr_ele.length; i++) {
            f_sa(arr_ele[i], "a_chap", str_init + String(j++) + ".");
            f_num(arr_ele[i]);
          }
        } else {
        }
        var arr_ele = $(ele_rh).next().find("h");
        var str_t1 = "";
        for (var i = 0; i < arr_ele.length; i++) {
          var e = arr_ele[i];
          var str_t = e.innerHTML;
          str_t = str_t.replace(/ /g, "_");
          str_t = str_t.replace(/'/g, "_");
          str_t = str_t.replace(/\./g, "_");
          str_t = str_t.replace(/(\[\!\])/g, "<b>$1</b>");
          str_t = "<d2 s_c_blu>" + f_ga(e, "a_chap") + "</d2>" + str_t;
          e.innerHTML = str_t;
          var s_dot = "";
          var a_dot = str_t.match(/\./g);
          if (!!a_dot) {
            if (a_dot.length > 1) {
              s_dot = " ".repeat((a_dot.length - 1) * 2);
            }
          }
          s_dot = "<d2>" + s_dot + "</d2>";
          if (s_dot === "<d2></d2>") {
            str_t1 +=
              "<d0><a2 a_chap_list=1 class=mark_text href='#" +
              str_t +
              "'>" +
              s_dot +
              str_t +
              "</a2></d0>";
          } else {
            if (a_dot.length < 3) {
              str_t1 +=
                "<d0><a2 a_chap_list=1 href='#" +
                str_t +
                "'>" +
                s_dot +
                str_t +
                "</a2></d0>";
            } else {
              str_t1 +=
                "<d0><a2 a_chap_list=1 class=c_hide href='#" +
                str_t +
                "'>" +
                s_dot +
                str_t +
                "</a2></d0>";
            }
          }
          f_sa(e, "id", str_t);
        }
        var s = "";
        s += "<d0 b b_red id=i_chapter class=c_hide style='margin:8px 0;'>";
        s += "<d0 id='i_chapter_fixedpack'>";
        s += "<h0x id=i_chapter_h >chapter</h0x>";
        s += "<d0 id='i_cata' style='white-space:pre'>";
        s += "<d0 style='white-space:pre;overflow:auto;'>";
        s += "<b1 class=c_b_chap_level a_chap_level=1>.  </b1>";
        s += "<b1 class=c_b_chap_level a_chap_level=2>.. </b1>";
        s += "<b1 class=c_b_chap_level a_chap_level=3>...</b1>";
        s += "<b1 class=c_b_chap_level a_chap_level=100>all</b1>";
        s += "</d0>";
        s += "<d0> ";
        s += "</d0>";
        s += "<d0 style='white-space:pre;max-height:70vh;overflow:auto;'>";
        s += str_t1;
        s += "</d0>";
        s += "</d0>";
        s += "</d0>";
        s += "</d0>";
        f_append_s(f_gi("init_add_d2"), s);
        s = "";
        s += "<d0 b id=i_search class=c_hide '>";
        s += "<d0 id='i_search_fixedpack'>";
        s += "<h0x>search</h0x>";
        s += "<d0>";
        s += "<d0 style='white-space:pre;overflow:auto;'>";
        s += "<input s_w6 id=i_search_in>";
        s += "<d1>";
        s += "<b1 id=i_search_all>all </b1>";
        s += "<b1 id=i_search_cha>head</b1>";
        s += "<b1 class=c_search_prev>‹</b1>";
        s += "<b1 class=c_search_next>›</b1>";
        s += "</d1>";
        s += "</d0>";
        s += "<d0> </d0>";
        s +=
          "<d0 id=i_search_res style='max-height:22rem;overflow:auto;'></d0>";
        s += "</d0>";
        s += "</d0>";
        s += "</d0>";
        f_append_s(f_gi("init_add_d2"), s);
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_num(e) {
    try {
      var i = 0;
      var ele_next = e.nextElementSibling;
      var arr_ele = $(ele_next).children("h");
      if (arr_ele.length) {
        for (i = 0; i < arr_ele.length; i++) {
          var s = f_ga(e, "a_chap") + String(i) + ".";
          f_sa(arr_ele[i], "a_chap", s);
          f_num(arr_ele[i]);
        }
      } else {
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_del_space_init() {
    try {
      var a = f_q("pre");
      for (var i = 0; i < a.length; i++) {
        $(a[i]).find("*").addClass("c_no_del_space");
      }
      var arr_ele = f_q("body,z,z0,d,d0,dc,dc0,dp,hljs,zz,cc");
      for (var i = 0; i < arr_ele.length; i++) {
        var e = arr_ele[i];
        if (!f_ccon(e, "c_no_del_space")) {
          f_del_space_ele(e);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_del_space_ele(e) {
    for (var j = 0; j < e.childNodes.length; j++) {
      var ele_c = e.childNodes[j];
      if (ele_c.nodeName === "#text") {
        var str_t = ele_c.nodeValue;
        str_t = str_t.replace(/\t/g, " ");
        str_t = str_t.replace(/　/g, " ");
        if (!str_t.match(/\S/)) {
          if (j === 0 || j === e.childNodes.length - 1) {
            if (e.childNodes.length != 1) {
              str_t = "";
            }
          } else {
            if (
              e.childNodes[j - 1].nodeType != 1 ||
              e.childNodes[j + 1].nodeType != 1
            ) {
              str_t = "";
            }
            var s_name = " LINK SCRIPT STYLE ";
            var re = " " + e.childNodes[j - 1].nodeName + " ";
            var re2 = " " + e.childNodes[j + 1].nodeName + " ";
            if (s_name.match(re) || s_name.match(re2)) {
              str_t = "";
            }
            if (e.childNodes[j - 1].nodeType === 1) {
              if ($(e.childNodes[j - 1]).css("display") === "block") {
                str_t = str_t.replace(/^\n/, "");
              }
            }
            if (e.childNodes[j + 1].nodeType === 1) {
              if ($(e.childNodes[j + 1]).css("display") === "block") {
                str_t = str_t.replace(/\n$/, "");
              }
            }
          }
        } else {
          var arr_str_i = str_t.match(/\n */);
          if (arr_str_i) {
            var re = new RegExp(arr_str_i[0], "g");
            str_t = str_t.replace(re, "\n");
          }
          if (j === 0) {
            str_t = str_t.replace(/^\n*/, "");
          } else if (j === e.childNodes.length - 1) {
            str_t = str_t.replace(/\n*$/, "");
          } else {
            if (e.childNodes[j - 1].nodeType === 1) {
              if ($(e.childNodes[j - 1]).css("display") === "block") {
                str_t = str_t.replace(/^\n/, "");
              }
            }
            if (e.childNodes[j + 1].nodeType === 1) {
              if ($(e.childNodes[j + 1]).css("display") === "block") {
                str_t = str_t.replace(/\n$/, "");
              }
            }
          }
        }
        ele_c.nodeValue = str_t;
      }
    }
  }
  function f_del_space_str(str_t) {
    var arr_str_i = str_t.match(/\n */);
    if (arr_str_i) {
      var re = new RegExp(arr_str_i[0], "g");
      str_t = str_t.replace(re, "\n");
    }
    str_t = str_t.replace(/^\n*/, "");
    str_t = str_t.replace(/\n*$/, "");
    return str_t;
  }
  function f_v_init() {
    var a,
      s,
      e,
      n,
      o,
      i,
      j,
      k = 0;
    a = f_q("v,v0,v1,v2");
    for (i = 0; i < a.length; i++) {
      e = a[i];
      if (!f_ccon(e, "c_inited")) {
        s = e.innerHTML;
        f_cadd(e, "c_inited");
        if (!f_ga(e, "a_id")) {
          f_sa(e, "a_id", s);
        }
        var s_id = f_ga(e, "a_id");
        var e1 = f_gi(s_id);
        if (!!e1) {
          e.innerHTML = e1.innerHTML;
        } else {
          $(e).css("color", "red");
        }
      }
    }
  }
  function f_goto_init() {
    try {
      var a,
        s,
        e,
        i,
        j,
        k = 0;
      e = f_gt("goto")[0];
      if (e) {
        $(e).parents().prev().removeClass("c_hide_n");
        $(e).parents().removeClass("c_hide");
        f_jump_e(e);
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_zs_textarea() {
    var e = f_gt("textarea")[0];
    f_cadd(e, "c_hide");
    e.id = "i_textarea_origin";
    var e_new = f_create("div");
    e_new.id = "i_textarea_render";
    e_new.innerHTML = f_th(e.innerHTML);
    document.body.appendChild(e_new);
    g_root = e_new;
    f_hs2hs(e_new);
  }
  function f_ua_pc() {
    var str_t = navigator.userAgent.toLowerCase();
    var ipad = str_t.match(/ipad/i);
    var iphone = str_t.match(/iphone os/i);
    var android = str_t.match(/android/i);
    f_ua_firefox();
    if (!ipad && !iphone && !android) {
      return 1;
    } else {
      return 0;
    }
    f_ua_firefox();
  }
  function f_ua_firefox() {
    var str_t = navigator.userAgent.toLowerCase();
    if (str_t.match("firefox")) {
      return (zs_.e_reg = 0);
    } else {
      return (zs_.e_reg = 1);
    }
  }
  function f_childnodes_deep_replace_s(e) {
    for (var j = 0; j < e.childNodes.length; j++) {
      var ele_c = e.childNodes[j];
      if (ele_c.nodeType === 3) {
        ele_c.nodeValue = ele_c.nodeValue.replace(/(\s+)/g, "〈sp〉$1〈/sp〉");
      }
      if (ele_c.nodeType === 1) {
        f_childnodes_deep_replace_s(ele_c);
      }
    }
  }
  function f_r_init() {
    try {
      var a,
        s,
        e,
        i,
        j,
        k = 0;
      a = f_gt("img");
      for (i = 0; i < a.length; i++) {
        e = a[i];
        if (!f_ga(e, "alt")) {
          f_sa(e, "alt", f_ga(e, "src"));
        }
      }
      a = f_q("r,r0,r1,r2");
      for (i = 0; i < a.length; i++) {
        e = a[i];
        if (e.innerHTML === "") {
          if (f_ga(e, "src")) {
            e.innerHTML = f_ga(e, "src");
          }
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_split_clear(s, t) {
    var a = s.split(t);
    var a1 = [];
    for (var i = 0; i < a.length; i++) {
      if (!!a[i]) {
        a1.push(a[i]);
      }
    }
    return a1;
  }
  function f_r_conv() {
    try {
      var a,
        s,
        e,
        i,
        j,
        k = 0;
      a = f_q("r,r0,r1,r2");
      for (i = 0; i < a.length; i++) {
        var e = a[i];
        var a_en = e.innerHTML.split("\n");
        console.log("a_en=========", a_en);
        var a_en = f_split_clear(e.innerHTML, "\n");
        console.log("a_en=========", a_en);
        if (a_en.length > 1) {
          var s_tag_bak = e.tagName;
          var e_par = $(e).parent()[0];
          var e_rnew = f_create("d");
          var s_add_com = "";
          for (var j = 0; j < a_en.length; j++) {
            s_add_com += `<${s_tag_bak}>${a_en[j]}</${s_tag_bak}>`;
          }
          console.log("s_add_com-------", s_add_com);
          e_rnew.innerHTML = s_add_com;
          e_par.replaceChild(e_rnew, e);
        }
      }
      a = f_q("r,r0,r1,r2");
      for (i = 0; i < a.length; i++) {
        var e = a[i];
        if (!f_ccon(e, "c_lazy")) {
          if (!f_ccon(e, "c_conv")) {
            f_r_conv_e(e);
          }
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_r_conv_e(e) {
    if (!f_ccon(e, "c_conv")) {
      f_cadd(e, "c_conv");
      console.log("what----------", e.outerHTML);
      var str_t = e.innerHTML;
      var a_src = e.getAttribute("src");
      if (!!a_src) {
        var src = a_src;
      } else {
        var src = str_t;
      }
      var alt = e.getAttribute("alt");
      if (!alt) {
        if (!f_ha(e, "alt_all")) {
          var am = str_t.replace(/\/$/, "").match(/[^\/]*$/, "");
          if (am) {
            alt = am[0];
          } else {
            alt = str_t;
          }
        } else {
          alt = str_t;
        }
      }
      console.log("alt", alt);
      var zt = e.getAttribute("a_t");
      if (!zt) {
        if (f_ha(e, "if")) {
          zt = "if";
          src = src.replace(/!/, "");
        } else {
          if (src.match(/^!/g)) {
            zt = "if";
            src = src.replace(/!/, "");
          } else if (
            src.match(
              /\.(jpg|png|gif|svg|icon|jpeg|tif|jp2|j2k|bmp|tga|ppm|pcx)/
            )
          ) {
            zt = "pic";
            console.log("src====================", src);
          } else if (src.match(/\.(mp4|webm|flv|m4v|mkv|avi|mpeg)/)) {
            zt = "vid";
          } else if (src.match(/\.(mp3|ogg|flac)/)) {
            zt = "aud";
          } else if (src.match("^#")) {
            zt = "inpage";
          } else {
            zt = "link";
          }
        }
      }
      if (zt === "pic") {
        str_t =
          "<img s_ba_whi loading=lazy src='" +
          src +
          "' alt='" +
          alt +
          "'></img>";
        if (f_ga(e, "j")) {
          str_t = "<a href='" + f_ga(e, "j") + "'>" + str_t + "</a>";
        }
      } else if (zt === "if") {
        var ww = window.innerWidth - 130;
        var wh = (window.innerHeight * 2) / 3;
        str_t = `<dp><son s_p_b24 s_db s_b s_p style="width:${ww}px;height:${wh}px;"><iframe style='background-color:#eee;color:#111;' width=100% height=100% src='${src}'></iframe></son><dp> `;
      } else if (zt === "vid") {
        str_t =
          "<son s_p_b24 s_db s_b s_p style='width: 90%;'><video controls  preload='auto'><source src='" +
          src +
          "' >" +
          alt +
          "</video></son> ";
      } else if (zt === "aud") {
        str_t =
          "<audio preload='none'><source src='" +
          src +
          "' >" +
          alt +
          "</audio> ";
        str_t = `<b1 style='padding-left:18px;' class=c_b_play_audio1><b1 class=c_b_play_audio >♬</b1>${str_t}</b1>`;
      } else if (zt === "inpage") {
        str_t = "<a2 href='" + src + "'>" + alt + "</a2>";
      } else {
        str_t =
          "<a target='_blank' rel='noopener' href='" +
          src +
          "'>" +
          alt +
          "</a>";
      }
      e.innerHTML = str_t;
    }
  }
  function f_cli_r(e) {
    f_r_conv_e(e);
  }
  function f_t_conv() {
    try {
      var a,
        s,
        e,
        i,
        j,
        k = 0;
      a = f_gt("t");
      for (i = 0; i < a.length; i++) {
        e = a[i];
        if (!f_ccon(e, "c_conv")) {
          f_t_conv_e(e);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_t_conv_e(e) {
    var a,
      s,
      e,
      i,
      j,
      k = 0;
    if (!f_ccon(e, "c_conv")) {
      f_cadd(e, "c_conv");
      var str_t = e.innerHTML;
      var s_but = "";
      f_sa_default(e, "a_tb", "t1");
      f_sa_default(e, "a_th", "1");
      var s_html = "";
      str_t = str_t.replace(/^\s*/, "");
      str_t = str_t.replace(/\s*$/, "");
      str_t = str_t.replace(/\n\s*\n/g, "\n");
      if (str_t.match(/^\s*______/)) {
        f_sa(e, "t", "mul");
        str_t = str_t.replace(/______/, "");
        var a_row = str_t.split("______");
        str_t = "";
        for (var i = 0; i < a_row.length; i++) {
          var a_row_split = a_row[i].split("---");
          var s_tb_row = "<tr>";
          for (var j = 0; j < a_row_split.length; j++) {
            s_tb_row += "<td>" + a_row_split[j] + "</td>";
          }
          s_tb_row += "</tr>";
          str_t += s_tb_row;
        }
      } else if (str_t.match(/^\s*\^\^______/)) {
        f_sa(e, "t", "mul2");
        str_t = str_t.replace(/\^\^______/, "");
        var a_row = str_t.split("^^______");
        str_t = "";
        for (var i = 0; i < a_row.length; i++) {
          var a_row_split = a_row[i].split("^^---");
          var s_tb_row = "<tr>";
          for (var j = 0; j < a_row_split.length; j++) {
            s_tb_row += "<td>" + a_row_split[j] + "</td>";
          }
          s_tb_row += "</tr>";
          str_t += s_tb_row;
        }
      } else if (str_t.match(/^\s*\|/)) {
        f_sa(e, "t", "md");
        str_t = str_t.replace(/^ *\| /gm, "<tr><td>");
        str_t = str_t.replace(/ \| *$/gm, "</td></tr>");
        str_t = str_t.replace(/ \| /gm, "</td><td>");
        str_t = str_t.replace(/\\\|/gm, "|");
      } else if (str_t.match(/^\s*\^\^\|/)) {
        f_sa(e, "t", "md2");
        str_t = str_t.replace(/^ *\^\^\|/gm, "<tr><td>");
        str_t = str_t.replace(/\^\^\| *$/gm, "</td></tr>");
        str_t = str_t.replace(/\^\^\|/gm, "</td><td>");
      } else {
        f_sa(e, "t", "t3");
        str_t = str_t.replace(/^/gm, "<tr><td>");
        str_t = str_t.replace(/$/gm, "</td></tr>");
        if (str_t.match(/\^\^\|/)) {
          f_sa(e, "t", "t31");
          str_t = str_t.replace(/\^\^\|/gm, "</td><td>");
        } else if (str_t.match(/\t/)) {
          f_sa(e, "t", "t32");
          str_t = str_t.replace(/\t/gm, "</td><td>");
        } else if (str_t.match(/ | /)) {
          f_sa(e, "t", "t33");
          str_t = str_t.replace(/ \| /gm, "</td><td>");
        }
      }
      if (f_ga(e, "a_th") != 0) {
        var ath = str_t.match(/<tr>[\s\S]*?<\/tr>/);
        if (ath) {
          var th = ath[0];
          var th1 = th.replace(/<td>/g, "<th>");
          str_t = str_t.replace(th, th1);
        }
      }
      s_tb = "<dp><table>" + str_t + "</table></dp>";
      s_html = s_but + s_tb;
      e.innerHTML = s_html;
      $(e).find("table").attr("a_tb", f_ga(e, "a_tb"));
      $(e).find("table").css("white-space", "pre-wrap");
    }
    var td0 = $(e).find("table tr td:first-child");
    $(td0).css("min-width", "4em");
  }
  function f_cli_t(e) {
    if (!f_ccon(e, "c_cbak")) {
      f_t_conv_e(e);
    }
  }
  function f_l_cbak() {
    try {
      var a,
        e,
        s,
        i,
        j,
        k = 0;
      a = f_q("l,l0,l1,l2");
      for (i = 0; i < a.length; i++) {
        e = a[i];
        if (!f_ccon(e, "c_cbak")) {
          f_l_cbak_e(e);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_l_cbak_e(e) {
    try {
      var a,
        s,
        i,
        j,
        k = 0;
      if (!f_ccon(e, "c_cbak")) {
        s = "";
        if (e.tagName === "l" || e.tagName === "l0") {
          s += "<dp class='c_hide c_cbak'>";
          s += f_ht(e.outerHTML);
          s += "</dp>";
        } else {
          s += "<dc1 class='c_hide c_cbak'>";
          s += f_ht(e.outerHTML);
          s += "</dc1>";
        }
        f_after_s(e, s);
        f_cadd(e, "c_cbak");
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_l_conv() {
    try {
      var a,
        e,
        s,
        i,
        j,
        k = 0;
      a = f_q("l,l0,l1,l2");
      for (i = 0; i < a.length; i++) {
        e = a[i];
        if (!f_ccon(e, "c_conv")) {
          f_l_conv_e(e);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_l_conv_e(e) {
    var a,
      s,
      i,
      j,
      k = 0;
    if (f_ccon(e, "c_cbak")) {
      if (!f_ccon(e, "c_conv")) {
        f_cadd(e, "c_conv");
        str_text = e.innerHTML;
        if (!str_text.match(/\$/)) {
          if (e.tagName === "L" || e.tagName === "L0") {
            str_text = "$$" + str_text + "$$";
          } else {
            str_text = "$" + str_text + "$";
          }
        }
        e.innerHTML = str_text.replace(/\n/g, "");
      }
    }
  }
  function f_l_render() {
    try {
      zs_.s_sti_l_init = setInterval(function () {
        var a,
          e,
          s,
          i,
          j,
          k = 0;
        a = f_q("l,l0,l1,l2");
        for (i = 0; i < a.length; i++) {
          e = a[i];
          if (f_ccon(e, "c_cbak")) {
            if (f_ccon(e, "c_conv")) {
              if (!f_ccon(e, "c_render")) {
                f_l_render_e(e);
                return 0;
              }
            }
          }
        }
        zs_.t_l_inited = true;
        clearInterval(zs_.s_sti_l_init);
      }, 200);
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_l_render_e(e) {
    try {
      var a,
        s,
        i,
        j,
        k = 0;
      if (!f_ccon(e, "c_render")) {
        f_cadd(e, "c_render");
        renderMathInElement(e, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
          ],
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_cli_l(e) {
    try {
      var a,
        s,
        i,
        j,
        k = 0;
      if (!f_ccon(e, "c_render")) {
        f_l_cbak_e(e);
        f_l_conv_e(e);
        f_l_render_e(e);
      } else {
        f_toggle(f_next(e));
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_c_cbak() {
    try {
      var a,
        e,
        s,
        n,
        i,
        j,
        k = 0;
      a = f_q("c,c0,c1,c2");
      for (i = 0; i < a.length; i++) {
        e = a[i];
        if (!f_ccon(e, "c_cbak")) {
          f_c_cbak_e(e);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_c_cbak_e(e) {
    var a,
      e,
      s,
      n,
      i,
      j,
      k = 0;
    if (!f_ccon(e, "c_cbak")) {
      if (!$(e).find("*")[0]) {
        f_cadd(e, "c_ctext");
        if (f_w_in_s(e.tagName, "C C0")) {
          e.innerHTML = `<cc>${e.innerHTML}</cc>`;
        }
        if (f_w_in_s(e.tagName, "C1")) {
          e.innerHTML = `<cc1>${e.innerHTML}</cc1>`;
        }
        if (f_w_in_s(e.tagName, "C2")) {
          e.innerHTML = `<cc2>${e.innerHTML}</cc2>`;
        }
      } else {
        f_cadd(e, "c_chtml");
        s = f_zzt(f_zt(f_ht(e.innerHTML)));
        if (f_w_in_s(e.tagName, "C C0")) {
          f_prepend_s(e, `<cc class=c_hide>${s}</cc>`);
        }
        if (f_w_in_s(e.tagName, "C1")) {
          f_prepend_s(e, `<cc1 class=c_hide>${s}</cc1>`);
        }
        if (f_w_in_s(e.tagName, "C2")) {
          f_prepend_s(e, `<cc2 class=c_hide>${s}</cc2>`);
        }
      }
      f_cadd(e, "c_cbak");
    }
  }
  function f_cli_c(e) {
    if (!f_ccon(e, "c_cbak")) {
      f_c_cbak_e(e);
    } else {
      if (f_ccon(e, "c_chtml")) {
        f_toggle($(e).find("cc,cc0,cc1,cc2")[0]);
        f_jump_e(e);
      }
    }
  }
  function f_k_init() {
    try {
      var a,
        e,
        s,
        n,
        i,
        j,
        k = 0;
      a = f_q("k");
      for (i = 0; i < a.length; i++) {
        e = a[i];
        s = e.innerHTML;
        var sadd = f_ga(e, "add");
        if (!sadd) {
          sadd = "ig";
        }
        var akw = s.split(" ");
        if (f_ha("p")) {
          var e_t = f_prev(e);
        } else {
          var e_t = f_next(e);
        }
        var ec = null;
        if (!!e_t) {
          if (f_w_in_s(e_t.tagName, "CC CC0 CC1 CC2")) {
            ec = e_t;
          } else {
            ec = $(e_t).find("cc,cc0,cc1,cc2")[0];
          }
        }
        if (!!ec) {
          for (var j = 0; j < akw.length; j++) {
            if (!!akw[j]) {
              akw[j] = akw[j].replace("^^_", " ");
              var re = new RegExp("(" + akw[j] + ")", sadd);
              ec.innerHTML = ec.innerHTML.replace(re, `<b add_key>$1</b>`);
            }
          }
        } else {
          var p = $(e).parent()[0];
          for (var j = 0; j < p.childNodes.length; j++) {
            var ele_c = p.childNodes[j];
            if (ele_c.nodeName === "#text") {
              if (ele_c.nodeValue.match(/\S/)) {
                var e_text = f_create("text");
                var s_text = ele_c.nodeValue;
                for (var k = 0; k < akw.length; k++) {
                  if (!!akw[k]) {
                    akw[k] = akw[k].replace("^^_", " ");
                    var re = new RegExp("(" + akw[k] + ")", sadd);
                    s_text = s_text.replace(re, `<b add_key>$1</b>`);
                  }
                }
                e_text.innerHTML = s_text;
                p.replaceChild(e_text, ele_c);
              }
            }
          }
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_todo_init() {
    var a,
      e,
      s,
      n,
      i,
      j,
      k = 0;
    a = f_q("todo");
    for (i = 0; i < a.length; i++) {
      e = a[i];
      s = e.innerHTML;
      var a_s = s.split("\n");
      for (j = 0; j < a_s.length; j++) {
        var s_c = a_s[j];
        if (s_c.match(/\s*@/)) {
          s_c = s_c.replace(
            /\s*@(.)/,
            "<input type=checkbox checked=true />$1"
          );
        } else {
          s_c = s_c.replace(/\s*(.)/, "<input type=checkbox />$1");
        }
        s_c = s_c.replace(/-(.*)/m, "<s>$1</s>");
        s_c = s_c.replace(/!(.*)/m, "<b>$1</b>");
        a_s[j] = s_c;
      }
      var s_new = "";
      for (j = 0; j < a_s.length; j++) {
        s_new += a_s[j] + "\n";
      }
      e.innerHTML = s_new;
    }
  }
  function f_hl_cbak() {
    try {
      var a,
        e,
        s,
        n,
        i,
        j,
        k = 0;
      a = f_q("hl,hl0,hl1,hl2");
      for (i = 0; i < a.length; i++) {
        e = a[i];
        if (!f_ccon(e, "c_cbak")) {
          f_hl_cbak_e(e);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_hl_cbak_e(e) {
    var a,
      e,
      s,
      n,
      i,
      j,
      k = 0;
    if (!f_ccon(e, "c_cbak")) {
      var s_ctype = f_ga(e, "a_ct");
      if (s_ctype === "js") {
        s_ctype = "javascript";
      }
      if (!s_ctype) {
        s_ctype = "";
      }
      if (!!$(e).find("*")[0]) {
        s_ctype = "html";
      }
      if (s_ctype === "html") {
        f_a_css_e(e, "white-space:normal;");
      }
      s = "";
      var s_hljs = f_zzt(f_zt(f_ht(e.innerHTML)));
      s_hljs = f_del_space_str(s_hljs);
      if (f_w_in_s(e.tagName, "HL HL0")) {
        s += "<dp class='c_cbak'>";
        s += "<dp class='c_hide c_craw'>";
        s += f_tz(f_hzz(e.outerHTML));
        s += "</dp>";
        s += `<hljs class=${s_ctype}>`;
        s += s_hljs;
        s += "</hljs>";
        s += "</dp>";
      }
      if (f_w_in_s(e.tagName, "HL1")) {
        s += "<d1 class='c_cbak'>";
        s += "<d1 class='c_hide c_craw'>";
        s += f_tz(f_hzz(e.outerHTML));
        s += "</d1>";
        s += `<hljs class=${s_ctype}>`;
        s += s_hljs;
        s += "</hljs>";
        s += "</d1>";
      }
      if (f_w_in_s(e.tagName, "HL2")) {
        s += "<d2 class='c_cbak'>";
        s += "<d2 class='c_hide c_craw'>";
        s += f_tz(f_hzz(e.outerHTML));
        s += "</d2>";
        s += `<hljs class=${s_ctype}>`;
        s += s_hljs;
        s += "</hljs>";
        s += "</d1>";
      }
      f_before_s(e, s);
      if (!$(e).find("*")[0]) {
        f_hide(e);
        $(f_prev(e)).find("hljs").addClass("c_hide_c_ori");
      } else {
        $(f_prev(e)).find("hljs").addClass("c_hide");
      }
      if (f_w_in_s(e.tagName, "HL1")) {
        $(f_prev(e)).find("hljs").css("display", "inline-block");
        $(f_prev(e)).find("hljs").css("overflow", "unset");
        $(f_prev(e)).find("hljs").css("margin", "2px");
        $(f_prev(e)).find("hljs").css("padding", "2px");
      }
      if (f_w_in_s(e.tagName, "HL2")) {
        $(f_prev(e)).find("hljs").css("display", "inline");
        $(f_prev(e)).find("hljs").css("overflow", "unset");
        $(f_prev(e)).find("hljs").css("margin", "unset");
        $(f_prev(e)).find("hljs").css("padding", "unset");
        $(f_prev(e)).find("hljs").css("white-space", "unset");
      }
      f_cadd(e, "c_cbak");
    }
  }
  function f_cli_hl(e) {
    if (!f_ccon(e, "c_cbak")) {
      f_hl_cbak_e(e);
      f_hljs_e($(f_prev(e)).find("hljs")[0]);
    } else {
      f_toggle($(f_prev(e)).find("hljs")[0]);
    }
  }
  function f_hljs() {
    try {
      zs_.s_sti_c_init = setInterval(function () {
        var a,
          e,
          s,
          n,
          i,
          j,
          k = 0;
        a = f_q("hljs");
        for (i = 0; i < a.length; i++) {
          e = a[i];
          if (!f_ccon(e, "c_hljs")) {
            f_hljs_e(e);
            return 0;
          }
        }
        clearInterval(zs_.s_sti_c_init);
      }, 200);
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_hljs_e(e) {
    if (!f_ccon(e, "c_hljs")) {
      hljs.highlightBlock(e);
      f_cadd(e, "c_hljs");
    }
  }
  function f_cli_hljs(e) {
    if (!f_ccon(e, "c_hljs")) {
      hljs.highlightBlock(e);
      f_cadd(e, "c_hljs");
    } else {
      if (!f_ccon(e, "c_hide_c_ori")) {
        f_hide(e);
      }
    }
  }
  function f_textarea_replace() {
    var a = f_q("textarea");
    for (var i = 0; i < a.length; i++) {
      var e = a[i];
      var s_t = f_ga(e, "t");
      if (!!s_t) {
        var e_new = f_create(s_t);
        var e_par = $(e).parent()[0];
        e_new.innerHTML = e.innerHTML;
        e_par.replaceChild(e_new, e);
      }
    }
  }
  function f_textarea_init(root) {
    try {
      if (root) {
        var a = $(root).find("textarea");
      } else {
        var a = $("body").find("textarea");
      }
      for (var i = 0; i < a.length; i++) {
        var e = a[i];
        if (f_ha(e, "html")) {
          continue;
        }
        if (f_ha(e, "r")) {
          e = a[i];
          var s = e.innerHTML;
          var run = f_ga(e, "r");
          if (!!run) {
            e.outerHTML = `<${run} text>${s}</${run}>`;
          } else {
            s = s.replace(/^\s*&lt;(.*?)&gt;/, "<$1 text>");
            s = s.replace(/&lt;(.*?)&gt;\s*$/, "<$1>");
            e.outerHTML = `${s}`;
          }
          continue;
        }
        if (f_ccon(e, "c_e_inited") || f_ha(e, "html")) {
          continue;
        }
        var s_bak = e.innerHTML;
        var s = e.innerHTML;
        var a_n = s.match(/\n/g);
        var n_rows = 2;
        if (!!a_n) {
          n_rows = a_n.length + 2;
          if (n_rows > 15) {
            n_rows = 15;
          }
        }
        f_sa(e, "rows", n_rows);
        f_cadd(e, "c_e_in", n_rows);
        var s1 = "";
        s1 += "<d0 s_br s_m8 class=c_textarea_inited>";
        s1 += "<hh>..</hh>";
        if (!f_ha(e, "text_hide")) {
          if (f_ha(e, "zstable")) {
            s1 +=
              "<textarea zstable class='c_e_in c_e_inited' rows=" +
              n_rows +
              ">" +
              s +
              "</textarea>";
          } else {
            s1 +=
              "<textarea class='c_e_in c_e_inited' rows=" +
              n_rows +
              ">" +
              s +
              "</textarea>";
          }
        } else {
          if (f_ha(e, "zstable")) {
            s1 +=
              "<textarea zstable class='c_e_in c_e_inited' rows=" +
              n_rows +
              ">" +
              s +
              "</textarea>";
          } else {
            s1 +=
              "<textarea class='c_e_in c_e_inited c_hide' rows=" +
              n_rows +
              ">" +
              s +
              "</textarea>";
          }
        }
        s1 +=
          "<textarea class='c_e_bak c_e_inited c_hide'>" + s + "</textarea>";
        s1 +=
          "<d0 s_br class='c_hide c_ec_edit' style='white-space:normal;'></d0>";
        var s_b1 = "";
        if (f_ha(e, "ifu")) {
          s_b1 += "<b1 class='c_b_e_if_url'><b>run if url</b></b1>";
        } else if (f_ha(e, "if")) {
          s_b1 += "<b1 class='c_b_e_if_run'><b>run if inner</b> </b1>";
        } else if (f_ha(e, "cli")) {
          s_b1 += "<b1 class='c_b_e_run_click'><b>runc</b></b1>";
        } else {
          s_b1 += "<b1 class='c_b_e_run'><b>run</b></b1>";
        }
        s_b1 += "<b1 class='c_b_ec_edit '>color</b1>";
        s_b1 += "<b1 class='c_b_e_ec_save '>color_save </b1>";
        s_b1 += "<b1 class='c_b_e_run_ctog'>..</b1>";
        s_b1 +=
          "<b1 class='c_b_e_run_click c_hide c_b__but_hide'><b>runc</b></b1>";
        s_b1 += "<b1 class='c_b_e_run c_hide c_b__but_hide'>run</b1>";
        s_b1 += "<b1 class='c_b_e_if_url c_b__but_hide c_hide'>run if url</b1>";
        s_b1 +=
          "<b1 class='c_b_e_if_run c_hide c_b__but_hide'>run if inner</b1>";
        s_b1 += "<b1 class='c_b_e_del_ec c_b__but_hide c_hide'>color_exit</b1>";
        s_b1 += "<b1 class='c_b_e_del_run c_b__but_hide c_hide'>del_run</b1>";
        s_b1 += "<b1 class='c_b_e_reset c_b__but_hide c_hide'>reset </b1>";
        s_b1 += "<d1><b1 class='c_b_e_bg c_b__but_hide c_hide'>bg</b1>";
        s_b1 += "<input class='c_b__but_hide c_hide' s_w4 value=#ccc></d1>";
        s_b1 += "<d1><b1 class='c_b_e_co c_b__but_hide c_hide'>co</b1>";
        s_b1 += "<input class='c_b__but_hide c_hide' s_w4 value=#222></d1>";
        s_b1 += "<b1 class='c_hide c_b_e_run_hpp c_b__but_hide  '>h++  </b1>";
        s_b1 += "<b1 class='c_hide c_b_e_run_hmm    c_b__but_hide'>h--  </b1>";
        s_b1 += "<b1 class='c_hide c_b_e_run_wpp    c_b__but_hide'>w++  </b1>";
        s_b1 += "<b1 class='c_hide c_b_e_run_wmm    c_b__but_hide'>w--  </b1>";
        s_b1 += "<b1 class='c_hide c_b_e_run_hreset c_b__but_hide'>h100 </b1>";
        s_b1 += "<b1 class='c_hide c_b_e_run_wreset c_b__but_hide'>w100 </b1>";
        s_b1 += "<b1 class='c_hide c_b_e_run_hdel   c_b__but_hide'>h[✘] </b1>";
        s_b1 += "<b1 class='c_hide c_b_e_run_wdel   c_b__but_hide'>w[✘] </b1>";
        s1 +=
          s_b1 +
          "<d0 s_p_b24 s_b s_b_blu class='c_hide c_e_run c_son' style='white-space:normal;overflow:auto;'></d0>";
        s1 += "<d0 s_chb class='c_log_e'></d0>";
        s1 += "</d0>";
        e.outerHTML = s1;
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_cli_b_e_if_run(e) {
    var e_par = $(e).parent()[0];
    var c_e_in = $(e_par).find(".c_e_in")[0];
    var c_e_run = $(e_par).find(".c_e_run")[0];
    f_show(c_e_run);
    var e_if = f_create("iframe");
    f_sa(e_if, "width", "100%");
    f_sa(e_if, "height", "100%");
    c_e_run.innerHTML = "";
    f_append_e(c_e_run, e_if);
    var fd = e_if.contentDocument;
    var s_if_html = c_e_in.value;
    s_if_html = "<style>html{background-color:#ccc;</style>" + s_if_html;
    fd.write(f_zzh(f_th(s_if_html)));
    setTimeout(function () {
      f_a_css_e(c_e_run, "height:" + (fd.body.scrollHeight + 30) + "px;");
    }, 200);
  }
  function f_cli_b_e_run_click(e) {
    zs_.e_run = e;
    var e_par = $(e).parent()[0];
    $("#i_log_e").attr("id", "");
    $(e_par).find(".c_log_e").attr("id", "i_log_e");
    $(e_par).find(".c_log_e").html("");
    f_cli_b_e_run_parent(e_par);
    $(e_par).find(".c_e_run").children().click();
  }
  function f_cli_b_e_run(e) {
    zs_.e_run = e;
    var e_par = $(e).parent()[0];
    $("#i_log_e").attr("id", "");
    $(e_par).find(".c_log_e").attr("id", "i_log_e");
    $(e_par).find(".c_log_e").html("");
    f_cli_b_e_run_parent(e_par);
  }
  function f_cli_b_e_run_parent(e) {
    var c_e_in = $(e).find(".c_e_in")[0];
    var c_e_run = $(e).find(".c_e_run")[0];
    var c_ec_edit = $(e).find(".c_ec_edit")[0];
    var c_b_e_in = $(e).find(".c_b_e_run")[0];
    var c_b_e_run = $(e).find(".c_b_e_reset")[0];
    var c_b_ec_edit = $(e).find(".c_b_ec_edit")[0];
    f_show(c_e_run);
    if (c_ec_edit.innerHTML) {
      c_e_in.value = o_codemirror.getValue();
      c_ec_edit.innerHTML = "";
      f_hide(c_ec_edit);
    }
    var s_t = f_zzh(c_e_in.value);
    c_e_run.innerHTML = s_t;
    if (f_ha(c_e_in, "zstable")) {
      var a = $(c_e_run).find("table");
      for (var i = 0; i < a.length; i++) {
        f_sa(a[i], "a_tb", "t1");
      }
    }
    var arr_e = $(c_e_run).find("script");
    var arr_e_s = [];
    for (var i = 0; i < arr_e.length; i++) {
      arr_e_s.push(arr_e[i].outerHTML);
    }
    for (var i = 0; i < arr_e.length; i++) {
      $(arr_e[i]).remove();
    }
    for (var i = 0; i < arr_e_s.length; i++) {
      var e_new = document.createElement("script");
      f_cadd(e_new, "c_e_add_js");
      var am = arr_e_s[i].match(/ src=\s*"([^"]*)"/);
      if (am) {
        var src = am[0].replace(/ src=\s*"([^"]*)"/, "$1");
        f_sa(e_new, "src", src);
      } else {
        var s_inner = arr_e_s[i].replace(/<\s*script.*?>/, "");
        s_inner = s_inner.replace(/<\s*\/script.*>$/, "");
        e_new.innerHTML = s_inner;
      }
      f_append_e(c_e_run, e_new);
    }
    f_scrollfix(c_e_run);
  }
  function f_hs2hs(e) {
    var arr_e = $(e).find("script");
    var arr_e_s = [];
    var arr_e_s_src = [];
    for (var i = 0; i < arr_e.length; i++) {
      arr_e_s.push(arr_e[i].innerHTML);
      var t_src = false;
      for (var j = 0; j < arr_e[i].attributes.length; j++) {
        if (arr_e[i].attributes[j].name === "src") {
          t_src = arr_e[i].attributes[j].value;
        }
      }
      if (t_src) {
        arr_e_s_src.push(t_src);
      } else {
        arr_e_s_src.push(null);
      }
    }
    for (var i = 0; i < arr_e.length; i++) {
      $(arr_e[i]).remove();
    }
    for (var i = 0; i < arr_e_s.length; i++) {
      var e_new = document.createElement("script");
      f_cadd(e_new, "c_e_add_js");
      e_new.innerHTML = arr_e_s[i];
      if (!!arr_e_s_src[i]) {
        f_sa(e_new, "src", arr_e_s_src[i]);
        e.appendChild(e_new);
      } else {
        e.appendChild(e_new);
      }
    }
  }
  function f_cli_b_e_reset(e) {
    var c_e_in = $(e).parent().find(".c_e_in")[0];
    var c_e_bak = $(e).parent().find(".c_e_bak")[0];
    var c_e_run = $(e).parent().find(".c_e_run")[0];
    var c_ec_edit = $(e).parent().find(".c_ec_edit")[0];
    var c_log_e = $(e).parent().find(".c_log_e")[0];
    c_ec_edit.innerHTML = "";
    c_log_e.innerHTML = "";
    c_e_run.innerHTML = "";
    c_e_in.value = c_e_bak.value;
    f_show(c_e_in);
    f_hide(c_e_run);
    f_scrollfix(c_e_in);
  }
  function f_cli_b_e_del_run(e) {
    var c_e_in = $(e).parent().find(".c_e_in")[0];
    var c_e_bak = $(e).parent().find(".c_e_bak")[0];
    var c_e_run = $(e).parent().find(".c_e_run")[0];
    var c_ec_edit = $(e).parent().find(".c_ec_edit")[0];
    var c_log_e = $(e).parent().find(".c_log_e")[0];
    c_log_e.innerHTML = "";
    c_e_run.innerHTML = "";
    f_hide(c_e_run);
    f_scrollfix(e);
  }
  function f_cli_b_e_del_ec(e) {
    var c_e_in = $(e).parent().find(".c_e_in")[0];
    var c_e_bak = $(e).parent().find(".c_e_bak")[0];
    var c_e_run = $(e).parent().find(".c_e_run")[0];
    var c_ec_edit = $(e).parent().find(".c_ec_edit")[0];
    var c_log_e = $(e).parent().find(".c_log_e")[0];
    c_ec_edit.innerHTML = "";
    f_show(c_e_in);
    f_scrollfix(c_e_in);
  }
  function f_cli_b_ec_save(e) {
    var c_e_in = $(e).parent().find(".c_e_in")[0];
    var c_e_bak = $(e).parent().find(".c_e_bak")[0];
    var c_e_run = $(e).parent().find(".c_e_run")[0];
    var c_ec_edit = $(e).parent().find(".c_ec_edit")[0];
    var c_log_e = $(e).parent().find(".c_log_e")[0];
    c_log_e.innerHTML = "";
    c_e_run.innerHTML = "";
    if (c_ec_edit.innerHTML) {
      c_e_in.value = o_codemirror.getValue();
      c_ec_edit.innerHTML = "";
      f_hide(c_ec_edit);
    }
    f_show(c_e_in);
    f_scrollfix(c_e_in);
  }
  function f_cli_b_ec_edit(e) {
    var a = f_gc("c_ec_edit");
    for (var i = 0; i < a.length; i++) {
      a[i].innerHTML = "";
      $(a[i]).parent().find(".c_e_in").removeClass("c_hide");
    }
    var c_e_in = $(e).parent().find(".c_e_in")[0];
    var c_ec_edit = $(e).parent().find(".c_ec_edit")[0];
    f_hide(c_e_in);
    f_show(c_ec_edit);
    f_scrollfix(c_ec_edit);
    var s_bak = c_e_in.value;
    var s1 = "";
    s1 += "<div id=i_codemirror>                      ";
    s1 += "<select onchange='f_cm_sel_theme(event)' > ";
    s1 += "    <option selected>material</option>     ";
    s1 += "    <option>monokai</option>               ";
    s1 += "    <option>default</option>               ";
    s1 += "</select>                                  ";
    s1 += "<select onchange='f_cm_sel_mode(event)' >  ";
    s1 += "    <option selected>text/html</option>    ";
    s1 += "    <option>text/javascript</option>       ";
    s1 += "    <option>text/xml</option>              ";
    s1 += "    <option>text/markdown</option>         ";
    s1 += "    <option>text/x-csrc</option>           ";
    s1 += "    <option>text/x-c++src</option>         ";
    s1 += "    <option>text/x-java</option>           ";
    s1 += "    <option>text/x-cython</option>         ";
    s1 += "</select>                                  ";
    s1 += "<select onchange='f_cm_sel_keyMap(event)' >";
    s1 += "    <option selected>sublime</option>      ";
    s1 += "    <option>vim</option>                   ";
    s1 += "</select>                                  ";
    s1 += "<b1 class=c_b_cm_search>search</b1>";
    s1 += "<textarea class='c_ta c_e_inited'>" + s_bak + "</textarea>";
    s1 += "</div>";
    c_ec_edit.innerHTML = s1;
    var e_textarea = $(c_ec_edit).find(".c_ta")[0];
    o_codemirror = CodeMirror.fromTextArea(e_textarea, {
      theme: "material",
      mode: "text/html",
      lineNumbers: true,
      styleActiveLine: true,
      matchBrackets: true,
      extraKeys: { Ctrl: "autocomplete" },
      foldGutter: true,
      gutters: [
        "CodeMirror-linenumbers",
        "CodeMirror-foldgutter",
        "CodeMirror-lint-markers",
      ],
    });
    o_codemirror.setSize("auto", "30em");
    CodeMirror.commands["selectAll"](o_codemirror);
    range = {
      from: o_codemirror.getCursor(true),
      to: o_codemirror.getCursor(false),
    };
    o_codemirror.autoFormatRange(range.from, range.to);
  }
  function f_cm_sel_theme(event) {
    var s_sel = event.target.options[event.target.selectedIndex].textContent;
    o_codemirror.setOption("theme", s_sel);
  }
  function f_cm_sel_mode(event) {
    var s_sel = event.target.options[event.target.selectedIndex].textContent;
    o_codemirror.setOption("mode", s_sel);
  }
  function f_cm_sel_keyMap(event) {
    var s_sel = event.target.options[event.target.selectedIndex].textContent;
    o_codemirror.setOption("keyMap", s_sel);
  }
  function f_mer_init() {
    mermaid.startOnLoad = false;
    zs_.s_sti_mer_init = setInterval(function () {
      var a,
        e,
        s,
        i = 0;
      a = f_q(".c_mer,mer,mer0,mer1,mer2");
      for (i = 0; i < a.length; i++) {
        e = a[i];
        if (!f_ccon(e, "c_mered")) {
          f_cli_m_e(e);
          return 0;
        }
      }
      clearInterval(zs_.s_sti_mer_init);
    }, 200);
  }
  function f_cli_m_e(e) {
    try {
      if (!f_ccon(e, "c_mered")) {
        f_cadd(e, "c_mered");
        var t = new Date();
        var t1 = t.toISOString().replace(/:/g, "_").replace(/\./g, "__");
        var txt = e.innerHTML
          .replace(/\s*/, "")
          .replace(/\s*$/, "")
          .replace(/ *\n+ */g, "\n");
        txt = f_th(f_zzh(f_zh(txt)));
        var s = mermaid.mermaidAPI.render("id_test_mer_" + t1, txt);
        var s1 = `<b1 class=c_m_wpp>w++</b1><b1 class=c_m_wmm>w--</b1>`;
        s1 += "<d></d>";
        e.innerHTML = `${s1}<dp>${s}</dp>`;
        e_if = $(e).find("svg")[0];
        f_ra(e_if, "height");
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_text0(e) {
    for (var j = 0; j < e.childNodes.length; j++) {
      var ele_c = e.childNodes[j];
      zs_e = ele_c;
      if (e.childNodes.length === 1 && e.childNodes[0].nodeType === 1) {
        return "";
      }
      if (ele_c.nodeName === "#text") {
        if (!!ele_c.nodeValue) {
          return ele_c.nodeValue;
        }
      } else if (ele_c.nodeName === "TEXT") {
        return ele_c.innerHTML.replace(/<text>/, "");
      }
    }
    return "";
  }
  function f_add_init() {
    var a,
      e,
      s,
      i,
      j = 0;
    var h,
      w,
      cw = 0;
    a = f_gt("if");
    for (i = 0; i < a.length; i++) {
      e = a[i];
      if (!f_ga(e, "h")) {
        h = (document.body.clientWidth * 2) / 5;
      } else {
        h = f_ga(e, "h");
      }
      if (!f_ga(e, "w")) {
        w = "100%";
      } else {
        w = f_ga(e, "w");
      }
      s = e.innerHTML;
      var s1 = "";
      s1 += "<b1 class=c_if_hpp mab>h++</b1><b1 class=c_if_hmm mab>h--</b1>";
      s1 += "<b1 class=c_if_wpp mab>w++</b1><b1 class=c_if_wmm mab>w--</b1>";
      s1 += "<b1 class=c_if_reset>reset</b1>";
      s1 += "<b1 class=c_if_z2h>run</b1>";
      s1 += "<d1><b1 class=c_if_z2h_bg>bg</b1><input s_w4 value=#ccc></d1>";
      s1 += "<dp class=c_d_iframe s_ba_gra>";
      s1 += f_tz(f_hzz(`<iframe width=${w} height=${h} src=${s}></iframe>`));
      s1 += "</dp>";
      f_sa(e, "a_src", s);
      if (f_ga(e, "a_auto")) {
        f_cadd(e, "c_conved");
        e.innerHTML = f_zzh(f_zh(s1));
      } else {
        e.innerHTML = s1;
      }
    }
    a = f_gt("or");
    a = f_gt("or");
    for (i = a.length - 1; i >= 0; i--) {
      e = a[i];
      s = e.innerHTML;
      s = s.replace(/\n\s*\n/g, "\n");
      s = s.replace(/\s*$/, "");
      s = s.replace(/^\s*([^<])/gm, "<li>$1");
      e.innerHTML = `<ol>${s}</ol>`;
    }
    a = f_gt("ur");
    for (i = a.length - 1; i >= 0; i--) {
      e = a[i];
      s = e.innerHTML;
      s = s.replace(/\n\s*\n/g, "\n");
      s = s.replace(/\s*$/, "");
      s = s.replace(/^\s*([^<])/gm, "<li>$1");
      e.innerHTML = `<ul>${s}</ul>`;
    }
    if (f_ua_pc()) {
      f_cli_b__fixed_lg();
    }
  }
  function f_near_h(e) {
    try {
      if (f_w_in_s(e.tagName, "HTML BODY")) {
        return 0;
      }
      if (f_prev(e)) {
        if (f_w_in_s(f_prev(e).tagName, "H H0X HH ")) {
          f_prev(e).click();
          return 0;
        } else {
          f_near_h($(f_prev(e)).parent()[0]);
        }
      } else {
        f_near_h($(f_prev(e)).parent()[0]);
      }
      return 0;
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_son(e) {
    var a = [];
    for (var j = 0; j < e.childNodes.length; j++) {
      var e_c = e.childNodes[j];
      if (e_c.nodeType === 1) {
        a.push(e_c);
      }
    }
    return a;
  }
  function f_mind_obj2svg(e, o_data) {
    var e_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    f_sa(e_svg, "style", "display:block;width:90vw;height:40vw;");
    f_after_e(e, e_svg);
    window.markmap.Markmap.create(e_svg, 0, o_data);
    f_hide(e);
  }
  function fd_mind_li_obj(e, deep) {
    var o = {};
    o.v = e.innerHTML;
    o.d = deep;
    var ul = f_next(e);
    if (ul) {
      if (ul.tagName === "UL") {
        var a_li = $(ul).children("li");
        if (a_li) {
          if (a_li.length) {
            o.c = [];
            for (var i = 0; i < a_li.length; i++) {
              o.c.push(fd_mind_li_obj(a_li[i], deep + 1));
            }
          }
        }
      }
    }
    return o;
  }
  function f_mind_conv_cli(e) {
    f_mind_conv_e(e);
  }
  function f_mind_conv_e(e) {
    console.log("winw", window.innerWidth);
    console.log("parentw", $(e).parent());
    if (!f_ccon(e, "c_init")) {
      f_cadd(e, "c_init");
      f_sa(e, "s_n", "");
      f_sa(e, "hashtml", "");
      f_sa(e, "noarea", "");
      f_sa(e, "no_l_c_bak");
      if (!f_ha(e, "s1")) {
        f_md_conv_e(e);
        var et = $(e).children("ul")[0];
        if (et) {
          if ($(et).children("li").length === 1) {
            e.innerHTML = et.innerHTML;
          } else {
            f_before_s(et, "<li>" + f_text0(e) + "</li>");
          }
        }
      }
      var a = $(e).find("l,l1");
      for (let i = 0; i < a.length; i++) {
        a[i].style = "margin:8px 18px;";
      }
      var a = $(e).find("r1");
      for (let i = 0; i < a.length; i++) {
        if (!f_ha(a[i], "style")) {
          a[i].style = "height:1.5em;width:1.5em;";
        }
      }
      var e_li_root = $(e).find("li")[0];
      var o_data = fd_mind_li_obj(e_li_root, 0);
      f_mind_obj2svg(e, o_data);
    }
  }
  function f_innertext(e) {
    var e_t = f_create("unknow");
    e_t.innerHTML = e.innerHTML;
    return e_t.innerText;
  }
  function f_chart_init() {
    var a, s, e;
    var i, j, k;
    var a1;
    var x, y;
    a = document.getElementsByTagName("ch");
    for (i = 0; i < a.length; i++) {
      e = a[i];
      f_chart_e(e);
    }
  }
  function f_chart_e(e) {
    if (!f_ccon(e, "c_conv")) {
      f_cadd(e, "c_conv");
      f_echarts_e(e);
    }
  }
  function f_echarts_e(e) {
    var s;
    ec = e;
    if (!f_ha(e, "man")) {
      e.style.display = "block";
      e.style.overflow = "auto";
      e.style.width = "fit-content";
      e.style.maxWidth = "100%";
      var dark = 0;
      if (f_ha(e, "dark")) {
        dark = 1;
      } else if (f_ha(e, "light")) {
        dark = 0;
      } else {
        var nc = $("html").css("background-color");
        if (nc.match(/\d+/)) {
          if (nc.match(/\d+/)[0] < 100) {
            dark = 1;
          }
        }
      }
      if (dark) {
        e.style.color = "#ddd";
        e.style.backgroundColor = "#444";
      } else {
        e.style.color = "#111";
        e.style.backgroundColor = "#eee";
      }
      s = e.innerHTML;
      e.innerHTML = "";
      s = f_trim(s);
      var e_new = document.createElement("div");
      if (!f_ha(e, "childs")) {
        var n_ww = window.innerWidth;
        var n_wh = window.innerHeight;
        if (n_ww > n_wh) {
          n_ww = n_wh;
        }
        e_new.style.width = n_ww + "px";
        e_new.style.height = n_ww * 0.6 + "px";
      } else {
        f_sa(e_new, "style", f_ga(e, "childs"));
        var n_ew = e_new.clientWidth;
        var n_eh = e_new.clientHeight;
        var n_ew = Number(e_new.style.width.replace(/px/, ""));
        var n_eh = Number(e_new.style.height.replace(/px/, ""));
        if (!!n_ew && !n_eh) {
          e_new.style.height = n_ew * 0.8 + "px";
        }
      }
      var n_ew = Number(e_new.style.width.replace(/px/, ""));
      var n_eh = Number(e_new.style.height.replace(/px/, ""));
      if (n_ew < 200) {
        e_new.style.width = "200px";
      }
      if (n_eh < 200) {
        e_new.style.height = "200px";
      }
      f_append_e(e, e_new);
      if (!f_ha(e, "t")) {
        if (s.match("pie")) {
          f_sa(e, "t", "2");
        } else if (s.match(":")) {
          f_sa(e, "t", "1");
        } else {
          f_sa(e, "t", "0");
        }
      }
      if (f_ga(e, "t") === "0") {
        f_sa(e, "bak", s);
        f_echarts_s0(e_new, s, dark);
      } else if (f_ga(e, "t") === "1") {
        f_sa(e, "bak", s);
        f_echarts_s1(e_new, s, dark);
      } else if (f_ga(e, "t") === "2") {
        f_sa(e, "bak", s);
        f_echarts_s2(e_new, s, dark);
      } else if (f_ga(e, "t") === "3") {
        f_echarts_s3(e_new, s, dark);
      }
    }
  }
  function f_trim(s) {
    s = s.replace(/^\s*/, "");
    s = s.replace(/\s*$/, "");
    return s;
  }
  function f_split_trim(s, f) {
    var a = s.split(f);
    var a1 = [];
    for (var i = 0; i < a.length; i++) {
      a[i] = f_trim(a[i]);
      if (!!a[i]) {
        a1.push(a[i]);
      }
    }
    return a1;
  }
  function f_echarts_s0(e, s, dark) {
    var a1;
    var o_echarts, option, series;
    var x, y;
    var ay;
    var i, j, k;
    s = s.replace(/\n/g, "");
    if (dark) {
      o_echarts = echarts.init(e, "dark");
    } else {
      o_echarts = echarts.init(e);
    }
    if (s.match(";")) {
      option = { xAxis: {}, series: [], yAxis: {}, tooltip: {}, legend: {} };
      a1 = f_split_trim(s, ";");
      x = a1[0];
      y = s.replace(/.*?;/, "");
      x = f_trim(x);
      y = f_trim(y);
      option.legend.data = [];
      ay = f_split_trim(y, ";");
      for (i = 0; i < ay.length; i++) {
        series = {};
        series.type = "bar";
        series.data = f_split_trim(ay[i], " ");
        option.series.push(series);
        series.name = String(i);
        option.legend.data.push(series.name);
      }
      option.xAxis.data = f_split_trim(x, " ");
      o_echarts.setOption(option);
    }
  }
  function f_echarts_s1(e, s, dark) {
    var a1;
    var o_echarts, option, series;
    var x, y, t;
    var ay;
    var i, j, k;
    s = s.replace(/\n/g, "");
    if (dark) {
      o_echarts = echarts.init(e, "dark");
    } else {
      o_echarts = echarts.init(e);
    }
    if (s.match(";")) {
      option = {
        xAxis: { data: [""] },
        series: [{ name: "", type: "line", data: [] }],
        yAxis: {},
        legend: { data: [""] },
        tooltip: {},
        title: { text: "" },
      };
      s = s.replace(/^\s*/, "");
      s = s.replace(/\s*$/, "");
      a1 = f_split_trim(s, ";");
      var t = a1[0];
      var x = a1[1];
      var y = s.replace(/.*?;.*?;/, "");
      x = x.replace(/^\s*/, "");
      x = x.replace(/\s*$/, "");
      y = y.replace(/^\s*/, "");
      y = y.replace(/\s*$/, "");
      t = t.replace(/^\s*/, "");
      t = t.replace(/\s*$/, "");
      ay = f_split_trim(y, ";");
      for (i = 0; i < ay.length; i++) {
        var aay = f_split_trim(ay[i], ":");
        series = {};
        series.data = f_split_trim(aay[0], " ");
        if (!!aay[1]) {
          series.name = aay[1];
        } else {
          series.name = String(i);
        }
        if (!!aay[2]) {
          series.type = aay[2];
        } else {
          series.type = "bar";
        }
        option.series.push(series);
        option.legend.data.push(series.name);
        option.legend.top = 16;
      }
      option.xAxis.data = f_split_trim(x, " ");
      option.title.text = t;
      option.title.left = "center";
      o_echarts.setOption(option);
    }
  }
  function f_echarts_s2(e, s, dark) {
    var a1;
    var o_echarts, option, series;
    var x, y, t;
    var ay;
    var i, j, k;
    s = s.replace(/\n/g, "");
    if (dark) {
      o_echarts = echarts.init(e, "dark");
    } else {
      o_echarts = echarts.init(e);
    }
    option = {};
    option.series = [];
    option.legend = {};
    option.legend.data = [];
    option.tooltip = {};
    option.title = {};
    s = s.replace(/^\s*/, "");
    s = s.replace(/\s*$/, "");
    a1 = f_split_trim(s, ";");
    var t = a1[0];
    var x = a1[1];
    var y = s.replace(/.*?;.*?;/, "");
    x = x.replace(/^\s*/, "");
    x = x.replace(/\s*$/, "");
    y = y.replace(/^\s*/, "");
    y = y.replace(/\s*$/, "");
    t = t.replace(/^\s*/, "");
    t = t.replace(/\s*$/, "");
    ay = f_split_trim(y, ";");
    var n_pie = 0;
    for (i = 0; i < ay.length; i++) {
      var aay = f_split_trim(ay[i], ":");
      series = {};
      if (aay[2] === "pie") {
        n_pie++;
        series.type = aay[2];
        if (aay[3]) {
          series.radius = aay[3];
        }
        if (aay[4]) {
          var aaay = f_split_trim(aay[4], " ");
          series.center = [];
          series.center.push(aaay[0]);
          series.center.push(aaay[1]);
        }
        var a_t0 = f_split_trim(aay[0], " ");
        var a_t1 = f_split_trim(aay[1], " ");
        series.data = [];
        for (var j = 0; j < a_t0.length; j++) {
          var o_t = {};
          o_t.value = a_t0[j];
          o_t.name = a_t1[j];
          series.data.push(o_t);
        }
        option.series.push(series);
      } else {
        if (!aay[2]) {
          aay[2] = "line";
        }
        var a_t = f_split_trim(aay[2], " ");
        series.type = a_t[0];
        if (a_t[0] === "line") {
          if (a_t[1] === "step") {
            series.step = "start";
            if (a_t[2]) {
              series.step = a_t[2];
            }
          } else if (a_t[1] === "smooth") {
            series.smooth = true;
          }
        }
        series.data = f_split_trim(aay[0], " ");
        series.name = aay[1];
        option.series.push(series);
        option.legend.data.push(aay[1]);
        option.legend.top = 16;
      }
    }
    if (n_pie === ay.length) {
    } else {
      option.xAxis = {};
      option.yAxis = {};
      option.xAxis.data = [];
      var a_x = f_split_trim(x, ":");
      if (!!a_x[0]) {
        option.xAxis.data = f_split_trim(a_x[0], " ");
      }
    }
    option.title.text = t;
    option.title.left = "center";
    o_echarts.setOption(option);
  }
  function f_echarts_s3(e, s, dark) {
    var a1;
    var o_echarts, option, series;
    var x, y;
    var ay;
    var i, j, k;
    s = s.replace(/\n/g, "");
    if (dark) {
      o_echarts = echarts.init(e, "dark");
    } else {
      o_echarts = echarts.init(e);
    }
    option = JSON.parse(s);
    o_echarts.setOption(option);
  }
  function f_echarts_s4(e, s, dark) {}
  if (typeof zs_m === "undefined") {
    logxxx = 0;
    console.log("auto loaded zsnote.js");
    f_load_zsnote();
  }
  function f_htb2ztb() {
    try {
      if (!f_ccon($("body")[0], "c_convhtb2md")) {
        a = $("table");
        console.log(a);
        s = "";
        for (i = 0; i < a.length; i++) {
          e = a[i];
          a1 = $(e).find("tr");
          for (j = 0; j < a1.length; j++) {
            s1 = a1[j].innerText;
            s1 = s1.replace(/\n/g, "");
            s1 = s1.replace(/ /g, "");
            if (s1) {
              s2 = "|" + s1.replace(/\t/g, "\t|") + "|\n";
              s += s2;
            }
            if (j == 0) {
              s2 = s1.replace(/[^\t]/g, "-");
              s3 = "|" + s2.replace(/\t/g, "\t|") + "|\n";
              s += s3;
            }
          }
          s += "\n\n";
        }
        f_append_s($("body")[0], "\n" + s.replace(/\n/g, "<br>"));
        f_cadd($("body")[0], "c_convhtb2md");
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  function f_html2md() {
    try {
      if (!f_ccon($("body")[0], "c_convht2md")) {
        a = $("img");
        for (i = 0; i < a.length; i++) {
          a[i].outerHTML = "\n![](" + f_ga(a[i], "src") + ")\n";
        }
        a = $("table");
        as = [];
        for (i = 0; i < a.length; i++) {
          e = a[i];
          a1 = $(e).find("tr");
          for (j = 0; j < a1.length; j++) {
            a2 = $(a1[j]).find("td,th");
            for (k = 0; k < a2.length; k++) {
              if (f_ga(a2[k], "colspan")) {
                n_colspan = Number(f_ga(a2[k], "colspan"));
                for (ii = 1; ii < n_colspan; ii++) {
                  if (f_ga(a2[k], "rowspan")) {
                    n_row = Number(f_ga(a2[k], "rowspan"));
                    f_after_s(a2[k], "<td rowspan='" + n_row + "'>&lt;=</td>");
                  } else {
                    f_after_s(a2[k], "<td>&lt;=</td>");
                  }
                }
              }
            }
          }
          s = "";
          for (j = 0; j < a1.length; j++) {
            s1 = a1[j].innerText;
            s1 = s1.replace(/\n/g, "");
            s1 = s1.replace(/ /g, "");
            if (s1) {
              s_tr = "|" + s1.replace(/\t/g, "\t|") + "|\n";
            }
            if (j == 0) {
              s2 = s1.replace(/[^\t]/g, "-");
              s_tr += "|" + s2.replace(/\t/g, "\t|") + "|\n";
            }
            s += s_tr;
          }
          s3 = "\n<pre>" + s + "</pre>" + "\n";
          as.push(s3);
        }
        a = $("table");
        as = [];
        for (i = 0; i < a.length; i++) {
          e = a[i];
          a1 = $(e).find("tr");
          for (j = 0; j < a1.length; j++) {
            a2 = $(a1[j]).find("td,th");
            for (k = 0; k < a2.length; k++) {
              if (f_ga(a2[k], "rowspan")) {
                n_rowspan = Number(f_ga(a2[k], "rowspan"));
                for (ii = 1; ii < n_rowspan; ii++) {
                  a3 = $(a1[j + ii]).find("td");
                  f_before_s(a3[k], "<td>^=</td>");
                }
              }
            }
          }
          s = "";
          for (j = 0; j < a1.length; j++) {
            s1 = a1[j].innerText;
            s1 = s1.replace(/\n/g, "");
            s1 = s1.replace(/ /g, "");
            if (s1) {
              s_tr = "|" + s1.replace(/\t/g, "\t|") + "|\n";
            }
            if (j == 0) {
              s2 = s1.replace(/[^\t]/g, "-");
              s_tr += "|" + s2.replace(/\t/g, "\t|") + "|\n";
            }
            s += s_tr;
          }
          s3 = "\n<pre>" + s + "</pre>" + "\n";
          as.push(s3);
        }
        for (i = 0; i < as.length; i++) {
          a[i].outerHTML = as[i];
        }
        $("body").css("white-space", "pre-wrap");
        $(".c_e_run").css("white-space", "pre-wrap");
      }
    } catch (error) {
      console.log("error", error);
    }
  }
}
