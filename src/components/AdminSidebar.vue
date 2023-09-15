
<script setup>

</script>

<template>
  
    <aside id="leftsidebar" class="sidebar">
        <div class="user-info">
            <div class="admin-image"> <img src="/assets/images/random-avatar7.jpg" alt=""> </div>
            <div class="admin-action-info"> <span>Welcome</span>
                <!-- <h3>{{ Auth::user()->last_name }} {{ Auth::user()->first_name }}</h3> -->
                <ul>
                    <li><a href="#" title="Go to Inbox"><i class="zmdi zmdi-email"></i></a></li>
                    <li><a href="#" title="Go to Profile"><i class="zmdi zmdi-account"></i></a></li>
                    <li><a href="#" class="js-right-sidebar" data-close="true"><i class="zmdi zmdi-settings"></i></a></li>
                    <li><a href="{{route('admin.logout.perform')}}" title="sign out"><i class="zmdi zmdi-sign-in"></i></a></li>
                </ul>
            </div>
            <div class="quick-stats">
                <h5>Today Report</h5>
                <ul>
                    <li><span>16<i>Patient</i></span></li>
                    <li><span>20<i>Pending</i></span></li>
                    <li><span>04<i>Visit</i></span></li>
                </ul>
            </div>
        </div>


        <div class="menu">
            <ul class="list">
                <li class="header">MAIN NAVIGATION</li>
                <li class="side_link_parent"> <a href="/admin/dashboard"><i class="zmdi zmdi-home"></i><span>Dashboard</span></a></li>

                <li class="header">SUPER ADMIN SECTION</li>
                <li class="side_link_parent"> <a href="#" class="menu-toggle"><i class="zmdi zmdi-accounts-alt"></i><span>User Management</span> </a>
                    <ul class="ml-menu">
                        <li class="side_link"> <a href="/admin/users">List All User</a> </li>
                        <li class="side_link"> <a href="/admin/users/create">Add New User</a></li>
                    </ul>
                </li>
                <li class="side_link_parent"> <a href="#" class="menu-toggle"><i class="zmdi zmdi-key"></i><span>Role Management</span> </a>
                    <ul class="ml-menu">
                        <li class="side_link"> <a href="/admin/roles">List All Role</a> </li>
                        <li class="side_link"> <a href="/admin/roles/create">Add New Role</a></li>
                    </ul>
                </li>
                <li class="side_link_parent"><a href="/admin/permissions"><i class="zmdi zmdi-shield-security"></i><span>Permissions</span></a></li>
         
                <li class="header">LABELS</li>
                <li class="side_link_parent"> <a href="#"><i class="zmdi zmdi-chart-donut col-red"></i><span>Important</span> </a> </li>
                <li class="side_link_parent"> <a href="#"><i class="zmdi zmdi-chart-donut col-amber"></i><span>Warning</span> </a> </li>
                <li class="side_link_parent"> <a href="#"><i class="zmdi zmdi-chart-donut col-blue"></i><span>Information</span> </a> </li>
            </ul>
        </div>

    </aside>

    <aside id="rightsidebar" class="right-sidebar">
        <ul class="nav nav-tabs tab-nav-right" role="tablist">
            <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#">Skins</a></li>
            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#">Chat</a></li>
            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#">Setting</a></li>
        </ul>
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane in active in active" id="skins">
                <ul class="demo-choose-skin">
                    <li data-theme="red">
                        <div class="red"></div><span>Red</span>
                    </li>
                    <li data-theme="purple">
                        <div class="purple"></div><span>Purple</span>
                    </li>
                    <li data-theme="blue">
                        <div class="blue"></div><span>Blue</span>
                    </li>
                    <li data-theme="cyan">
                        <div class="cyan"></div><span>Cyan</span>
                    </li>
                    <li data-theme="green" class="active">
                        <div class="green"></div><span>Green</span>
                    </li>
                    <li data-theme="deep-orange">
                        <div class="deep-orange"></div><span>Deep Orange</span>
                    </li>
                    <li data-theme="blue-grey">
                        <div class="blue-grey"></div><span>Blue Grey</span>
                    </li>
                    <li data-theme="black">
                        <div class="black"></div><span>Black</span>
                    </li>
                    <li data-theme="blush">
                        <div class="blush"></div><span>Blush</span>
                    </li>
                </ul>
            </div>
            <div role="tabpanel" class="tab-pane" id="chat">
                <div class="demo-settings">
                    <div class="search">
                        <div class="input-group">
                            <div class="form-line">
                                <input type="text" class="form-control" placeholder="Search..." required autofocus>
                            </div>
                        </div>
                    </div>
                    <h6>Recent</h6>
                    <ul>
                        <li class="online">
                            <div class="media">
                                <a href="#"><img class="media-object " src="/assets/images/xs/avatar1.jpg" alt=""></a>
                                <div class="media-body">
                                    <span class="name">Claire Sassu</span>
                                    <span class="message">Can you share the</span>
                                    <span class="badge badge-outline status"></span>
                                </div>
                            </div>
                        </li>
                        <li class="online">
                            <div class="media">
                                <a href="#"><img class="media-object " src="/assets/images/xs/avatar2.jpg" alt=""></a>
                                <div class="media-body">
                                    <span class="name">Maggie jackson</span>
                                    <span class="message">Can you share the</span>
                                    <span class="badge badge-outline status"></span>
                                </div>
                            </div>
                        </li>
                        <li class="online">
                            <div class="media">
                                <a href="#"><img class="media-object " src="/assets/images/xs/avatar3.jpg" alt=""></a>
                                <div class="media-body">
                                    <span class="name">Joel King</span>
                                    <span class="message">Ready for the meeti</span>
                                    <span class="badge badge-outline status"></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <h6>Contacts</h6>
                    <ul class="contacts_list">
                        <li class="offline">
                            <div class="media">
                                <a href="#"><img class="media-object " src="/assets/images/xs/avatar4.jpg" alt=""></a>
                                <div class="media-body">
                                    <span class="name">Hossein Shams</span>
                                    <span class="badge badge-outline status"></span>
                                </div>
                            </div>
                        </li>
                        <li class="online">
                            <div class="media">
                                <a href="#"><img class="media-object " src="/assets/images/xs/avatar1.jpg" alt=""></a>
                                <div class="media-body">
                                    <span class="name">Maryam Amiri</span>
                                    <span class="badge badge-outline status"></span>
                                </div>
                            </div>
                        </li>
                        <li class="offline">
                            <div class="media">
                                <a href="#"><img class="media-object " src="/assets/images/xs/avatar2.jpg" alt=""></a>
                                <div class="media-body">
                                    <span class="name">Gary Camara</span>
                                    <span class="badge badge-outline status"></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="settings">
                <div class="demo-settings">
                    <p>General settings</p>
                    <ul class="setting-list">
                        <li>
                            <span>Report Panel Usage</span>
                            <div class="switch">
                                <label>
                                    <input type="checkbox" checked>
                                    <span class="lever"></span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <span>Email Redirect</span>
                            <div class="switch">
                                <label>
                                    <input type="checkbox">
                                    <span class="lever"></span>
                                </label>
                            </div>
                        </li>
                    </ul>
                    <p>System settings</p>
                    <ul class="setting-list">
                        <li>
                            <span>Notifications</span>
                            <div class="switch">
                                <label>
                                    <input type="checkbox" checked>
                                    <span class="lever"></span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <span>Auto Updates</span>
                            <div class="switch">
                                <label>
                                    <input type="checkbox" checked>
                                    <span class="lever"></span>
                                </label>
                            </div>
                        </li>
                    </ul>
                    <p>Account settings</p>
                    <ul class="setting-list">
                        <li>
                            <span>Offline</span>
                            <div class="switch">
                                <label>
                                    <input type="checkbox">
                                    <span class="lever"></span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <span>Location Permission</span>
                            <div class="switch">
                                <label>
                                    <input type="checkbox" checked>
                                    <span class="lever"></span>
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </aside>

</template>

<style scoped>

</style>
