import React from 'react';
import { SearchForm } from '../components/commons/SearchForm.jsx';
import { MenuList } from '../components/commons/MenuList.jsx';

export function Support() {
    const category = [
        {"name":"제목", "value":"title"},
        {"name":"내용", "value":"content"}
    ];
    const menus = [
        {"href":"#", "name":"전체", "style": "filter-menu"},
        {"href":"#", "name":"시스템점검", "style": "filter-menu"},
        {"href":"#", "name":"극장", "style": "filter-menu"},
        {"href":"#", "name":"행사/이벤트", "style": "filter-menu"},
        {"href":"#", "name":"제휴이벤트", "style": "filter-menu"},
        {"href":"#", "name":"기타", "style": "filter-menu"}
    ]

    return (
        <div className="content">
            <div className="support center-layout">
                <h1 className="center-title">공지/뉴스</h1>
                <div className="support-content">
                    <p style={{color:"#777"}}>CGV의 주요한 이슈 및 여러가지 소식들을 확인할 수 있습니다.</p>
                    {<SearchForm category={category} />}
                    {/* <div>
                        <select name="search_cartegory">
                            <option value="title">제목</option>
                            <option value="content">내용</option>
                        </select>
                        <input type="text" name="search_content" />
                        <button>검색하기</button>
                    </div> */}
                    <nav>
                        <MenuList menus={menus} />
                        {/* <ul className="filter-menu">
                            <li><a href="#" id="all">전체</a></li>
                            <li><a href="#" id="system">시스템점검</a></li>
                            <li><a href="#" id="theater">극장</a></li>
                            <li><a href="#" id="event">행사/이벤트</a></li>
                            <li><a href="#" id="partner">제휴이벤트</a></li>
                            <li><a href="#" id="etc">기타</a></li>
                        </ul> */}
                    </nav>
                    <p id="before-table">총 114건이 검색되었습니다. </p>
                    <table className="stable">
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>구분</th>
                                <th>제목</th>
                                <th>등록일</th>
                                <th>조회수</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td><a href="#"></a></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="5">1 2 3 4 5 {">>"} </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            {/* 내용 출력 - 테이블 */}
        </div>  
    );
}

