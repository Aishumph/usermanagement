import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';

export interface AirlineData {
  Name: string;
  Sine: string;
  Country: string;
  City: string;
  Privileges: string;
  Roles: String

}

function getRandomSine() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function getRandomRole() {
  const roles = ['Role1', 'Role2', 'Role3', 'Role4', 'Role5'];
  return roles[Math.floor(Math.random() * roles.length)];
}

const AIRLINES_DATA: AirlineData[] = [
  { Name: 'John Doe', Sine: getRandomSine(), Country: 'USA', City: 'Atlanta', Privileges: 'Admin', Roles: getRandomRole() },
  { Name: 'Jane Smith', Sine: getRandomSine(), Country: 'USA', City: 'Dallas', Privileges: 'User', Roles: getRandomRole() },
  { Name: 'Robert Johnson', Sine: getRandomSine(), Country: 'USA', City: 'Chicago', Privileges: 'User', Roles: getRandomRole() },
  { Name: 'Emily Davis', Sine: getRandomSine(), Country: 'USA', City: 'Dallas', Privileges: 'Admin', Roles: getRandomRole() },
  { Name: 'Michael Brown', Sine: getRandomSine(), Country: 'USA', City: 'New York', Privileges: 'User', Roles: getRandomRole() },
  { Name: 'Linda Wilson', Sine: getRandomSine(), Country: 'USA', City: 'Seattle', Privileges: 'User', Roles: getRandomRole() },
  { Name: 'David Martinez', Sine: getRandomSine(), Country: 'USA', City: 'Miramar', Privileges: 'Admin', Roles: getRandomRole() },
  { Name: 'Jennifer Garcia', Sine: getRandomSine(), Country: 'USA', City: 'Denver', Privileges: 'User', Roles: getRandomRole() },
  { Name: 'James Anderson', Sine: getRandomSine(), Country: 'USA', City: 'Las Vegas', Privileges: 'All', Roles: getRandomRole() },
  { Name: 'Elizabeth Thomas', Sine: getRandomSine(), Country: 'USA', City: 'Honolulu', Privileges: 'User', Roles: getRandomRole() },
  { Name: 'William Taylor', Sine: getRandomSine(), Country: 'UK', City: 'London', Privileges: 'Revenue', Roles: getRandomRole() },
  { Name: 'Olivia Lee', Sine: getRandomSine(), Country: 'France', City: 'Paris', Privileges: 'User', Roles: getRandomRole() },
  { Name: 'Lucas Harris', Sine: getRandomSine(), Country: 'Germany', City: 'Frankfurt', Privileges: 'User', Roles: getRandomRole() },
  { Name: 'Sophia Clark', Sine: getRandomSine(), Country: 'Australia', City: 'Sydney', Privileges: 'Revenue ', Roles: getRandomRole() },
  { Name: 'Henry Lewis', Sine: getRandomSine(), Country: 'UAE', City: 'Dubai', Privileges: 'User', Roles: getRandomRole() },
  { Name: 'Ava Walker', Sine: getRandomSine(), Country: 'Singapore', City: 'Singapore', Privileges: 'User', Roles: getRandomRole() },
  { Name: 'Daniel Hall', Sine: getRandomSine(), Country: 'Hong Kong', City: 'Hong Kong', Privileges: 'System', Roles: getRandomRole() },
  { Name: 'Ella Young', Sine: getRandomSine(), Country: 'Japan', City: 'Tokyo', Privileges: 'User', Roles: getRandomRole() },
  { Name: 'Matthew King', Sine: getRandomSine(), Country: 'Turkey', City: 'Istanbul', Privileges: 'Revenue', Roles: getRandomRole() },
  { Name: 'Lily Scott', Sine: getRandomSine(), Country: 'South Korea', City: 'Seoul', Privileges: 'User', Roles: getRandomRole() }
];

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, ]
})
export class UserlistComponent implements AfterViewInit {
  displayedColumns: string[] = ['Name', 'Sine', 'Country', 'City', 'Privileges', 'Roles'];
  dataSource = new MatTableDataSource<AirlineData>(AIRLINES_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
