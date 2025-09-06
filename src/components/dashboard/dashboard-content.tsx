"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/components/providers/auth-provider";

// Mock data - will be replaced with real API calls
const mockProjects = [
  {
    id: 1,
    name: "Modern Living Room",
    status: "in_progress",
    progress: 65,
    budget: 15000,
    spent: 9750,
    rooms: 3,
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f0178a96-03dc-4a7d-878b-121989bcdd13.png"
  },
  {
    id: 2,
    name: "Kitchen Renovation",
    status: "planning",
    progress: 20,
    budget: 25000,
    spent: 2500,
    rooms: 1,
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e3ace6d5-3a55-46f3-8d02-c7f1922fb02a.png"
  },
  {
    id: 3,
    name: "Master Bedroom Suite",
    status: "completed",
    progress: 100,
    budget: 12000,
    spent: 11800,
    rooms: 2,
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d5880e6d-568b-4a01-9c10-69509ed70f0d.png"
  },
];

const mockRecentActivity = [
  {
    id: 1,
    action: "Material ordered",
    item: "Italian Marble Tiles",
    project: "Kitchen Renovation",
    time: "2 hours ago",
    status: "success"
  },
  {
    id: 2,
    action: "Design updated",
    item: "Living Room Layout",
    project: "Modern Living Room",
    time: "5 hours ago",
    status: "info"
  },
  {
    id: 3,
    action: "Budget exceeded",
    item: "Lighting fixtures",
    project: "Master Bedroom Suite",
    time: "1 day ago",
    status: "warning"
  },
];

const mockSavedMaterials = [
  {
    id: 1,
    name: "Oak Hardwood Flooring",
    category: "Flooring",
    price: 89.99,
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2ebc0295-a5ea-4167-b980-0fb78e788d02.png"
  },
  {
    id: 2,
    name: "Pendant Light Fixture",
    category: "Lighting",
    price: 199.99,
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2a67bafb-50a0-409e-bae8-fe8806580b26.png"
  },
  {
    id: 3,
    name: "Ceramic Subway Tiles",
    category: "Tiles",
    price: 4.50,
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aca18a0e-1e9f-47a3-8caa-8065ac3acb3a.png"
  },
];

export function DashboardContent() {
  const { user } = useAuth();
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalSpent, setTotalSpent] = useState(0);

  useEffect(() => {
    // Calculate totals from mock data
    const budget = mockProjects.reduce((sum, project) => sum + project.budget, 0);
    const spent = mockProjects.reduce((sum, project) => sum + project.spent, 0);
    setTotalBudget(budget);
    setTotalSpent(spent);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "in_progress":
        return "bg-blue-500";
      case "planning":
        return "bg-yellow-500";
      case "on_hold":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in_progress":
        return "In Progress";
      case "planning":
        return "Planning";
      case "on_hold":
        return "On Hold";
      default:
        return "Unknown";
    }
  };

  const getActivityStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "text-green-600";
      case "warning":
        return "text-yellow-600";
      case "info":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Welcome back, {user?.name}! 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's what's happening with your renovation projects today.
          </p>
        </div>
        <div className="flex space-x-3">
          <Button>
            <span className="mr-2">+</span>
            New Project
          </Button>
          <Button variant="outline">
            <span className="mr-2">📸</span>
            Capture Room
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <div className="h-4 w-4 rounded-full bg-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockProjects.length}</div>
            <p className="text-xs text-muted-foreground">
              +2 from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
            <div className="h-4 w-4 rounded-full bg-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalBudget.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Across all projects
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <div className="h-4 w-4 rounded-full bg-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalSpent.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {((totalSpent / totalBudget) * 100).toFixed(1)}% of budget
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saved Materials</CardTitle>
            <div className="h-4 w-4 rounded-full bg-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockSavedMaterials.length}</div>
            <p className="text-xs text-muted-foreground">
              Ready to use
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="projects" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="projects">My Projects</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          <TabsTrigger value="materials">Saved Materials</TabsTrigger>
        </TabsList>

        {/* Projects Tab */}
        <TabsContent value="projects" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="object-cover w-full h-full"
                  />
                  <Badge
                    className={`absolute top-2 right-2 ${getStatusColor(project.status)} text-white`}
                  >
                    {getStatusText(project.status)}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription>
                    {project.rooms} room{project.rooms > 1 ? "s" : ""} • Budget: ${project.budget.toLocaleString()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Spent: ${project.spent.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground">
                      Remaining: ${(project.budget - project.spent).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">
                      View Details
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      3D View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Activity Tab */}
        <TabsContent value="activity" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Stay updated with your latest project activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockRecentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4 p-4 rounded-lg border">
                    <div className={`h-2 w-2 rounded-full ${getStatusColor(activity.status)}`} />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">
                        {activity.action}: <span className="font-normal">{activity.item}</span>
                      </p>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <span>{activity.project}</span>
                        <span>•</span>
                        <span>{activity.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Saved Materials Tab */}
        <TabsContent value="materials" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockSavedMaterials.map((material) => (
              <Card key={material.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={material.imageUrl}
                        alt={material.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-medium text-sm">{material.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {material.category}
                      </Badge>
                      <p className="text-lg font-bold text-primary">
                        ${material.price}
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="text-xs">
                          Add to Project
                        </Button>
                        <Button size="sm" variant="ghost" className="text-xs">
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}