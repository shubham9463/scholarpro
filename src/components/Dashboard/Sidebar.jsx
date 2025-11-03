import { useState } from "react";
import {
    PieChart,
    LogOut,
    Image,
    MessageSquare,
    GraduationCap,
    ChevronDown,
    ChevronRight,
    BookOpen,
    Calendar,
    Award,
    CreditCard,
    FileText,
    ClipboardList,
    Shield
} from "lucide-react";

const SidebarIcon = ({ icon: Icon }) => <Icon size={20} />;

export default function ScholarshipSidebar({ activeTab, onTabChange }) {
    const [isExamManagementOpen, setIsExamManagementOpen] = useState(false);

    const isActiveTab = (tab) => activeTab === tab;
    const toggleExamManagement = () => setIsExamManagementOpen(!isExamManagementOpen);

    const handleNavigation = (tab) => {
        if (onTabChange) onTabChange(tab);
    };

    const handleLogout = () => {
        console.log("Logout clicked");
    };

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            backgroundColor: '#ffffff',
            borderRight: '1px solid #e5e7eb',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Header */}
            <div style={{
                borderBottom: '1px solid #e5e7eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Shield size={28} style={{ color: '#dc2626' }} />
                    <span style={{ fontSize: '29px', fontWeight: '700', color: '#1f2937' }}>Admin Portal</span>
                </div>
            </div>

            {/* System Admin Section */}
            <div style={{ padding: '20px', borderBottom: '1px solid #e5e7eb' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: '#fecdd3',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#dc2626'
                    }}>A</div>
                    <div>
                        <div style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937' }}>System Admin</div>
                        <div style={{ fontSize: '13px', color: '#6b7280' }}>Full Access</div>
                    </div>
                </div>
            </div>

            {/* Scrollable Links Section */}
            <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
            }}>

                {/* Dashboard */}
                <a href="/dashboard?tab=dash" style={{ textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); handleNavigation('dash'); }}>
                    <div 
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '12px 16px',
                            color: isActiveTab("dash") ? '#dc2626' : '#4b5563',
                            borderRadius: '8px',
                            backgroundColor: isActiveTab("dash") ? '#fecdd3' : 'transparent',
                            cursor: 'pointer'
                        }}
                    >
                        <SidebarIcon icon={PieChart} />
                        <span style={{ marginLeft: '12px', fontSize: '15px', fontWeight: '500' }}>Dashboard</span>
                    </div>
                </a>

                {/* Banner */}
                <a href="/dashboard?tab=banner" style={{ textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); handleNavigation('banner'); }}>
                    <div 
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '12px 16px',
                            color: isActiveTab("banner") ? '#dc2626' : '#4b5563',
                            borderRadius: '8px',
                            backgroundColor: isActiveTab("banner") ? '#fecdd3' : 'transparent',
                            cursor: 'pointer'
                        }}
                    >
                        <SidebarIcon icon={Image} />
                        <span style={{ marginLeft: '12px', fontSize: '15px', fontWeight: '500' }}>Banner</span>
                    </div>
                </a>

                {/* Enquiries */}
                <a href="/dashboard?tab=enquiries" style={{ textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); handleNavigation('enquiries'); }}>
                    <div 
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '12px 16px',
                            color: isActiveTab("enquiries") ? '#dc2626' : '#4b5563',
                            borderRadius: '8px',
                            backgroundColor: isActiveTab("enquiries") ? '#fecdd3' : 'transparent',
                            cursor: 'pointer'
                        }}
                    >
                        <SidebarIcon icon={MessageSquare} />
                        <span style={{ marginLeft: '12px', fontSize: '15px', fontWeight: '500' }}>Enquiries</span>
                    </div>
                </a>

                {/* Students */}
                <a href="/dashboard?tab=students" style={{ textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); handleNavigation('students'); }}>
                    <div 
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '12px 16px',
                            color: isActiveTab("students") ? '#dc2626' : '#4b5563',
                            borderRadius: '8px',
                            backgroundColor: isActiveTab("students") ? '#fecdd3' : 'transparent',
                            cursor: 'pointer'
                        }}
                    >
                        <SidebarIcon icon={GraduationCap} />
                        <span style={{ marginLeft: '12px', fontSize: '15px', fontWeight: '500' }}>Students</span>
                    </div>
                </a>

                {/* School */}
                {/* School */}
<a href="/dashboard?tab=school" style={{ textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); handleNavigation('school'); }}>
    <div 
        style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 16px',
            color: isActiveTab("school") ? '#dc2626' : '#4b5563',
            borderRadius: '8px',
            backgroundColor: isActiveTab("school") ? '#fecdd3' : 'transparent',
            cursor: 'pointer'
        }}
    >
        <SidebarIcon icon={BookOpen} />
        <span style={{ marginLeft: '12px', fontSize: '15px', fontWeight: '500' }}>School</span>
    </div>
</a>


                {/* Exam Management */}
                <div style={{ marginTop: '16px' }}>
                    <div
                        onClick={toggleExamManagement}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '12px 16px',
                            color: '#4b5563',
                            borderRadius: '8px',
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <SidebarIcon icon={ClipboardList} />
                            <span style={{ marginLeft: '12px', fontSize: '15px', fontWeight: '500' }}>Exam Management</span>
                        </div>
                        {isExamManagementOpen ? (
                            <ChevronDown size={16} style={{ color: '#6b7280' }} />
                        ) : (
                            <ChevronRight size={16} style={{ color: '#6b7280' }} />
                        )}
                    </div>

                    {isExamManagementOpen && (
                        <div style={{ marginLeft: '16px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {["syllabus", "exam-schedule", "certificate", "admit-card", "result"].map(tab => {
                                const icons = {
                                    "syllabus": BookOpen,
                                    "exam-schedule": Calendar,
                                    "certificate": Award,
                                    "admit-card": CreditCard,
                                    "result": FileText
                                };
                                const names = {
                                    "syllabus": "Syllabus",
                                    "exam-schedule": "Exam Schedule",
                                    "certificate": "Certificate",
                                    "admit-card": "Admit Card",
                                    "result": "Result"
                                };
                                return (
                                    <a key={tab} href={`/dashboard?tab=${tab}`} style={{ textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); handleNavigation(tab); }}>
                                        <div 
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                padding: '12px 16px',
                                                color: isActiveTab(tab) ? '#dc2626' : '#4b5563',
                                                borderRadius: '8px',
                                                backgroundColor: isActiveTab(tab) ? '#fecdd3' : 'transparent',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <SidebarIcon icon={icons[tab]} />
                                            <span style={{ marginLeft: '12px', fontSize: '15px', fontWeight: '500' }}>{names[tab]}</span>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            {/* Sign Out */}
            <div style={{ padding: '16px', borderTop: '1px solid #e5e7eb' }}>
                <div
                    onClick={handleLogout}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '12px 16px',
                        color: '#dc2626',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}
                >
                    <SidebarIcon icon={LogOut} />
                    <span style={{ marginLeft: '12px', fontSize: '15px', fontWeight: '500' }}>Sign Out</span>
                </div>
            </div>
        </div>
    );
}
